import axios from 'axios'
import dotenv from 'dotenv'
import { countDecimals, getAuthor } from '../utils.js'
dotenv.config()

const BASE_URL = process.env.BASE_URL
const author = getAuthor()
const CATEGORY_ID = 'category'
/**
 * Model that queries MercadoLibre's public API
 */
export class ItemModel {
  static async getAll ({ query }) {
    const url = new URL(`${BASE_URL}/sites/MLA/search`)
    if (query) url.searchParams.set('q', query)
    const { data } = await axios.get(url)

    const categories = getCategories(data.filters)
    const items = getItems(data.results)

    return { author, categories, items }
  }

  static async getById ({ id }) {
    throw new Error('Not implemented')
  }
}

function getCategories (filters) {
  return filters.find(filter => filter.id === CATEGORY_ID)?.values
    ?.map(category => category.name)
}

function getItems (results) {
  return results.map(element => {
    return {
      id: element.id,
      title: element.title,
      price: {
        currency: element.currency_id,
        amount: element.price,
        decimals: countDecimals(element.price, '.')
      },
      picture: element.thumbnail,
      condition: element.buying_mode,
      free_shipping: element.shipping.free_shipping
    }
  })
}
