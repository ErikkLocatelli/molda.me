const form = document.querySelector('[data-form="form"]')
const tabela = document.querySelector('[data-tabela="medidas"]')

function insereMedida(nome, valor, medida) {
    const tr = document.createElement('tr') // cria o elemento onde serão inseridos os dados pelo usuário
    tr.classList.add('tabela-infos') // adiciona um estilo pré-definido para o elemento

    tr.innerHTML= `                      
        <th>${nome}</th>
        <th>${valor}</th>  
        <th>${medida}</th>
        <th><button class="remover">Remover</button></th>
    `

    const remover = tr.querySelector(".remover") 
    remover.addEventListener("click", () => {
         tr.remove()
     } )
    tabela.appendChild(tr)
}

// funcao que recebe os dados atraves do submit do form

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const top = document.querySelector('[data-tabela="top"]')
    top.classList.add('ativo') // adiciona a classe ativo para que o cabeçalho das infos apareça quando há dados a serem mostrados

    const nome = document.getElementById("nome").value
    const valor = document.getElementById("valor").value
    const unidade = document.getElementById("unidade").value
    
    insereMedida(nome, valor, unidade) // atribue os dados na função de criação de tabela
    form.reset(); //reseta o form após envio
})

