import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './LandingSquare.css'

const LandingSquare = ({input}) => {
    const loggedInUser = useSelector((state) => state.session.user)
    const id = loggedInUser?.id
    const image = input?.pantry_image_url ? input?.pantry_image_url : ( input?.recipe_image_url ? input?.recipe_image_url : null)
    const name = input?.pantry_name ? input?.pantry_name : ( input?.recipe_name ? input?.recipe_name : null)
    let link;

    if (input?.pantry_name) {
        link=`/users/${id}/pantry/${input?.id}`
    } else if (input?.recipe_name) {
        link=`/users/${id}/recipe/${input?.id}`
    }

    return (
        <div className='landing-card'>
            <NavLink to={link}>
                <div className='landing-image'>
                <img
                    style={{ width: "200px", height: "200px", objectFit: "cover", margin:'10px', borderRadius:'50%'}}
                    src={ image === 'pantry_image_url.jpeg'? 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg': ( image === 'recipe_image_url.jpeg' ? 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg' : image) }
                    alt='pantryImg'
                    />
                </div>
                <div className='landing-name'>
                    <h4> {name} </h4>
                </div>
            </NavLink>
        </div>
    )
}

export default LandingSquare;
