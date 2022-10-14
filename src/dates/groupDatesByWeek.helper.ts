import { getWeekOfMonth } from 'date-fns';
import { DayIndex } from './dates.constants';

type DatesGroupedByWeekNumberInMonth = Record<number, Date[]>;

export const groupDatesByWeek = (
  dates: Date[]
): DatesGroupedByWeekNumberInMonth => {
  return dates.reduce((acc, day) => {
    const weekIndex = getWeekOfMonth(day, { weekStartsOn: DayIndex.Monday });
    acc[weekIndex] = [...(acc[weekIndex] || []), day];
    return acc;
  }, {} as DatesGroupedByWeekNumberInMonth);
};
