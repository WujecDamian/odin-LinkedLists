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
      if(this.head===null){
        return size
      }else{
        size=1
      }
      let current=this.head
      while(current.nextNode!=null){
        current=current.nextNode
        size++
      }
      return size
    },
    printHead () {
      let current=this.head
      return current.value
    },
    tail () {
      let current=this.head
      while(current.nextNode!=null){
        current=current.nextNode
      }
      return current.value
    },
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
      result+=`( ${current.value} ) -> `
      while(current.nextNode!==null){
        current=current.nextNode
        result+=`( ${current.value} ) -> `
      }
      return result + "null"
    }
  }
}
