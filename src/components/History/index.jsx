import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/GlobalState';
import { ParaRemark, ParaWrapper,ParaAmount, Wrapper, HeaderWrapper, Hr, H1, PWrapper } from './index.styles';
import { useHistory } from 'react-router-dom';





const History = () => {
    let history = useHistory();
       
    const { transactions, getTransactions, loading } = useContext(AppContext)

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <>

    <Wrapper>
            <HeaderWrapper>
               <H1>Remark</H1>
               <Hr />
               <H1>Amount</H1>
            </HeaderWrapper>
        {loading ? (<h1>Loading...</h1>) : (
        <>
            {transactions.map(transaction => (
                
                
                <div key={transaction._id} className='Div'> 

                <ParaWrapper onClick={() => history.push(`/EditEntryPage/${transaction._id}`)}>
                        <ParaRemark>{transaction.remark}</ParaRemark>
                        <ParaAmount price={transaction.amount}>{transaction.amount}</ParaAmount> 
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


