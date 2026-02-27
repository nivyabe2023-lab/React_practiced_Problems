import PropTypes from 'prop-types'
import { useState } from "react";
import "./index.css";
function Navbar({
  id,
  name = "Code IO Course",
  price = "$199",
  rating = "****",
  image = college_image2,
  onDelete,}){

  const [purchase,setpurchase] = useState(false); 
  const handleBuy = () => {
    setpurchase((prev) => !prev); // toggle true/false
    }
  return (
      <div className="book"> 
      <img src={image} alt="course" />
      <h1>{name}</h1>
      <h3>{rating}</h3>
      <p>{price}</p>
      <button onClick={handleBuy}>Buy Now</button>
      <button onClick ={()=>onDelete(id)} >delete</button>
      <p>{purchase? "Already purchased":"get it now"}</p>
    </div>
  );
}

Navbar.propTypes = {
    name: PropTypes.string,
    rating:PropTypes.string,
    show:PropTypes.bool,
    ByCourse: PropTypes.func,
};
export default Navbar;
