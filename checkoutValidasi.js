(function () {
    'use strict';


    var forms = document.querySelectorAll('.needs-validation');


    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();

            form.classList.add('was-validated');

            var inputs = form.querySelectorAll('input[required]');
            var isValid = true;

            inputs.forEach(function (input) {
                if (!input.value) {
                    isValid = false;
                    input.classList.add('is-invalid');
                    input.nextElementSibling.style.display = 'block';
                } else {
                    input.classList.remove('is-invalid');
                    input.nextElementSibling.style.display = 'none';
                }
            });

        }, false);
    });
})();
function kirim(){
    alert("pesan anda telah dikirim termakasih:)")
}