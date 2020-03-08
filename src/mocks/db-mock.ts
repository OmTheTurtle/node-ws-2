import { Todo } from "../models/todo"

let TODOS: Todo[] = [
  {
    id: 1,
    name: 'Nagyon fontos',
    priority: 'high'
  },
  {
    id: 2,
    name: 'Nem olyan fontos',
    priority: 'medium'
  }
]

export default {
  add: function (todo: Todo) {
    TODOS.push({ ...todo, id: TODOS.length + 1 })
  },
  remove: function (id: number) {
    TODOS = TODOS.filter(it => it.id !== id)
  },
  all: function () {
    return TODOS
  },
  get: function (id: number) {
    return TODOS.find(it => it.id === id)
  }
}
