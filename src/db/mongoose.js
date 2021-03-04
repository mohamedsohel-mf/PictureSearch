require('dotenv').config();
const db = require('mongoose');
db.connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
db.Promise = global.Promise