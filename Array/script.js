arr = []

function adicionar(){

    var a1 = parseFloat(document.getElementById("a1").value)
    arr.push(a1)
    document.getElementById("resultado").innerText = arr
}
function remover(){

    var a1 = parseFloat(document.getElementById("a1").value)
    arr.pop(a1)
    document.getElementById("resultado").innerText = arr
}