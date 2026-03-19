import { Search } from 'lucide-react';
import React from 'react';

const MealSearch = ({searchText, setSearchText, onSearch}) => {
    return (
        <>
            <div className="flex gap-5 mx-auto items-center w-6/12 justify-items-center">
                <div className='bg-white flex items-center py-2 px-3 gap-2 border-orange-500 w-full border focus:outline-none'>
                    {/* <label className="input validator join-item bg-white"> */}
                    <Search className='text-orange-500'/>
                    <input 
                        type="email" 
                        placeholder="Search Your Meal Items" 
                        className='text-black w-full focus:outline-none' 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}    
                    />
                    {/* </label> */}
                    {/* <div className="validator-hint hidden">Enter valid email address</div> */}
                </div>
                <button onClick={onSearch} className="btn bg-orange-500 border-none join-item">Search</button>
            </div>
        </>
    );
};

export default MealSearch;