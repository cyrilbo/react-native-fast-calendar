import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import React from 'react';
import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DayIndex } from './dates/dates.constants';
import { sliceIntoChunks } from './helpers/array.helpers';
import type { Day } from './types/Day.type';
import { WeekComponent } from './Week.component';

const getDateState = (date: Date, monthDate: Date): Day['status'] => {
  switch (true) {
    case isToday(date):
      return 'today';
    case !isSameMonth(date, monthDate):
      return 'disabled';
    default:
      return 'default';
  }
};

const computeWeeks = (monthDate: Date): Day[][] => {
  const firstDay = startOfWeek(startOfMonth(monthDate), {
    weekStartsOn: DayIndex.Monday,
  });
  const lastDay = endOfWeek(endOfMonth(monthDate), {
    weekStartsOn: DayIndex.Monday,
  });
  const days = eachDayOfInterval({ start: firstDay, end: lastDay });
  const daysWithStatus: Day[] = days.map((dayDate) => ({
    date: dayDate,
    status: getDateState(dayDate, monthDate),
  }));
  const weeks = sliceIntoChunks(daysWithStatus, 7);
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
        <WeekComponent days={weekDays} onDayPress={onDayPress} />
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
