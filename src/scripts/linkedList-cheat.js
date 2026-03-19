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
    prepend (value) {
      let newnode = Node(value)
      this.head = newnode
    },
    size () {},
    printHead () {
      return this.head
    },
    tail () {},
    at (index) {},
    pop () {},
    contains (value) {},
    findIndex (value) {},
    toString () {
      let current = this.head
      let result = ''
      while (current) {
        result += current.value + '->'
        current = current.next
      }
      console.log(result + 'null')
    }
  }
}
