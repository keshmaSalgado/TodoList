const mongoose = require('mongoose')

const Todoscheme = new mongoose.Schema({
    task: String,
})

const TodoModel = mongoose.model("todods",Todoscheme)
module.exports = TodoModel