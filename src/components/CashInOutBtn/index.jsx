import React from 'react'
import { InBtn, OutBtn, Wrapper, MyWrapper } from './index.styles';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';





const CashInOutBtn = () => {
    return (
        <>
        <MyWrapper>
            <Wrapper>
                <InBtn onClick={() => (window.location.pathname='/CashInPage')}>
                    <ImArrowUp />
                    Cash In
                </InBtn>
                
                <OutBtn onClick={() => (window.location.pathname='/CashOutPage')}>
                    <ImArrowDown />
                    Cash Out
                </OutBtn>
            </Wrapper>
        </MyWrapper>
        </>
    )
}

export default CashInOutBtn;
