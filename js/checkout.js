const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || []; 

const buttonDown = document.getElementById('down');

const postUrlAPI = "http://localhost:3000/api/teddies/order";

const totalCartCost = document.getElementById('finalCheckout');
let teddyTotalPrice = 0;
function teddyGet() {   // Fonction principale pour l'affichage du panier
    
    let title = document.querySelector('#checkoutTitle');

    let teddyContainer = document.getElementById('teddyContainer');

    let finalCheckout = 0;

    if(!cartItems.length) { // Si le panier (localStorage) est vide
        // On crée du contenu HTML et on modifie l'affichage de la page
        title.textContent = 'Oups ! Votre panier est vide, merci de vous rendre à la page principale et séléctionner un teddy à personnaliser !';
                document.getElementById('viderPanier').style.display="none";
                document.getElementById('finalPrice').style.display="none";
                document.getElementById('container').style.paddingBottom="0";
                document.getElementById('container').style.minHeight="80vh";
                document.querySelector('#container').style.display="flex";
                document.querySelector('.hiddenOnForm').style.justifySelf="center";
                document.querySelector('.hiddenOnForm').style.margin='auto';

    } else {    // Par contre s'il y a du contenu dans le panier

        title.textContent = 'Votre panier :';

        cartItems.forEach(cartItem => {     // Pour chaque item présent dans le panier
            // On déclare et on calcule le prix total pour chaque item
            let totalPrice = (cartItem.quantity * cartItem.price);

            // Création du contenu HTML du panier
            teddyContainer.innerHTML += `
                <div class="mainContainer">
                    <div class="teddyImg">
                        <img src="${cartItem.imageURL}" alt="Image de l'ours en peluche ${cartItem.name}"/>
                    </div>
                        <div class="teddyName">
                            <h2 class="teddyNameTitle">
                                ${cartItem.name}
                            </h2>
                        </div>

                        <div class="teddyColor">
                            <p> Couleur : ${cartItem.color} </p>
                        </div>

                        <div class="teddyQuantity">
                            <button 
                                type="button"
                                id="up";
                                class="btn-up">
                                <i class="fas fa-angle-up">
                                </i>
                            </button>
                            <p> Quantité : <span class="test">${cartItem.quantity}</span></p>
                            <button 
                                type="button"
                                id="down";
                                class="btn-down">
                                <i class="fas fa-angle-down"></i>
                            </button>
                        </div>

                        <div class="teddyPrix">
                            <p class="teddyPrice"> Prix unitaire : ${cartItem.price} € </p>
                        </div>
                    <div class="TeddyTotalPrice">
                        <h3 class="TeddyTotalPrice-Title">Prix total pour cet article</h3>
                        <p><span class="TeddyTotalPrice-Amount">${cartItem.quantity * cartItem.price}</span> €</p>
                    </div>
                </div>`;  

                // Malheureusement je n'ai pas encore réussi à coder l'incrémentation des quantités du panier
                let buttonsUp = document.querySelectorAll('.btn-up');
                buttonsUp.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Bouton non fonctionnel pour le moment !", "Promis, le développeur y travaille", "error")
                });                
             });
             // Donc ça ne fonctionne ni pour + ni pour -
             let buttonsDown = document.querySelectorAll('.btn-down');
                buttonsDown.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Bouton non fonctionnel pour le moment !", "Promis, le développeur y travaille", "error")
                });                
             });

        });     // récupération des prix totaux de chaque item du panier
                const TeddiesTotalPrice = [...document.getElementsByClassName('TeddyTotalPrice-Amount')];
                // Loop pour chaque prix total dans le panier
                TeddiesTotalPrice.forEach(teddy => {
                    teddyTotalPrice = parseInt(teddy.innerHTML, 10);   
                     // Ceci nous permet de récupérer un "number" au lieu d'un "string"

                    finalCheckout += teddyTotalPrice;   
                })

                totalCartCost.innerHTML = finalCheckout + ' €';     // Affichage du prix total du panier
    }
}

/* Petite fonction permettant de vider le panier */
function emptyCart() {
        swal.setActionValue({confirm: false, cancel: true})
        swal({
            title: 'Êtes vous sur ?',
            text: "Vous ne pourrez pas faire machine arrière",
            icon: 'warning',
            buttons: {cancel: true, confirm: "Confirmer"},  // En cliquant sur le bouton "vider le panier" on nous donne 2 options
            dangerMode: true,
        }).then((result) => {
            if (result.false) {     // Si la personne clique sur "annuler"
                swal('Vidage du panier annulé', '', 'success')
        } else {    // Sinon, on vide le localStorage et on recharge la page
                localStorage.clear();
                location.reload();
        }
    })
}

// Fonction qui se déclenche quand on clique sur "confirmer le panier"
function confirmCart() {  // Permet de cacher tout le contenu de la page et d'afficher uniquement le formulaire
    document.getElementById("form").style.display="block";
    document.querySelector(".hiddenOnForm").style.display="none";
    document.querySelector('#container').style.backgroundColor="#f2f2f2";
}

// Fonction qui se déclenche à la fermeture du formulaire
function closeForm() {  // Fait l'inverse de confirmCart() 
    document.getElementById("form").style.display="none";
    document.querySelector(".hiddenOnForm").style.display="block";
    document.querySelector('#container').style.backgroundColor="rgb(228, 214, 214)";
  }
  
  
    let form = document.getElementById('postData'); // Déclaration du formulaire, servira pour la validation
  

/************************** FORMULAIRE *******************************/

    // stockage des différentes regEx dans des variables
    let myRegexText = /^[a-zA-Z][A-Za-z-\s]+$/;
    let myRegexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    let myRegexAddress = /^[0-9]{1,5}( [-a-zA-Zàâäéèêëïîôöùûüç]+)+$/;
        
    //on récupère le formulaire depuis le fichier HTML
    let gbId = (id) => document.getElementById(id);
    //on appelle toutes les fonctions créées plus bas
    gbId('firstName').addEventListener('change', function () {
        validateInput(this, myRegexText, 'firstName', 'Erreur dans la saisie du Nom');
    });

    gbId('lastName').addEventListener('change', function () {
        validateInput(this, myRegexText, 'LastName', 'Erreur dans la saisie du Prénom (pas de chiffres)'
        );
    });

    gbId('address').addEventListener('change', function () {
        validateInput(this, myRegexAddress, 'address', 'Mmmh, vous êtes sûr ? (numéro de voie + nom de la voie)'
        );
    });

    gbId('city').addEventListener('change', function () {
        validateInput(this, myRegexText, 'city', 'Problème dans la saisie');
    });

    gbId('email').addEventListener('change', function () {
        validateInput(this, myRegexEmail, 'email', 'Adresse non valide');
    });

 // création d'un variable par input qui contient un test qui vérifie s'il y a une correspondance entre un texte et une expression
 function validateInput(input, regex, name, errorMessage) {
    testInput = regex.test(input.value);
    let small = input.nextElementSibling;
    if (testInput == true) {
        small.innerHTML = name + ' bien enregistré';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
    } else {
        small.innerHTML = errorMessage;
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
}
/****************************************/

/**************** Envoie data ********************/

    //création class Contact

    let contact;
    let order;
    let testInput;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (testInput == false) {
            e.preventDefault();
        } else if ((contact = '')) {
            e.preventDefault();
        } else {
            let contact = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                address: form.address.value,
                city: form.city.value,
                email: form.email.value,
            };
            let products = [];
            products = cartItems.map(item => item.id);
            console.log(products);


            let order = {
                contact: contact,
                products: products,
            };

            sendOrder(order);
    }
    });

function sendOrder(order) {
    const options = {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch('http://localhost:3000/api/teddies/order', options)
    .then((res) => res.json())
    .then((res) => {
        let totalPrice = teddyTotalPrice;
        let objectSessionStorage = {
            prix: totalPrice,
            prenom: form.lastName.value,
            orderId: res.orderId,
        };

        let confirmation = JSON.stringify(objectSessionStorage);
        sessionStorage.setItem('infoCustomer', confirmation);
        window.location = 'confirmed-page.html';
    });
}    
