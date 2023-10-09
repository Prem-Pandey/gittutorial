console.dir(document)
console.log(document)
console.log(document.images)
console.log(document.URL)
console.log(document.domain)
console.log(document.doctype)
console.log(document.title)
console.log(document.head)
console.log(document.body)
console.log(document.all)
console.log(document.all[10])
// document.all[10].textContent = 'hello'
console.log(document.forms[0])
console.log(document.links)
// document.title = 123
var headerTitle = (document.getElementById('header-title'))
var header = (document.getElementById('main-header'))
console.log(headerTitle)
// headerTitle.textContent = 'hello'
// headerTitle.innerHTML = 'Hello'
console.log(headerTitle.innerHTML)
console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000'
header.style.borderBottom = 'solid 3px #000'
var item = (document.getElementById('items'))
item.style.color = 'green'
item.style.fontWeight = 'bold'


