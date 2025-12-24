import HouseRow from "./HouseRow";
import {useEffect, useState} from "react";

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
      const fetchHouses = async () => {
        const response = await fetch("https://localhost:4000/api/houses");
        const data = await response.json();
        setHouses(data);
      };
      fetchHouses();
    }, []);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 6,
                address: "1010 Maple St, Vancouver, British Columbia",
                country: "Canada",
                description: "A charming 3-bedroom house with a beautiful garden.",
                price: "500000",
                photo: "125699"
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