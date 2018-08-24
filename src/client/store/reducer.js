export function breakpoint (state = { name: 'default', size: null }, action) {
  switch (action.type) {
    case 'SET_ACTIVE_BREAKPOINT': {
      return { name: action.breakpointName, size: action.breakpointSize }
    }
    default: { return state }
  }
}

export function role (state = {name: 'guest'}, action) {
  switch (action.type) {
    case 'SET_ACTIVE_MANAGMENT_ROLE' : {
      return { ...state, name: action.managmentroleName }
    }
    default: { return state }
  }
}
