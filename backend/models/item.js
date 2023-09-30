import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const BASE_URL = process.env.BASE_URL

/**
 * Model that queries MercadoLibre's public API
 */
export class ItemModel {
  static async getAll ({ query }) {
    const url = new URL(`${BASE_URL}/sites/MLA/search`)
    if (query) url.searchParams.set('q', query)
    const responseData = (await axios.get(url)).data
    return responseData
  }

  static async getById ({ id }) {
    throw new Error('Not implemented')
  }
}
