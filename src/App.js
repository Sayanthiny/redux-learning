import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {VadiveluComedyAction,CoundamaniComedyAction} from './index'
// import { connect } from 'react-redux'

function App() {
  const comedies=useSelector(state=>state)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <img src={comedies}/>
      <div>
        <button onClick={()=>dispatch(VadiveluComedyAction())}>VadiveluComedy</button> &nbsp;
        <button onClick={()=>dispatch(CoundamaniComedyAction())}>CoundamaniComedy</button>
      </div>
    </div>
  );
}

export default App;
