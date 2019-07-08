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

// Child death prototypes
router.use(/\/prototypes\/child-death-journey\/version-([0-9]+)/, (req, res, next) => {
  return require(`./views/_prototypes/child-death-journey/version-${req.params[0]}/routes`)(req, res, next);
})

// FEP prototypes
router.use(/\/prototypes\/fep\/version-([0-9]+)/, (req, res, next) => {
  return require(`./views/_prototypes/fep/version-${req.params[0]}/routes`)(req, res, next);
})

module.exports = router
