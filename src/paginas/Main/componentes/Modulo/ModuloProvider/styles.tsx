import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

export const Container = styled.main`
  display: flex;
  flex: 1;
  @media (max-width: 944px) {
    padding-left: 0px;
  }
  padding-left: 300px;
`

export const SubContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  min-height: 56px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 20px;
  @media (max-height: 820px) {
    padding-bottom: 10px;
  }
`

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 18px;
  padding-bottom: 14px;
  @media (max-height: 820px) {
    padding-top: 5px;
  }
`

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid #5c66bc;
  min-height: 33px;
  color: #5c66bc;
  cursor: pointer;
  transition: color 50ms;
  user-select: none;
  &:hover {
    color: #8d98f3 !important;
    border-bottom: 1px solid #8d98f3;
  }
  .icon {
    width: 30px;
    height: 30px;
    color: inherit;
  }
  .titulo {
    font-size: 26px;
    font-family: Comfortaa;
    color: inherit;
    padding-left: 5px;
  }
`