function Card(props)
{
    return(
        // get colors and styles from card comp
        <div style={{ backgroundColor: props.bgcolor }} className="px-10 py-5 border rounded-md text-center flex-grow">
        <h1 className="font-medium text-2xl">{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>  
    )
}
export default Card