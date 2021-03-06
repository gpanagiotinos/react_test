/**
 * Changes the active breakpoint
 *
 * @param {string} breakpointName          String defining the active breakpoint
 * @param {number} breakpointSize          Number defining the active breakpoint
 * @return {Object} Action object
 */
export function setActiveBreakpoint (breakpointName, breakpointSize) {
  return ({
    type: 'SET_ACTIVE_BREAKPOINT', breakpointName, breakpointSize
  })
}

/**
 * Changes the active managment role
 *
 * @param {string} breakpointName          String defining the active breakpoint
 * @param {number} breakpointSize          Number defining the active breakpoint
 * @return {Object} Action object
 */
export function setActiveManagmentRole (managmentroleName) {
  return ({
    type: 'SET_ACTIVE_MANAGMENT_ROLE', managmentroleName
  })
}
