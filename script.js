// Contador
let contador = 0;

// Seleccionar valores

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (item) {
    item.addEventListener("click", function (e) {
        //console.log();

        const style = e.currentTarget.classList;
        if(style.contains('descontar')) {
            contador--;
        } else if (style.contains('aumentar')) {
            contador++;
        } else {
            contador = 0;
        }
        if(contador > 0) {
            value.style.color = "green"; 
        }
        if(contador < 0) {
            value.style.color = "red"; 
        }
        if(contador === 0) {
            value.style.color = "#222"; 
        }
        value.textContent = contador;
    })
});