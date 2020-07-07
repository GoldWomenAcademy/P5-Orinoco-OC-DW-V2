// Déclaration de l'Url de l'api
const urlAPI = "http://localhost:3000/api/teddies";   
      
const teddyAppend = document.getElementById("mainPage");

async function getTeddies() {                       // Création d'une fonction asynchrone
    let response = await fetch(urlAPI);           // La réponse de cette fonction est d'attendre la réponse (en json) de l'api
    let data = await response.json()                // Une fois qu'on a la réponse on peut la déclarer (data)
    .then((data) => {
        data.forEach((teddy) => {                   // Pour chaque teddy dans data on va créer du contenu HTML
            const { name, _id, colors, price, description, imageUrl } = teddy      // Déclaration de teddy comme objet
            teddyAppend.innerHTML +=
            `<div class="${name}">
                <h3 class="teddyName">${name}</h3>
                <ul class="teddyInfo">
                    <li id="price">Prix: ${price/100}€</li> 
                </ul> 
                <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                <button onclick='location.href="product-page.html?id=${_id}"' type="button" id="btnCustom"><i class="fas fa-cog"></i>Personnaliser mon teddy</button>
            </div>`;         
                                               // Cette partie de récupération de l'id est très
                                                     // importante pour la page suivante
        })                                                      
    })
    return data;
}

window.onload = () => {                 // Force le lancement de la fonction getTeddies() au chargement de la page
    getTeddies();
}





