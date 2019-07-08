const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.locals.scenario = req.session.data.scenario || '1'
  res.locals.dummyData = '/prototypes/child-death-journey/version-1/fill-dummy-data'
  next()
})

router.get('/', (req, res) => {
  res.redirect('version-1/start-page')
})

router.get('/start-page', (req, res) => {
  res.render('_pages/fep/start-page/version-1')
})

module.exports = router
