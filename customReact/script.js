const parentElem = document.querySelector('#root');

const reactElem = {
    type:'a',
    props:{
        href:'https://youtube.com',
        target:'_blank'
    },
    children:'Youtube.com',
}

function renderElem(reactElem,parentElem){
    const childElem = document.createElement(reactElem.type);
    childElem.innerHTML = reactElem.children;
    childElem.setAttribute('href',reactElem.props.href); 
    childElem.setAttribute('target',reactElem.props.target); 

    parentElem.appendChild(childElem);
}

renderElem(reactElem,parentElem);