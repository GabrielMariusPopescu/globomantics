import currencyFormatter from '../helpers/currencyFormatter';

const House = ({house}) => {
  return(
    <div className="row">
        <div className="col-6">
            <div className="row">
                <img className="image-fluid"
                src={house.photo 
                    ? `./houseImages/${house.photo}.jpeg` 
                    : "./defaultImage.png"} 
                    alt="house photo" />
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