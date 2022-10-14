import React from 'react';
import { getDay } from 'date-fns';
import { StyleSheet, View } from 'react-native';
import { Day } from './Day.component';
import { DayIndex } from './dates/dates.constants';

const getIndex = (date: Date) => {
  const indexRelatedToSunday = getDay(date);
  return (7 + indexRelatedToSunday - DayIndex.Monday) % 7;
};

type WeekProps = {
  dates: Date[];
  onDayPress: (date: Date) => void;
};

export const Week = ({ dates, onDayPress }: WeekProps) => {
  if (dates.length === 0) return null;
  const firstDayIndexOfWeek = getIndex(dates[0]!);
  const lastDayIndexOfWeek = getIndex(dates[dates.length - 1]!);
  const numberOfDaySpaceBefore = firstDayIndexOfWeek;
  const numberOfDaySpaceAfter = 6 - lastDayIndexOfWeek;
  return (
    <View style={styles.weekContainer}>
      {Array(numberOfDaySpaceBefore)
        .fill(0)
        .map(() => (
          <View style={styles.DaySpace} />
        ))}
      {dates.map((day) => (
        <Day date={day} onPress={onDayPress} />
      ))}
      {Array(numberOfDaySpaceAfter)
        .fill(0)
        .map(() => (
          <View style={styles.DaySpace} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DaySpace: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
  },
});
