const express = require('express')
const mongoose = require('mongoose')

const userRouters = require('./routers/user')
const taskRouters = require('./routers/task')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled!');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('The server is temporarily overloading or down.');
// });

app.use(express.json())
app.use(userRouters)
app.use(taskRouters)

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(result => {
    app.listen(port, () => {
      console.log('Server is up on port', port)
    })
  })
  .catch(err => {
    console.log(err)
  })

// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async () => {
//   const task = await Task.findById('603a66a71e89f51abc80a9da')
//   await task.populate('owner').execPopulate();
//   console.log(task.owner);
//   const user = await User.findById('603a65f81e89f51abc80a9d8')
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// }
// main()
