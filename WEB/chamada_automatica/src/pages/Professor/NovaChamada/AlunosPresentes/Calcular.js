
export default function Calcular() {
    var checkbox = document.getElementById("checkbox");
    let arrayAlunos = document.getElementsByName("alunos")
    let raAlunosPresentes = []
    function ativarCheckbox(el) {
        el.checked = true;
    }
    function calcularRA() {
        for (let i = 0; i < raAlunosPresentes.length; i++) {
            raAlunosPresentes.pop();
            console.log('entrou');
        }
        for (let i = 0; i < arrayAlunos.length; i++) {
            if (arrayAlunos[i].checked) {
                raAlunosPresentes.push(arrayAlunos[i].value);
            }
        }
        console.log(raAlunosPresentes);
    }

    return (
        <>
        <div onClick={calcularRA}>Calcular</div></>
    )


}
