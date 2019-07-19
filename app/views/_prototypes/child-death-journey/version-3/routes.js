const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.locals.scenario = req.session.data.scenario || '1'
  res.locals.dummyData = '/prototypes/child-death-journey/version-1/fill-dummy-data'
  next()
})

router.get('/', (req, res) => {
  res.redirect('version-3/settings')
})

router.get('/settings', (req, res) => {
  res.render('_prototypes/child-death-journey/version-2/settings')
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
    return res.redirect('about-the-deceased-16-19')
  }
})

router.get('/about-the-deceased-child', (req, res) => {
  res.render('_pages/death-notification/about-the-deceased-child/version-3')
})
router.post('/about-the-deceased-child', (req, res) => {
  const answered = req.body.deceased.benefits
  const gettingDLA = req.body.deceased.benefits.includes('Disability Living Allowance')
  const appliedforDLA = req.body.deceased.benefits.includes('Not yet, but had applied')
  const checkForCarer = gettingDLA || appliedforDLA
  if (answered && checkForCarer) {
    return res.redirect('is-there-a-carer')
  }
  res.redirect('check-your-answers')
})

router.get('/about-the-deceased-16-19', (req, res) => {
  res.render('_pages/death-notification/about-the-deceased-16-19/version-3')
})
router.post('/about-the-deceased-16-19', (req, res) => {
  const answered = req.body.deceased.benefits
  const gettingDLA = req.body.deceased.benefits.includes('Disability Living Allowance')
  const appliedforDLA = req.body.deceased.benefits.includes('Not yet, but had applied')
  const checkForCarer = gettingDLA || appliedforDLA
  if (answered && checkForCarer) {
    res.redirect('is-there-a-carer')
  } else {
    res.redirect('check-your-answers')
  }
})

router.get('/is-there-a-carer', (req, res) => {
  res.render('_pages/death-notification/is-there-a-carer/version-2')
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
  res.redirect('/prototypes/fep/version-1/start-page')
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

router.get('/fill-dummy-data', (req, res) => {
  req.session.data = {
    "caller": {
      "name": "John Smith",
      "phone": "0191 1234567",
      "relationship": "Parent"
    },
    "deceased": {
      "name": "Joe Smith",
      "dob": {
        "day": "1",
        "month": "1",
        "year": "2000"
      },
      "nino": "aa123456a",
      "benefits": [
        "Disability Living Allowance"
      ],
      "dod": {
        "day": "2",
        "month": "2",
        "year": "2019"
      }
    },
    "security": {
      "passed1": "yes"
    },
    "address-line-1": "1 Some street",
    "address-line-2": "Some estate",
    "address-town": "A town",
    "address-county": "County something",
    "address-postcode": "NE29 1AA",
    "carer": {
      "exists": "yes",
      "who": "caller",
      "name": ""
    },
    "hospital": {
      "did-they-die-in-hospital": "yes",
      "name": "Nuffield Health, Newcastle-upon-Tyne Hospital"
    }
  }
  const url = req.headers.referer || '/'
  return res.redirect(url)
})

module.exports = router
