const { PORT } = process.env;

module.exports = {
  port: PORT  || 4000,
  mongoURI: 'mongodb+srv://$user:$pass@cluster0.pyomhzl.mongodb.net/?retryWrites=true&w=majority',
}