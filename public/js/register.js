window.addEventListener("load", () => {

    let formRegistro = document.querySelector(".form-registro");
    formRegistro.firstName.focus();

    formRegistro.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     
     let firstName = document.querySelector("#firstName");
     let lastName = document.querySelector("#lastName");
     let email = document.querySelector("#email");
     let password = document.querySelector("#password");
     let image = document.querySelector("#image");

     //-------firstName-----------
     if(firstName.value == ""){
        errors.push("El campo Nombre no puede estar vacío");
        firstName.classList.remove("is-valid");
        firstName.classList.add("is-invalid");
     }else if(firstName.value.length < 2) {
        errors.push("El campo Nombre debe tener al menos 2 caracteres");
        firstName.classList.remove("is-valid");
        firstName.classList.add("is-invalid");
     }else {
        firstName.classList.add("is-valid");
        firstName.classList.remove("is-invalid");
        formRegistro.lastName.focus(   )
     }

     //-------lastName-----------
     if(lastName.value == ""){
      errors.push("El campo Apellido no puede estar vacío");
      lastName.classList.remove("is-valid");
      lastName.classList.add("is-invalid");
     }else if(lastName.value.length < 2) {
      errors.push("El campo Apellido debe tener al menos 2 caracteres");
      lastName.classList.remove("is-valid");
      lastName.classList.add("is-invalid");
     }else {
      lastName.classList.add("is-valid");
      lastName.classList.remove("is-invalid");
      formRegistro.email.focus()
     }

    //-------Email-----------
    let regEmail = /\S+@\S+\.+\S+/;
    if(!regEmail.test(email.value)){          //.test "testea que ese email contenga @ y ."
      errors.push("Debe ingresar un email válido");
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");     
   }else {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
   }

     //-------Password-----------
     if(password.value == ""){
      errors.push("El campo Contraseña no puede estar vacío");
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
   }else if(password.value.length < 8) {
      errors.push("El campo Contraseña debe tener al menos 8 caracteres");
      password.classList.remove("is-valid");
      password.classList.add("is-invalid");
   }else {
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
   }

   //------Controlamos si hay errores------

   console.log(errors);
   if(errors.length > 0){
      //El event del submit esta declarado en la linea 6
      event.preventDefault()
      let ulErrors = document.querySelector(".errores");
      ulErrors.classList.add("alert-warning");
      ulErrors.innerHTML ="";  //Se borra toda la etiqueta Ul para vaciarla de errores
      for(let i = 0; i < errors.length; i++){
         ulErrors.innerHTML += "<li>" + errors[i] + "</li>"; //Agregamos los errores en una lista
      }
   }else{
      formRegistro.submit();
   }
 })   
})