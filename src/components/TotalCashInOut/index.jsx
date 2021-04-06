import React, { useContext } from 'react';
import { Header, SignPara, AmountPara, HeaderAmountWrapper, Wrapper, BodyWrapper, SignParaMinus, Hr } from './index.styles';
import AppContext from '../../context/GlobalState';


const TotalCash = () => {

    const { transactions } = useContext(AppContext);

    const amounts = transactions.map(transaction => transaction.amount)
    const CashIn = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
    const CashOut = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;


    return (
        <>
            <BodyWrapper>
                <Wrapper>
                    <SignPara>+</SignPara>
                    <HeaderAmountWrapper>
                        <Header>Total Cash In</Header>
                        <AmountPara>{CashIn}</AmountPara>
                    </HeaderAmountWrapper>
                </Wrapper>
                    <Hr />
                <Wrapper>
                    <SignParaMinus>-</SignParaMinus>
                    <HeaderAmountWrapper>
                        <Header>Total Cash Out</Header>
                        <AmountPara>{CashOut}</AmountPara>
                    </HeaderAmountWrapper>
                </Wrapper>
           
            </BodyWrapper>
            
        </>
    )
}

export default TotalCash;
