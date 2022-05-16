import {useState} from 'react'

const Filter = () => {

}

const PersonForm = ({name, number}) => {
    // return (
    //     <form onSubmit={addPerson}>
    //         <div>name: <input value={name} onChange={handleNameChange} /></div>
    //         <div>number: <input value={number} onChange={handlePhoneChange} /></div>
    //         <div><button type="submit">add</button></div>
    //     </form>
    // )
}

const Persons = () => {

}

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '908-240-1337'}
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const names = persons.map(person => person.name)

        if (names.includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName, 
                phone: newPhone,
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewPhone('')
        }
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        console.log(event.target.value)
        setNewPhone(event.target.value)
    }

    return (
        <>
            <h2>Phonebook</h2>
            <Filter />
            <h3>Add a new</h3>
            <PersonForm name={newName} number={newPhone} />
            <h3>Numbers</h3>
            <Persons />
        </>
    )


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={handleNameChange} /></div>
                <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
                <div><button type="submit">add</button></div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person =>
                    <p key={persons.indexOf(person)}>{person.name} {person.phone}</p>
                )}
            </div>

            <div>debug: {newName} {newPhone}</div>

        </div>
    )
}

export default App
