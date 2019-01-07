
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('div.target')
}


function deepestChild() {
 document.getElementById('app').querySelectorAll('div.grand-node div')
}
