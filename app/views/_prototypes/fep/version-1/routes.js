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
    req.session.data.fep.notEligible = "Lives in scotland"
    return res.redirect('scotland-kickout')
  }
  res.redirect('funeral-responsibility')
})

router.get('/scotland-kickout', (req, res) => {
  res.render('_pages/fep/scotland-kickout/version-1')
})
router.post('/scotland-kickout', (req, res) => {
  res.redirect('/prototypes/child-death-journey/version-2/declaration')
})

router.get('/funeral-responsibility', (req, res) => {
  res.render('_pages/fep/funeral-responsibility/version-1')
})
router.post('/funeral-responsibility', (req, res) => {
  if (req.body.fep['responsible-for-funeral'] === 'no') {
    req.session.data.fep.notEligible = "Not responsible for the funeral"
    return res.redirect('not-eligible')
  }
  res.redirect('caller-benefits')
})

router.get('/caller-benefits', (req, res) => {
  res.render('_pages/fep/caller-benefits/version-1')
})
router.post('/caller-benefits', (req, res) => {
  if (req.body.fep.benefits && req.body.fep.benefits.includes(`No, I don't get any of these benefits`)) {
    req.session.data.fep.notEligible = "Not on benefits"
    return res.redirect('not-eligible')
  }
  res.redirect('deceased-uk-resident')
})

router.get('/deceased-uk-resident', (req, res) => {
  res.render('_pages/fep/deceased-uk-resident/version-1')
})
router.post('/deceased-uk-resident', (req, res) => {
  if (req.body.fep['deceased-ordinarily-resident'] === 'no') {
    req.session.data.fep.notEligible = "Deceased not a UK resident"
    return res.redirect('not-eligible')
  }
  res.redirect('funeral-date')
})

router.get('/funeral-date', (req, res) => {
  res.render('_pages/fep/funeral-date/version-1')
})
router.post('/funeral-date', (req, res) => {
  res.redirect('funeral-location')
})

router.get('/funeral-location', (req, res) => {
  res.render('_pages/fep/funeral-location/version-1')
})
router.post('/funeral-location', (req, res) => {
  const scenario = req.session.data.scenario || '1'
  if (req.body.fep['funeral-in-uk'] === 'no') {
    return res.redirect('funera-held-in-eea')
  }
  if (scenario === '2') {
    return res.redirect('fulltime-education')
  }
  res.redirect('about-the-claimant')
})

router.get('/fulltime-education', (req, res) => {
  res.render('_pages/fep/fulltime-education/version-1')
})
router.post('/fulltime-education', (req, res) => {
  res.redirect('about-the-claimant')
})

router.get('/about-the-claimant', (req, res) => {
  res.render('_pages/fep/about-the-claimant/version-1')
})
router.post('/about-the-claimant', (req, res) => {
  res.redirect('check-your-answers')
})

router.get('/check-your-answers', (req, res) => {
  res.render('_pages/fep/check-your-answers/version-1')
})
router.post('/check-your-answers', (req, res) => {
  res.redirect('/prototypes/child-death-journey/version-2/declaration')
})

router.get('/not-eligible', (req, res) => {
  res.render('_pages/fep/not-eligible/version-1')
})

module.exports = router
