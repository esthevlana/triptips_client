import { useState, useEffect } from 'react'
import axios from 'axios';
import './SearchBar.css'
import { ImSearch } from "react-icons/im";

function Searchbar({placeholder, data}) {

    const [countries, setCountries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    /* to get access to the input user is writing */
    const handleFilter = (e) => {
       const searchCountry = e.target.value;
       const newFilter = countries.filter((value) => {
        /* if value includes the value of countryName, it means true */
       return value.countryName.toLowerCase().includes(searchCountry.toLowerCase())
    });

setFilteredData(newFilter);

    };

    const getCountries = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/countries`
          );
          setCountries(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getCountries();
      }, [countries]);

  return (
    <div className="search">
        <div className='searchInputs'>                                  
            <input type="text" placeholder={placeholder} data={countries} onChange={handleFilter}/>
            <div className='searchIcon'><ImSearch /></div>
        </div>
        {/* Don't show any country if the input place is empty */}
        {filteredData.length != 0 && (
            <div className='dataResult'>
            {filteredData.map((value, key) => {
                return <div>{value.countryName}</div>
            })}
        </div>
        )}
    </div>
  )
}

export default Searchbar