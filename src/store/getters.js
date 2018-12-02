const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  siderbar_routers:state => state.permission.siderbar_routers,
}
export default getters