/* eslint-disable react/prop-types */
const Course = ({ course, handleCart }) => {
    //   console.log(course);
    const {recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} =  course;
    return (
        <div>
           <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={recipe_image} alt={recipe_name} className="rounded-xl" />
            </figure>
            <div className="card-body gap-5">
                <h2 className="card-title text-3xl font-semibold">{recipe_name}</h2>
                <p className=" text-sm font-semibold">{short_description}</p>
                <h3 className=" text-xl font-semibold">Ingredients (6)</h3>
                <ul className=" px-12">
                    {ingredients.map((item) => (
                        <li className=" text-lg" key={item}>{item}</li>
                    ))}
                </ul>
                <div className=" flex mt-4">
                    <p className="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {preparing_time}</p>

                    <p className=" flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                    </svg>
                    {calories}</p>
                </div>
                <div className="card-actions mt-4">
                <button className=" w-40  rounded-3xl btn bg-[#0BE58A]" onClick={()=>handleCart(course)}
                >Want to Cook</button>
                </div>
            </div> 
            </div>
        </div>
    );
};

export default Course;