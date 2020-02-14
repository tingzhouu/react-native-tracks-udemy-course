import React, { createContext, useReducer } from 'react';

export default (reducer, actions, defaultValue) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const boundedActions = {};
    for (let key in actions) {
      actions[key] = boundedActions[key](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundedActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Provider, Context };
}