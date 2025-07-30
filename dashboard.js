const authUser = localStorage.getItem("auth_user");

if (!authUser) {
  window.location.href = "auth.html";
} else {
  const user = JSON.parse(localStorage.getItem("auth_user"));

  const welcome = document.getElementById("welcome");
  welcome.textContent = `Welcome, ${user.name} 👋`;

  const userName = document.getElementById("userName");
  userName.textContent = `${user.name}`;

//   //fetching fake datas
//   async function fetchFakeUsers() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       console.log(data);

//       const expenseList = document.getElementById("expense-list");
//       const usersData = data.slice(0, 5);

//       usersData.forEach((item) => {
//         const newDiv = document.createElement("div");
//         newDiv.classList.add("expense-list")
//         newDiv.innerHTML = `
//             <div class="expense-item">
//                 <h4>Expense Name: ${item.title}</h4>
//                 <p>Description: ${item.body}</p>
//             </div>

//             `;
//         expenseList.appendChild(newDiv);
//      })
      
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   fetchFakeUsers();
 }

const logOut = document.getElementById("logOut");

logOut.addEventListener("click", () => {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("auth_user");
    window.location.href = "logIn.html?type=logout";
  }
});

document.getElementById("rzp-button").addEventListener("click", function () {
  const enteredAmount = document.getElementById("amount").value;

  if (!enteredAmount || enteredAmount < 1) {
    alert("Please enter a valid amount (₹1 or more)");
    return;
  }

  const amountInPaise = enteredAmount * 100; // Razorpay expects amount in paise

  const options = {
    key: "rzp_test_L71uL0uHBVQHJp", // Replace with your Razorpay key
    amount: amountInPaise,
    currency: "INR",
    name: "Priyanshu Dashboard",
    description: `Payment of ₹${enteredAmount}`,
    handler: function (response) {
      // Save payment info if needed
      localStorage.setItem("last_payment_amount", enteredAmount);
      window.location.href = "paymentSuccessful.html";
    },
    prefill: {
      name: "Priyanshu",
      email: "user@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
});
