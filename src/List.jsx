import Person from "./Person";

function List({people}){
    // console.log('Inside the list component')
    // console.log(people);
    return <section>
        {people.map((person) => {
            return <Person key={person.id} {...person}/>
        })}
    </section>
}
export default List;