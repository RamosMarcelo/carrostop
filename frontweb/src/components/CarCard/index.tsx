import CarCardImg from 'assets/images/car-card.png';
import ButtonIconBuy from 'components/ButtonIconBuy';

import './styles.css';

const CarCard = () => {
  return (
    <>
      <div className="car-card-container">
        <div className="car-card-image-container">
          <img src={CarCardImg} alt="" className="image" />
        </div>
        <p>Audi Supra TT</p>
        <em>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </em>
        <ButtonIconBuy />
      </div>
    </>
  );
};

export default CarCard;
