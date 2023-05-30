import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


export default function Footer() {


    return (
        <footer>
            <div className='container-fluid'>
                <div className='col col-md-2 icons'>
                    <Link className='social-icons'><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link className='social-icons'><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link className='social-icons'><FontAwesomeIcon icon={faLinkedin} /></Link>
                </div>
                <div style={{color:'white'}}>
                &copy; Copyright 2023 - Caffè Exclusivo - All Rights Reserved.
                </div>
            </div>
        </footer>)

}