import React from 'react';

// Destructuring.... instead of using:
// const Card = (props) => ....
const Card = ({ name, email, id }) => {

    return (
        // className is the jsx way of using css class
        // These are all tacyons classes
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <img alt='robots' src={`https://robohash.org/${id}lol?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{id}</p>
            </div>
        </div>

    );
}

export default Card;
