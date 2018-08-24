import React from 'react'
import {withRouter} from 'react-router'
import RouterLink from '../ui-components/routerlink.jsx'
import DropDown from '../ui-components/dropdown.jsx'
import routes from '../router/route.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { breakpointIsLessThan, setClass } from '../utils/responsiveHelpers'
import { roleFilterRouterLink } from '../utils/managmentHelpers'
import { connect } from 'react-redux'
class TopNavBar extends React.Component {
  constructor (props) {
    super(props)
    this.handleDropDownLink = this.handleDropDownLink.bind(this)
  }
  handleDropDownLink (value) {
    this.props.history.push(value.path)
  }
  handleDropDown () {
    console.log('props', roleFilterRouterLink(routes, this.props.role.name))
    if (breakpointIsLessThan('desktop', this.props.breakpoint.size)) {
      // return <div className='navbar-item has-dropdown'>
      //   <div className='column is-12 field has-addons'>
      //     <DropDown placeholder='Menu' name='name' onSelectValue={this.handleDropDownLink} icon='bars' searchable={false} content={roleFilterRouterLink(routes, this.props.role.name).map((route) => {
      //         return { ...route }
      //       })} />
      //   </div>
      // </div>
      return <div className='navbar-start'>
        {roleFilterRouterLink(routes, this.props.role.name).map((route, key) => (
          <RouterLink
            key={route.key}
            to={route.path}
            text={route.name}
          />
        ))}
      </div>
    } else {
      return <div className='navbar-end'>
        {roleFilterRouterLink(routes, this.props.role.name).map((route, key) => (
          <RouterLink
            key={route.key}
            to={route.path}
            text={route.name}
          />
        ))}
      </div>
    }
  }
  render () {
    return (<nav className='navbar is-fixed-top'>
      {this.handleDropDown()}
    </nav>)
  }
}
const mapStateToProps = state => ({
  breakpoint: state.breakpoint,
  role: state.role
})
export default withRouter(connect(mapStateToProps)(TopNavBar))
