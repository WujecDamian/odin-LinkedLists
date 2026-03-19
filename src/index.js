//put inside src/index.js
import './styles.css'
import { linkedList } from './scripts/linkedList.js'
import { createNode } from './scripts/node.js'

const list = linkedList()

list.append('dog')
list.append('cat')
list.append('parrot')
list.append('hamster')
list.prepend('duck (prepend)')
list.append('snake')
list.append('turtle') 
 

console.log(list.toString())

/* 
console.log(`size ${list.size()}`)
console.log(`head ${list.printHead()}`)
console.log(`tail ${list.tail()}`)
console.log(`at Indexes (counting from 0 as in array): [ 3 - ${list.at(3)} ], [ 1 - ${list.at(1)} ] ${list.at(10)}`)
console.log(`Contains snake (should return true) - ${list.contains('snake')} | Does not contain boar (should return false) - ${list.contains('boar')}`)
console.log(`Index of snake ${list.findIndex('snake')} | Index of non existent boar (should return -1) ${list.findIndex('boar')}`)

 */
 