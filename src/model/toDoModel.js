import mongoose from 'mongoose'

const toDoSchema = new mongoose.Schema({
  message: { type: String, required: true },
  check: { type: Boolean, default: false }
}, {
  timestamps: true
})

const toDoModel = mongoose.model('To-do', toDoSchema, 'To-do')

export default toDoModel
