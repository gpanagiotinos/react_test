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
