import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card'
import List from './components/List'
import Navbar from './components/NavBar'
import Header from './components/Header'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
const [list, setList] = useState(null);
const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState("");


useEffect(() => {
  const fetchAllWeatherData = async () => {
    const response =  await fetch("https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY" + API_KEY);
    const json = await response.json();
    setList(json);
  }
  fetchAllWeatherData().catch(console.error);
}, []);

const searchItems = SearchValue => {
    setSearchInput(SearchValue);
    if(SearchValue != "") {
      const filteredData = Object.keys(list.Data).filter((item) => 
        Object.values(item)
        .join("")
        .toLowerCase()
        .includes(SearchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Objects.keys(list.Data));
    }
  };

  return (
    <>
     <Navbar />
    </>
  )
}

export default App
