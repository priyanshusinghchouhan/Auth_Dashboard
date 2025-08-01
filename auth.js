const fakeUsers = [
    {
        name : "Priyanshu Singh",
        email : "priyanshu@gmail.com",
        password : "123"
    },{
        name : "Lewandowski",
        email : "lewandowski@gmail.com",
        password : "999"
    },{
        name : "Pedri",
        email : "pedri@gmail.com",
        password : "888"
    },{
        name : "Inigo",
        email : "inigo@gmail.com",
        password : "555"
    }
];


const authForm = document.getElementById("authForm");
const email = document.getElementById("e-mail");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("errormessage");

authForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userEmail = email.value.trim();
    const userPassword = password.value.trim();


    if(userEmail === "" || userPassword === ""){
        console.log("Please enter details")
    }

    const validusers = fakeUsers.find(valid => valid.email === userEmail && valid.password === userPassword);
    
    if(validusers){
        console.log("hi there");
        localStorage.setItem("auth_user", JSON.stringify(validusers));
        window.location.href = "logIn.html?type=login";

    }else{
        console.log("bye bye");
        showWarning("Invalid Email or Password");
        return;
    }

    authForm.reset();
});



function showWarning(message) {
  errorMessage.textContent = message;

  setTimeout(() => {
    errorMessage.textContent = "";
  },2000);
}
