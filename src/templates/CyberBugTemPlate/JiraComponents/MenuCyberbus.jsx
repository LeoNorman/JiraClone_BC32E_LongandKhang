import React from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../App'

const MenuCyberbus = () => {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    <img src={require('../../../assets/imgJira/download.jfif')} alt='logo' />
                </div>
                <div className="account-info">
                    <p>CyberLearn.vn</p>
                    <p>Report bugs</p>
                </div>
            </div>
            <div className="control">
                <div>
                    <i className="fa fa-credit-card" />
                    <NavLink className='ml-2 text-black' activeClassName='active font-weight-bold' to='/cyberbugs'>Cyber Board</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog" />
                    <NavLink className='ml-2 text-black' activeClassName='active font-weight-bold' to='/createproject'>Create project</NavLink>
                </div>
            </div>
            <div className="feature">
                <div>
                    <i className="fa fa-truck" />
                    <span>Releases</span>
                </div>
                <div>
                    <i className="fa fa-equals" />
                    <span>Issues and filters</span>
                </div>
                <div>
                    <i className="fa fa-paste" />
                    <span>Pages</span>
                </div>
                <div>
                    <i className="fa fa-location-arrow" />
                    <span>Reports</span>
                </div>
                <div>
                    <i className="fa fa-box" />
                    <span>Components</span>
                </div>
            </div>
        </div>
    )
}

export default MenuCyberbus