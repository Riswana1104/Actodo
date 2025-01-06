// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";


// function Login(props)
//  {
// const navigate=useNavigate()
//   const [eusername, setEusername] = useState()
//   const [epassword, setEpassword] = useState()
//   const [ruser, setRuser] = useState(true)

// const users = props.users



//   function handleUInput(evt) {
//     setEusername(evt.target.value)
//   }
//   function handlePInput(evt) {
//     setEpassword(evt.target.value)
//   }

//   function checkUser()
//    {
//     var userfound=false
//     users.forEach(function (item) 
//     {
//       if (item.username === eusername && item.password === epassword) 
//         {
//         console.log("Login Successful")
//         userfound = true
//         navigate("/landing", {state:{user:eusername}})
//       }  
//     })
//     if(userfound===false)
//       {
//         console.log("Login Failed")
//         setRuser(false)
//     }

//   }

//   return (
//     <div className="bg-black p-10">
//       <div className="bg-[#f1c4e4f6] p-10 border rounded-md">
//         <h1 className="text-3xl font-medium">Hey Hii</h1>
//         {ruser ? <p>I will help you manage your activities after you login :)</p> : <p className="text-red-800">Please SignUp !</p>}
//         <div className="flex flex-col gap-2 my-2">

//           <input
//             // Handle username input
//             type="text"
//             onChange={handleUInput}
//             className="w-52 border-black p-1 bg-transparent border rounded-md"
//             placeholder="Username"
//           />

//           <input
//             // Handle password input
//             type="password"
//             onChange={handlePInput}
//             className="w-52 border-black p-1 bg-transparent border rounded-md"
//             placeholder="Password"
//           />

//           <button
//             className="bg-[#8272DA] p-2 w-24 rounded-md text-white"
//             onClick={checkUser}
//           >
//             Login
//           </button>

//           <p>
//             Don't have an account?{" "}
//             <Link to="/Signup" className="underline">
//               SignUp
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [eusername, setEusername] = useState();
  const [epassword, setEpassword] = useState();
  const [ruser, setRuser] = useState(true);

  const users = props.users;

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }
  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function checkUser() {
    var userfound = false;
    users.forEach(function (item) {
      if (item.username === eusername && item.password === epassword) {
        console.log("Login Successful");
        userfound = true;
        navigate("/landing", { state: { user: eusername } });
      }
    });
    if (userfound === false) {
      console.log("Login Failed");
      setRuser(false);
    }
  }

  return (
    <div className="bg-pink-300 p-10 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 border border-gray-300 rounded-md text-black w-96 shadow-lg">
        <h1 className="text-3xl font-medium mb-4 text-gray-900">Hey Hii</h1>
        {ruser ? (
          <p className="mb-4 text-black">I will help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-500 mb-4">Login Failed! Please SignUp.</p>
        )}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            onChange={handleUInput}
            className="w-full bg-gray-100 p-2 border border-gray-300 rounded-md text-black"
            placeholder="Username"
          />
          <input
            type="password"
            onChange={handlePInput}
            className="w-full bg-gray-100 p-2 border border-gray-300 rounded-md text-black"
            placeholder="Password"
          />
          <button
            className="bg-pink-500 p-2 rounded-md text-white hover:bg-fuchsia-950"
            onClick={checkUser}
          >
            Login
          </button>
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/Signup" className="text-blue-950 underline hover:text-pink-800">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
