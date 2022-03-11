import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Bubbles from './components/Bubbles';
import BubbleDetails from './components/BubbleDetails';
import Bundles from './components/Bundles';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import StoreCheckout from './components/StoreCheckout';
import DeliverCheckout from './components/DeliverCheckout';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import { getBubbles } from './actions/getBubblesAction';
import { getBubble } from './actions/getSingleBubbleAction';
import { getBundles } from './actions/getBundlesAction';
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
    
	const bubbles = useSelector(state => state.bubbles);
    const onRefresh = React.useCallback(async () => {
		await dispatch(getBubbles());
    // await dispatch(getBubbles());
	  }, [bubbles]);
    
    const bubble = useSelector(state => state.bubble);
    const singleBubble = React.useCallback(async () => {
		await dispatch(getBubble(1));
    // await dispatch(getBubbles());
	  }, [bubble]);

    const bundles = useSelector(state => state.bundles);
    const bundleGetter = React.useCallback(async () => {
		await dispatch(getBundles());
    // await dispatch(getBubbles());
	  }, [bundles]);

    useEffect(()=>{
        onRefresh();
        singleBubble();
        bundleGetter();
        }, []);
  
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <NavigationBar />
      <Routes>
      <Route exact path="/" element={ <Main/> }/>
      <Route exact path="/bubbles" element={ <Bubbles/> }/>
      <Route exact path='/bubbles/:bubbleId' element={ <BubbleDetails/> }/>
      {/* <Route exact path='/bubbledetails' element={ <BubbleDetails/> }/> */}
      <Route exact path="/bundles" element={ <Bundles/> }/>
      <Route exact path="/cart" element={ <Cart/> }/>
      <Route exact path="/cart/checkout" element={ <Checkout/> }/>
      <Route exact path="/cart/checkout/deliver" element={ <DeliverCheckout/> }/>
      <Route exact path="/cart/checkout/pickup" element={ <StoreCheckout/> }/>
      </Routes>
    </div>
  );
}

export default App;
