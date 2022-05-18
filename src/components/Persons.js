
const Persons = ({personsToShow, buttonClick}) => {
    return (
        <div>
            {personsToShow.map(person =>
                <p key={personsToShow.indexOf(person)}>
                    {person.name} {person.number} <button onClick={buttonClick(person)}>delete</button>
                </p>
            )}
        </div>
    )
}

export default Persons
