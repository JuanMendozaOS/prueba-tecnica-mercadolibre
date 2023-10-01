export class ItemController {
  constructor ({ itemModel }) {
    this.itemModel = itemModel
  }

  getAll = async (req, res) => {
    const { q: query } = req.query
    const items = await this.itemModel.getAll({ query })

    if (items) return res.json(items)

    return res.status(404).json('Items not found')
  }
}
