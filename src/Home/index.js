import {React} from 'react'


const Home=()=>{
    return(
        <div className="container-fluid">
            <div className="container">
            <div className="row">
                <h2>Formula SAE-A</h2>
                {/* <img src="../assets/image/2247162.png"/> */}
            </div>
            <div className="row">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gZ0H4kPFZrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            </div>
        </div>
    )
}

export{Home}