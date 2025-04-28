import {Elysia} from 'elysia'

new Elysia()
.get('/', () => 'Hello Elysia!')
.get('hi', () => 'hi')
.listen(8080)