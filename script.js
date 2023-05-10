function criptografar() {
  let text = document.getElementById("texts").value;
  if (text == "") {
    alert("Digite algum texto.");
  } else {
    if (/[A-Z]/.test(text) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(text)) {
      alert("Utilize somente letras MINÚSCULAS e SEM ACENTO.");
    } else {
      if (/[A-Z]/.test(text)) {
        alert("Utilize somente letras MINÚSCULAS.");
      } else {
        if (/[áàãâäéèêëíìîïóòõôöúùûü]/.test(text)) {
          alert("NÃO utilize acentos.");
        } else {
          text = text.replaceAll("e", "enter");
          text = text.replaceAll("i", "imes");
          text = text.replaceAll("a", "ai");
          text = text.replaceAll("o", "ober");
          text = text.replaceAll("u", "ufat");
          document.getElementById("no-text").style.display = "none";
          document.getElementById("with-text").style.display = "block";
          document.getElementById("text2").value = text;
        }
      }
    }
  }
}

function descriptografar() {
  let text = document.getElementById("texts").value;
  if (text == "") {
    alert("Digite algum texto.");
  } else {
    if (/[A-Z]/.test(text) && /[áàãâäéèêëíìîïóòõôöúùûü]/.test(text)) {
      alert("Utilize somente letras MINÚSCULAS e SEM ACENTO.");
    } else {
      if (/[A-Z]/.test(text)) {
        alert("Utilize somente letras MINÚSCULAS.");
      } else {
        if (/[áàãâäéèêëíìîïóòõôöúùûü]/.test(text)) {
          alert("NÃO utilize acentos.");
        } else {
          text = text.replaceAll("enter", "e");
          text = text.replaceAll("imes", "i");
          text = text.replaceAll("ai", "a");
          text = text.replaceAll("ober", "o");
          text = text.replaceAll("ufat", "u");
          document.getElementById("no-text").style.display = "none";
          document.getElementById("with-text").style.display = "block";
          document.getElementById("text2").value = text;
        }
      }
    }
  }
}

function copy() {
  let copied = document.getElementById("text2");
  copied.select();
  copied.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("texts").value = "";
  document.getElementById("with-text").style.display = "none";
  document.getElementById("no-text").style.display = "block";
  alert("Texto copiado para a área de transferência.");
}
