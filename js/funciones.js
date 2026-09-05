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
            if (telefono.length !== 9 || isNaN(telefono)) {
                document.getElementById('error-telefono').textContent = 'Ingrese un nunmero de telefono valido de 9 caracteres.';
                hayErrores = true;
            }

            /*Flujo del mensaje de éxito*/
            const divExito = document.getElementById('mensaje-exito');

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

    /*Formulario de contacto*/
    const formContacto = document.getElementById('form-contacto');

    if (formContacto) {
        formContacto.addEventListener('submit', function(e) {
            e.preventDefault();

            /*limpiar mensajes recientes*/
            document.querySelectorAll('#form-contacto .error').forEach(span => {
                span.textContent = '';
            });

            const nombre = document.getElementById('nombre-contacto').value.trim();
            const email = document.getElementById('email-contacto').value.trim();
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value.trim();

            let hayErrores = false;

            if (nombre === '') {
                document.getElementById('error-nombre-contacto').textContent = 'El nombre es obligatorio.';
                hayErrores = true;
            }

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                document.getElementById('error-email-contacto').textContent = 'Ingresa un correo electrónico válido.';
                hayErrores = true;
            }

            if (asunto === '') {
                document.getElementById('error-asunto').textContent = 'Por favor selecciona un motivo.';
                hayErrores = true;
            }

            if (mensaje.length < 10) {
                document.getElementById('error-mensaje').textContent = 'El mensaje debe tener al menos 10 caracteres.';
                hayErrores = true;
            }

            const divExitoContacto = document.getElementById('mensaje-exito-contacto');

            if (!hayErrores) {
                divExitoContacto.textContent = '¡Mensaje enviado exitosamente! Te responderemos pronto.';
                divExitoContacto.style.display = 'block';
                formContacto.reset();

                setTimeout(() => {
                    divExitoContacto.style.display = 'none';
                }, 4000);
            } else {
                divExitoContacto.style.display = 'none';
            }
        });
    }
});