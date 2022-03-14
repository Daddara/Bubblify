import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import * as apiService from '../../services/apiService';
import {getOrder} from '../../actions/getOrderAction';
import {setCounter} from '../../actions/getCartAction';
import styles from "./styles.css";



class OrderSuccess extends React.Component{
    
    state = {
        order: JSON.parse(localStorage.getItem('cart')),
        user: JSON.parse(localStorage.getItem('user'))
    }
    componentDidMount(){
        var cart = JSON.parse(localStorage.getItem('cart'));
        if(localStorage.getItem('user') !== null){
            var user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
        }
        // else if(localStorage.getItem('storeUser') !== null){
        //     var user = JSON.parse(localStorage.getItem('storeUser'));
        //     console.log(user);
        // }
        if(user){
            apiService.createOrder(user.telephone,cart);
        }
        localStorage.removeItem('cart');
        this.props.setCounter(0);
        // this.props.counter = 0;


    }

    render(){
        return (
            <div className="thankyoubox">
                <h1 className="h1Bundles">Thank You, {this.state.user.name}!</h1>
                <h1 className="h1Bundles">Your order will now be processed!</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {order: state.order, counter: state.counter}
  }
  
  const mapDispatchToProps = {
      getOrder,
      setCounter,
      
    
  }

export default connect(mapStateToProps, mapDispatchToProps) (OrderSuccess);