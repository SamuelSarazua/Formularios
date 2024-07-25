let root = document.querySelector("#root");

let div_formularios = document.createElement("div");
div_formularios.className = "div-formularios";

//Lista de datos (String)
let formularios =[
    {nombre:"Login", link:"componentes/Login/login.html"},
    {nombre:"Formulario de Contacto", link:"componentes/formularioDeContacto/formularioDeContacto.html"},
    {nombre:"Formulario de Registro", link:"componentes/formularioDeRegistro/formularioDeRegistro.html"},
    {nombre:"Formulario De Busqueda", link:"componentes/formularioDeBusqueda/formularioDeBusqueda.html"},
    {nombre:"Formulario De Pedido de Compras", link:"componentes/formularioDePedidoCompra/formularioDePedidoCompra.html"},
    {nombre:"Formulario De Comentarios y Reseñas", link:"componentes/formularioDeComentariosReseñas/formularioDeComentariosReseñas.html"}
];

//ForEach (for)
formularios.forEach(itemLista =>{
    let div_item = document.createElement("a");
    div_item.className = "div-item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formularios.appendChild(div_item);
});

root.appendChild(div_formularios);