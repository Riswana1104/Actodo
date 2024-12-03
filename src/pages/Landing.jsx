import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Todocontainer from "../components/Todocontainer.jsx";

import { useLocation } from "react-router-dom"


function Landing() 
{
    const data = useLocation()
    console.log(data.state.user)
    return (
        //  style for the blackbox and whitebox
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                {/* Header comp */}
                <Header username ={data.state.user}   />
                {/* card Container */}
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    {/* card comp,props are passing to card.jsx */}
                    <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}    ></Card>
                    <Card bgcolor={"#FD6663"} title={"April 11"} subtitle={"12:11:22"} ></Card>
                    <Card bgcolor={"#FCA201"} title={"Bulid Using"} subtitle={"React"} ></Card>
                </div>

                {/* Todocontainer */}
                <Todocontainer />


            </div>
        </div>


    )
}
export default Landing