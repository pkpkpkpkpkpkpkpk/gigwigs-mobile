import React, { Component, Fragment } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import styles from './DateSelector.styles.js';

class DateSelector extends Component {
  state = {
    showCalendar: false,
    when: `${new Date().getFullYear()}-${new Date().toLocaleDateString('en-US', { month: '2-digit' })}-${new Date().getDate()}`
  }

  changeDateHandler = date => {
    this.setState({ 
      showCalendar: false,
      when: date.dateString
    });

    // this.props.setWhen(date);
  }

  render() {
    // let displayDate = `${new Date(this.props.when).toLocaleDateString('en-US', { weekday: 'short' })} ${new Date(this.props.when).toLocaleDateString('en-US', { day: '2-digit' })} ${new Date(this.props.when).toLocaleDateString('en-US', { month: 'short' })}`;
    let displayDate = `${new Date(this.state.when).toLocaleDateString('en-US', { weekday: 'short' })} ${new Date(this.state.when).toLocaleDateString('en-US', { day: '2-digit' })} ${new Date(this.state.when).toLocaleDateString('en-US', { month: 'short' })}`;

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

    let calendarContainerStyles = [styles.calendarContainer];
    if (this.state.showCalendar) {
      calendarContainerStyles.push(styles.showCalendar);
    }

    return (
      <Fragment>
        <TouchableOpacity onPress={() => this.setState(prevState => ({ showCalendar: !prevState.showCalendar }))}>
          <View style={styles.dateContainer}>
            <Text>{`${prefix}${displayDate}`}</Text>
          </View>
        </TouchableOpacity>

        <View style={calendarContainerStyles.join(' ')}>
          <Calendar
            theme={styles.calendar}
            hideExtraDays={true}
            firstDay={1}
            minDate={new Date(new Date().setMonth(new Date().getMonth() - 3))}
            maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
            onDayPress={date => this.changeDateHandler(date)}
            markedDates={{ [this.state.when]: { selected: true } }} />
        </View>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     when: state.when
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setWhen: when => dispatch({ type: actionTypes.SET_WHEN, payload: when })
//   };
// }

// DateSelector.propTypes = {};

export default DateSelector;