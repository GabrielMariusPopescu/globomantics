import currencyFormatter from '../utils/currencyFormatter';

const House = ({house}) => {
  return(
    <div className="row">
        <div className="row-6">
            <div className="row">
                <img className="image-fluid"
                src={house.image 
                    ? `./houseImages/${house.image}.jpg` 
                    : "./defaultImage.png"} 
                    alt="house image" />
            </div>
        </div>
        <div className="col-6">
            <div className="row mt-2">
                <h5 className="col-12">
                    {house.country}
                </h5>
            </div>
            <div className="row">
                <h3 className="col-12">
                    {house.address}
                </h3>
            </div>
            <div className="row">
                <div className="themeFontColor col-12">
                    {currencyFormatter.format(house.price)}
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-3">
                    {house.description}
                </div>
            </div>
        </div>
    </div>
  );
}

export default House;