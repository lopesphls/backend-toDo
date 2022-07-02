import mongoose from 'mongoose'

async function connection () {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((response) => console.log('Conexão estabelecida'))
    .catch((err) => console.error(err))
}

export default connection
