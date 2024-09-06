function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa || campoPesquisa == " ") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa escrever o nome do atleta ou esporte.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""
    let titulo = "";
    let descricao = "";

    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // se titulo includes campoPesquisa, então faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank"> ${dado.titulo}</a>
                </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href= ${dado.link} target="_blank">Mais informações</a>      
            </div>
             `
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
        return
    }
    
    section.innerHTML = resultados;
}



