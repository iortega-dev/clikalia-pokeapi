import axios from 'axios'

export const enum Status {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}

export default axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})
