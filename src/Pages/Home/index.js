import {React} from 'react'
import {About} from '../About'

const Home=()=>{

    // const secret= require('env')(firebase.config().env.test)
    // const secret= firebase.config().env.test

    return(
        <div className="container mt-5">
        
            <h2 style={{'font-family':'conthraxsb-regular'}}>Formula Student-Taiwan</h2>
            {/* <img src="../assets/image/2247162.png"/> */}
        
            {/* <iframe width="100%" height="550" src="https://www.youtube.com/embed/gZ0H4kPFZrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <iframe className="video" src="https://www.youtube.com/embed/94SC7wX6peY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <div id="about">
                <h2>關於</h2>
                <About/>
            </div>
        </div>
    )
}

export{Home}