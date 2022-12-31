import React, {createContext , useReducer} from 'react';
import AppReducer from './AppReducer';
const initialState={
    transactions:[ 
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider= ( { children }) =>{

    const [state,dispatch] = useReducer (AppReducer , initialState); 
    function deltrans(id){
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        });
    }
    function addtrans(transaction){
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        });
    }
    return (
        <GlobalContext.Provider value={{transactions: state.transactions,
        deltrans,
        addtrans
        }}>
            {children}
        </GlobalContext.Provider>
    )
}