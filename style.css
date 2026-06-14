document.getElementById("myForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let age=document.getElementById("age").value.trim();
let phone=document.getElementById("phone").value.trim();
let gender=document.getElementById("gender").value;
let address=document.getElementById("address").value.trim();

let result=document.getElementById("result");

if(name===""){
result.innerHTML="<p style='color:red'>Name is required</p>";
return;
}

if(!email.includes("@")){
result.innerHTML="<p style='color:red'>Enter valid email</p>";
return;
}

if(age<18){
result.innerHTML="<p style='color:red'>Age must be 18 or above</p>";
return;
}

if(phone.length!==10){
result.innerHTML="<p style='color:red'>Phone number must be 10 digits</p>";
return;
}

if(gender===""){
result.innerHTML="<p style='color:red'>Select gender</p>";
return;
}

result.innerHTML=`
<h2 style="color:green;">Registration Successful</h2>

<p><b>Name:</b> ${name}</p>

<p><b>Email:</b> ${email}</p>

<p><b>Age:</b> ${age}</p>

<p><b>Phone:</b> ${phone}</p>

<p><b>Gender:</b> ${gender}</p>

<p><b>Address:</b> ${address}</p>
`;
});
