import React, { Component, Fragment } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import moment from 'moment-timezone';

import * as actionTypes from '../../store/actions';
import styles from './DateSelector.styles.js';

class DateSelector extends Component {
  state = {
    showCalendar: false
  }

  changeDateHandler = date => {
    this.setState({ 
      showCalendar: false
    });

    this.props.setWhen(date.dateString);
  }

  render() {
    let displayDate = moment(this.props.when).format('ddd Do MMM');

    let prefix = moment(this.props.when).calendar(null, { 
      sameDay: '[Today - ]',
      nextDay: '[Tomorrow - ]',
      lastDay: '[Yesterday - ]',
      nextWeek: '[]',
      lastWeek: '[]',
      sameElse: '[]'
    });

    return (
      <Fragment>
        <TouchableOpacity onPress={() => this.setState(prevState => ({ showCalendar: !prevState.showCalendar }))}>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>{`${prefix}${displayDate}`}</Text>
          </View>
        </TouchableOpacity>

        <View style={!this.state.showCalendar ? styles.hideCalendar : null}>
          <Calendar
            theme={styles.calendar}
            hideExtraDays={true}
            firstDay={1}
            minDate={moment().subtract(3, 'months').format()}
            maxDate={moment().add(3, 'months').format()}
            onDayPress={date => this.changeDateHandler(date)}
            onDayLongPress={date => this.changeDateHandler(date)}
            markedDates={{ [this.props.when]: { selected: true } }} />
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    when: state.when
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setWhen: when => dispatch({ type: actionTypes.SET_WHEN, payload: when })
  };
}

// DateSelector.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);