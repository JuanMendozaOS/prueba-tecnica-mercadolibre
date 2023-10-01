import axios from 'axios'
import dotenv from 'dotenv'
import { getAuthor } from '../utils.js'
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
    const responseData = (await axios.get(url)).data

    const categories = responseData.filters.find(filter => filter.id === CATEGORY_ID)?.values
      ?.map(category => category.name)

    console.log(categories)

    if (!categories) throw new Error('No categories found')

    return { author, ...responseData }
  }

  static async getById ({ id }) {
    throw new Error('Not implemented')
  }
}
