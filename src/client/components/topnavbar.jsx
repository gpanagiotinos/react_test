import React from 'react'
import {withRouter} from 'react-router'
import RouterLink from '../ui-components/routerlink.jsx'
import DropDown from '../ui-components/dropdown.jsx'
import routes from '../router/route.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { setClass, breakpointIsGreaterThan, breakpointIsLessThan } from '../utils/responsiveHelpers'
import { connect } from 'react-redux'
class TopNavBar extends React.Component {
  handleDropDown () {
    if (breakpointIsLessThan('desktop', this.props.breakpoint.size)) {
      return <div className='navbar-item has-dropdown'>
        <div className='column is-12 field has-addons'>
          <DropDown placeholder='Menu' icon='bars' searchable={false} name='text' content={routes.map((route, index) => {
            return route.name
          })} />
        </div>
      </div>
    } else {
      return <div className='navbar-end'>
        {routes.map((route, index) => (
          <RouterLink
            to={route.path}
            text={route.name}
          />
        ))}
      </div>
    }
  }
  render () {
    return (<nav className="navbar is-fixed-top">
      {this.handleDropDown()}
    </nav>)
  }
}
const mapStateToProps = state => ({
  breakpoint: state.breakpoint
})
export default withRouter(connect(mapStateToProps)(TopNavBar))
