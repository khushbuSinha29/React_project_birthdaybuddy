
function Person({name, age, image}){

    return <div className="person">
        <img src={image} className="img"></img>
        <div>
        <h1>{name}</h1>
        <h3>{age}</h3>

        </div>
    </div>

}
export default Person;