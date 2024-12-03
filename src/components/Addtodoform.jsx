import { useState } from "react"

function Addtodoform(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

const [newActivity,setnewActivity]=useState("")
function handleChange(evt)
{
    setnewActivity(evt.target.value);
}

function addActivity() {
    setactivityArr([...activityArr, { id: activityArr.length + 1, activity: newActivity }]);
  }

return (


<div className="flex flex-col gap-3">
     {/* div1 */}

    <h1 className="text-2xl font-medium">Manage Activities</h1>
    {/* div2 */}
    <div>
        <input value={newActivity} onChange={handleChange} type="text" className="border border-black rounded-md p-1 bg-transparent" placeholder="  Next Activity?" />
        <button  onClick={addActivity} className="bg-black text-white p-1 border rounded-md  ">Add</button>
    </div>
</div>
)
}
export default Addtodoform