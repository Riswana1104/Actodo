import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"



function Signup(props) {

    const [euseranme, setEusername] = useState()
    const [epassword, setEpassword] = useState()

    const users = props.users
    const setusers = props.setusers

const navigate=useNavigate()
function handleUInput(evt) {
    setEusername(evt.target.value)
  }
  function handlePInput(evt) {
    setEpassword(evt.target.value)
  }

  function addUser()
  {
    setusers([...users,{username:euseranme,password:epassword }])
   navigate("/")
  }

    return (
        <div className="bg-black p-10 ">
            <div className="bg-[#f0f185] p-10 border rounded-md" >
                <h1 className="text-3xl font-medium">Hey Hii</h1>
                <p>Sign Up here :) </p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        onChange={handleUInput}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Username"
                    />

                    <input
                        type="text"
                        onChange={handlePInput}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Password"
                    />

                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="Confirm password" />

                    <button
                     className="bg-[#8272DA] p-2 w-24 rounded-md text-white"
                     onClick={addUser}>Sign Up

                    </button>
                    <p>Already have an account? <Link to={"/"} className="underline" >Login</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Signup