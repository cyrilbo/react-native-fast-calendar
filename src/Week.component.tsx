import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Day } from './Day.component';

type WeekProps = {
  dates: Date[];
  onDayPress: (date: Date) => void;
};

export const Week = ({ dates, onDayPress }: WeekProps) => {
  if (dates.length === 0) return null;
  return (
    <View style={styles.weekContainer}>
      {dates.map((day) => (
        <Day date={day} onPress={onDayPress} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
