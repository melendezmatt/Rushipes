import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserPantries} from '../../store/pantries';
import { getAllUserRecipes } from '../../store/recipes';
import { NavLink } from 'react-router-dom';
import LandingSquare from '../LandingSquare'
import './LandingPage.css'

const LandingPage = () => {
    const loggedInUser = useSelector((state) => state.session.user)
    const userId = loggedInUser?.id
    const dispatch = useDispatch();

    const currPantries = useSelector((state) => {
        return  Object.values(state.pantries)
    })

    const currRecipes = useSelector((state) => {
        return  Object.values(state.recipes)
    })

    useEffect(() => {
        dispatch(getAllUserPantries(userId))
        dispatch(getAllUserRecipes(userId))
    }, [dispatch, userId])


    return (
        <div className='landing-container'>
            <div className='welcome-outer'>
                <div className='welcome-banner'>
                    <h1> Welcome to Rushipes! </h1>
                </div>
            </div>
            <div className='combined-container'>
                <div className='pantries-container'>
                    <div className='pantries-inner-container'>
                        <h2> Pantries</h2>
                        <div className='mapped-pantries'>
                        {currPantries?.map(input => (
                            <LandingSquare input={input} key={input?.id}/>
                        ))}
                        </div>
                        <div className='reroute-button'>
                            <NavLink to={`/users/${userId}/pantries`}>
                                <button> View All Pantries</button>
                            </NavLink>
                        </div>
                    </div>

                </div>
                <div className='recipes-container'>
                    <div className='recipes-inner-container'>
                        <h2> Recipes</h2>
                        <div className='mapped-recipes'>
                        {currRecipes?.map(input => (
                            <LandingSquare input={input} key={input?.id}/>
                        ))}
                        </div>
                        <div className='reroute-button'>
                            <NavLink to={`/users/${userId}/recipes`}>
                                <button> View All Recipes</button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPage;
