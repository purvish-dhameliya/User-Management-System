import axios from 'axios';
import config from '../config/config'
import { prepareApiUrl } from './BaseApi'

export async function getUserList() {
  const { data: userList, status } = await axios.get(prepareApiUrl(config.apis.users.list))
  if (status === 200) {
    return userList;
  }
}

export async function deleteUserApi(id) {
  const { data: userList, status } = await axios.delete(prepareApiUrl(config.apis.users.list) + id)
  if (status === 200) {
    return userList;
  }
}

export async function editUserApi(editUser) {
  const { data: updateUser, status } = await axios.put(prepareApiUrl(config.apis.users.list) + editUser.id, editUser)
  if (status === 200) {
    return updateUser;
  }
}

export async function authUser(userData) {
  const { data: authData, status } = await axios.post(prepareApiUrl(config.apis.users.auth), userData)
  if (status === 200) {
    return {
      data: authData,
      status: status
    };
  }
}
