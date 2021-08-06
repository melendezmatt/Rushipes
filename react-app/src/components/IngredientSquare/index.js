

const IngredientSquare = ({ingredient}) => {

    return (
        <div>
            <img
            style={{ width: "100px", height: "100px", objectFit: "cover", margin:'10px', borderRadius:'50%'}}
            src={ingredient.ingredient_image_url}
            alt='ingredientImg'
            />
            <h2> {ingredient.ingredient_name}</h2>
            <p> {ingredient.about}</p>
            <p> Protein: {ingredient.protein}g</p>
            <p> Carbs: {ingredient.carbohydrate}g</p>
            <p> Fat: {ingredient.fat}g </p>
            <p> Calories: {ingredient.calories} cals</p>

        </div>


    )
}

export default IngredientSquare;
