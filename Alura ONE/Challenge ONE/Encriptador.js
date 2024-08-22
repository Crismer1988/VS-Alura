//Declaracion de constantes para visibilidad de los elementos
const decryptArea__assets = document.querySelector (".decryptArea__assets");
const copyBtn = document.getElementById ("copyBtn");

//Funciones para elementos y texto en el area de encriptado.
document.getElementById("copyBtn").style.display = "none";
document.getElementById("encryptBtn").addEventListener("click", function() {

    let input = document.getElementById("inputText").value;
    let encryptedText = "";

    if (input.trim () === "") {
        alert("Por favor, introduce el texto que quieres encriptar.");
        decryptArea__assets.style.display = "block";

        } else {
            decryptArea__assets.style.display = "none";
            copyBtn.style.display = "block";

            for (let i = 0; i < input.length; i++) {
                let charCode = input.charCodeAt(i);
                encryptedText += String.fromCharCode(charCode + 1);
            }
        
            document.getElementById("resultText").innerText = encryptedText;
        }
});

//Funciones para elementos y texto en el area de desencriptado.
document.getElementById("decryptBtn").addEventListener("click", function() {

    let output = document.getElementById("inputText").value;
    let decryptedText = "";

    if (output.trim () === "") {
        alert("No hay ningún texto para desencriptar.");
        decryptArea__assets.style.display = "block";

        } else {
            decryptArea__assets.style.display = "none";
            copyBtn.style.display = "block";

            for (let i = 0; i < output.length; i++) {
            let charCode = output.charCodeAt(i);
            decryptedText += String.fromCharCode(charCode - 1);
            }
        
            document.getElementById("resultText").innerText = decryptedText;
        }
});

//Usamos la Clipboard API para copiar ya que el metodo "select()" no funciona en elementos <p>.
document.getElementById("copyBtn").addEventListener("click", function() {
    let copyText = document.getElementById("resultText").innerText;

    navigator.clipboard.writeText(copyText).then(() => {
        alert ("Texto copiado al portapapeles.")
    }).catch (function(error) {
        alert ("Error al copiar el texto. Inténtalo de nuevo.", error);
    })
})
    