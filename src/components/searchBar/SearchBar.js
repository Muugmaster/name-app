import React from 'react'
import { names } from '../../data/names'; 
import NameTable from '../nameTable/NameTable';

import './styles.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  React.useEffect(() => {
    const results = names.names.filter(names =>
      names.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
    return (
        <>
        <input 
        type="text"
        value={searchTerm}
        placeholder={"Search name..."}
        onChange={handleChange}
        />
        <NameTable names={searchResults.map(item => item)} />
      
      </>
    )
}

export default SearchBar
