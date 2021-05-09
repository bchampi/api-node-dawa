import express from 'express'
import phonebookRouter from './routes/phonebook'
import helmet from 'helmet'
import morgan from 'morgan'

import { config } from './config'

import errorHandler from './utils/middlewares/errorHandlers'
import { notFoundHandler } from './utils/middlewares/notFoundHandler'

const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(express.json())

app.use('/', phonebookRouter)

// catch 404 and forward to error handler
app.use(notFoundHandler)

// middlewares
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
