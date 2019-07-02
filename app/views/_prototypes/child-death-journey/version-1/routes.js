const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.locals.scenario = req.session.data.scenario || '1'
  next()
})

router.get('/', (req, res) => {
  res.redirect('version-1/settings')
})

router.get('/settings', (req, res) => {
  res.render('_prototypes/child-death-journey/version-1/settings')
})
router.post('/settings', (req, res) => {
  res.redirect('start-cards')
})

router.get('/start-cards', (req, res) => {
  res.render('_pages/start-cards/version-1')
})

router.get('/start-page', (req, res) => {
  res.render('_pages/death-notification/start-page/version-1')
})
router.post('/start-page', (req, res) => {
  const scenario = res.locals.scenario
  if (scenario === '1') {
    return res.redirect('about-the-deceased-child')
  }
  if (scenario === '2') {
    return res.redirect('full-time-education')
  }
  if (scenario === '3') {
    return res.redirect('about-the-deceased-working-age')
  }
})

router.get('/full-time-education', (req, res) => {
  res.render('_pages/death-notification/full-time-education/version-1')
})
router.post('/full-time-education', (req, res) => {
  if (req.body.deceased.education === 'yes') {
    res.redirect('about-the-deceased-child')
  } else {
    res.redirect('Not a child')
  }
})

router.get('/about-the-deceased-child', (req, res) => {
  res.render('_pages/death-notification/about-the-deceased-child/version-1')
})
router.post('/about-the-deceased-child', (req, res) => {
  if (req.body.deceased.benefits.includes('dla-child')) {
    res.redirect('is-there-a-carer')
  } else {
    res.redirect('check-your-answers')
  }
})

router.get('/is-there-a-carer', (req, res) => {
  res.render('_pages/death-notification/is-there-a-carer/version-1')
})
router.post('/is-there-a-carer', (req, res) => {
  if (req.body.carer.exists === 'yes') {
    res.redirect('carer-details')
  } else {
    res.redirect('check-your-answers')
  }
})

router.get('/carer-details', (req, res) => {
  res.render('_pages/death-notification/carer-details/version-1')
})
router.post('/carer-details', (req, res) => {
  res.redirect('hospital-lookup')
})

router.get('/hospital-lookup', (req, res) => {
  res.render('_pages/hospital-lookup/version-1')
})
router.post('/hospital-lookup', (req, res) => {
  res.redirect('check-your-answers')
})

router.get('/check-your-answers', (req, res) => {
  res.render('_pages/death-notification/check-your-answers/version-1')
})
router.post('/check-your-answers', (req, res) => {
  res.redirect('declaration')
})

router.get('/declaration', (req, res) => {
  res.render('_pages/declaration/version-1')
})
router.post('/declaration', (req, res) => {
  res.redirect('complete')
})

router.get('/complete', (req, res) => {
  res.render('_pages/complete/version-1')
})

module.exports = router
