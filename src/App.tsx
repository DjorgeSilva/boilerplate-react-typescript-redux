import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux';
import { actions } from './state';
import { stateInterface } from './state/combineReducers';


function App() {

  const dispatch = useDispatch();
  const state = useSelector((state: stateInterface) => state.entrada)

  const { depositAction } = bindActionCreators(actions, dispatch);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositAction(1)}>1</button>
    </div>
  );
}

export default App;
