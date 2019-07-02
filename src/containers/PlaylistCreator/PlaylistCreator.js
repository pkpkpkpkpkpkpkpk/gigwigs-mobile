import React, { Component } from 'react';
import { Linking, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import spotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './PlaylistCreator.styles.js';

class PlaylistCreator extends Component {
  state = {
    spotifyUserAuthCode: null,
    spotifyUserId: null,
    spotifyUserToken: null,
    message: null
  }

  componentDidMount() {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          this.setState({
            spotifyUserAuthCode: url
          })
        }
      })
      .catch(error => (
        this.errorHandler(error)
      ));


    const spotifyApi = new spotifyWebApi({
      redirectUri: 'https://www.gigwigs.org/playlist',
      clientId: 'e395299ea7a84cf2b3833d140e0fb40f'
    });

    const spotifyArtistIds = this.props.gigs
      .map(gig => {
        if (gig.selected) {
          return gig.spotifyArtistId;
        } else {
          return undefined;
        }
      })
      // to remove all gigs without a spotify or that were unselected
      .filter(el => (
        el !== undefined
      ));

    spotifyApi.setAccessToken(this.props.spotifyToken);

    let playlistTracks = [];
    spotifyArtistIds.forEach(artistId => {
      spotifyApi.getArtistTopTracks(artistId, 'AU')
        .then(
          data => {
            // artist's last top track
            playlistTracks.push(data.body.tracks[data.body.tracks.length - 1].uri);
            // artist's 2nd top track
            playlistTracks.push(data.body.tracks[1].uri);
          }, 
          error => (
            this.errorHandler(error)
          ));
    });


    axios.post('/spotifyUserAuth', { 
      authCode: this.state.spotifyUserAuthCode 
    })
      .then(res => {
        if (!res.data.error) {
          this.setState({
            spotifyUserToken: res.data.userToken
          })
          
          const spotifyApiAuthenticated = new spotifyWebApi({
            accessToken: this.state.spotifyUserToken
          });

          // returns spotify user id
          spotifyApiAuthenticated.getMe()
            .then(
              data => {
                this.setState({
                  spotifyUserId: data.body.id
                });

                spotifyApiAuthenticated.createPlaylist(
                  this.state.spotifyUserId, 
                  // playlist title
                  `Gigs - ${new Date(this.props.when).toLocaleDateString('en-US', { day: '2-digit' })} ${new Date(this.props.when).toLocaleDateString('en-US', { month: 'short' })} - ${this.props.where.charAt(0).toUpperCase()}${this.props.where.slice(1)}`, 
                  // playlist description
                  { 'description' : 'Playlist by GigWigs' }
                )
                  .then(
                    data => {
                      const playlistId = data.body.id;
            
                      spotifyApiAuthenticated.addTracksToPlaylist(playlistId, playlistTracks)
                        .then(
                          data => {
                            this.setState({
                              message: 'Playlist created! Check Spotify...'
                            });
                            
                            setTimeout( () => (
                              this.props.navigation.navigate('Home')
                            ), 3000);
                          }, 
                          error => (
                            this.errorHandler(error)
                          ));
                    }, 
                    error => (
                      this.errorHandler(error)
                    ));
              }, 
              error => (
                this.errorHandler(error)
              ));
        } else {
          this.errorHandler(res.data.error);
        }
      })
      .catch(error => (
        this.errorHandler(error)
      ));
  }

  errorHandler = error => {
    this.setState({
      message: `Something went wrong, you'll be redirected shortly... (${error})`
    });

    setTimeout( () => (
      this.props.navigation.navigate('Home')
    ), 3000);
  }

  render() {
    let status = <Spinner />;
    if (this.state.message) {
      status = (
        <Text>{this.state.message}</Text>
      );
    }

    return (
      <View style={styles.container}>
        {status}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    gigs: state.gigs,
    spotifyToken: state.spotifyToken,
    when: state.when,
    where: state.where
  };
}

// PlaylistCreator.propTypes = {};

export default connect(mapStateToProps)(PlaylistCreator);