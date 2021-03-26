import {React} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div class="d-flex flex-column">
            <footer class="footer">
                <div className="container">
                <FontAwesomeIcon icon={faFacebook} />
                </div>

            </footer>
        </div>
    )
}

export {Footer}