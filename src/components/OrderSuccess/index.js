import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import * as apiService from '../../services/apiService';
import {getOrder} from '../../actions/getOrderAction';
import {getCounter} from '../../actions/getCartAction';


class OrderSuccess extends React.Component{

    componentDidMount(){
        var cart = JSON.parse(localStorage.getItem('cart'));
        if(localStorage.getItem('deliveryUser') !== null){
            var user = JSON.parse(localStorage.getItem('deliveryUser'));
            console.log(user);
        }
        else if(localStorage.getItem('storeUser') !== null){
            var user = JSON.parse(localStorage.getItem('storeUser'));
            console.log(user);
        }
        if(user){
            apiService.createOrder(user.telephone,cart);
        }
        this.props.counter = 0;

    }

    render(){
        this.processOrder();
        return (
            <div>Success!</div>
        )
    }
}
const mapStateToProps = (state) => {
    return {order: state.order, counter: state.counter}
  }
  
  const mapDispatchToProps = {
      getOrder,
    
  }

export default connect(mapStateToProps, mapDispatchToProps) (OrderSuccess);