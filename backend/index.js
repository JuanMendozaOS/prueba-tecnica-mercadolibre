import express, { json } from 'express'
import { createItemRouter } from './routes/items.js'
import { ItemModel } from './models/item.js'

const app = express()
app.use(json())

app.use('/items', createItemRouter({ itemModel: ItemModel }))

const PORT = process.env.PORT ?? 3001

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
