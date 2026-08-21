const div = document.getElementById('Container');
const button = document.getElementById('btn');

const h1 = document.createElement('h1');
h1.innerHTML = "Resume Builder";
h1.style.textAlign = "center";

let obj = {
    "Name": "Prashant Gaur",
    "rollno": 147,
    "college": "ABES Engineering College",
    "branch": "AIML",
    "Trackstack": "HTML"
};

function display() {
    div.appendChild(h1);

    setTimeout(() => {
        let table = `
            <table border="0">
                <tr><th colspan="2">Resume</th></tr>
                <tr><th>Name:</th><td>${obj.Name}</td></tr>
                <tr><th>RollNo:</th><td>${obj.rollno}</td></tr>
                <tr><th>Branch:</th><td>${obj.branch}</td></tr>
                <tr><th>College:</th><td>${obj.college}</td></tr>
                <tr><th>TechStack:</th><td>${obj.Trackstack}</td></tr>
            </table>`;

        div.innerHTML = table;
    }, 1000);
}

button.addEventListener('click', display);