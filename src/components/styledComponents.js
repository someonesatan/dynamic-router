import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const PageWrapper = styled.div`
  width: 1300px;
  max-width: 1300px;
  margin: auto;
  position: relative;
  margin-top: 25px;
`
export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  font-size: 26px;
`
export const SectionLinksWrapper = styled.div`
  margin: 15px 0 0 0;
  height: 30px;
`
export const SectionLink = styled(NavLink)`
  margin: 0 30px 0 0;
  width: 70px;
  opacity: 0.6;
  font-size: 15px;
  color: #000000;
  padding: 0 0 8px 0;
  &.active{
    opacity: 1;
    color: #3ea5ff;
    font-weight: 900;
    font-size: 16px;
  }
`