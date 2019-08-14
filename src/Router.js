import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './Layout'

import getSections from './services/getSections'
import getAvailableSectionsByAccessLevel from './services/getAvailableSectionsByAccessLevel'


const PrivateRoute = ({ component: Component, params, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Component {...props} {...params} />
    )} />
  )
}

const getPrivateRoutes = () => {
  const sections = getAvailableSections()

  return sections.map((section, index) => {
    let subsectionList = []
    if (section.subsections) {
      subsectionList = getSubsectionList(section)
    }

    return (
      <PrivateRoute
        key={index}
        path={section.path}
        component={section.component}
        params={{
          sectionName: section.name,
          subsectionList: subsectionList,
          subRoutes: section.subRoutes
        }}
      />
    )
  })
}

const getSubsectionList = (section) => {
  const userInfo = window.user.info

  const availableSections = getAvailableSectionsByAccessLevel(userInfo.access_level)

  const availableSection = availableSections.find(availableSection => {
    return availableSection.id === section.id
  })

  const availableSubsections = availableSection.subsectionIds

  return availableSubsections.map((availableSubsection) => {
    return section.subsections.find(subsection => {
      return subsection.id === availableSubsection
    })
  })
}

const getSectionRoutes = () => {
  const sections = getAvailableSections()

  return sections.filter(section => {
    return section.type === 'section'
  })
}

const getAvailableSections = () => {
  const userInfo = window.user.info

  if (userInfo) {
    const availableSections = getAvailableSectionsByAccessLevel(userInfo.access_level)
    const sections = getSections()

    return availableSections.map(availableSection => {
      return sections.find(route => {
        return availableSection.id === route.id
      })
    })
  }
}

const Router = () => {
  return (
    <BrowserRouter>
      {window.user.info ?
        <Layout
          sections={getSectionRoutes()}
        >
          <Switch>
            {getPrivateRoutes()}
          </Switch>
        </Layout>
        : null
      }
    </BrowserRouter>
  )
}

export default Router