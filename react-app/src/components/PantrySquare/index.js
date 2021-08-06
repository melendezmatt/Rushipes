import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DeletePantryButton from '../DeletePantryButton';
import EditPantryButton from '../EditPantryButton';
import './PantrySquare.css';

const PantrySquare = ({ pantry }) => {
    const loggedInUser = useSelector(state => state.session.user)
    const id = loggedInUser?.id
    return (
        <div className='pantry-square'>
            <div className='pantry-image'>
                <NavLink to={`/users/${id}/pantry/${pantry.id}`}>
                    <img
                        style={{ width: "200px", height: "200px", objectFit: "cover", margin:'10px', borderRadius:'50%'}}
                        src={
                            pantry?.pantry_image_url === 'pantry_image_url.jpeg'
                                ? 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg'
                                : pantry?.pantry_image_url
                            }
                        alt='pantryImg'
                    />
                </NavLink>
            </div>
            <div className='pantry-content'>
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
                <div className='pantry-buttons'>
                    <EditPantryButton id={id} pantryId={pantry.id}/>
                    <DeletePantryButton id={id} pantryId={pantry.id}/>
                </div>
            </div>

        </div>
    )
}

export default PantrySquare;
