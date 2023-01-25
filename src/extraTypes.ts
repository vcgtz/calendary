import Day from './Day';

export type Week = (Day | null)[];

export type MonthInformation = {
  [key: string]: string | number;
  shortForm: string;
  index: number;
};

export type YearInformation = {
  [key: string]: MonthInformation;
  January: MonthInformation;
  February: MonthInformation;
  March: MonthInformation;
  April: MonthInformation;
  May: MonthInformation;
  June: MonthInformation;
  July: MonthInformation;
  August: MonthInformation;
  September: MonthInformation;
  October: MonthInformation;
  November: MonthInformation;
  December: MonthInformation;
};
