import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login(props)
 {
const navigate=useNavigate()
  const [eusername, setEusername] = useState()
  const [epassword, setEpassword] = useState()
  const [ruser, setRuser] = useState(true)

const users = props.users



  function handleUInput(evt) {
    setEusername(evt.target.value)
  }
  function handlePInput(evt) {
    setEpassword(evt.target.value)
  }

  function checkUser()
   {
    var userfound=false
    users.forEach(function (item) 
    {
      if (item.username === eusername && item.password === epassword) 
        {
        console.log("Login Successful")
        userfound = true
        navigate("/landing", {state:{user:eusername}})
      }  
    })
    if(userfound===false)
      {
        console.log("Login Failed")
        setRuser(false)
    }

  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#f1c4e4f6] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hii</h1>
        {ruser ? <p>I will help you manage your activities after you login :)</p> : <p className="text-red-800">Please SignUp !</p>}
        <div className="flex flex-col gap-2 my-2">

          <input
            // Handle username input
            type="text"
            onChange={handleUInput}
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"
          />

          <input
            // Handle password input
            type="password"
            onChange={handlePInput}
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"
          />

          <button
            className="bg-[#8272DA] p-2 w-24 rounded-md text-white"
            onClick={checkUser}
          >
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link to="/Signup" className="underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
