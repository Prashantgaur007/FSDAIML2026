const div=document.getElementById('Container');
const button=document.getElementById('btn');
console.log(div);

async function display() {
    div.innerHTML="<h1 style='background-color: lightblue;'>Products</h1>";
    const serverdata = await fetch('https://fakestoreapi.com/products');
        const jsondata = await serverdata.json();
        console.log(serverdata);
        console.log(jsondata[0].title);
        console.log(jsondata[1].title);
        console.log(jsondata[2].title);
    };

button.addEventListener('click', display);