// import {  useState } from "react";
// // import Home from './components/home.jsx';
// // import Notifications from "./components/Notifications.jsx";
// // import Form from "./components/FormHandle.jsx";
// import {useSelector , useDispatch} from 'react-redux';
// import './App.css';

// export default function App() {
//     // const [userName , setUserName] = useState("");
//     // const [showChild , setShowChild] = useState(false);
    
//     //   function nextPage(){
//     //     setShowChild(true); 
//     //   }
//     const count  = useSelector(state => state.count) ;
//     const dispatch = useDispatch(); 
      
// return(
//     <div>
//         {/* <h1>Welcome ,We Hope you are having a good day!</h1>
//         <input type="text" placeholder="Enter Name " onChange={(e) =>setUserName(e.target.value)}></input>
//         <button onClick={nextPage}>Submit</button>
        
//         {showChild &&<Home name={userName}/>}
//         <Notifications/>
//        {/* was missing a wrapper for condition.*/}
//       <h2>Redux Counter</h2>
//       <h3>Count : {count}</h3>
//         <button onClick={()=> dispatch({type : 'INCREMENT'})}>INCREMENT</button>
//         <button onClick={()=> dispatch({type : 'DECREMENT'})}>DECREMENT</button>
//           <button onClick ={()=> dispatch ({type : 'RESET'})}> RESET </button>
//     </div>
    
// )
// }


  
import {useSelector , useDispatch } from  'react-redux';
import {increment , decrement , reset} from './components/redux/counterSlice';
import './App.css';
export default function App(){
  const count = useSelector((state) => state.counter.count);   
  
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
       <h1>Redux based Counter</h1>
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>INCREMENT</button>
        <button onClick ={() => dispatch(decrement())}>DECREMENT</button>
        <button onClick ={()=> dispatch (reset())}>RESET</button>

    </div>
  );
 }
// React Component Syntax	Basic JSX, functional component structure
// useEffect Deep Dive	Lifecycle methods comparison, cleanup, dependency array
// Forms Handling	Controlled vs uncontrolled components, validation logic
// Redux Toolkit	Setup, slice creation, store integration, async handling