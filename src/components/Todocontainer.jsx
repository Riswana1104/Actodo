import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"
function Todocontainer() {
    const [activityArr, setactivityArr] = useState(
        [
            {
                id: 1,
                activity: "Drink Water"
            },
            {
                id: 2,
                activity: "Go for a walk"
            },
            {
                id: 3,
                activity: " Go for a Shopping"
            }
        ]
    )

    return (
        <div>
            {/* div for both  */}

            <div className="flex gap-5 flex-wrap">

                {/* container1 div,div1,div2 */}
                <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr}/>

                {/* container2 */}
             <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>

            </div>
        </div>
    )

}
export default Todocontainer