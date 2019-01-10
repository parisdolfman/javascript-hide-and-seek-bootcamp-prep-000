
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('div.target')
}


function deepestChild() {
 let node = document.getElementById('grand-node')
 let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}


function increaseRankBy(n) {
 var lists = document.querySelectorAll('.ranked-list');
 for (let i = 0, list = lists.length; i < list; i++) {
   var children = lists[i].children;
   for (let current = 0, child = children.length; current < child; current++) {
     children[current].innerHTML = parseInt(children[current].innerHTML) + n;
   }
 }

}
