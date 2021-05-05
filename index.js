import express from 'express'
const app = express()

let schedule = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-62-5258952"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "08-67-5258892"
    },
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(schedule)
})

app.get('/info', (request, response) => {
    const countPersons = 'Phonebook has info for ' + schedule.length + ' people';
    let hoy = new Date()
    response.send(countPersons + '</br>' + hoy)
})

app.get('/api/persons/:id', (request, response) => {
    let id = parseInt(request.params.id)
    let person = schedule.find(person => {
        return person.id === id
    })
    if (person) {
        response.json(person)
    } else {
        response.status(500).send('Persona no encontrada')
    }
})

app.delete('/api/persons/:id', (request, response) => {
    let id = parseInt(request.params.id)
    schedule = schedule.filter(schedule => schedule.id !== id)
    response.status(200).send('Persona borrada')
})

app.post('/api/persons', (request, response) => {
    if (!request.params.name && !request.params.number) {
        return response.status(400).send('Falta el nombre y teléfono')
    }

    let person = schedule.find(person => {
        return person.id === request.params.id
    })

    if (person === request.params.name) {
        return response.status(400).send('El nombre de la persona ya existe')
    }

    let persons = {
        id: getRandomArbitrary(10, 100),
        name: request.params.id,
        number: request.params.number
    }
    response.json(persons)

})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
