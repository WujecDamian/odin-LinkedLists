//put inside src/index.js
import './styles.css'
import { linkedList } from './scripts/linkedList.js'
import { createNode } from './scripts/node.js'

const list = linkedList()

list.append('dog')
list.append('cat')
list.append('parrot')
list.append('hamster')
list.append('snake')
list.append('turtle') 

console.log(list.toString())
console.log(`size ${list.size()}`)
console.log(`head ${list.printHead()}`)
 