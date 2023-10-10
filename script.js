// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[2])
// items[1].textContent = 'hello'
// items[1].style.fontWeight = 'bold'
// items[2].style.backgroundColor = 'green'

// for(var i =0; i<items.length; i++)
// {
//     items[i].style.fontWeight = 'bold'
// }
// var list = document.getElementsByTagName('li')
// var list5 = document.getElementsByClassName('item5')
// list[4].style.backgroundColor = 'red'
// list[4].style.fontWeight = 'bold'
// list[4].style.border = '2px solid black'
// list5[0].style.borderRadius = '10px'

// QUERRY SELECTOR

// var item  = document.querySelector('.list-group-item:nth-child(2)')
// item.style.backgroundColor = 'green'
// var item3  = document.querySelector('.list-group-item:nth-child(3)')
// item3.style.display = 'none'

// QUERY SELECTOR ALL

// var item2 = document.querySelectorAll('li')
// item2[1].style.color=  'green'

// var odd = document.querySelectorAll('li:nth-child(odd')

// for(var i =0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green'
// }

var itemList = document.querySelector('#items1')
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = 'aqua'
console.log(itemList.parentNode.parentNode)

var itemList = document.querySelector('#items1')
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = 'aqua'
console.log(itemList.parentElement.parentElement)

console.log(itemList.childNode)
console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor = 'yellow'
console.log(itemList.firstChild)
console.log(itemList.firstElementChild)
console.log(itemList.lastElementChild)

console.log(itemList.nextSibling)
console.log(itemList.nextElementSibling)
console.log(itemList.previousSibling)
console.log(itemList.previousElementSibling)

var newDiv = document.createElement('div')
console.log(newDiv)
newDiv.className = 'hello'
newDiv.id = 'hello1'

// set Attribute
newDiv.setAttribute('title', 'hello div')

var newDivText = document.createTextNode('hello world')

newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1)


var newDiv2 = document.createElement('div')
var newDivText2 = document.createTextNode('hello world')

newDiv2.appendChild(newDivText2)
var item = document.querySelector('ul, .list-group-item')
var li = document.querySelector('ul li')
item.insertBefore(newDiv2, li)
