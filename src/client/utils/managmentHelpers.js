export const managmentroles = {
  admin: 'Admin',
  user: 'User',
  guest: 'Guest'
}

export const roleFilterRouterLink = (routes, role) => {
  return routes.filter((route, key) => {
    if (route.role.includes(role)) { return { ...route } }
  })
}
