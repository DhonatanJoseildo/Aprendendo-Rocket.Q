import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalText = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

//pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //adicionar escuta
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

// quando o botão delete for clicado ele abre a modal
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalText.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal
    modal.open()
}