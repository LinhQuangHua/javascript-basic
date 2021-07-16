// InnerHTML vs OuterHTML

var boxElement = document.querySelector('.box')

console.log(boxElement);

boxElement.innerHTML = '<h1>New Heading</h1>'
// boxElement.innerHTML = '<h1 title="heading">New Heading</h1>'

console.log(boxElement.querySelector('h1').innerText);

var box02Element = document.querySelector('.box-2')

console.log(box02Element.outerHTML);

box02Element.outerHTML = '<span>Test</span>';
