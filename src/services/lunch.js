import request from '@/utils/axios'

const req = {
  getLunches: () => request({ method: 'get', url: '/lunch' })
}
export default req
