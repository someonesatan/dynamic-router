import Section from '../Section'
import routes from '../constants/routes'
import {
  Section1,
  Section2,
  Section4,
  SubSection1,
  SubSection2,
  SubSection3,
  SubSection4,
  SubSection5
} from '../components/Pages'


const sections = [
  {
    type: 'section',
    id: 'section1',
    name: 'Section 1',
    path: routes.section1,
    component: Section,
    subRoutes: [
      { path: routes.section1, component: Section1, exact: true }
    ]
  },
  {
    type: 'section',
    id: 'section2',
    name: 'Section 2',
    path: routes.section2,
    component: Section,
    subRoutes: [
      { path: routes.section2, component: Section2, exact: true }
    ]
  },
  {
    type: 'section',
    id: 'section3',
    name: 'Section 3',
    path: routes.section3,
    component: Section,
    subsections: [
      { id: 'subsection1', name: 'Subsection 1', path: routes.subsection1, component: SubSection1 },
      { id: 'subsection2', name: 'Subsection 2', path: routes.subsection2, component: SubSection2 },
    ]
  },
  {
    type: 'section',
    id: 'section4',
    name: 'Section 4',
    path: routes.section4,
    component: Section,
    subRoutes: [
      { path: routes.section4, component: Section4, exact: true }
    ]
  },
  {
    type: 'section',
    id: 'section5',
    name: 'Section 5',
    path: routes.section5,
    component: Section,
    subsections: [
      { id: 'subsection3', name: 'Subsection 3', path: routes.subsection3, component: SubSection3 },
      { id: 'subsection4', name: 'Subsection 4', path: routes.subsection4, component: SubSection4 },
      { id: 'subsection5', name: 'Subsection 5', path: routes.subsection5, component: SubSection5 }
    ]
  }
]

const getSections = () => {
  return sections
}


export default getSections