const idOne = document.getElementById('idOne');


idOne.style.webkitTextStrokeColor = 'Black'
idOne.style.webkitTextStrokeWidth = '1.5px'
idOne.style.color = 'Transparent'
idOne.style.paddingTop = '3%'


const divOne = document.createElement('div');
divOne.classList.add('divOne', 'firstClass');
const cache = document.querySelectorAll('.divOne');
const loremP = ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

const child = document.createElement("p");
child.textContent = loremP;




document.body.appendChild(divOne);

if (divOne) {
    divOne.appendChild(child)
} else {
    console.error('Div doesnt exist')
}
const marl = document.querySelector('ul')
marl.classList.add('reasons')


cache.forEach(div => {
    div.style.border = '2px solid turquoise'
    div.style.padding = '10px'
    div.style.margin = '10px 0'
    if (!div.contains(child)) {
        div.appendChild(child.cloneNode(true));
    }
});

const img = document.createElement('img')
img.src = 'https://nationalzoo.si.edu/sites/default/files/styles/wide/public/animals/cheetah-002.jpg?h=c8501f53&itok=zro4sVwK'
img.alt = 'A cheetah image'
const ul = document.querySelector('.reasons')
document.body.insertBefore(img, ul)

img.style.width = ('50%')
img.style.display = 'block';
img.style.margin = '0 auto';

if (ul) {
    ul.style.display = 'flex';
    ul.style.justifyContent = 'spaceBetween';
}

//Top Button
let button = document.createElement('button');
button.textContent = "Login"
button.style.fontFamily = "Comic Sans";
button.style.padding = '10px';
button.style.borderRadius = '60px'
// button.style.alignItems = 'center';
idOne.appendChild(button);

button.addEventListener('click', function () {
    alert('Psych!')
});

//Bottom Buttons
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '10px';
document.body.appendChild(buttonContainer);

let button2 = document.createElement('button');
let button3 = document.createElement('button');


buttonContainer.appendChild(button2);
buttonContainer.appendChild(button3)

button2.textContent = "Click Me 😏"
button3.textContent = "No Click Me 😜"

const buttons = [button2, button3]
buttons.forEach(button => {
    button2.addEventListener('click', function () {
        window.location.href = ['./Dom2.html']
    })
    button3.addEventListener('click', function () {
        alert('YAAAY!')
    })
})


let p3 = document.createElement('p')
document.body.appendChild(p3)
p3.textContent = loremP
p3.style.margin = '20px 110px 0 110px'
p3.style.display = 'block'


p3.addEventListener('mouseenter', () => {
    p3.style.color = 'orange'
});

p3.addEventListener('mouseleave', () => {
    p3.style.color = 'initial';  // or specify 'black' or any color you want
});

///Form

const formuoli = document.getElementById('formOf');
const nameReq = document.getElementById('name');

// formuoli.addEventListener('submit', function (event) { ///Dont understand why i need this but button 4 doesnt seem to work with out it
//     event.preventDefault();
//     const name = nameReq.value.trim();
// //     if (name) {
// //         console.log('Name:', name);
// //     } else {
// //         window.alert('Please fill in your Cheetah Name');
// //     }
// });

// fixed/

const button4 = document.getElementById('link')

button4.addEventListener('click', function () {
    const name = nameReq.value.trim();
    if (name) {
        window.location.href = "./Dom2.html";
    } else {
        alert('FILL out your Cheetah Name!!')
    }
})