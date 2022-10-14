import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import React from 'react';
import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { groupDatesByWeek } from './dates/groupDatesByWeek.helper';
import { Week } from './Week.component';

const computeWeeks = (date: Date) => {
  const firstDay = startOfMonth(date);
  const lastDay = endOfMonth(date);
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });
  return groupDatesByWeek(days);
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
      {Object.values(weeks).map((weekDays) => (
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
