import React, { useState } from "react";
import DateMomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import { Wrapper } from "./index.styles";

const BasicDatePicker = ({selectedDate, handleDateChange }) => {
  
  
  return (
    <>
    <Wrapper>
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
            <DatePicker
              label="Basic example"
              value={selectedDate}
              onChange={date => handleDateChange(date)}
              animateYearScrolling
            />
            <TimePicker autoOk label="12 hours" value={selectedDate} onChange={handleDateChange} />

      </MuiPickersUtilsProvider>
    </Wrapper>
    </>
  );
}

export default BasicDatePicker;