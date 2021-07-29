import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './PantrySquare.css';

const PantrySquare = ({ pantry }) => {
    const loggedInUser = useSelector(state => state.session.user)
    const id = loggedInUser?.id
    return (
        <div className='pantry-square'>
            <div className='pantry-image'>
                <img
                    style={{ width: "100px", height: "100px", objectFit: "cover", margin:'10px'}}
                    src={
                        pantry?.pantry_image_url === 'pantry_image_url.jpeg'
                            ? 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg'
                            : pantry?.pantry_image_url
                        }
                />
            </div>
            <div className='pantry-info'>
                <div className='pantryLink'>
                    <NavLink to={`/users/${id}/pantry/${pantry.id}`}>
                        {pantry.pantry_name}
                    </NavLink>
                </div>
                <div className='pantryLoc'>
                    {pantry.location}
                </div>
            </div>
            <div>Edit Button Here</div>
            <div>Delete Button Here</div>
        </div>
    )
}

export default PantrySquare;
