import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { PageWrapper, Headline, SectionLinksWrapper, SectionLink } from './components/styledComponents'


const Section = ({ match, sectionName, subsectionList, subRoutes }) => {

  const getLinks = () => {
    if (withSubsections()) {
      const links = subsectionList.map((subsection, index) => {
        return (
          <SectionLink key={index} to={subsection.path}>
            {subsection.name}
          </SectionLink>
        )
      })
      return (
        <SectionLinksWrapper>
          {links}
        </SectionLinksWrapper>
      )
    } else return null
  }

  const getRoutes = () => {
    const routes = getRouteArray(subRoutes)
    const subsectionRoutes = getRouteArray(subsectionList)

    const allRoutes = routes.concat(subsectionRoutes)

    return allRoutes
  }

  const getRouteArray = (routes) => {
    if (Array.isArray(routes) && routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        )
      })
    } else return []
  }

  const getRedirectPath = () => {
    if (subsectionList.length > 0) {
      return subsectionList[0].path
    } else return match.path
  }

  const getHeadline = () => {
    if (withSubsections()) {
      return <Headline>{sectionName}</Headline>
    } else return null
  }

  const withSubsections = () => {
    return (Array.isArray(subsectionList) && subsectionList.length > 0)
  }

  return (
    <PageWrapper>
      {getHeadline()}
      {getLinks()}
      <Switch>
        {getRoutes()}
        <Redirect to={getRedirectPath()} />
      </Switch>
    </PageWrapper>
  )
}

export default Section
