document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area'); // corrigido aqui

    const token = String(localStorage.getItem('token').replaceAll('"', ''));

    const response = await fetch(`http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: "Bearer " + token
        },
    });

    const data = await response.json();
    console.log(data);

    const grid = document.querySelector(".rides-grid");
    grid.innerHTML = ""; // Clear previous content

    for (const brinquedo of data.Resultados) {
        console.log(brinquedo);

        grid.innerHTML += `<div class="ride-card">
            <div class="ride-image" style="background-image: url('../../img/${brinquedo.image}');"></div>
            <div class="ride-info">
                <h3 class="ride-name">${brinquedo.name}</h3>
                <div class="ride-time">${brinquedo.waiting_time}</div>
                <span class="ride-status status-busy">${brinquedo.status}</span>
            </div>
        </div>`;
    }
});
