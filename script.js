/*function criptografar() {
    let texto = document.getElementById("texts").value;
    if(texto == "") {
        document.getElementById("area2-text").style.visibility = "hidden";
    } else {
        if(/[A-Z]/.test(texto) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
            alert("Não pode usar letras maiúsculas, nem usar acentos!")
        } else {
            if(/[A-Z]/.test(texto)) {
                alert("Não pode usar letras maiúsculas!");
            } else {
                if(/[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
                    alert("Não pode usar acentos!");
                } else {
                    texto = texto.replaceAll("e","enter");
                    texto = texto.replaceAll("i","imes");
                    texto = texto.replaceAll("a","ai");
                    texto = texto.replaceAll("o","ober");
                    texto = texto.replaceAll("u","ufat");
                    document.getElementById("area2-text").style.visibility = "visible";
                    document.getElementById("text2").value = texto;
                }
            }
        }
    }
}

function descriptografar() {
    let texto = document.getElementById("texts").value;
    if(texto == "") {
        document.getElementById("area2-text").style.visibility = "hidden";
    } else {
        if(/[A-Z]/.test(texto) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
            alert("Não pode usar letras maiúsculas, nem usar acentos!")
        } else {
            if(/[A-Z]/.test(texto)) {
                alert("Não pode usar letras maiúsculas!");
            } else {
                if(/[áàãâäéèêëíìîïóòõôöúùûü]/.test(texto)) {
                    alert("Não pode usar acentos!");
                } else {
                    texto = texto.replaceAll("enter","e");
                    texto = texto.replaceAll("imes","i");
                    texto = texto.replaceAll("ai","a");
                    texto = texto.replaceAll("ober","o");
                    texto = texto.replaceAll("ufat","u");
                    document.getElementById("area2-text").style.visibility = "visible";
                    document.getElementById("text2").value = texto;
                }
            }
        }
    }
}

function copy() {
    let textoCopiado = document.getElementById("text2");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("texts").value = "";
    document.getElementById("area2-text").style.visibility = "hidden";
}
*/

function criptografar() {
    let text = document.getElementById("texts");
    if (text == "") {
        document.getElementById("with-text").style.display = "none";
        alert("Digite algum texto.")
    } else {
        if (/[A-Z]/.test(text) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(text)) {
            alert("Utilize somente letras MINÚSCULAS e SEM ACENTO.");
        } else {
            if (/[A-Z]/.test(text)) {
                alert("Utilize somente letras MINÚSCULAS");
            } else {
                if (/[áàãâäéèêëíìîïóòõôöúùûü]/.test(text)) {
                    alert("NÃO utilize acentos.");
                } else {
                    text = text.replaceAll("e","enter")
                    text = text.replaceAll("i","imes");
                    text = text.replaceAll("a","ai");
                    text = text.replaceAll("o","ober");
                    text = text.replaceAll("u","ufat");
                    document.getElementById("with-text").style.display = "block";
                    document.getElementById("text2").value = text;
                }
            }
        }
    }
}