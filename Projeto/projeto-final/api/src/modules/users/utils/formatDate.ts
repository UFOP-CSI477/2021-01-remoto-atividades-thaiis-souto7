import { add } from 'date-fns';

export function formatDate(time: number): Date {
  const convertedDate = add(new Date(), {
    days: time,
  });

  return convertedDate;
}
