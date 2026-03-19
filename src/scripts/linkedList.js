import { Node } from './node.js'

export function linkedList () {
  return {
    size: null,
    head: null,
    tail: null,
    append (value) {
      let newnode=Node(value)

      if(this.head===null){
        this.head=newnode
        return
      }
      let current=this.head

      while(current.nextNode!=null){
        current=current.nextNode
      }
      current.nextNode=newnode


    },
    prepend (value) {},
    size () {
      let size=0

      let current=this.head
      while(current.nextNode!=null){
        current=current.nextNode
        size++
      }
      return size
    },
    printHead () {},
    tail () {},
    at (index) {},
    pop () {},
    contains (value) {},
    findIndex (value) {},
    toString () {
      let result=''
       if(this.head===null){
        return
      }
      let current=this.head
      while(current.nextNode!==null){
        current=current.nextNode
        result+=`( ${current.value} ) -> `
      }
      return result + "null"
    }
  }
}
