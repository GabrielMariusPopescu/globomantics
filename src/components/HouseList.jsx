import {useState} from "react";
import HouseRow from "./HouseRow";

const houseArray = [
  {
    id: 1,
    address: "123 Main St, Dallas, Texas",
    country: "USA",
    price: "300000"
  },
  {
    id: 2,
    address: "456 High St, Toronto, Ontario",
    country: "Canada",
    price: "400000"
  },
  {
    id: 3,
    address: "789 Elm St, Belfast, Northern Ireland",
    country: "UK",
    price: "250000"
  }
];

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 4,
                address: "1010 Maple St, Vancouver, British Columbia",
                country: "Canada",
                price: "500000"
            }
        ]);
    }
  return (
    <>
    <div className="row mb-2">
        <h5 className="themeFontColor text-center">
            Houses currently on the market
        </h5>
    </div>
    <table className="table table-hover">
        <thead>
            <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {houses.map((house) => (
               <HouseRow 
                house={house} 
                key={house.id} />
            ))}
        </tbody>
    </table>
    <button className="btn btn-primary"
            onClick={addHouse}>
        Add New House
    </button>
    </>
  )
}

export default HouseList;