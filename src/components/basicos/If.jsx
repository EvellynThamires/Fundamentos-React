//Não é necessário importar o React por não usar um código Jsx


//Return props.children: retorna o que tem dentro, caso contrário, não retorna nada.

export default function (props) {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}