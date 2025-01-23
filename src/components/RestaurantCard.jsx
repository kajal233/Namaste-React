import {CDN_URL} from '../utils/constant';
const RestaurantCard = (props) => {
    const { resData } = props;

    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    }  = resData?.info;
    return (
      <div className='res-card'>
        <img className="res-img" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>Rating: {avgRating}</h4>
        <h4>Cuisines: {cuisines.join(', ')}</h4>
        <h4>Cost for Two: {costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
       
      </div>
    );
  };
  export default RestaurantCard;