import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import spotifyWebApi from 'spotify-web-api-node';

import styles from './CreatePlaylistButton.styles.js';

const CreatePlaylistButton = props => {
  // disable button if no spotify artists selected
  let enabled = false;
  if ( props.gigs && props.gigs.some(gig => gig.spotifyArtistId !== undefined && gig.selected === true) ) {
    enabled = true;
  }

  const scopes = ['playlist-modify-public'];
  const spotifyApi = new spotifyWebApi({
    redirectUri: 'https://gigwigs-mobile-server.appspot.com/appRedirect',
    clientId: 'e395299ea7a84cf2b3833d140e0fb40f'
  });
  const authUrl = spotifyApi.createAuthorizeURL(scopes);

  return (
    <TouchableOpacity onPress={() => {
      if (enabled) {
        props.navigation.navigate('Auth', { url: authUrl })
      }
    }}>
      <View style={enabled ? [styles.enabledContainer, styles.container] : [styles.disabledContainer, styles.container]}>
        <Text style={enabled ? [styles.enabledText, styles.text] : [styles.disabledText, styles.text]}>Create Playlist</Text>
      </View>
    </TouchableOpacity>
  );
}

const mapStateToProps = state => {
  return {
    gigs: state.gigs
  };
}

// CreatePlaylistButton.propTypes = {};

export default connect(mapStateToProps)(CreatePlaylistButton);