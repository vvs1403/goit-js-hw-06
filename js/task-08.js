const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  const userList = { email: email.value, password: password.value };

    if (email.value === "" || password.value === "") {
        alert('Заполните, пожалуйста, все поля !!!');
    return;
  }
  console.log(userList);
  event.currentTarget.reset();
}






