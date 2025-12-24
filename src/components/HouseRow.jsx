import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({house}) => {
    return (
        <tr key={house.id}>
            <td>{house.address}</td>
            <td>{house.country}</td>
            <td>{house.description}</td>
            <td>{currencyFormatter.format(house.price)  }</td>
            <td>{house.photo}</td>
        </tr>
    );
}

export default HouseRow;
