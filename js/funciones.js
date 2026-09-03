document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.getElementById('formulario-pedido');

    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            /*evitar que la pagina se recargue*/
            e.preventDefault();
            /*limpiar mensajes recientes*/
            document.querySelectorAll('.error').forEach(span => {
                span.textContent = '';
            });
            /*Capturar los valores*/
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();

            let hayErrores = false;
            
            /*Validaciones*/
            /*Validacion nombre*/
            if (nombre === '') {
                document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
                hayErrores = true;
            }
            /*Validacion email*/
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                document.getElementById('error-email').textContent = 'El correo es obligatorio.';
                hayErrores = true;
            }
            /*Validacion telefono*/
            if (telefono.length < 8 || isNaN(telefono)) {
                document.getElementById('error-telefono').textContent = 'Ingrese un nunmero de telefono valido.';
                hayErrores = true;
            }

            /*Flujo del mensaje de éxito*/
            const divExito = document.getElementById('exito');

            if (!hayErrores) {
                divExito.textContent = 'Pedido enviado correctamente.';
                divExito.style.display = 'block';

                formulario.reset();
            }else {
                /*Si hay erroes ocultamos el mensaje de éxito*/
                divExito.style.display = 'none';
            }
        })
        
    }
});