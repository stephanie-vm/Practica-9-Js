function color(event){
    let x=Math.floor(Math.random() * (256 - 0) + 0);
    let y=Math.floor(Math.random() * (256 - 0) + 0);
    let z=Math.floor(Math.random() * (256 - 0) + 0);;
    const p=event.currentTarget;
    p.style.color=`rgb(${x}, ${y} ,${z})`;
}

function cambioColor(event){
    const p=event.currentTarget;
    p.style.color='black';
}

let lista = document.querySelectorAll('.prueba p');

for (let i = 0;  i < lista.length; i++) {
    lista[i].addEventListener('mouseenter', color );
    lista[i].addEventListener('mouseleave', cambioColor );
}

