import axios from 'axios';

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character/?page="
})

export const getCharactersPage = async (pageParam = 1, options = {}) => {
  const response = await api.get(`/character?page=${pageParam}`, options)
  return response.data;
}