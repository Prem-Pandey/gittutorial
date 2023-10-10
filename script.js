var items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[2])
// items[1].textContent = 'hello'
// items[1].style.fontWeight = 'bold'
items[2].style.backgroundColor = 'green'

for(var i =0; i<items.length; i++)
{
    items[i].style.fontWeight = 'bold'
}
var list = document.getElementsByTagName('li')
var list5 = document.getElementsByClassName('item5')
list[4].style.backgroundColor = 'red'
list[4].style.fontWeight = 'bold'
list[4].style.border = '2px solid black'
list5[0].style.borderRadius = '10px'