import React, { useState, useContext } from 'react'
import { Wrapper, Label, Input, LabelWrapper, SaveBtn, DateWrapper } from './index.styles';
import AppContext from '../../../context/GlobalState';
import BasicDatePicker from '../../DTPicker/DTPicker';

const CashInPage = () => {

    const { addTransactions } = useContext(AppContext);

    const [amount, setAmount] = useState(0);
    const [remark, setRemark] = useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    // console.log(selectedDate);

   const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            amount,
            remark,
            date: selectedDate
        }
        addTransactions(newTransaction)
        window.location.pathname='/';
   }

    return (
        <>

         <form onSubmit={onSubmit}>
             <Wrapper>
                <BasicDatePicker selectedDate={selectedDate} handleDateChange={handleDateChange} />                
               <LabelWrapper>
                    <Label>Amount: </Label>
                    <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter Amount..."></Input>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>Remark: </Label>
                    <Input value={remark} type="text" onChange={(e) => setRemark(e.target.value)} placeholder="Enter remark..."></Input>
                </LabelWrapper>

               <SaveBtn type='submit'>Save</SaveBtn>
             </Wrapper>
          </form>

        </>
    )
}

export default CashInPage;
