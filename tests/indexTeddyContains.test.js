const urlAPI = "http://localhost:3000/api/teddies";         // Déclaration de l'Url de l'api
const teddyAppend = document.getElementById("mainPage");

test('The information being appended === what is in the API', () => {
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
                expect(teddy.name()).toContain("test")
                expect(teddy._id()).toContain("5be9c8541c9d440000665243")
                expect(teddy.colors()).toContain("White")
                expect(teddy.price()).toContain("2900")
                expect(teddy.description()).toContain("azrmofi ham oiahz fmoasihfasmdoi fhadsmofi hasmo ifahdsmo fiasdh miodash")
                expect(teddy.imageUrl()).toContain("http://localhost:3000/images/teddy_1.jpg")
            })                                                      
        })
    return data;
    }
})
