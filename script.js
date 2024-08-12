const btnEl = document.getElementById('btn');
const res = document.getElementById("res")
const resul = document.getElementById("masse-corporelle");


function calcule() {
    const taillEl = document.getElementById('taille').value;
    const poidsEl = document.getElementById('poid').value;

    const imc = poidsEl / (taillEl *taillEl);

    res.value =imc

    if(imc < 18.5) {
        resul.innerHTML ="VOUS ETRE EN INSUFFISANCE PONDERALE.  L'IMC, ou Indice de Masse Corporelle, est une mesure utilisée pour évaluer la corpulence d'une personne. Il est calculé en divisant le poids (en kilogrammes) par la taille (en mètres) au carré."
    } else if(imc >= 18.5 && imc <=24.9) {
        resul.innerHTML ="VOTRE POID EST NORMAL.  L'IMC, ou Indice de Masse Corporelle, est une mesure utilisée pour évaluer la corpulence d'une personne. Il est calculé en divisant le poids (en kilogrammes) par la taille (en mètres) au carré."
    }
    else if(imc >= 25 && imc <=29.9) {
        resul.innerHTML ="VOUS ETRE EN SURPOID. L'IMC, ou Indice de Masse Corporelle, est une mesure utilisée pour évaluer la corpulence d'une personne. Il est calculé en divisant le poids (en kilogrammes) par la taille (en mètres) au carré."
    } else if(imc >= 30){
        resul.innerHTML ="VOUS ETRE EN OBESITE.  L'IMC, ou Indice de Masse Corporelle, est une mesure utilisée pour évaluer la corpulence d'une personne. Il est calculé en divisant le poids (en kilogrammes) par la taille (en mètres) au carré."
    }
}

btnEl.addEventListener('click', calcule);