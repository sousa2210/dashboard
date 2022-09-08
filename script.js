const sideMenu = document.querySelector("aside");
const menuBtn =  document.querySelector("#menu-btn ");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler"); 


//mostrar barra lateral
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
});

//fechar barra lateral
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

//mudar tema
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

//preencher pedidos na tabela

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentsStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Detalhes</td>
     `;
     tr.innerHTML = trContent;
     document.querySelector('table tbody').appendChild(tr);
})

