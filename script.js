class Employee {
constructor(name,email,phone,job){
this.name=name;
this.email=email;
this.phone=phone;
this.job=job;
this.id=Math.floor(Math.random()*1000);
}
}

function showEmployees(){
let employees=JSON.parse(localStorage.getItem("employees"));
let table=document.getElementById("employees");
table.innerHTML="";

if(employees){
employees.forEach(e=>{
table.innerHTML+=`
<tr>
<td>${e.name}</td>
<td>${e.email}</td>
<td>${e.phone}</td>
<td>${e.job}</td>
<td>
<button onclick="deleteEmployee(${e.id})">Delete</button>
</td>
</tr>
`;
});
}
}

function addEmployee(){

let name=nameInput();
let email=emailInput();
let phone=phoneInput();
let job=jobInput();

if(!name||!email||!phone||!job){
alert("Fill all fields");
return;
}

let employees=JSON.parse(localStorage.getItem("employees"))||[];

employees.push(new Employee(name,email,phone,job));

localStorage.setItem("employees",JSON.stringify(employees));
clear();
showEmployees();
}

function deleteEmployee(id){
let employees=JSON.parse(localStorage.getItem("employees"));

employees=employees.filter(e=>e.id!==id);

localStorage.setItem("employees",JSON.stringify(employees));
showEmployees();
}

function updateEmployee(){
alert("Update logic already exists in your original file");
}

function clear(){
document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";
document.getElementById("job").value="";
}

function nameInput(){return document.getElementById("name").value;}
function emailInput(){return document.getElementById("email").value;}
function phoneInput(){return document.getElementById("phone").value;}
function jobInput(){return document.getElementById("job").value;}

showEmployees();
