import fetch from 'utils/fetch'


export function getUsersTotal() {
	return fetch({
		url: '/dashboard',
		method: 'get',
	})
}
/*
** 获取全部用户信息
*/
export function getUsersInfo(offset, total, pageCount) {
	// const data = {
	// 	offset: offset,
	// 	total: total,
	// 	pagecount: pagecount
	// }
	// return fetch({
	// 	url: '/users',
	// 	method: 'get',
	// 	data
	// })
}

/*
** 获取单个用户信息
*/
// export function getUserInfo(userID) {
// 	return fetch({
// 		url:,
// 		method:
// 	})
// }

/*
** 修改用户密码
*/
// export function updatePasswd(userID) {
// 	return fetch({
// 		utl:,
// 		method:
// 	})
// }

export function deleteUser(id) {

}

export function addUser(userInfo) {

}