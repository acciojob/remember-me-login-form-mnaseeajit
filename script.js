//your JS code here. If required.

// let username = document.getElementById("username");
// let password = document.getElementById("password");
// let checkbox = document.getElementById("checkbox");
// let submit = document.getElementById("submit");
// let form = document.getElementById("form");

// submit.addEventListener("click",(){
// 	console.log("submit");
// 	  if(checkbox.checked){
// 	       localStorage.setItem("username", username.value);
// 		   localStorage.setItem("password",password.value);
// 	      alert(`Logged in as ${username.value}`);
// 	  }
// })

// let loggedInUser = localStorage.getItem("username");

// if(loggedInUser){
// 	let button = document.createElement("button");
// 	form.appenChild(button);
// 	button.innerText = "existing";
// 	form.innertext = `login as existing user`;

// 	button.addEventListner("click",(){
// 		alert(`Logged in as ${localStorage.getItem("username")}`)
// 	})
// }



        document.getElementById("form").addEventListener("submit", function(event) {
           // event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let rememberMe = document.getElementById("rememberMe").checked;

            if (rememberMe) {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            alert(`Logged in as ${username}`);
        });

        let loggedInUser = localStorage.getItem("username");

        if (loggedInUser) {
            let existingButton = document.createElement("button");
            existingButton.id = "existing";
            existingButton.innerText = "Login as existing user";
            
            existingButton.addEventListener("click", function() {
                alert(`Logged in as ${loggedInUser}`);
            });

            document.body.appendChild(existingButton);
        }