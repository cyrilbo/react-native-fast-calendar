import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DayComponent as DayComponent } from './Day.component';
import type { Day } from './types/Day.type';

type WeekProps = {
  days: Day[];
  onDayPress: (date: Date) => void;
};

export const WeekComponent = ({ days, onDayPress }: WeekProps) => {
  if (days.length === 0) return null;
  return (
    <View style={styles.weekContainer}>
      {days.map((day) => (
        <DayComponent day={day} onPress={onDayPress} />
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
