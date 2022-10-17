import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import type { Day } from './types/Day.type';

type DayProps = {
  day: Day;
  onPress: (date: Date) => void;
};

export const DayComponent = ({ day, onPress }: DayProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(day.date)}
      disabled={day.status === 'disabled'}
    >
      <Text
        style={[
          styles.dayNumber,
          day.status === 'disabled' ? styles.dayDisabled : {},
        ]}
      >
        {format(day.date, 'd')}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontWeight: '600',
    fontSize: 16,
  },
  dayDisabled: {
    color: 'grey',
  },
});
