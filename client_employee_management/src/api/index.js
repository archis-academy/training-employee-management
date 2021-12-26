import axios from "axios"

// change this baseURL whereever your api is running
const api = axios.create({
  baseURL: "http://localhost:3001",
})

export { api }
