import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (contactObj) => {
    return axios.post(baseUrl,contactObj)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, create, remove }