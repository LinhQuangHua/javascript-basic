// DOM Attribute

var headings = document.querySelector('h1');

console.log(headings);

headings.title = 'Heading'
headings.id = 'Heading'
headings.className = 'Heading'

// headings.setAttribute('class', 'Heading')
// headings.setAttribute('title', 'Heading')
// headings.setAttribute('id', 'Heading')

console.log(headings.getAttribute('class'));

var aTag = document.querySelector('a');

aTag.href = '#'



