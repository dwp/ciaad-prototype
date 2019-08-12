const express = require('express')
const router = express.Router()

router.get('/who-is-responsible', (req, res) => {
  res.render('_pages/dap/who-is-responsible/version-1')
})

module.exports = router
