const idOne = document.getElementById('idOne');


idOne.style.webkitTextStrokeColor = 'Black'
idOne.style.webkitTextStrokeWidth = '1.5px'
idOne.style.color = 'Transparent'

const divOne = document.createElement('div');
const cache = document.querySelectorAll('.divOne');
const loremP = ("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

const child = document.createElement("p");
child.textContent = loremP;

divOne.classList.add('firstClass');

document.body.appendChild(divOne);

if (divOne) {
    divOne.appendChild(child)
} else {
    console.error('Div doesnt exist')
}



cache.forEach(div => {
    div.style.border = '2px solid turquoise'
    if(!div.contains(child)) {
        div.appendChild(child.cloneNode(true));
    }
});




