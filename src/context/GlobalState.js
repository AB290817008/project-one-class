import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = [
	{ name: 'Salary', desc: 1000 },
	{ name: 'Apple', desc: -20 },
];

export const TransContext = createContext(initialState);

const TransProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(Reducer, initialState);

    const addTransaction = (transObj) => {
        dispatch({
            name:transObj.name,
            desc:transObj.desc

        })
    }

    return(
        <TransContext.Provider value={{transactions:state,addTransaction}}>
            {children}
        </TransContext.Provider>
    )

}

export default TransProvider
