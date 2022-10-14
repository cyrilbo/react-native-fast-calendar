import { eachMonthOfInterval } from 'date-fns';
import React from 'react';
import { FlatList } from 'react-native';
import { Month } from './Month.component';

type CalendarListProps = {
  onDayPress: (date: Date) => void;
};

export const CalendarList = ({ onDayPress }: CalendarListProps) => {
  const months = eachMonthOfInterval({
    start: new Date('2010-04-22T01:00:00-05:00'),
    end: new Date('2030-04-22T01:00:00-05:00'),
  });
  return (
    <FlatList
      data={months}
      renderItem={({ item }) => {
        return (
          <Month date={item} key={item.toISOString()} onDayPress={onDayPress} />
        );
      }}
    />
  );
};
