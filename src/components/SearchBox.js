import React from 'react';

// Remember to deconstruct props/functions - e.g. searchfield and searchChange
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='tc pa2'>
            <input
                type='search'
                placeholder='search robots'
                className='tc pa3 ba b--blue bg-lightest-blue'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
