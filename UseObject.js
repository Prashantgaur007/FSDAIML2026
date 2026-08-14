const employee = {
    empid: 123,
    name: "John Doe",
    title: "Software Engineer",
    salary: 60000,
    designation: "Developer",
    techstack:[{
        plang: "JavaScript",
        server: "Node.js",
        database: "MongoDB",
        database2: "MySQL",
    },
{
    plang: "java",
        server: "Apache Tomcat",
        database: "MongoDB",
        database2: "MySQL",
},
{
    plang: "python",
        server: "Django",
        database: "MongoDB",
        database2: "MySQL",
},
{
    plang: "react",
        server: "Node server",
        database: "MongoDB",
        database2: "MySQL",

}]
}

console.log(employee.empid);
console.log(employee.name);
console.log(employee.salary);
console.log(employee.designation);
console.log(employee.techstack[0]);
console.log(employee.techstack[1].server);
console.log(employee.techstack[2]);
console.log(employee.techstack[3]);