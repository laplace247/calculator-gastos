document.addEventListener("DOMContentLoaded", () => {
    const formularioGasto = document.getElementById("expense-form");
    const listaGastos = document.querySelector("#expenses-table tbody");
    const totalGastos = document.getElementById("total");
    let totalAcumulado = 0;

    formularioGasto.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const descripcionGasto = document.getElementById("description").value;
        const montoGasto = parseFloat(document.getElementById("amount").value);
        const categoriaGasto = document.getElementById("category").value;

        totalAcumulado += montoGasto;
        totalGastos.textContent = totalAcumulado;

        const filaGasto = document.createElement("tr");
        filaGasto.innerHTML = `
            <td>${descripcionGasto}</td>
            <td>S/. ${montoGasto}</td>
            <td>${categoriaGasto}</td>
            <td><button class="botonEliminar">Eliminar</button></td>
        `;

        listaGastos.appendChild(filaGasto);

        filaGasto.querySelector(".botonEliminar").addEventListener("click", () => {
            totalAcumulado -= montoGasto;
            totalGastos.textContent = totalAcumulado;
            filaGasto.remove();
        });

        formularioGasto.reset();
    });
});
