import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";



class OrderReview extends React.Component{
    state = {
        order: JSON.parse(localStorage.getItem('cart'))
    }

    submit(e){
        console.log("Submit");
    };

 
    render(){
        console.log("hello", this.state.order)
        return(
            // Render here a sort of list of the cart
            
            <div>
            <h1 className="h1Bundles">Cart Items</h1>
            <div className="cartDiv">
                {this.state.order &&
                this.state.order.map((item, index) => {

                if(item.hasOwnProperty("bundle")){
            return (
                    <div key={item.bundle.id}  className="CartItem">
                        <div>
                            <h2 className="Heading">{item.bundle.counter} x {item.bundle.name}</h2>
                            <p className="BubblePrice">Price: {item.bundle.price} kr</p>
                        </div>
                    </div>
                );
                }
                else{
                    console.log("hello")
                    return (
                    <div key={item.bubble.id} className="CartItem">
                        <div>
                            <h2 className="Heading">{item.bubble.counter} x {item.bubble.name}</h2>
                            <p className="BubblePrice">Price: {item.bubble.price} kr</p>
                        </div>
                    </div>
                );
                }
                })}
                <NavLink className="checkoutbtn" to="/order/success" exact>Confirm Order</NavLink>  
            </div>
        </div>  


        //     <div><NavLink
        //     className="checkoutbtn"
        //     onClick={e => this.submit(e)}
        //     // activeClassName="is-active"
        //     to="/order/success"
        //     exact>
        // Confirm
        // </NavLink></div>
        )
    }
}

export default OrderReview;