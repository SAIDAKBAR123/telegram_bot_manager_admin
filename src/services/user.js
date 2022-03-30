import request from '@/utils/axios'

const req = {
  getUsers: () => request({ method: 'get', url: '/tg_bot_user' }),
  getUserById: (userId) => request({ method: 'get', url: '/tg_bot_user/' + userId }),
  updateUser: (data) => request({ method: 'put', url: '/tg_bot_user', data }),
  deleteUser: (userId) => request({ method: 'delete', url: `/tg_bot_user/${userId}` }),
  postUser: (data) => request({ method: 'post', url: '/tg_bot_user', data })
}
export default req
