import { useState, useEffect } from "react";
import loadingStatus from "./loadingStatus";

// Hook logic to fetch and manage house data
const useHouses = () => {
 const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {      
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);   
            try {
                const response = await fetch("https://localhost:4000/api/houses");
                const data = await response.json();
                setHouses(data);
                setLoadingState(loadingStatus.loaded);
            } catch {
                setLoadingState(loadingStatus.hasErrored);
            }
      };
      fetchHouses();
    }, []); 
    
    return { houses, setHouses, loadingState };
};

export default useHouses;