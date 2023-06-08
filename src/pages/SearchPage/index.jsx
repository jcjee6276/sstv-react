import React, { useState } from 'react'
import SearchHeader from './searchHeader';
import SearchBody from './searchBody';
const SearchPage = () => {
    
    const [select, setSelect] = useState(0);
    
    return (
        
            <form>
             <SearchHeader select={select} setSelect={setSelect}/>
               <SearchBody select={select} setSelect={setSelect} />
            </form>
        
    )

}

export default SearchPage;