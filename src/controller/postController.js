const Post = require('../model/post')
const User = require('../model/user')

module.exports = {

    async create(req, res) {

        const { title, state, description, img, location, user, category } = req.body

        try {
            const post = await Post.create({
                title,
                state,
                category,
                description,
                img,
                location,
                user
            })

            return res.send({ post })
        } catch (error) {
            return res.status(500).send({ message: 'Erro ao criar anúncio.' })
        }
    },

    async index(req, res) {


        let categoryFilter = req.query.category
        let cityFilter = req.query.city
        let orderBy = req.query.orderBy

        console.log(orderBy)
        
        try {

        if(orderBy == 0){

            const posts = await Post
            .find({location: {$regex: cityFilter}, category: {$regex: categoryFilter}}).sort({createdAt: -1}).populate("user")

            return res.send({ posts })
        }

        const posts = await Post
        .find({location: {$regex: cityFilter}, category: {$regex: categoryFilter}}).sort({title: 1}).populate("user")

        return res.send({ posts })  

        } catch (error) {
            return res.status(500).send({ message: 'Erro ao buscar produtos.' })
        }
    },

    async findById(req, res) {
        const userId = req.query.userId

        try {
            const posts = await Post.find({ user: userId })

            return res.send({ posts })
        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: 'Erro ao buscar produtos.' })
        }
    },

    async delete(req, res) {

        const postId = req.params.postId

        try {

            await Post.deleteOne({ _id: postId })
            return res.status(200).send({ success: true })

        } catch (error) {
            console.log(error)
            return res.status(500).send({ message: 'Erro ao deletar anúncio.' })
        }
    }

}