import React from 'react'
import RouterLink from '../ui-components/routerlink.jsx'
import DropDown from '../ui-components/dropdown.jsx'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { setClass, breakpointIsGreaterThan, breakpointIsLessThan } from '../utils/responsiveHelpers'
import { connect } from 'react-redux'
class TopNavBar extends React.Component {
  handleDropDown () {
    if (breakpointIsLessThan('desktop', this.props.breakpoint.size)) {
      return <div className='navbar-item has-dropdown'>
        <div className='column is-12 field has-addons'>
          <DropDown placeholder='Menu' icon='bars' name='text' content={[{text: 'Home'}, {text: 'Login'}, {text: 'Register'}]} />
        </div>
      </div>
    } else {
      return <div className="navbar-end">
        <RouterLink to="/home" text="Home"/>
        <RouterLink to="/login" text="Login"/>
        <RouterLink to="/register" text="Register"/>
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
export default connect(mapStateToProps)(TopNavBar)
