function nextStep(step){

    let steps=document.querySelectorAll(".step");

    steps.forEach(s=>{
        s.classList.remove("active");
    });

    document.getElementById("step"+step).classList.add("active");
}

document.getElementById("myForm").addEventListener("submit",function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let phone=document.getElementById("phone").value;
    let gender=document.getElementById("gender").value;
    let address=document.getElementById("address").value;

    document.getElementById("result").innerHTML=`
        <h2>Registration Successful</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>Phone: ${phone}</p>
        <p>Gender: ${gender}</p>
        <p>Address: ${address}</p>
    `;
});
