function nextStep(step){

    let current = step - 1;

    if(current === 1){
        let name = document.getElementById("name").value;
        if(name === ""){
            alert("Please enter your name");
            return;
        }
    }

    if(current === 2){
        let email = document.getElementById("email").value;
        if(email === "" || !email.includes("@")){
            alert("Enter valid email");
            return;
        }
    }

    if(current === 3){
        let age = document.getElementById("age").value;
        if(age < 18){
            alert("Age must be 18 or above");
            return;
        }
    }

    if(current === 4){
        let phone = document.getElementById("phone").value;
        if(phone.length !== 10){
            alert("Enter 10 digit phone number");
            return;
        }
    }

    let steps = document.querySelectorAll(".step");

    steps.forEach(step=>{
        step.classList.remove("active");
    });

    document.getElementById("step"+step).classList.add("active");

    let progress = (step/6)*100;

    document.getElementById("progressBar").style.width = progress + "%";
}

document.getElementById("myForm").addEventListener("submit",function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let phone=document.getElementById("phone").value;
    let gender=document.getElementById("gender").value;
    let address=document.getElementById("address").value;

    document.getElementById("myForm").style.display="none";

    document.getElementById("result").innerHTML=`
    <h2 style="color:green;">Registration Successful</h2>
    <br>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Age:</b> ${age}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Gender:</b> ${gender}</p>
    <p><b>Address:</b> ${address}</p>
    `;
});
