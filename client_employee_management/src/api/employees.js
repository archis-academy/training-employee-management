import { api } from "./index"

export function getEmployees() {
  return api.get("/employees")
}

export function createEmployee(data) {
  return api.post("/employees", data)
}

export function updateEmployee(data) {
  return api.put("/employees", data)
}

export function removeEmployee(id) {
  return api.delete(`/employees/${id}`)
}