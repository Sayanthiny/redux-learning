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
const SUBSCRIBE_CHANNEL="SUBSCRIBE_CHANNEL"

//Actions
export const VadiveluComedyAction=()=>({type:VADIVELU_COMEDY})
export const CoundamaniComedyAction=()=>({type:COUNDAMANI_COMEDY})
export const SubscribeChannelAction=()=>({type:SUBSCRIBE_CHANNEL})

const initialState={
  img:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
  isSubscribed:false
  }

  const comedyReducer=(state=initialState,actions)=>{
    switch (actions.type) {
      case SUBSCRIBE_CHANNEL:
        return{
          img:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
          isSubscribed:!state.isSubscribed
        }
      
      case VADIVELU_COMEDY:
        return{
          ...state,
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgG6-swnoBZxg4NegkgMlFuJI2QnTBTj8mbcgQW-Pd-GYu2WhJdADnx-E7bXFsSw_w3Z0&usqp=CAU'

        }
      
      case COUNDAMANI_COMEDY:
      return{
        ...state,
        img:'https://i.pinimg.com/originals/ce/4d/c7/ce4dc767765fbf974252d4f41b6673f5.jpg'
      }
      
      default:
        return{
          ...state
        }
    }
  }

let store=createStore(comedyReducer)
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
