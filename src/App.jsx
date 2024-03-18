import { useState } from 'react'
import './App.css'
import Cart from './Components/Recipeses/Cart';
import Courses from './Components/Recipeses/Courses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const  [carts, setCarts] = useState([]);
    const handleCart = (course) => {
      const isExist = carts.find(pd => pd.recipe_id == course.recipe_id);
      if(!isExist){
        setCarts( [...carts, course]);
      }else{
        toast("Already Add") 
    }
  };

  const handleDelete = (id)=>{
    const newCart = carts.filter((item)=> item.id !== id )
    setCarts(newCart);
  }

  return (
    <>
    <div>
          {/* Nav section */}
          <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>home</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li>
            <a>Recipes</a>
            </li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-2xl -mt-2" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar py-3">
              <div className="w-10 rounded-full px-2 py">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banneer section */}
          <section>
            <div className="banner-container">
                <div className="card banner-card lg:card-side bg-base-100 shadow-xl  h-[550px] lg:py-36 lg:px-56 lg:gap-48">
                    <div >
                        <div className="">
                          <h1 className='text-center text-white text-5xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
                             <p className=' text-white mt-10 text-center '>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                             <div className='text-center my-10 flex justify-evenly'>
                             <button className="btn bg-[#0BE58A] rounded-3xl w-44 ">Explore Now</button>
                             <button className="btn btn-outline rounded-3xl text-white w-44">Our Feedback</button>
                             </div>
                            </div>
                    </div>
                  </div>
            </div>
        </section>
          {/*  main section */}
        <section className=' my-28'>
          <div>
            <h1 className='text-center text-4xl font-semibold'>Our Recipes</h1>
            <p className=' text-center font-normal my-4 lg:px-56'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
          </div>
        </section>
     {/* react part */}
         <div className=' lg:grid lg:grid-cols-12 lg:w-[1100px] gap-5'>
            <div className=' lg:col-span-8'>
              <Courses handleCart={handleCart}></Courses>
            </div>
            <div className=' lg:col-span-2 text-center mt-10'>
              <Cart handleDelete={handleDelete} carts={carts}></Cart>
            </div>
         </div>
         <ToastContainer></ToastContainer>
    </div>
    </>
  )
}

export default App
