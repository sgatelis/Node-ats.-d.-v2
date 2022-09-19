const userDb = require("../schemas/userSchema")
const sendRes = require("../modules/sendRes")
const bcrypt = require("bcrypt")

module.exports = {
    register: async (req, res) => {
        const {username, password1, age} = req.body

        const password = await bcrypt.hash(password1, 10)

        const user = new userDb({
            username,
            password,
            age
        })
       
        try {
            await user.save()
        } catch(e) {
            console.log("error =>")
            console.log(e)
        }
        

        sendRes(res, "registration ok", false)
    },
    login: async (req, res) => {
        const {username, password} = req.body

        const user = await userDb.findOne({username})

        if (!user) return sendRes(res, "user not found", true)

        const compare = await bcrypt.compare(password, user.password)

        if (!compare) return sendRes(res, "bad password", true)
        
        if(user) return sendRes(res, "login is ok", false, user)
        
        sendRes(res, "bad credentials", true)
    },
    updateMonye: async (req, res) => {
        const {ticketsAmount, username} = req.body

        const money1 = await userDb.findOneAndUpdate({username: username}, {$inc: {money: -ticketsAmount}}, {new: true})
        
        sendRes(res, "update ok", false, money1)
    }
}

//     productUpload: async(req, res) => {
//     const { image, title, price } = req.body

//     const product = new productSchema({
//         image,
//         title,
//         price
//     })

//     await product.save()

//     sendRes(res, "upload ok", false)
//     },

//     getProducts: async (req, res) => {
//     const products = await productSchema.find()

//     console.log(products);

//     sendRes(res, "all good", false, products)
// },
 
//     getProduct: async (req, res) => {
//         const {id} = req.params
//         const product = await productSchema.findOne({_id: id})
//         sendRes(res, "all good", false, product)
//         console.log(product);
//     }
// }