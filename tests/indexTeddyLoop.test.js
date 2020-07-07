const urlAPI = "http://localhost:3000/api/teddies";         // Déclaration de l'Url de l'api
const teddyAppend = document.getElementById("mainPage");

test('There are 5 teddies', () => {
    async function getTeddies() {                       // Création d'une fonction asynchrone
    let response = await fetch(urlAPI);           // La réponse de cette fonction est d'attendre la réponse (en json) de l'api
    let data = await response.json()                // Une fois qu'on a la réponse on peut la déclarer (data)
    expect(data).toHaveLength(3);
    }
})
