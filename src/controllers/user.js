const User = require('../models/user')

exports.createUser = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({ user, token })
  } catch (err) {
    res.status(400).send(err)
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (err) {
    res.status(400).send(err)
  }
}

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => {
      return token.token !== req.token
    })
    await req.user.save()

    res.send()
  } catch (err) {
    res.status(500).send()
  }
}

exports.logoutAll = async (req, res) => {
  try {
    req.user.tokens = []

    await req.user.save()

    res.send()
  } catch (err) {
    res.status(500).send()
  }
}

exports.getUsers = async (req, res) => {
  res.send(req.user)
}

exports.updateUser = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'age', 'email', 'password']
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' })
  }
  try {
    updates.forEach(update => (req.user[update] = req.body[update]))
    await req.user.save()
    res.send(req.user)
  } catch (err) {
    res.status(400).send(err)
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove()
    res.send(req.user)
  } catch (err) {
    res.status(500).send(err)
  }
}

exports.getAvatar = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user || !user.avatar) {
      throw new Error()
    }

    res.set('Content-Type', 'image/png')
    res.send(user.avatar)
  } catch (err) {
    res.status(404).send()
  }
}

exports.deleteAvatar = async (req, res) => {
  req.user.avatar = undefined
  await req.user.save()
  res.send()
}
