import React from 'react'
import {breakpoints} from '../utils/responsiveHelpers'
import {setActiveBreakpoint} from '../store/action'
import {connect} from 'react-redux'
class AppWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.mediaQueryState = []
  }
  componentDidMount () {
    // create window match media query
    Object.keys(breakpoints).forEach(key => {
      const query = window.matchMedia(`(max-width: ${breakpoints[key]}px)`)
      query.breakpoint = breakpoints[key]
      query.name = key
      // function dispatchactivequery
      const breakpointChange = () => {
        this.dispatchActiveQuery()
      }
      // event listener to breakpoints changes
      query.addListener(breakpointChange)
      this.mediaQueryState.push(query)
    })
    this.dispatchActiveQuery()
  }
  dispatchActiveQuery () {
    const { dispatch } = this.props

    // trying to match breakpoints from highest to lowest if
    const activeQuery = this.mediaQueryState.reduce((previousvalue, currentvalue) => {
      return currentvalue.matches ? currentvalue : previousvalue && previousvalue.matches ? previousvalue : null
    })
    // if activeQuery is null then default else name
    const breakpointName = activeQuery ? activeQuery.name : 'default'
    // if activequery null then breakpointsize null else breakpoint value
    const breakpointSize = activeQuery && activeQuery.breakpoint

    dispatch(setActiveBreakpoint(breakpointName, breakpointSize))
  }
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default connect()(AppWrapper)
