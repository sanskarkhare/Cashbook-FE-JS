import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/GlobalState';
import { ParaAmount, Wrapper, HeaderWrapper, Hr, H3, ParaDate, RemarkDateWrapper, UL, LI, ParaRemark, ULWrapper } from './index.styles';
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
               <H3>Details</H3>
               <Hr />
               <H3>Amount</H3>
            </HeaderWrapper>
        {loading ? (<h1>Loading...</h1>) : (
           
        <>
           
            
                <ULWrapper>
                    {transactions.map(transaction => (
                    
                    
                    <div key={transaction._id} className="Div"> 
                        <LI onClick={() => history.push(`/EditEntryPage/${transaction._id}`)}>
                        <RemarkDateWrapper>

                        <ParaDate>{new Date(transaction.date).toLocaleString(undefined, {
                                day:    'numeric',
                                month:  'short',
                                hour:   '2-digit',
                                minute: '2-digit',
                            })}
                        </ParaDate>
                        <ParaRemark>
                        {transaction.remark}
                        </ParaRemark>
                            </RemarkDateWrapper>

                            <span><ParaAmount price={transaction.amount}>{transaction.amount < 0 ? transaction.amount * -1: transaction.amount}</ParaAmount></span> 
                        </LI>
                    </div>
                    
                
                    ))}

                </ULWrapper>

                    
              
                
            
        </>
        )}
        </Wrapper>
        </>
    )
}

export default History;


{/* <ParaWrapper onClick={() => history.push(`/EditEntryPage/${transaction._id}`)}>
                    <RemarkDateWrapper>
                        <ParaDate>{new Date(transaction.date).toLocaleString(undefined, {
                                day:    'numeric',
                                month:  'short',
                                hour:   '2-digit',
                                minute: '2-digit',
                            })}
                        </ParaDate>
                        <ParaRemark>{transaction.remark}</ParaRemark>
                    </RemarkDateWrapper>
                        <ParaAmount price={transaction.amount}>{transaction.amount}</ParaAmount> 
                </ParaWrapper> */}