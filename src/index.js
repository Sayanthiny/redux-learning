import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

//selector
const VADIVELU_COMEDY="VADIVELU_COMEDY"
const COUNDAMANI_COMEDY="COUNDAMANI_COMEDY"

//Actions
export const VadiveluComedyAction=()=>({type:VADIVELU_COMEDY})
export const CoundamaniComedyAction=()=>({type:COUNDAMANI_COMEDY})

//Reducer
const comedyReducer=(state,actions)=>{
  switch (actions.type) {
    case VADIVELU_COMEDY:
      return state="kadupethurar my load"

    case COUNDAMANI_COMEDY:
      return state="arasijalil ethelam satharanam appa"
  
    default:
      return state ="no commedy selected";
  }

}

const store=createStore(comedyReducer)
// store.subscribe(()=>{console.log(store.getState())})
// store.dispatch(VadiveluComedyAction())
// store.dispatch(CoundamaniComedyAction())


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
