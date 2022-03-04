import React from "react";
// import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
// import "./styles.css";
// import { Redirect } from 'react-router-dom';


class Bubbles extends React.Component{


render() {
  return(
<div className="bubbles">
    <p>Bubbles are fun!</p>
</div>


  )

}
}
// const mapStateToProps = (state) => {
//   return {boss: state.boss}
// }

// const mapDispatchToProps = {
//   getBoss,
//   deleteBoss
// }

// export default connect(mapStateToProps, mapDispatchToProps) (Boss);
export default Bubbles;