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
router.post('/start-page', (req, res) => {
  res.redirect('do-you-live-in-scotland')
})

router.get('/do-you-live-in-scotland', (req, res) => {
  res.render('_pages/fep/do-you-live-in-scotland/version-1')
})
router.post('/do-you-live-in-scotland', (req, res) => {
  if (req.body.fep['live-in-scotland'] === 'yes') {
    return res.redirect('phone-scotland')
  }
  res.redirect('caller-benefits')
})

router.get('/caller-benefits', (req, res) => {
  res.render('_pages/fep/caller-benefits/version-1')
})
router.post('/caller-benefits', (req, res) => {
  if (req.body.fep.benefits.includes(`No, I don't get any of these benefits`)) {
    return res.redirect('not-eligible')
  }
  res.redirect('deceased-uk-resident')
})

module.exports = router
