import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/GlobalState';
import { ParaRemark, ParaWrapper,ParaAmount, Wrapper, HeaderWrapper, Hr, ButtonWrapper } from './index.styles';
import { useHistory } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';





const History = ({children}) => {
    let history = useHistory();
       
    const { transactions, getTransactions, loading } = useContext(AppContext)

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>

    <Wrapper>
            <HeaderWrapper>
               <h2>Remark</h2>
               <Hr />
               <h2>Amount</h2>
            </HeaderWrapper>
        {loading ? (<h1>Loading...</h1>) : (
        <>
            {transactions.map(transaction => (
                
                
                
                <div key={transaction._id} className='HistoryDiv'> 

                    <ParaWrapper onClick={() => history.push(`/EditEntryPage/${transaction._id}`)}>
                        <ParaRemark>{transaction.remark}</ParaRemark>
                        <ParaAmount>{transaction.amount}</ParaAmount>
                        {/* <ButtonWrapper><button><MdDelete /></button></ButtonWrapper> */}
                    </ParaWrapper>
                    
                </div>
                
            ))}
        </>
        )}
    </Wrapper>
        </>
    )
}

export default History;


