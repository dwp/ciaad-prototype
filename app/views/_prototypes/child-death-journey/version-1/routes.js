const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('_pages/hospital-lookup/version-1')
})

module.exports = router
