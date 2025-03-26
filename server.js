import { fastify } from 'fastify'
import { DatabaseMemory } from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()    

server.post('/videos', () => {
    return 'Hello World'
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