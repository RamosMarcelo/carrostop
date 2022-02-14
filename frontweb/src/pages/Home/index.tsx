import CarHeader from 'assets/images/car-header.png';
import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <img src={CarHeader} alt="" className="image" />
          </div>
        </div>
        <div className="home-card-button">
          <span>Comece agora a navegar</span>
          <ButtonIcon />
        </div>
      </div>
    </>
  );
};

export default Home;
