import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Bubbles from './components/Bubbles';
import BubbleDetails from './components/BubbleDetails';
import Bundles from './components/Bundles';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import { getBubbles } from './actions/getBubblesAction';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
    
	const bubbles = useSelector(state => state.bubbles);
    const onRefresh = React.useCallback(async () => {
		await dispatch(getBubbles());
	  }, [bubbles]);
    useEffect(()=>{

        onRefresh();
        }, []);
  
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NavigationBar />
      <Routes>
      <Route exact path="/" element={ <Main/> }/>
      <Route exact path="/bubbles" element={ <Bubbles/> }/>
      <Route exact path='/bubbledetails' element={ <BubbleDetails/> }/>
      <Route exact path="/bundles" element={ <Bundles/> }/>
      </Routes>
    </div>
  );
}

export default App;
