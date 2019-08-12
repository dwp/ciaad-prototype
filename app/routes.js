const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.use((req, res, next) => {
  res.locals.back = req.headers.referer
  next()
})

router.use(/\/prototypes\/(.*)\/version-([0-9]+)/, (req, res, next) => {
  return require(`./views/_prototypes/${req.params[0]}/version-${req.params[1]}/routes`)(req, res, next);
})

module.exports = router
