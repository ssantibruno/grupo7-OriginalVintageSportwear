window.addEventListener("load", () => {

    let formCreate = document.querySelector(".form-create");
    formCreate.productName.focus();

    formCreate.addEventListener("submit", (event) => {

//Creamos un array de errores vacios para ir agregando los errores

     let errors =[];
     
     let productName = document.querySelector("#productName");
     let productDescrption = document.querySelector("#productDescription");
     let imageProduct = document.querySelector("#imageProduct");

     //-------productName-----------
     if(productName.value == ""){
        errors.push("El campo Nombre del Producto no puede estar vacío");
        productName.classList.remove("is-valid");
        productName.classList.add("is-invalid");
     }else if(productName.value.length < 5) {
        errors.push("El campo Nombre del Producto debe tener al menos 5 caracteres");
        productName.classList.remove("is-valid");
        productName.classList.add("is-invalid");
     }else {
        productName.classList.add("is-valid");
        productName.classList.remove("is-invalid");
        formCreate.productDescrption.focus(   )
     }

     //-------productDescription-----------
     if(productDescrption.value == ""){
      errors.push("El campo Descripción no puede estar vacío");
      productDescrption.classList.remove("is-valid");
      productDescrption.classList.add("is-invalid");
     }else if(productDescrption.value.length < 20) {
      errors.push("El campo Descripción debe tener al menos 20 caracteres");
      productDescrption.classList.remove("is-valid");
      productDescrption.classList.add("is-invalid");
     }else {
      productDescrption.classList.add("is-valid");
      productDescrption.classList.remove("is-invalid");
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
      formCreate.submit();
   }
 })   
})