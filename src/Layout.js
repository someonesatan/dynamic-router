import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const LayoutContainer = styled.div`
  position: relative;
  width: 100vw;
`
const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  background-color: #262b31;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderWrapper = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BrandName = styled.p`
  font-family: DINPro;
  font-size: 14px;
  font-weight: bold;
  color: #7e858c;
  letter-spacing: 1.8px;
`
const LinksContainer = styled.div`
  display: flex;
  & > a {
    margin-right: 38px;
    &:last-child {
      margin-right: 0;
    }
  }
`

const MenuLink = styled(NavLink)`
  opacity: 0.6;
  padding: 20px 0;
  font-size: 15px;
  color: #ffffff;
  &.active {
    color: #3ea5ff;
    font-size: 16px;
    opacity: 1;
    font-weight: 900;
  }
`

const Layout = ({ children, sections }) => {

  const getMenuLinks = () => {
    return sections.map((section, index) => {
      return (
        <MenuLink
          key={index}
          to={section.path}
        >
          {section.name}
        </MenuLink>
      )
    })
  }

  return (
    <LayoutContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <BrandName>Dynamic router</BrandName>
          <LinksContainer>
            {getMenuLinks()}
          </LinksContainer>
        </HeaderWrapper>
      </HeaderContainer>
      {children}
    </LayoutContainer>
  )
}

export default Layout