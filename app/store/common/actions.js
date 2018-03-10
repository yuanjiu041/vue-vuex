import axios from 'axios'
import { GET_DATA } from '../action-types'
import { CHANGE_INFO_DATA } from '../mutation-types'
import { formatApi } from '../../common/util'

export default {
  [GET_DATA]: async (ctx) => {
    const data = await axios.get(formatApi('/api/index'))

    ctx.commit({
      type: `${CHANGE_INFO_DATA}`,
      value: data.data 
    })
  }
}