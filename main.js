const form = document.getElementById('formulario')
const mensagemError = 'O primeiro número não pode ser maior que o segundo'
const mensagemSucesso = 'Os números estão corretos'

const inputA = document.getElementById('inputA')
const inputB = document.getElementById('inputB')



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const containerMensagemError = document.querySelector('.erro')
    const containerMensagemSucesso = document.querySelector('.sucesso')

    if (inputA.value > inputB.value) {

        
        containerMensagemError.innerHTML = mensagemError
        containerMensagemError.style.display = 'block'
        containerMensagemSucesso.style.display = 'none'

    } else {
        
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        containerMensagemError.style.display = 'none'

        inputA.value = ''
        inputB.value = ''
    }
})