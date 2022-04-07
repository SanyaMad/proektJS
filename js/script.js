'use strict'

const DomElement = function(selector,height,width,bg,fontSize) {
    this.selector = selector,
    this.height = height,
    this.width = width,
    this.bg = bg,
    this.fontSize = fontSize
}

DomElement.prototype.createNewElement = function() {
    let newElement;
    if (this.selector[0] === '.') {
        newElement = document.createElement('div')
        newElement.className = this.selector.slice(1)
    }
    if (this.selector[0] === '#'){
        newElement = document.createElement('p')
        newElement.id = this.selector.slice(1)
    }
    newElement.style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px`
    return newElement;
}

 
let elem1 = new DomElement('#text', 10, 25, 'black', 10)
let elem2 = new DomElement('.block', 15, 30, 'green', 14)
console.log(elem1)
console.log(elem2)

document.body.append(elem1.createNewElement())
document.body.append(elem2.createNewElement())