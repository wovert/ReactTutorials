import axios from 'axios'

export const getListApi = () => axios.get('/api/todolist')
