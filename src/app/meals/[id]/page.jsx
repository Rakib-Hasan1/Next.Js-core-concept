import React from 'react'


const fetchSingleMeal = async (id) => {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        return data.meals;
    }
    catch (error) {
        console.log(error);
        return [];
    }
};

export async function generateMetadata({ params }) {
    // read route params
    const id = params.id;

    // fetch data
    const [SingleMeal] = await fetchSingleMeal(id);
    console.log(SingleMeal);



    return {
        title: SingleMeal.strMeal,
        description: SingleMeal.strInstructions,
    }
};

export default async function SingleMealPage({ params }) {
    const id = params.id;
    const singleMeal = await fetchSingleMeal(id);

    return (
        <div>
            {/* <img src={singleMeal?.strMealThumb} alt="" /> */}
            <p>{JSON.stringify(singleMeal)}</p>
        </div>
    )
};
