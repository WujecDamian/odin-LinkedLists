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
console.log(`tail ${list.tail()}`)
console.log(`at Indexes (counting from 0 as in array): [ 3 - ${list.at(3)} ], [ 1 - ${list.at(1)} ] ${list.at(10)}`)
console.log(`Contains snake ${list.contains('snake')} | Does not contain boar ${list.contains('snake')}`)

 