// import HouseRow from "./HouseRow";
// import {useEffect, useState} from "react";

// const HouseAddition = () => {
//     const [house, setHouse] = useState({});

//     useEffect(() => {
//         const fetchHouse = async () => {
//             const response = await fetch("https://localhost:4000/api/houses");
//             const data = await response.json();
//             setHouse(data);
//         };
//         fetchHouse();
//     }, []);

//     const addHouse = () => {
//         setHouse(
//             [
//                 house,{ }
//             ]
//         );
//     }

//      return (
//     <>
//     <div className="row mb-2">
//         <h5 className="themeFontColor text-center">
//             Houses currently on the market
//         </h5>
//     </div>
//     <table className="table table-hover">
//         <thead>
//             <tr>
//                 <th>Address</th>
//                 <th>Country</th>
//                 <th>Description</th>
//                 <th>Price</th>
//                 <th>Image</th>
//             </tr>
//         </thead>
//         <tbody>
//             {houses.map((house) => (
//                <HouseRow
//                 house={house} 
//                 key={house.id} />
//             ))}
//         </tbody>
//     </table>
//     <button className="btn btn-primary"
//             onClick={addHouse}>
//         Add New House
//     </button>
//     </>
//   )
// }

// export default HouseAddition;