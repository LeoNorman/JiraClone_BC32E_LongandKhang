import React, { Fragment } from 'react'
import { Route } from 'react-router'
import '../../index.css'
import SidebarCyberbugs from './JiraComponents/SidebarCyberbugs'
import MenuCyberbus from './JiraComponents/MenuCyberbus'
import HeaderCyberbugs from '../../components/CyberBugs/MainCyberbugs/HeaderCyberbugs'
import InfoCyberbugs from '../../components/CyberBugs/MainCyberbugs/InfoCyberbugs'
import ContentCyberbugs from '../../components/CyberBugs/MainCyberbugs/ContentCyberbugs'
import ModalCyberbugs from '../../components/ModalCyberbugs/ModalCyberbugs'

const CyberBugTemplate = (props) => {
  const { Component, ...restProps } = props

  return <Route {...restProps} render={(propsRoute) => {
    return <Fragment>
      <div className="jira">
        <SidebarCyberbugs />
        <div className='flex'>
          <MenuCyberbus />
          <Component {...propsRoute} />
        </div>

        <ModalCyberbugs />
      </div>

    </Fragment>
  }} />
}

export default CyberBugTemplate

