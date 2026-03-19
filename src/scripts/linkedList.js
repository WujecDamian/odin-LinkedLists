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
    prepend (value) {
      let newnode=Node(value)
      newnode.nextNode=this.head
      this.head=newnode     
    },
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
    at (index) {
      let i=0

      let current=this.head
      if(index>this.size()){
        return `[ There is no Index - ${index} in list ]`
      }
      while(current.nextNode!=null && i<index){
        i++
        current=current.nextNode
      }

      return current.value
    },
    pop () {},
    contains (value) {
      let current=this.head

      while(current.nextNode!=null){
        if(current.value===value){
          return true
        }
        current=current.nextNode

      }
      return false
    },
    findIndex (value) {
      let current=this.head
      let index=0
      while(current.nextNode!=null){
        index++
        if(current.value===value){
          return index
        }
        current=current.nextNode

      }
      return -1
    },
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
