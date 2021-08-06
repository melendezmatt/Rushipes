import RecipeSquare from '../RecipeSquare'
const AllRecipesContainer = ({allRecipes}) => {
    return (
        <div className='inner-container'>
            {allRecipes?.map(recipe => (
                <RecipeSquare recipe={recipe} key={recipe.id}/>
            ))}
        </div>
    )
}

export default AllRecipesContainer;
