import React from 'react';

function Nav(props) {

    return(
        <div>
            {props.isLoggedIn ? <h1>G ISSA in</h1> : <h1>G ISSA out</h1>}
        </div>
    ) 

    // if(props.isLoggedIn === true) {
    //     return (
    //         <h1>G ISSA in</h1>
    //     )
    // }else{
    //     return (
    //         <h1>G ISSA out</h1>
    //     )
    // }
}

export default Nav;