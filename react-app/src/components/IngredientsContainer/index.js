import IngredientSquare from '../IngredientSquare'
const IngredientsContainer = ({allIngredients}) => {
    return (
        <div className='inner-container'>
            {allIngredients?.map(ingredient => (
                <IngredientSquare ingredient={ingredient} key={ingredient.id}/>
            ))}
        </div>
    )
}

export default IngredientsContainer;
