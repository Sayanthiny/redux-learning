import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {VadiveluComedyAction,CoundamaniComedyAction,SubscribeChannelAction} from './index'
// import { connect } from 'react-redux'

function App() {
  const comedies=useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <p>{comedies.isSubscribed ? 'true' :'false'}</p>
      <img src={comedies.img}/>
      <div>
        <button disabled={!comedies.isSubscribed} onClick={()=>dispatch(VadiveluComedyAction())}>VadiveluComedy</button> &nbsp;
        <button disabled={!comedies.isSubscribed} onClick={()=>dispatch(CoundamaniComedyAction())}>CoundamaniComedy</button>&nbsp;
        <button onClick={()=>dispatch(SubscribeChannelAction())}>{!comedies.isSubscribed ? 'Subscribe' : 'unSubscribe'}</button>
      </div>
    </div>
  );
}

export default App;
