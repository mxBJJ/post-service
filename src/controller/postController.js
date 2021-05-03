const Post = require('../model/post')
const User = require('../model/user')

module.exports = {

    async create(req, res) {

        const { title, description, img, contact, location, user } = req.body

        try {
            const post = await Post.create({
                title,
                description,
                img,
                location,
                contact,
                user
            })

            return res.send({ post })
        } catch (error) {
            return res.status(500).send({ message: 'Erro ao criar anúncio.' })
        }
    },

    async index(req, res) {
        try {
            const posts = await Post.find().populate("user")

            return res.send({ posts })
        } catch (error) {
            return res.status(500).send({ message: 'Erro ao buscar produtos.' })
        }
    },

    async findById(req, res) {
        const userId = req.query.userId

        try {
            const posts = await Post.find({ user: userId }).populate("user")

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