import { format } from 'date-fns';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type DayProps = {
  date: Date;
  onPress: (date: Date) => void;
};

export const Day = ({ date, onPress }: DayProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(date)}>
      <Text style={styles.dayNumber}>{format(date, 'd')}</Text>
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
});
