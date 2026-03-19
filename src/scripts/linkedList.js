import { Node } from './node.js'

export function linkedList () {
  return {
    size: null,
    head: null,
    tail: null,
    append (value) {
      let newnode = Node(value)
      if (this.head === null) {
        this.head = newnode
        return
      }
      let current = this.head
      while (current.next != null) {
        current = current.next
      }
      current.next = newnode
    },
    prepend (value) {},
    size () {
      let size = 1
      if (this.head === null) {
        return 0
      }
      let current = this.head
      while (current.next != null) {
        current = current.next
        size++
      }
      return size
    },
    printHead () {
      if (this.head === null) {
        return undefined
      }
    },
    tail () {},
    at (index) {},
    pop () {},
    contains (value) {},
    findIndex (value) {},
    toString () {
      let result = ''
      let current = this.head
      result += `( ${current.value} ) -> `

      while (current.next != null) {
        current = current.next
        result += `( ${current.value} ) -> `
      }
      return `${result}null`
    }
  }
}
