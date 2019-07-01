import React, { Component, Fragment } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Calendar } from 'react-native-calendars';

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
    let displayDate = `${new Date(this.props.when).toLocaleDateString('en-US', { weekday: 'short' })} ${new Date(this.props.when).toLocaleDateString('en-US', { day: '2-digit' })} ${new Date(this.props.when).toLocaleDateString('en-US', { month: 'short' })}`;

    const tonight = `${new Date().toLocaleDateString('en-US', { weekday: 'short' })} ${new Date().toLocaleDateString('en-US', { day: '2-digit' })} ${new Date().toLocaleDateString('en-US', { month: 'short' })}`;
    const tomorrow = `${new Date().toLocaleDateString('en-US', { weekday: 'short' })} ${new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-US', { day: '2-digit' })} ${new Date().toLocaleDateString('en-US', { month: 'short' })}`;
    const yesterday = `${new Date().toLocaleDateString('en-US', { weekday: 'short' })} ${new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-US', { day: '2-digit' })} ${new Date().toLocaleDateString('en-US', { month: 'short' })}`;
    let prefix = '';
    if (displayDate.slice(4) === tonight.slice(4)) {
      prefix = 'Tonight - ';
    } else if (displayDate.slice(4) === tomorrow.slice(4)) {
      prefix = 'Tomorrow - ';
    } else if (displayDate.slice(4) === yesterday.slice(4)) {
      prefix = 'Yesterday - ';
    }

    return (
      <Fragment>
        <TouchableHighlight onPress={() => this.setState(prevState => ({ showCalendar: !prevState.showCalendar }))}>
          <View style={styles.dateContainer}>
            <Text style={styles.text}>{`${prefix}${displayDate}`}</Text>
          </View>
        </TouchableHighlight>

        <View style={!this.state.showCalendar ? styles.hideCalendar : null}>
          <Calendar
            theme={styles.calendar}
            hideExtraDays={true}
            firstDay={1}
            minDate={new Date(new Date().setMonth(new Date().getMonth() - 3))}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
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