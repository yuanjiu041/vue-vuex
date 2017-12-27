import axios from 'axios'
import { GET_DATA } from '../action-types'
import { CHANGE_INFO_DATA } from '../mutation-types'

export default {
  [GET_DATA]: async (ctx) => {
    const data = await axios.get('/api/index')
    ctx.commit({
      type: `${CHANGE_INFO_DATA}`,
      value: data.data 
    })
  }
}