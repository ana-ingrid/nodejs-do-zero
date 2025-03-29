import { fastify } from 'fastify'
import { DatabaseMemory } from "./database-memory.js"
import { title } from 'process'

const server = fastify()
const database = new DatabaseMemory()    

server.post('/videos', (request, response) => {
    database.create({
        title: "Video 1",
        description: "Esse é o video 01",
        duration: 100,
    })

    console.log(database.list)
    return response.status(201).send

})

server.get('/videos', () => {
    return 'Hello'
})

server.put('/videos/:id', () => {
    return 'Hello test'
})

server.delete('/videos/:id', () => {
    return 'Hello test'
})

server.listen({
    port: 3333,
})