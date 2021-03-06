import { Api } from "./Api.js";

export class VitrineAdm {

    static async vitrineProdutos(listaDeProdutos, caminho) {
        caminho.innerHTML = ""
        //const data = await Api.pegarProdutosPublico();
        
        
        listaDeProdutos.forEach(produtos => {

            const li = document.createElement("li");
            li.className = "vitrine__produtosTemplateLi";
            li.innerHTML = `
            <div class="vitrine__produtosTemplateDivImg">
            <img class="vitrine__produtosTemplateImg" src="${produtos.imagem}" alt="${produtos.nome}">
            <span class="vitrine__produtosTemplateSpanImg">${produtos.nome}</span>
            </div>

            <div class="vitrine__produtosTemplateDivCategoria">
            <button class="vitrine__produtosTemplateSpanCategoria">${produtos.categoria}</button>
            </div>

            <div class="vitrine__produtosTemplateDivDescricao">
            <span class="vitrine__produtosTemplateSpanDescricao">${produtos.descricao}</span>
            </div>

            <div class="vitrine__produtosTemplateDivBotoes">

            <button id="${produtos.id}"class="vitrine__produtosTemplateBotaoPath">
            <img id="${produtos.id}" class="vitrine__produtosImgPath" src="../svgs/pen-to-square-solid.svg"> 
            </button>

            <button id="${produtos.id}"class="vitrine__produtosTemplateBotaoDelete">
             <img id="${produtos.id}" class="vitrine__produtosImgDelete" src="../svgs/trash-solid.svg">
            </button>

            </div>
            `;
            caminho.appendChild(li);
        });

    }














}