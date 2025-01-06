// import { Link, useNavigate } from "react-router-dom"
// import { useState } from "react"



// function Signup(props) {

//     const [euseranme, setEusername] = useState()
//     const [epassword, setEpassword] = useState()

//     const users = props.users
//     const setusers = props.setusers

// const navigate=useNavigate()
// function handleUInput(evt) {
//     setEusername(evt.target.value)
//   }
//   function handlePInput(evt) {
//     setEpassword(evt.target.value)
//   }

//   function addUser()
//   {
//     setusers([...users,{username:euseranme,password:epassword }])
//    navigate("/")
//   }

//     return (
//         <div className="bg-black p-10 ">
//             <div className="bg-[#f0f185] p-10 border rounded-md" >
//                 <h1 className="text-3xl font-medium">Hey Hii</h1>
//                 <p>Sign Up here :) </p>
//                 <div className="flex flex-col gap-2 my-2">
//                     <input
//                         type="text"
//                         onChange={handleUInput}
//                         className="w-52 border-black p-1 bg-transparent border rounded-md"
//                         placeholder="Username"
//                     />

//                     <input
//                         type="text"
//                         onChange={handlePInput}
//                         className="w-52 border-black p-1 bg-transparent border rounded-md"
//                         placeholder="Password"
//                     />

//                     <input
//                         type="text"
//                         className="w-52 border-black p-1 bg-transparent border rounded-md"
//                         placeholder="Confirm password" />

//                     <button
//                      className="bg-[#8272DA] p-2 w-24 rounded-md text-white"
//                      onClick={addUser}>Sign Up

//                     </button>
//                     <p>Already have an account? <Link to={"/"} className="underline" >Login</Link></p>
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default Signup

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(props) {
  const [euseranme, setEusername] = useState();
  const [epassword, setEpassword] = useState();

  const users = props.users;
  const setusers = props.setusers;

  const navigate = useNavigate();

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }
  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function addUser() {
    setusers([...users, { username: euseranme, password: epassword }]);
    navigate("/");
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-200 to-purple-500 p-10 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 border border-gray-300 rounded-lg text-gray-800 w-96 shadow-md">
        <h1 className="text-4xl font-bold text-purple-950 mb-4">Welcome!</h1>
        <p className="text-gray-600 mb-6">Create an account to get started :)</p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            onChange={handleUInput}
            className="w-full bg-gray-100 p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Username"
          />

          <input
            type="password"
            onChange={handlePInput}
            className="w-full bg-gray-100 p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Password"
          />

          <input
            type="password"
            className="w-full bg-gray-100 p-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            placeholder="Confirm Password"
          />

          <button
            className="bg-purple-400 p-3 rounded-md text-black font-semibold hover:bg-pink-400 transition duration-200"
            onClick={addUser}
          >
            Sign Up
          </button>
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to={"/"} className="text-purple-950 underline hover:text-purple-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;

