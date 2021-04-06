import React from 'react'
import homeImage from './images/homeimage.jpeg'

function Home() {
    return (
        <div>
            <img src={homeImage} alt="" style={{width: 300}}/>  
            This is our main page. If you want to search the covid-19 data, please, log in.
        </div>
    )
}

export default Home;
