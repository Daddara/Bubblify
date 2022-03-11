// import React from "react";
// import {connect} from "react-redux";
// import { Redirect } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import { getBubbles } from "../../actions/getBubblesAction";
// import propTypes from 'prop-types';
// import "./styles.css";


// // if(localStorage.getItem('cart') == null){
// //     localStorage.setItem('cart', '[]');
// // }
// // var prevData = JSON.parse(localStorage.getItem('cart'));
// // prevData.push(bundle);
// // localStorage.setItem('cart', JSON.stringify(prevData));

// class BubbleDetails extends React.Component{

//   state = {
//     bubbles: this.props.bubbles.data
//   }


//   render() {
//     // const bubbles = useSelector(state => state.bubbles);
//     return (
        
//         <div>
//             <NavLink to={'/bubbles'}>Back</NavLink>
//             {this.props.bubbles && this.props.bubbles.data.map((bubble) => {
//                 return (
//                     <span className="Layout">
//                         <div key={bubble.id} className="Bubbles">
//                         <div>
//                             <img className="BubbleImg" src={bubble.image} alt={bubble.name} />
//                         </div>
//                             <div>
//                                 <h1 className="Heading">{bubble.name}</h1>
//                             </div>
//                         <div>
//                             <p className="BubbleDetails">{bubble.description}</p>
//                             <p className="BubblePrice">Price {bubble.price} kr</p>
//                         </div>
//                             <button className="CartButton" onClick={() => this.addToLocalStorage(bubble)}>Add to cart</button>
//                         </div>
//                     </span>
//                         )
//                     }
//                 )
//             }
//         </div>
//             )


//   }
// }

// const mapStateToProps = (state) => {
//   return {bubbles: state.bubbles}
// }

// const mapDispatchToProps = {
//   getBubbles,
// }


// BubbleDetails.propTypes = {

//     bubble: propTypes.shape({
//         name: propTypes.string,
//         description: propTypes.string,
//         price: propTypes.number,
//         image: propTypes.string
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps) (BubbleDetails);