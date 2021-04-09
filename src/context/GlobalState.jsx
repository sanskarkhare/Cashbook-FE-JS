import React, { useReducer, createContext } from 'react'
import axios from 'axios';
import { AppReducer } from './AppReducer';

const initialState = {
    transactions: [],
    error: null,
    loading: true,
}


const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    async function getTransactions() {
        try {
            const res = await axios.get('http://localhost:5000/');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data,
            })
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTransaction(id) {

    
        try {
            await axios.delete(`http://localhost:5000/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        }
        catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR'  ,
                payload: err.response.data.error,
            })
        }
}

    async function addTransactions(transaction) {

        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('http://localhost:5000/', transaction, config )

            dispatch({
                type: 'ADD_TRANSACTIONS',
                payload: res.data.data
            })
        }
        catch(err) {
            dispatch({
                type: 'TRANSACTION_ERROR'  ,
                payload: err.response.data.error,
            })
        }
}

async function updateTransaction(id, transaction) {

    try {
        
        const res = await axios.put(`http://localhost:5000/${id}`, transaction)

        dispatch({
            type: 'UPDATE_TRANSACTION',
            payload: res.data.data
        })
    }
    catch(err) {
        dispatch({
            type: 'TRANSACTION_ERROR'  ,
            payload: err.response.data.error,
        })
    }
}


    return(
        <AppContext.Provider value={{transactions: state.transactions, 
                                     error: state.error,
                                     loading: state.loading, 
                                     deleteTransaction,
                                     getTransactions,
                                     addTransactions,
                                     updateTransaction,
                                    }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;







