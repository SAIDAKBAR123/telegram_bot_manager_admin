import request from '@/utils/axios'

const req = {
  putMenu: (data) => request({ method: 'post', url: '/menu/upsert_many', data }),
  getMenus: (params) => request({ method: 'get', url: '/menu', params })
}
export default req
