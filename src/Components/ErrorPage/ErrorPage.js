import './ErrorPage.css'
import {Link} from 'react-router-dom'

function ErrorPage() {

    return (
        <div className='error-container'>
            <h2>Whoops sorry something went wrong!</h2>
            <Link to='/'><button>Return Home</button></Link>
        </div>
    )
}

export default ErrorPage