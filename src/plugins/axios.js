// Экземпляр плагина axios с необходимыми настройками

import axios from 'axios'

// TODO: Получать из env
const HOST = 'http://localhost'
const PORT = '8080'

const API_URL = `${HOST}:${PORT}/api`

const axiosInstance = axios.create({
    baseURL: API_URL
})

const errorHandler = error => {
    return error.response.data.message
}

axiosInstance.interceptors.response.use(response => response, errorHandler)

export default axiosInstance
