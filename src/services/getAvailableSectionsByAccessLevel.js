const availableSections = {
  1: [
    { id: 'section1' },
    { id: 'section2' },
    {
      id: 'section3', subsectionIds: [
        'subsection1',
        'subsection2'
      ]
    },
    { id: 'section4' },
    {
      id: 'section5', subsectionIds: [
        'subsection3',
        'subsection4',
        'subsection5'
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