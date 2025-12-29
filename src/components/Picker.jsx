import navValues from "../navigation/navValues";
import HouseRow from "./HouseRow"
import HouseList from "./HouseList"

const Picker = ({currentNavLocation}) => {
    switch(currentNavLocation){
        case navValues.home:
            return <HouseList/>
        case navValues.house:
            return <HouseRow/>
        default:
            return (
                <h3 className="text-danger">
                    No component for navigation value
                    {currentNavLocation} found
                </h3>
            );
    }
};

export default Picker;