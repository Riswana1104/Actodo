import { FaTrash } from "react-icons/fa";

function Todoitem(props) {
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr


    function handleDelete(deleteid) {
        var temparr = activityArr.filter(function(item) {
            if (item.id === deleteid) {
                return false
            }
            else {
                return true
            }
        })

        setactivityArr(temparr)
    }
    return (
        <div className="flex justify-between text-black">
            <p>{props.index + 1}{"."}{props.activity}</p>
            <button className="  text-black" onClick={() => { handleDelete(props.id) }}><FaTrash /></button>
        </div>
    )
}
export default Todoitem