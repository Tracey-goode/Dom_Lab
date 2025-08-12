// Select and cache the < main > element in a variable named mainEl.

// Set the background color of mainEl to the value stored in the--main - bg CSS custom property.

//     Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

// Set the content of mainEl to < h1 > DOM Manipulation</h1 >.There are a variety of ways to do this; pick whichever one that you think works best in this situation.

// Add a class of flex - ctr to mainEl.
    // Hint: Use the Element.classList API.

let mainEl = document.querySelector('main')

mainEl.style.backgroundColor = `var(--main-bg)`;

mainEl.innerHTML = '<h1>DOM MANIPULATION</h1>'

mainEl.classList.add('flex-ctr')

///////////////////////////////////////////////////////////////////

// Select and cache the < nav id = "top-menu" > element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100 %.
// Set the background color of topMenuEl to the value stored in the--top - menu - bg CSS custom property.
// Add a class of flex - around to topMenuEl.

const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

topMenuEl.classList.add('flex-around')

//////////////////////////////////////////////////////////////

// Iterate over the entire menuLinks array and for each "link" object:
// Create an < a > element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//  for (const link of menuLinks) {
//    const a = document.createElement("a");
//    a.href = link.href;
//    a.textContent = link.text;
//     topMenuEl.appendChild(a);
//  }
// Iterate over the entire menuLinks array and for each "link" object:
for(let link of menuLinks){

    // Create an <a> element.
    let menuButton = document.createElement('a');

    // On the new element, add an href attribute with its value set to the href property of the "link" object.
    menuButton.setAttribute("href", link.href);

    // Set the new element's content to the value of the text property of the "link" object.
    menuButton.textContent = link.text

    // Append the new element to the topMenuEl element.
    topMenuEl.appendChild(menuButton)
}
 