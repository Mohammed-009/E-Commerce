let cartItems = [];
let cartCount = 0;

function addToCart(product) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  cartItems.push(product);
}

function cartToggle() {
  let cart = document.getElementById('cart');
  let cartlayout = document.getElementById('cart-layout');
  
  if (cart.style.display === 'block') {
    cart.style.display = 'none';
    cartlayout.style.display = 'none';
  } else {
    renderCartItems();
    cart.style.display = 'block';
    cartlayout.style.display = 'block';
  }
}

function renderCartItems() {
  let cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  cartItems.forEach((item, index) => {
    let li = document.createElement('li');
    li.textContent = item;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      removeFromCart(index);
    };
    li.appendChild(deleteButton);
    cartItemsList.appendChild(li);
  });
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  cartCount--;
  document.getElementById('cart-count').innerText = cartCount;
  renderCartItems();
}

function clearCart() {
  cartItems = [];
  cartCount = 0;
  document.getElementById('cart-count').innerText = cartCount;
  renderCartItems();
}

//Login & signup & forgetpassword
function validLogin() {
    let username= document.electronicform.username.value;
    let password= document.electronicform.password.value;

    if(username== null || username== "" || password== null || password=="") {
        alert("Fill out all the fields!");
        return false;
    }
  else {
     window.location = "index.html";
  }
}
  

function validateForm() {
    let username= document.electronicform.username.value;
    let email= document.electronicform.email.value;
    let password1= document.electronicform.password1.value;
    let password2= document.electronicform.password2.value;

    if(username== null || username=="" || email== null || email=="" || password1== null || password1=="" || password2== null || password2=="") {
        alert("Fill out all the fields!");
        return false;
    }
    else if(password1 != password2) {
        alert("password don't match!");
        return false;
    }
    else if(password1.length<6) {
        alert("password must be atleast six characters!");
        return false;
    }
  else {
     window.location = "login.html";
  }


}

function forgotPassword() {
    let email= document.electronicform.email.value;
    let password1= document.electronicform.password1.value;
    let password2= document.electronicform.password2.value;

    if(email== null || email=="" || password1== null || password1=="" || password2== null || password2=="") {
        alert("Fill out all the fields!")
        return false;
    }
    else if(password1 != password2) {
        alert("password don't match!");
        return false;
    }
    else if(password1.length<6) {
        alert("password must be atleast six characters!");
        return false;
    }
}
//contact.html
function contactValidateForm() {
  let firstname= document.contactform.firstname.value;
  let email= document.contactform.email.value;
  let phone= document.contactform.phone.value;
  let message= document.contactform.message.value;

  if(firstname== null || firstname=="" || email== null || email=="" || phone== null || phone=="" || message== null || message=="") {
    alert("please fill out all the fields!");
    return false;
  }
  else if(phone.length<10) {
    alert("Your phone number does not meet the required length");
    return false;
  }
}

function subscribeValidate() {
  let email= document.subscribeform.email.value;

  if(email== null || email=="") {
    alert("Email is required!");
    return false;
  }
}
