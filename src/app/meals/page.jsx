
import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const metadata = {
    title: "All Meals",
    description: "Meals loaded from mealDB API",
};


const roboto = Roboto({
  weight: ["300"],
  subsets : ["latin"]
});

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
            return data.meals || [];
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
                            <div key={meal.idMeal} className={`border border-gray-200 bg-gray-100 p-5 rounded-md ${roboto.className}`}>
                                <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={640} height={640} className="rounded-md"/>
                                <p className='text-2xl font-bold'>{meal?.strMeal}</p>
                                <p>{meal?.strInstructions}</p>
                                <Link href={`/meals/${meal.idMeal}`}> <button className="mt-5 border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-200">Details</button> </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
