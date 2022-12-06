import { Request, Response } from 'express'
import express from 'express'
import * as functions from '@google-cloud/functions-framework'

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World from '/'.")
})

app.get('/hello', (req: Request, res: Response) => {
    res.send("Hello World from '/hello'.")
})

exports.expressApi = functions.http('expressApi', app)
