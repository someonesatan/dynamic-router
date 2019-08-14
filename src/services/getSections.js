import Section from '../Section'
import routes from '../constants/routes'
import { 
  Section1,
  Section2,
  Section3,
  SubSection1,
  SubSection2
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
  }
]

const getSections = () => {
  return sections
}


export default getSections