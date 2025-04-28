import {Elysia} from 'elysia'
import {cors} from '@elysiajs/cors'


new Elysia()
.use(cors())
.get('/api', () => 'Hello Elysia!')
.get('/api/hi', () => new Date().toISOString())
.listen(8080)