import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.css";



class OrderReview extends React.Component{
    state = {
        order: JSON.parse(localStorage.getItem('cart')),
        user: JSON.parse(localStorage.getItem('user'))

    }

    submit(e){
        console.log("Submit");
    };

 
    render(){
        console.log("hello", this.state.user)
        return(
            // Render here a sort of list of the cart
            
            <div>
            <h1 className="h1Bundles">Your Order</h1>
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
                  <div className="infobox">
                        <h2>Your Information</h2>
                        <p>Name: {this.state.user.name}</p>
                        <p>Phone: {this.state.user.telephone}</p>
                        { this.state.user.hasOwnProperty("address") ? (<p>Address: {this.state.user.address}</p>): null }
                        { this.state.user.hasOwnProperty("city") ? (<p>City: {this.state.user.city}</p>): null }
                        { this.state.user.hasOwnProperty("postCode") ? (<p>Postcode: {this.state.user.postCode}</p>): null }


                    </div>
                <NavLink className="checkoutbtn" onClick={e => this.submit(e)} to="/order/success" exact>Confirm Order</NavLink>  
            </div>
        </div>  

        )
    }
}

export default OrderReview;