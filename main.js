let root = document.querySelector("#root");

let div_formularios = document.createElement("div");
div_formularios.className = "div-formularios";

//Lista de datos (String)
let formularios =[
    {nombre:"Login", link:"htttps:"},
    {nombre:"Login", link:"htttps:"},
    {nombre:"Login", link:"htttps:"},
    {nombre:"Login", link:"htttps:"}
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