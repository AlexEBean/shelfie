module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get("db")

        db.get_inventory()
        .then( (inventory) => {
            res.status(200).send(inventory)
        }).catch (err => {
            res.status(500).send("Something went wrong!")
            console.log (err)
        })
    },

    addProduct: (req, res) => {
        const db = req.app.get("db")
        const {name, price, image_url} = req.body
        
        db.create_product([image_url, name, price])
        .then( (inventory) => {
            res.status(200).send(inventory)
        }).catch (err => {
            res.status(500).send("Something went wrong!")
            console.log (err)
        })
    }
}