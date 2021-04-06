import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper, Label, LabelWrapper, Input, SaveBtn, DeleteBtn } from './index.styles';
import { MdDelete } from 'react-icons/md';
import AppContext from '../../../context/GlobalState';
import { useHistory, useParams } from "react-router-dom";





const EditEntry = () => {
    // const { addTransactions } = useContext(AppContext);
    let history = useHistory();
    const { id } = useParams();

    const { updateTransaction, deleteTransaction } = useContext(AppContext);

    const [amount, setAmount] = useState(0);
    const [remark, setRemark] = useState('');

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:5000/${id}`)
        setAmount(res.data.data.amount);
        setRemark(res.data.data.remark)
    }

    useEffect(() => {
        loadUser();
      }, []);

    

   const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
        amount,
        remark,
    }
    updateTransaction(id, newTransaction)
    window.location.pathname='/';
   }


    return (
        <>

         <form onSubmit={onSubmit}>
             <Wrapper>
                <DeleteBtn onClick={() =>  deleteTransaction(id)}><MdDelete size={50}/></DeleteBtn>
                <LabelWrapper>
                    <Label>Amount: </Label>
                    <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter Amount..."></Input>
                </LabelWrapper>
                <LabelWrapper>
                    <Label>Remark: </Label>
                    <Input value={remark} type="text" onChange={(e) => setRemark(e.target.value)} placeholder="Enter remark..."></Input>
                </LabelWrapper>

               <SaveBtn type='submit'>Update</SaveBtn>
             </Wrapper>
          </form>

        </>
    )
}

export default EditEntry
