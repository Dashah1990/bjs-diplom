"use strict";
const userForm = new UserForm();
userForm.loginFormCallback = data => {
    ApiConnector.login({login: "oleg@demo.ru", password: "demo"}, response  => console.log(response));
}
