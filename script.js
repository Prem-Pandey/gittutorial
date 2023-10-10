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

var item  = document.querySelector('.list-group-item:nth-child(2)')
item.style.backgroundColor = 'green'
var item3  = document.querySelector('.list-group-item:nth-child(3)')
item3.style.display = 'none'

// QUERY SELECTOR ALL

var item2 = document.querySelectorAll('li')
item2[1].style.color=  'green'

var odd = document.querySelectorAll('li:nth-child(odd')

for(var i =0; i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green'
}