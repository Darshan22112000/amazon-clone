import { createContext, useContext, useReducer } from "react";

//this is data layer
export const StateContext = createContext();

//this is the provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext)


