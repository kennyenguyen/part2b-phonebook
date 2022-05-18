import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newFilter, setNewFilter] = useState('')

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const addPerson = (event) => {
        event.preventDefault()
        const names = persons.map(person => person.name)

        if (names.includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName, 
                number: newPhone,
            }
            personService
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewPhone('')
                })
        }
    }

    const deletePerson = (person) => {
        if (window.confirm(`Delete ${person.name} ?`)) {
            personService
            .remove(person.id)
            .then(response => {
                console.log(response)
            })
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
        ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())) 
        : persons

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={newFilter} onFilterChange={handleFilterChange} />
            <h3>add a new</h3>
            <PersonForm
                onFormSubmit={addPerson} 
                onNameChange={handleNameChange} 
                onNumberChange={handlePhoneChange} 
                nameValue={newName} 
                numberValue={newPhone} 
            />
            <h3>Numbers</h3>
            <Persons personsToShow={personsToShow} buttonClick={deletePerson} />
        </div>
    )
}

export default App
