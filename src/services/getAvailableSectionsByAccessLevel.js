const availableSections = {
  1: [
    { id: 'section1' },
    { id: 'section2' },
    {
      id: 'section3', subsectionIds: [
        'subsection1',
        'subsection2'
      ]
    }
  ],
  2: [
    { id: 'section1' },
    { id: 'section2' },
    { id: 'cashbox' }
  ]
}

const getAvailableSections = (accessLevel) => {
  return availableSections[accessLevel]
}

export default getAvailableSections