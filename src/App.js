import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', phone: '908-240-1337'}, 
        {name: 'Ardo Hellas', phone: '908-240-1338'}, 
        {name: 'Bart Hellas', phone: '908-240-1339'}, 
        {name: 'Bard Hellas', phone: '908-240-1330'}, 
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newFilter, setNewFilter] = useState('')

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

    const handleFilterChange = (event) => {
        console.log(event.target.value)
        setNewFilter(event.target.value)
    }

    const personsToShow = newFilter
        ? persons.filter(person => person.name.toLowerCase().startsWith(newFilter.toLowerCase())) 
        : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <div>filter shown with <input value={newFilter} onChange={handleFilterChange} /></div>

            <h3>add a new</h3>
            <form onSubmit={addPerson}>
                <div>name: <input value={newName} onChange={handleNameChange} /></div>
                <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
                <div><button type="submit">add</button></div>
            </form>

            <h3>Numbers</h3>
            <div>
                {personsToShow.map(person =>
                    <p key={personsToShow.indexOf(person)}>{person.name} {person.phone}</p>
                )}
            </div>
        </div>
    )
}

export default App
