import {React} from 'react'
import {About} from '../About'

const Home=()=>{
    return(
        <div className="container mt-5">
        
            <h2>Formula Student-Taiwan</h2>
            {/* <img src="../assets/image/2247162.png"/> */}
        
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/gZ0H4kPFZrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div id="about">
                <h2>關於</h2>
                <About/>
            </div>
        </div>
    )
}

export{Home}