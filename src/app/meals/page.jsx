
import MealSearchInput from "./components/MealSearchInput";

export default async function MealsPage({ searchParams }) {
    const query = await searchParams;

    const fetchMeals = async () => {
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
            );
            const data = await res.json();
            // setMeals(data?.meals || []);
            // console.log(data?.meals.length);
            return data.meals;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }

    const meals = await fetchMeals();

    return (
        <div>
            <div className='flex justify-center my-6'>
                <MealSearchInput></MealSearchInput>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {
                    meals.map((meal) => {
                        return (
                            <div className='border border-gray-200 bg-gray-100 p-5 rounded-md'>
                                <p className='text-2xl font-bold'>{meal?.strMeal}</p>
                                <p>{meal?.strInstructions}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
