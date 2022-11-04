window.addEventListener("load", () => {

    let form = document.querySelector(".form-create");
    form.productName.focus();

    form.addEventListener("submit", (event) => {
        
        /* Creamos un array de errores vacio. 
        En caso de ir detectando errores los iremos agregando aquí */
        let errors = [];

        let productName = document.querySelector("#productName");
        let description = document.querySelector("#productDescription");
        let category = document.querySelector("#productCategory");
        let type = document.querySelector("#productType");
        let size = document.querySelector("#productSize");
        let status = document.querySelector("#productStatus");
        let condition = document.querySelector("#productCondition");
        let price = document.querySelector("#productPrice");
        let image = document.querySelector("#productImage");

        // --------- NAME ------------
        if (productName.value == "") {
            errors.push("EL campo Nombre del producto no puede estar vacío");
        } else if (productName.value.length < 5) {
            errors.push("EL campo Nombre del producto debe tener al menos 5 caracteres");
        } else {
            form.description.focus();
        };;

        // --------- description ------------

        if (description.value == "") {
            errors.push("El campo descripción del producto no puede estar vacío");
        } else if (description.value.length < 20) {
            errors.push("El campo descripción del producto debe tener al menos 20 caracteres");
        } else {
            form.category.focus();
        };
        
        // --------- category------------
        if (category.value == "") {
            errors.push("El campo categoría no puede estar vacío");
        } else {
            form.type.focus();
        };

        // --------- type------------
        if (type.value == "") {
            errors.push("El campo tipo de venta no puede estar vacío");
        } else {
            form.size.focus();
        };

        // --------- size------------
        if (size.value == "") {
            errors.push("El campo talle no puede estar vacío");
        } else {
            form.status.focus();
        };

        // --------- status------------
        if (status.value == "") {
            errors.push("El estado de producto no puede estar vacío");
        } else {
            form.condition.focus();
        };

        // --------- condition------------
        if (condition.value == "") {
            errors.push("El campo condicion del producto no puede estar vacío");
        } else {
            form.price.focus();
        };

        // --------- price------------
        if (price.value == "") {
            errors.push("El campo precio del producto no puede estar vacío");
        } else {
            form.price.focus();
        };

        // --------- image ------------
        if (image.value == "") {
            errors.push("La imagen deberá ser un archivo válido (JPG, JPEG, PNG, GIF)");
        };


        // Controlamos si hay errores 
        console.log(errors)
        if (errors.length > 0) {
            /* El submitEvent de submit está declarado en la linea 6 */
            event.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        } else {
            form.submit();
        }
    });
})