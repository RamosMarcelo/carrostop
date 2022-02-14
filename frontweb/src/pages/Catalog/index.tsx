import CarCard from 'components/CarCard';
import './styles.css';

const Catalog = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="catalog-container">
              <div className="catalog-input-card">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite sua busca"
                    aria-label="Digite sua busca"
                    aria-describedby="basic-addon2"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    BUSCAR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my4">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
