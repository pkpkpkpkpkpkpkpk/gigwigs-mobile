import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import spotifyWebApi from 'spotify-web-api-node';

import styles from './CreatePlaylistButton.styles.js';

const CreatePlaylistButton = props => {
  // disable button if no spotify artists selected
  // let enabled = false;
  // let containerStyles = [styles.container];
  // if ( props.gigs && props.gigs.some(gig => gig.spotifyArtistId !== undefined && gig.selected === true) ) {
  //   enabled = true;
  //   containerStyles.push(styles.enabled);
  // }

  const scopes = ['playlist-modify-public'];
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'https://www.gigwigs.org/playlist',
    clientId: 'e395299ea7a84cf2b3833d140e0fb40f'
  });
  const authUrl = spotifyApi.createAuthorizeURL(scopes);

  // const onClickHandler = () => {
  //   if (enabled) {
  //     window.location.href = authUrl
  //   }
  // }

  return (
    <TouchableOpacity onPress={null}>
      <View style={styles.container}>
        <Text>Create Playlist</Text>
      </View>
    </TouchableOpacity>
  );
}

// CreatePlaylistButton.propTypes = {};

export default CreatePlaylistButton;