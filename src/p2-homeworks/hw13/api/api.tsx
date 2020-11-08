import axios from 'axios'


export const RequestAPI = {
    setData: (data: boolean) => {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: data})
    }
}