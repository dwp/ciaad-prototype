const express = require('express')
const router = express.Router()
const {isAfter} = require('date-fns')

router.use((req, res, next) => {
  res.locals.scenario = req.session.data.scenario || '1'
  res.locals.dummyData = '/prototypes/child-death-journey/version-1/fill-dummy-data'
  next()
})

router.get('/', (req, res) => {
  res.redirect('version-1/settings')
})

router.get('/settings', (req, res) => {
  res.render('_prototypes/bsp/version-1/settings')
})
router.post('/settings', (req, res) => {
  res.redirect('start-cards')
})

router.get('/skip-bsp', (req, res) => {
  res.redirect('fep-start-page')
})
router.get('/skip-fep', (req, res) => {
  res.redirect('declaration')
})

// Regular journey
router.get('/start-cards', (req, res) => {
  res.render('_pages/start-cards/version-1')
})

router.get('/start-page', (req, res) => {
  res.render('_pages/death-notification/start-page/version-1')
})
router.post('/start-page', (req, res) => {
  res.redirect('about-the-deceased-16-19')
})

router.get('/about-the-deceased-16-19', (req, res) => {
  res.render('_pages/death-notification/about-the-deceased-16-19/version-2')
})
router.post('/about-the-deceased-16-19', (req, res) => {
  res.redirect('hospital-lookup')
})

router.get('/hospital-lookup', (req, res) => {
  res.render('_pages/hospital-lookup/version-2')
})
router.post('/hospital-lookup', (req, res) => {
  res.redirect('who-is-responsible')
})

// DAP
router.get('/who-is-responsible', (req, res) => {
  res.render('_pages/dap/who-is-responsible/version-1')
})
router.post('/who-is-responsible', (req, res) => {
  res.redirect('bsp-start-page')
})

router.get('/check-your-answers', (req, res) => {
  res.render('_pages/death-notification/check-your-answers/version-1')
})
router.post('/check-your-answers', (req, res) => {
  res.redirect('/prototypes/fep/version-1/start-page')
})

router.get('/bsp-start-page', (req, res) => {
  const scenario = req.session.data.scenario
  if (scenario === '3') {
    return res.render('_pages/bsp/start-page/version-1')
  }
  res.render('_pages/bsp/start-page-not-eligible/version-1')
})
router.post('/bsp-start-page', (req, res) => {
  const scenario = req.session.data.scenario
  if (scenario === '3') {
    return res.redirect('check-claimant-spa')
  }
  res.redirect('fep-start-page')
})

router.get('/check-claimant-spa', (req, res) => {
  res.render('_pages/bsp/check-claimant-spa/version-1')
})

router.get('/declaration', (req, res) => {
  res.render('_pages/declaration/version-1')
})
router.post('/declaration', (req, res) => {
  res.redirect('complete')
})

router.get('/complete', (req, res) => {
  const scenario = req.session.data.scenario
  if (scenario === '1') {
    return res.render('_pages/complete/version-2')
  }
  return res.render('_pages/complete/version-1')
})

// FEP Journey
router.get('/fep-start-page', (req, res) => {
  const scenario = req.session.data.scenario
  if (scenario === '4') {
    return res.render('_pages/fep/start-page/version-2')
  }
  if (scenario === '3') {
    return res.render('_pages/fep/start-page/version-3')
  }
  res.render('_pages/fep/start-page/version-1')
})
router.post('/fep-start-page', (req, res) => {
  const scenario = req.session.data.scenario
  if (scenario === '4') {
    return res.redirect('complete')
  }
  res.redirect('do-you-live-in-scotland')
})

router.get('/do-you-live-in-scotland', (req, res) => {
  res.render('_pages/fep/do-you-live-in-scotland/version-2')
})
router.post('/do-you-live-in-scotland', (req, res) => {
  const scenario = req.session.data.scenario
  if (scenario === '1') {
    return res.redirect('declaration')
  }
  if (scenario === '2') {
    return res.redirect('caller-benefits')
  }
})

router.get('/funeral-responsibility', (req, res) => {
  res.render('_pages/fep/funeral-responsibility/version-1')
})
router.post('/funeral-responsibility', (req, res) => {
  if (req.body.fep['responsible-for-funeral'] === 'no') {
    req.session.data.fep.notEligible = "Not responsible for the funeral"
    return res.redirect('not-eligible')
  }
  res.redirect('deceased-uk-resident')
})

router.get('/caller-benefits', (req, res) => {
  res.render('_pages/fep/caller-benefits/version-1')
})
router.post('/caller-benefits', (req, res) => {
  if (req.body.fep.benefits && req.body.fep.benefits.includes(`No, I don't get any of these benefits`)) {
    req.session.data.fep.notEligible = "Not on benefits"
    return res.redirect('not-eligible')
  }
  res.redirect('funeral-date')
})

router.get('/deceased-uk-resident', (req, res) => {
  res.render('_pages/fep/deceased-uk-resident/version-1')
})
router.post('/deceased-uk-resident', (req, res) => {
  if (req.body.fep['deceased-ordinarily-resident'] === 'no') {
    req.session.data.fep.notEligible = "Deceased not a UK resident"
    return res.redirect('not-eligible')
  }
  res.redirect('funeral-location')
})

router.get('/funeral-date', (req, res) => {
  res.render('_pages/fep/funeral-date/version-1')
})
router.post('/funeral-date', (req, res) => {
  const fd = req.body.fep['funeral-date']
  const funeralDateIsInTheFuture = isAfter(new Date(fd.year, fd.month, fd.day), new Date())
  req.session.data.fep['funeral-date-is-in-the-future'] = funeralDateIsInTheFuture
  res.redirect('funeral-responsibility')
})

router.get('/funeral-location', (req, res) => {
  res.render('_pages/fep/funeral-location/version-1')
})
router.post('/funeral-location', (req, res) => {
  const scenario = req.session.data.scenario || '1'
  if (req.body.fep['funeral-in-uk'] === 'no') {
    return res.redirect('funera-held-in-eea')
  }
  res.redirect('check-your-answers')
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

module.exports = router
