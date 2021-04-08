import React from 'react'
import TotalCash from '../TotalCashInOut'
import CashInOutBtn from '../CashInOutBtn'
import History from '../History'
import {HistoryWrapper, Wrapper} from './index.styles'

const HomePage = () => {
    return (
        <>

            <Wrapper> 
                    <TotalCash />
                   
                 <HistoryWrapper>
                    <History />
                </HistoryWrapper> 
                     <CashInOutBtn /> 
             </Wrapper>
        </>
    )
}

export default HomePage
