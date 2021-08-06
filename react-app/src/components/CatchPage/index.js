import { NavLink } from 'react-router-dom';

import './CatchPage.css'

const CatchPage = () => {
    return (
        <div className='catch-container'>
            <div className='catch-inner-container'>
                <div className='image-container'>
                    <img src='https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/10/asset/buzzfeed-prod-web-03/sub-buzz-2970-1548259162-2.jpg' alt='catchImg'/>
                </div>
                <div className='text-container'>
                    <h2>Anyone can cook, but not every URL exists! Here's a button to take you back home.</h2>
                </div>
                <div className='home-button'>
                    <NavLink to={`/`} >
                        <button>Home</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CatchPage;
