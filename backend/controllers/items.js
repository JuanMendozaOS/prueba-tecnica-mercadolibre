export class ItemController {
  constructor ({ itemModel }) {
    this.itemModel = itemModel
  }

  getAll = (req, res) => {
    const { q: query } = req.query
    const items = this.itemModel.getAll({ query })

    if (items) return res.json(items)

    return res.status(404).json('Items not found')
  }
}
