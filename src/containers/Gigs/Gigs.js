import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import axios from 'axios';

import Gig from '../../components/Gig/Gig';
import styles from './Gigs.styles.js';

class Gigs extends Component {
  state = {
    errorMessage: null,
    gigs: []
  }

  componentDidMount() {
    this.getGigs();
  }

  getGigs = () => {
    // clear gigs first so spinner will show
    // this.props.setGigs( [] );
    this.setState({ gigs: [] })

    axios.post('/getGigs', {
      // where: this.props.where,
      where: 'Sydney',
      // when: new Date(this.props.when).toUTCString(),
      when: new Date(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    })
      .then(res => {
        if (!res.data.error) {
          const gigs = res.data.gigs;
          // if no gigs on selected date/location, display a message
          if (gigs.length > 0) {
            // this.props.setGigs(gigs);
            this.setState({ gigs: gigs })

            // this.getSpotifyOAuthToken();
          } else {
            this.setState({
              errorMessage: 'Nothing on...'
            });
          }
        } else {
          this.errorhandler(res.data.error);
        }
      })
      .catch(error => (
        this.errorhandler(error)
      ));
  }

  // getSpotifyOAuthToken = () => {
  //   axios.get('/spotifyAuth')
  //     .then(res => {
  //       if (!res.data.error) {
  //         const spotifyToken = res.data.token;
  //         this.props.setSpotifyToken(spotifyToken);

  //         this.getImages();
  //       } else {
  //         this.errorhandler(res.data.error);
  //       }
  //     })
  //     .catch(error => (
  //       this.errorhandler(error)
  //     ));
  // }

  // getImages = () => {
  //   let updatedGigs = [];

  //   this.props.gigs.forEach(gig => {
  //     // axios instance created in order to use a different base URL than the default set in app.js
  //     axios.create({ baseURL: '/', timeout: 10000 })
  //       .get('https://api.spotify.com/v1/search?type=artist', {
  //         params: {
  //           q: gig.title
  //         },
  //         headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Bearer ' + this.props.spotifyToken
  //         }
  //       })
  //         .then(res => {
  //           if (!res.data.error) {
  //             const image = res.data.artists.items[0].images[1].url;
  //             const spotifyArtistId = res.data.artists.items[0].id;

  //             const updatedGig = {
  //               ...gig,
  //               image: image,
  //               spotifyArtistId: spotifyArtistId
  //             }

  //             updatedGigs.push(updatedGig);

  //             updateState();
  //           } else {
  //             this.errorhandler(res.data.error);
  //           }
  //         })
  //         .catch( () => {
  //           // if artist isn't found on Spotify
  //           updatedGigs.push(gig);
            
  //           updateState();
  //         });
  //   });

  //   const updateState = () => {
  //     if (updatedGigs.length === this.props.gigs.length) {
  //       this.props.setGigs(updatedGigs);
  //     }
  //   }
  // }

  // toggleSelectGigHandler = id => {
  //   let updatedGigs = [
  //     ...this.props.gigs
  //   ]

  //   updatedGigs.forEach( (gig, index) => {
  //     if (gig.id === id) (
  //       updatedGigs[index].selected = !updatedGigs[index].selected
  //     );
  //   });

  //   this.props.setGigs(updatedGigs);
  // }

  errorhandler = error => {
    this.setState({
      errorMessage: `Something went wrong, try turning it off and on again... (${error})`
    });
  }

  render() {
    let gigs = null;
    if (this.state.gigs.length === 0) {
      gigs = (
        <View style={styles.spinnerContainer}>
          {/* <Spinner /> */}
        </View>
      );
    } else {
      gigs = this.state.gigs.map(gig => ( 
        <Gig 
          key = {gig.id}
          id = {gig.id}
          artist = {gig.artist}
          venue = {gig.venue}
          // image={gig.image}
          // selected={gig.selected}
          selected={true}
          // toggleSelectGig={this.toggleSelectGigHandler}
          // onSpotify={gig.spotifyArtistId} 
        />
      ));
    }

    if (this.state.errorMessage) {
      gigs = (
        <View style={styles.errorContainer}>
          <View>
            <Text>{this.state.errorMessage}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {gigs}
      </View>
    );
  }
}

// Gigs.propTypes = {};

export default Gigs;