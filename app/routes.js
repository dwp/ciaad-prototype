const express = require('express')
const router = express.Router()

// Child death prototypes
router.use(/\/prototypes\/child-death-journey\/version-([0-9]+)/, (req, res, next) => {
  return require(`./views/_prototypes/child-death-journey/version-${req.params[0]}/routes`)(req, res, next);
})

module.exports = router
