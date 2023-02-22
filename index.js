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
/* const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
*/

// Menu Data structure 2 5.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

// /Week 5 - Day 2 - HW (https://perscholas.instructure.com/courses/1297/assignments/265133?module_item_id=776658)

// ? Task 4.0 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');

// ? Task 4.1 Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

// ? Task 4.2 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// ? Task 4.3 Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-ctr');

// ? Task 4.4 Set the CSS position property of subMenuEl to the value of absolute. 
subMenuEl.style.position = 'absolute'

// ? Task 4.5 Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// ? Task 5.0 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks. Declare a global showingSubMenu and initialize it to false.
const topMenuLinks = document.querySelectorAll ('a');

const showingSubMenu = false;

// ? Task 5.2 Attach a delegated 'click' event listener to topMenuEl
topMenuEl.addEventListener('click', function handleclick(event) {
    event . preventDefault ();
    
    // return if the element clicked was not an <a›element.
    if (showingsubmenu){
        return
    }

    console. log()

})