// https://perscholas.instructure.com/courses/1297/assignments/265132?confetti=true&submitted=0

//Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector('main');
//console.dir(mainEl);

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg)';

//Set the content of mainEl to <h1>SEI Rocks!</h1>.
const h1 = document.querySelector('h1');
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//Add a class of flex-ctr to mainEl.
// Another option mainEL.className = "flex-ctr"
mainEl.classList.add('flex-ctr');

//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Another option const topMenuEl = document.getElementById("top-menu")
const topMenuEl = document.querySelector('#top-menu');

//Set the height topMenuEl element to be 100%.
// OR topMenuEl.setAttribute('height','100%')
topMenuEl.style.height = '100%';

//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Iterate over the entire menuLinks array and for each "link" object:
//menuLinks.forEach(element => { });
/* menuLinks.forEach(obj => {
    const a = document.createElement('a');
    a.setAttribute('href', obj.href);
    a.textContent = obj.text;
    topMenuEl.appendChild(a);
})
*/

// Create an <a> element.

const links = menuLinks.map(obj => {
    const a = document.createElement('a');
    a.setAttribute('href', obj.href);
    a.textContent = obj.text;
    return a
});

console.log(links);

const nav = document.getElementById('top-menu');
links.forEach(a => topMenuEl.append(a)) 
// topMenuEl.append(links);

//console.log(menuLinks[0].text)
// On the new element, add an href attribute with its value set to the href property of the "link" object.


// Set the new element's content to the value of the text property of the "link" object.

// Append the new element to the topMenuEl element.


