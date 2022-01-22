function cifraCesarCriptografar() {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var frase = document.getElementById('frase').value.toLowerCase();
    var deslocamento = document.getElementById('chave').value;
    var x = parseInt(deslocamento);
    var keep = [];

    for (var i = 0; i < frase.length; i++) {
        if (frase[i] != ' ') {
            for (var j = 0; j < alfabeto.length; j++) {
                if (frase[i] == alfabeto[j]) {
                    keep[i] = alfabeto[(j + x) % alfabeto.length];
                }
            }
        } else {
            keep[i] = ' ';
        };
    };

    let codigo = keep.join("");
    document.getElementById('resultado').innerHTML = `A mensagem codificada é : ${codigo}`
};

function base64cript() {
    var strg = "";
    var strg = document.getElementById('fraseAlt').value;
    var embase64 = btoa(strg);
    document.getElementById('resultadoAlt').innerHTML = `A mensagem codificada é : ${embase64}`
};

function base64decript() {
    var strg = "";
    var strg = document.getElementById('fraseAlt').value;
    var debase64 = atob(strg);
    document.getElementById('resultadoAlt').innerHTML = `A mensagem decodificada é : ${debase64}`
};

function cifraCesarCriptografarAlt() {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var frase = document.getElementById('frase').value.toLowerCase();
    var deslocamento = document.getElementById('chave').value;
    var x = parseInt(deslocamento);
    var keep = [];
    var novoDeslocamento = alfabeto.length - (x % alfabeto.length);

    for (var i = 0; i < frase.length; i++) {
        if (frase[i] != ' ') {
            for (var j = 0; j < alfabeto.length; j++) {
                if (frase[i] == alfabeto[j]) {
                    keep[i] = alfabeto[(j + novoDeslocamento) % alfabeto.length];
                }
            }
        } else {
            keep[i] = ' ';
        };
    };
    let codigo = keep.join("");
    document.getElementById('resultado').innerHTML = `A mensagem decodificada é : ${codigo}`
};

function mostraDiv(select) {
    if (select.value == 'cifracesaropt') {
        document.getElementById('cifraCesar').style.display = "block";
        document.getElementById('base64').style.display = "none";

        var radioCesar = document.getElementById('cifraCesarCript');
        var radioCesarAlt = document.getElementById('cifraCesarDecript');
        var radio1 = document.getElementById('cifraCesarCriptRadio');

        function radioClick() {
            if (radio1.checked) {
                radioCesar.style.display = 'block';
                radioCesarAlt.style.display = 'none';

            } else {
                radioCesar.style.display = 'none';
                radioCesarAlt.style.display = 'block';
            }
        }

        const radioButtons = document.querySelectorAll("input[name='cifraCesarName']");
        radioButtons.forEach(radio => {
            radio.addEventListener('change', radioClick);
        });

    } else if (select.value == 'base64opt') {
        document.getElementById('cifraCesar').style.display = "none";
        document.getElementById('base64').style.display = "block";

        var radioBase64 = document.getElementById('base64criptada');
        var radioBase64Alt = document.getElementById('base64decriptada');
        var radio2 = document.getElementById('base64criptadaRadio');

        function radioClickB() {
            if (radio2.checked) {
                radioBase64.style.display = 'block';
                radioBase64Alt.style.display = 'none';

            } else {
                radioBase64.style.display = 'none';
                radioBase64Alt.style.display = 'block';
            }
        }

        const radioButtons = document.querySelectorAll("input[name='base64']");
        radioButtons.forEach(radio => {
            radio.addEventListener('change', radioClickB);
        });

    } else {
        document.getElementById('cifraCesar').style.display = "none";
        document.getElementById('base64').style.display = "block";
    }
};
    