import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './calendar.module.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, CustomProvider } from 'rsuite';
import './calendar.less';
import 'rsuite/dist/rsuite.css';

export interface CalendarProps {
  className?: string;
  onDateRangeChange: (formattedStartDate: string, formattedEndDate: string) => void;
}

export const MyCalendar: React.FC<CalendarProps> = ({ className, onDateRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState<Date[] | null>(null);

  const formatValue = (value: Date[] | null) => {
    if (value) {
      const [startDate, endDate] = value;
      const formattedStartDate = startDate.toISOString().slice(0, 19).replace('T', ' ');
      const formattedEndDate = endDate.toISOString().slice(0, 19).replace('T', ' ');
      console.log(formattedEndDate)
      return {
        formattedStartDate,
        formattedEndDate,
      };
    }

    return {
      formattedStartDate: '',
      formattedEndDate: '',
    };
  };

  const handleDateChange = (value: Date[] | null) => {
    setSelectedRange(value);
    const { formattedStartDate, formattedEndDate } = formatValue(value);
    onDateRangeChange(formattedStartDate, formattedEndDate);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <CustomProvider theme="dark">
        <DateRangePicker
          placement="bottomEnd"
          className="rs-theme-dark"
          onChange={handleDateChange}
        />
      </CustomProvider>
    </div>
  );
};
