import React, { useState } from "react";
import DateMomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider, TimePicker } from "@material-ui/pickers";
import { Wrapper } from "./index.styles";

const BasicDatePicker = ({selectedDate, handleDateChange }) => {
  
  
  return (
    <>
    <Wrapper>
      <MuiPickersUtilsProvider utils={DateMomentUtils} >
            <DatePicker
              label="Pick Date"
              value={selectedDate}
              onChange={date => handleDateChange(date)}
              animateYearScrolling className='DT'
            />
            <TimePicker autoOk label="Pick Time" value={selectedDate} onChange={handleDateChange} className='TP'/>

      </MuiPickersUtilsProvider>
    </Wrapper>
    </>
  );
}
export default BasicDatePicker;