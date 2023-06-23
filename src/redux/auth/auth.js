import axios from "axios";
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com'
})
export const SignUp = async (body) => {
  return await instance.post('/users/signup', body)
}
export const LogIn = async (body) => {
  return await instance.post('/users/login', body)
}
