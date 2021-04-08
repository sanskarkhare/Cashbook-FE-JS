import React, { useState, useContext } from 'react'
import { Wrapper, Label, Input, LabelWrapper, SaveBtn } from './index.styles';
import AppContext from '../../../context/GlobalState';

const CashInPage = () => {

    const { addTransactions } = useContext(AppContext);

    const [amount, setAmount] = useState(0);
    const [remark, setRemark] = useState('');

   const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            amount,
            remark,
            date: new Date()
        }
        addTransactions(newTransaction)
        window.location.pathname='/';
   }

    return (
        <>

         <form onSubmit={onSubmit}>
             <Wrapper>
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
