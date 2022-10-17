import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import React from 'react';
import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DayIndex } from './dates/dates.constants';
import { sliceIntoChunks } from './helpers/array.helpers';
import { Week } from './Week.component';

const computeWeeks = (date: Date) => {
  const firstDay = startOfWeek(startOfMonth(date), {
    weekStartsOn: DayIndex.Monday,
  });
  const lastDay = endOfWeek(endOfMonth(date), {
    weekStartsOn: DayIndex.Monday,
  });
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });
  const weeks = sliceIntoChunks(days, 7);
  return weeks;
};

type MonthProps = {
  date: Date;
  onDayPress: (date: Date) => void;
};

export const Month = ({ date, onDayPress }: MonthProps) => {
  const weeks = useMemo(() => computeWeeks(date), [date]);
  return (
    <>
      <Text style={styles.monthName}>{format(date, 'LLLL y')}</Text>
      {weeks.map((weekDays) => (
        <Week dates={weekDays} onDayPress={onDayPress} />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  monthName: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
  },
});
