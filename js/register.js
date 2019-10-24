window.onload=function(){
  //Aquí guardo el formulario con sus elementos
  //var registerForm = document.forms[0]
  //Esta es otra forma de capturar los elementos del formulario
  let formulario = document.querySelector('.form');
  formulario.elements.nombre.focus();
  console.log(formulario);
  console.log(formulario.elements.nombre.value);
  //Aquí armo mi función para que se ejecute una vez que el usuario envie ó de enter en cada input
  //registerForm.onsubmit = function(evento) {
  formulario.onsubmit = function(evento) {  
    //Aquí evito que por defecto se envie el formulario
    //Si el formulario pasa las validaciones doy el ingreso al usuario
    console.log("ojo evento"+evento );
    if (!validateRegisterForm()) {
      
      evento.preventDefault()
    }else{
      registerForm.submit()
    }
  }
  //Esta es la función que valida todos los campos del formulario
  function validateRegisterForm() {
    //Esta manera de programarlo en ECMA6, se llama destructuración de código.
    let { nombre, apellido, edad, email, password, passwordRepeat,
    userName, termsCondition } = formulario.elements
    //De esta forma se programaba antes del 2015
    //email = registerForm.elements.email
    //password = registerForm.elements.password
    //Y así con cada una de las variables
    //Esta es una forma mas corta de hacer un if simple  
    
    if (!validateNombre(nombre)) return false;
    if (!validateApellido(apellido)) return false;
    if (!validateEdad(edad)) return false;
    if (!validateEmail(email)) return false;
    if (!validatePassword(password)) return false;
    if (!validatePasswordRepeat(password, passwordRepeat)) return false;
    if (!validateUsername(userName)) return false;
    if (!validateTermsCondition(termsCondition)) return false;
    return true;
    }
    
    function validateNombre(nombre){
      let errorNombre = document.getElementById('errorNombre');
      if(nombre.value ===''){
        errorNombre.innerHTML = "Campo Obligatorio";
        errorNombre.classList.add('alert-danger');
        nombre.classList.add('is-invalid');
      }else if(nombre.value.length < 3){
        errorNombre.innerHTML = "El nombre no puede tener menos de 3 digitos";
        errorNombre.classList.add('alert-danger');
        nombre.classList.add('is-invalid');
        return false;
      } else{
        errorNombre.innerHTML = "";
        errorNombre.classList.remove('alert-danger');
        nombre.classList.remove('is-invalid');
        nombre.classList.add('is-valid');
        formulario.elements.apellido.focus()
        return true;
      } 
    }
    function validateApellido(apellido){
      let errorApellido = document.getElementById('errorApellido');
      if(apellido.value ===''){
        errorApellido.innerHTML = "Campo Obligatorio";
        errorApellido.classList.add('alert-danger');
        apellido.classList.add('is-invalid');
      }else if (apellido.value.length < 3){
        errorApellido.innerHTML = "El apellido no puede tener menos de 3 digitos";
        errorApellido.classList.add('alert-danger');
        apellido.classList.add('is-invalid');
        return false;
      } else{
        errorApellido.innerHTML = "";
        errorApellido.classList.remove('alert-danger');
        apellido.classList.remove('is-invalid');
        apellido.classList.add('is-valid');
        formulario.elements.edad.focus()
        return true;
      } 
    }
    function validateEdad(edad){
      let errorEdad = document.getElementById('errorEdad');
      if (edad.value >= 150){
        errorEdad.innerHTML = "Edad invalida";
        errorEdad.classList.add('alert-danger');
        edad.classList.add('is-invalid');
        return false;
      }else if(edad.value ===''){
        errorEdad.innerHTML = "Campo Obligatorio";
        errorEdad.classList.add('alert-danger');
        edad.classList.add('is-invalid');
      } else{
        errorEdad.innerHTML = "";
        errorEdad.classList.remove('alert-danger');
        edad.classList.remove('is-invalid');
        edad.classList.add('is-valid');
        formulario.elements.email.focus()
        return true;
      }
    } 
    function validateEmail(email) {
      let re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      let errorEmail = document.getElementById('errorEmail');
      if(email.value ===''){
        errorEmail.innerHTML = "Campo Obligatorio";
        errorEmail.classList.add('alert-danger');
        email.classList.add('is-invalid');
      }else if (!re.test(email.value)){ 
        
        email.classList.add('is-invalid'); 
        errorEmail.innerHTML= "Debe colocar un email válido";
        errorEmail.classList.add('alert-danger');
       // email.addEventListener('change',cambioNombre);
      return false
    }else{
      errorEmail.innerHTML= "";
      errorEmail.classList.remove('alert-danger');
      email.classList.remove('is-invalid'); 
      email.classList.add('is-valid');
      formulario.elements.password.focus()
      return true;
    }
}
  
    function validatePassword(password) {
      let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
      let errorPassword = document.getElementById('errorPassword');
        
      if(password.value ===''){
        errorPassword.innerHTML = "Campo Obligatorio";
        errorPassword.classList.add('alert-danger');
        password.classList.add('is-invalid');
      }else if (!re.test(password.value)) {
        errorPassword.innerHTML = "La contraseña no es valida";
        errorPassword.classList.add('alert-danger');
        password.classList.add('is-invalid');
        return false;  

      }else{
        errorPassword.innerHTML = "";
        errorPassword.classList.remove('alert-danger');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        formulario.elements.passwordRepeat.focus();
        // swal('Error', 'Ingrese una contraseña válida', 'error')
        return true;
      }
    }
  
    function validatePasswordRepeat(password,repeat){
      console.log(password.value);
      console.log(repeat.value);
      if (password.value != repeat.value) {
        errorPasswordRepeat.innerHTML = "Las contraseñas no coinciden";
        errorPasswordRepeat .classList.add('alert-danger');
        repeat.classList.add('is-invalid');
        return false;  

      }else{
        errorPasswordRepeat .innerHTML = "";
        errorPasswordRepeat.classList.remove('alert-danger');
        repeat.classList.remove('is-invalid');
        repeat.classList.add('is-valid');
        formulario.elements.userName.focus();
        return true;
      }  
      
    }
  
    
    
    
    
    
}  


