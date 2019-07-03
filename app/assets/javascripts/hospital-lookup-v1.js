function customSuggest (query, syncResults) {
  var results = [
    {
      "@search.score": 2.8173535,
      "OrganisationName": "Nuffield Health, Newcastle-upon-Tyne Hospital",
      "OrganisationAliases": [
          "Nuffield",
          "Nuffield Hospital",
          "Nuffield Jesmond"
      ],
      "OrganisationType": "Hospital",
      "Address1": null,
      "Address2": "Clayton Road",
      "Address3": null,
      "City": "Newcastle Upon Tyne",
      "County": ""
    },
    {
      "@search.score": 2.281713,
      "OrganisationName": "Nuffield Hospital Newcastle Upon Tyne",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Newcastle Nuffield Hospital",
      "Address2": "Clayton Road",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne And Wear"
    },
    {
      "@search.score": 1.9563936,
      "OrganisationName": "St Nicholas Hospital (Newcastle-upon-Tyne)",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Jubilee Road",
      "Address2": "Gosforth",
      "Address3": null,
      "City": "Newcastle Upon Tyne",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 1.2120119,
      "OrganisationName": "Newcastle Dental Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Richardson Road",
      "Address2": "",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 1.0079584,
      "OrganisationName": "Freeman Hospital",
      "OrganisationAliases": [
          "Freeman",
          "Freeman Road Hospital",
          "The Freeman"
      ],
      "OrganisationType": "Hospital",
      "Address1": "Freeman Road",
      "Address2": "High Heaton",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 0.9292361,
      "OrganisationName": "Walkergate Hospital",
      "OrganisationAliases": [
          "Walkergate"
      ],
      "OrganisationType": "Hospital",
      "Address1": "Benfield Road",
      "Address2": "Benfield Road",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 0.84162414,
      "OrganisationName": "Northumbria Healthcare NHS Foundation Trust",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Unit 7/8, Silver Fox Way",
      "Address2": "Cobalt Business Park",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 0.8362531,
      "OrganisationName": "Walkergate Park Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": null,
      "Address2": "Benfield Road",
      "Address3": null,
      "City": "Newcastle-upon-Tyne",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 0.8362531,
      "OrganisationName": "Freeman Road Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Freeman Road",
      "Address2": "High Heaton",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne And Wear"
    },
    {
      "@search.score": 0.8362531,
      "OrganisationName": "Cobalt Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Ramsay Health Care",
      "Address2": "17 The Silverlink North",
      "Address3": "",
      "City": "Newcastle Upon Tyne",
      "County": "Tyne And Wear"
    },
    {
      "@search.score": 0.7229115,
      "OrganisationName": "The Royal Victoria Infirmary",
      "OrganisationAliases": [
          "Royal Victoria Infirmary",
          "RVI"
      ],
      "OrganisationType": "Hospital",
      "Address1": "Queen Victoria Road",
      "Address2": "New Victoria Wing",
      "Address3": "Royal Victoria Infirmary",
      "City": "Newcastle Upon Tyne",
      "County": ""
    },
    {
      "@search.score": 0.66791624,
      "OrganisationName": "Great North Childrens Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Queen Victoria Road",
      "Address2": "New Victoria Wing",
      "Address3": "Royal Victoria Infirmary",
      "City": "Newcastle Upon Tyne",
      "County": ""
    },
    {
      "@search.score": 0.6224458,
      "OrganisationName": "Cobalt Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": null,
      "Address2": "The Silverlink North",
      "Address3": null,
      "City": "Newcastle Upon Tyne",
      "County": ""
    },
    {
      "@search.score": 0.5274779,
      "OrganisationName": "Monkwearmouth Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Newcastle Road",
      "Address2": "",
      "Address3": "",
      "City": "Sunderland",
      "County": "Tyne And Wear"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Monkwearmouth Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Newcastle Road",
      "Address2": "",
      "Address3": "",
      "City": "Sunderland",
      "County": "Tyne And Wear"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Royal Free Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Pond Street",
      "Address2": "",
      "Address3": "",
      "City": "London",
      "County": "London"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Barnet Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Wellhouse Lane",
      "Address2": "Barnet",
      "Address3": "",
      "City": "Barnet",
      "County": "Hertfordshire"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "University College Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "W235 Euston Road ",
      "Address2": "",
      "Address3": "",
      "City": "London",
      "County": "London"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Royal United Hospitals Bath",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "NHS Foundation Trust",
      "Address2": "Combe Park",
      "Address3": "",
      "City": "Bath",
      "County": "Somerset"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Queen Elizabeth Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Mindelsohn Way",
      "Address2": "",
      "Address3": "",
      "City": "Birmingham",
      "County": "West Midlands"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Queen Elizabeth Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Queen Elizabeth Ave",
      "Address2": "",
      "Address3": "",
      "City": "Gateshead",
      "County": "Tyne and Wear"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Queen Elizabeth Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Gayton Rd",
      "Address2": "",
      "Address3": "",
      "City": "King's Lynn",
      "County": "Norfolk"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "West Cornwall Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "St Clare St",
      "Address2": "",
      "Address3": "",
      "City": "Penzance",
      "County": "Cornwall"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "Buckland Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Coombe Valley Rd",
      "Address2": "",
      "Address3": "",
      "City": "Dover",
      "County": "Kent"
    },
    {
      "@search.score": 0.5094971,
      "OrganisationName": "The Royal Liverpool University Hospital",
      "OrganisationAliases": [],
      "OrganisationType": "Hospital",
      "Address1": "Prescot St",
      "Address2": "",
      "Address3": "",
      "City": "Liverpool",
      "County": "Merseyside"
    }
  ]
  syncResults(
    query ? results.filter(function (result) {
      var orgNameContains = result.OrganisationName.toLowerCase().indexOf(query.toLowerCase()) !== -1
      var Address1contains = (result.Address1 == null) ? '' : result.Address1.toLowerCase().indexOf(query.toLowerCase()) !== -1
      var Address2contains = (result.Address2 == null) ? '' : result.Address2.toLowerCase().indexOf(query.toLowerCase()) !== -1
      var Address3contains = (result.Address3 == null) ? '' : result.Address3.toLowerCase().indexOf(query.toLowerCase()) !== -1
      return orgNameContains || Address1contains || Address2contains || Address3contains
    })
    : []
  )
}
function inputValueTemplate (result) {
  return result && result.OrganisationName
}
function suggestionTemplate (result) {
  var address = ''
  address += ((result.Address1 == null  || result.Address1.length === 0) ? '' : result.Address1 + ',<br />')
  address += ((result.Address2 == null  || result.Address2.length === 0) ? '' : result.Address2 + ',<br />')
  address += ((result.Address3 == null  || result.Address3.length === 0) ? '' : result.Address3 + ',<br />')

  return '<strong class="autocomplete--result-name govuk-!-font-weight-bold">' + result.OrganisationName + '</strong>' +
  '<span class="autocomplete--result-address">' + 
      address + 
      result.City + 
  '</span>'
}

element = document.querySelector('#tt-customTemplates')
id = 'autocomplete-customTemplates'
accessibleAutocomplete({
  element: element,
  showNoOptionsFound: false,
  id: id,
  name: 'hospital[name]',
  source: customSuggest,
  templates: {
    inputValue: inputValueTemplate,
    suggestion: suggestionTemplate
  }
})

$(document).on('keyup', function(e) {
  var noListItems = $(document).find('.autocomplete__menu li').length === 0
  var noLoader = $(document).find('#loader').length === 0
  if (noLoader) {
    $('.autocomplete-wrapper').prepend('<span class="loader" id="loader"></span>')
  }
  $('.autocomplete__menu').css({'display':'none'})
    setTimeout(function () {
      $('#loader').remove()
      $('.autocomplete__menu').css({'display':'block'})
      if (noListItems) {
        $('.autocomplete__menu').css({'display':'none'})
      }
    }, 500)
})

$(document).on('click', '.autocomplete__menu li', function () {
  $('.autocomplete__menu').css({'display':'none'})
})