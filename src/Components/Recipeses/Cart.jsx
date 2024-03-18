/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Cart = ({carts, handleDelete}) => {
    return (
        <div className="lg:w-[460px] rounded-xl drop-shadow-2xl py-5">
            <div className=" text-2xl font-bold">
                <h1> Want to cook: <span>({carts.length})</span></h1>
            </div>
            <hr className="my-4 w-66 ml-14 mr-14" />
            <div className="flex gap-12 px-16 py-5">
            <h3 className=" text-lg font-semibold">Name</h3>
            <h3 className=" text-lg font-semibold">Time</h3>
            <h3 className=" text-lg font-semibold">Calories</h3>
            </div>
            <div className="flex justify-around py-5">
                <ul>
                {
                    carts.map((c, Index)=>(
                        <li className=" flex gap-5 py-5 px-3 text-lg" key={c.id}>
                        <p>{Index+1}</p>
                         <h3>{c.recipe_name}</h3>
                         <h3>{c.preparing_time}</h3>
                         <h3>{c.calories}</h3>
                         <button onClick={(e)=>handleDelete(c.recipe_id)} className="btn btn -mt-2 rounded-3xl bg-[#0BE58A] text-lg"> Preparing</button>
                            </li>
                    ))
                }
                </ul>
            </div>
            <hr />
            <div className="text-center my-8 ">
                <h3 className=" text-2xl font-bold">Currently cooking: <span>(0)</span>
                </h3>
            </div>
        </div>
        
    );
};

export default Cart;