const div=document.getElementById('Container');
const button=document.getElementById('btn');
// console.log(div);
const h2=document.createElement('h2');
h2.innerText="Data is loading...";

console.log(h2);
function cart(ele){
    alert("cart is Opening"+ele);
}
async function display() {
    try{
    div.appendChild(h2);
    const serverdata = await fetch('https://fakestoreapi.com/products');
        const jsondata = await serverdata.json();
        console.log(serverdata);
        // console.log(jsondata[0].title);
        // div.innerHTML = `<h2 style="background-color: lightblue;color: red">${JSON.stringify(jsondata)}</h2>`;
        let table = `<table border="4">
        <tr><th>Image<th>Item_id</th><th>ItemTitle</th><th>ItemPrice</th></tr>
        ${jsondata.map(ele => `
            <tr>
                <td><img src="${ele.image}" width="40px" height="40px"></td>
                <td>${ele.id}</td>
                <td>${ele.title}</td>
                <td>${ele.price}</td>
                <td><button onclick="cart(${ele.id})">Add to Cart</button></td>
            </tr>
        `).join('')}
        </table>`;
        div.innerHTML = table;
    }catch(e){
        console.error("error is: " + e);
    }
    finally{
        div.removeChild(h2);
    }
    };

button.addEventListener('click', display);