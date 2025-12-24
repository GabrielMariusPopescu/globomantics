import './App.css'
import Banner from './components/Banner'
import HouseList from './components/HouseList'
import House from './components/House'
import { useState, useCallback } from 'react'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = useCallback((house) => {
    // checks can be made on house: 
    // if it is a proper object and 
    // all of its properties exists.
    setSelectedHouse(house);
  }, []);

  return (
      <ErrorBoundary fallback="Error in App component">
        <Banner headerText="Providing houses all over the world." />
        {
          selectedHouse 
            ? <House house={selectedHouse} /> 
            : <HouseList selectHouse={setSelectedHouseWrapper}  /> 
        }
      </ErrorBoundary>
  )
}

export default App
