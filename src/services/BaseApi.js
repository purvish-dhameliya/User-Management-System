import axios from 'axios'
import config from '../config/config'
import { toast } from 'react-toastify'

export function prepareApiUrl(path) {
  return `${config.baseUrl}${path}`
}

axios.interceptors.response.use(
  (response) => {
    return response
  },
  error => {
    toast.error(error.message)
  }
)
