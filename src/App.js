import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {VadiveluComedyAction,CoundamaniComedyAction,SubscribeChannelAction} from './index'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <p>{this.props.isSubscribed ? 'true' :'false'}</p>
        <img src={this.props.img}/>
      
         <button disabled={!this.props.isSubscribed} onClick={()=>this.props.VadiveluComedy}>VadiveluComedy</button> &nbsp;
         <button disabled={!this.props.isSubscribed} onClick={()=>this.props.CoundamaniComedy}>CoundamaniComedy</button>&nbsp;
         <button onClick={()=>this.props.SubscribeChannel}>{!this.props.isSubscribed ? 'Subscribe' : 'unSubscribe'}</button>
       
      </>
    )
  }
}

const mapStateToProps =(state)=>{
  return state;
}

const mapDispatchToProps=(dispatch)=>{
  return{
    VadiveluComedy:()=>dispatch(VadiveluComedyAction),
    CoundamaniComedy:()=>dispatch(CoundamaniComedyAction),
    SubscribeChannel:()=>dispatch(SubscribeChannelAction)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
