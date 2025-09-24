const form = document.querySelector('[data-form="form"]')
const tabela = document.querySelector('[data-tabela="medidas"]')


function insereMedida(nome, valor, medida) {
    const tr = document.createElement('tr')

    tr.innerHTML= `
        <th>${nome}</th>
        <th>${valor}</th>
        <th>${medida}</th>
        <td><button class="remover">Remover</button></td>
    `

    // const remover = document.querySelector("remover") 
    // remover.addEventListener("click", (e) => {
    //     e.remove(tr.currentTarget)
    // } )

    tabela.appendChild(tr)

}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = document.getElementById("nome").value
    const valor = document.getElementById("valor").value
    const unidade = document.getElementById("unidade").value
    
    insereMedida(nome, valor, unidade)
})

