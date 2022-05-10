function encriptar() {
    let text = document.getElementById("text-input").value.toLowerCase();
    let txtCifrado = text.replace(/e/igm,"enter")
    txtCifrado = txtCifrado.replace(/i/igm, "imes")
    txtCifrado = txtCifrado.replace(/a/igm, "ai")
    txtCifrado = txtCifrado.replace(/o/igm, "ober")
    txtCifrado = txtCifrado.replace(/u/igm, "ufat")

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    document.getElementById("text").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
   
}
function desencriptar (){
    let text = document.getElementById("text-input").value.toLowerCase();
    let txtCifrado = text.replace(/enter/igm,"e")
    txtCifrado = txtCifrado.replace(/imes/igm, "i")
    txtCifrado = txtCifrado.replace(/ai/igm, "a")
    txtCifrado = txtCifrado.replace(/ober/igm, "o")
    txtCifrado = txtCifrado.replace(/ufat/igm, "u")

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text-right").style.display = "none";
    document.getElementById("text").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}
function copy(){
    let content = document.querySelector("#text");
    content.select();
    document.execCommand("cut");
}