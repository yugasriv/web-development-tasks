document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    document.getElementById("result").innerHTML=
    `
    <h2>Submitted Successfully</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    `;
});
