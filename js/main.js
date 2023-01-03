document.body.onload = () => {
    swal('Como funciona?',
    'Para abrir um arquivo basta colocar o título do arquivo no campo de título e automaticamente a aplicação resgatará o conteúdo',
    'warning')
}

let counterSaveWindow = 0;
const projectTitleInput = document.querySelector('.project-title-value');
const textAreaInput = document.querySelector('.text-area-user');

function salvar() {
    if (textAreaInput.value === '' || projectTitleInput.value === '') {
        return alert('Preencha todos os campos para salvar um arquivo');
    }

    localStorage.setItem(projectTitleInput.value, textAreaInput.value)
    swal('Conteúdo salvo',
    'O seu arquivo foi salvo no localStorage do navegador',
    'success')
    console.log(`Saved "${projectTitleInput.value}" with "${textAreaInput.value}" on your conteúdo`);
}

function novo() {
    projectTitleInput.value = "";
    textAreaInput.value = "";
}

document.addEventListener("keydown", function (e) {
    if (e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        salvar()
    } 

    if (e.key === 'l' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        novo()
    } 
}, false);

let lastRestored;
let lastInput;

projectTitleInput.addEventListener('input', (e) => {
    let projectTitleValue = projectTitleInput.value;
    let projectContent = localStorage.getItem(projectTitleValue);

    if (projectContent) {
        lastRestored = projectContent;
        textAreaInput.value = projectContent;
    } else if (textAreaInput.value === lastRestored && !projectContent) {
        textAreaInput.value = lastInput;
    } else {
        lastInput = textAreaInput.value;
    }
})

