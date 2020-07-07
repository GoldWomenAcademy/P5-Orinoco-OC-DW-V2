const urlAPI = "http://localhost:3000/api/teddies";

test('the data is teddies', async() => {
    async function getTeddies() { 
        let response = await fetch(urlAPI); 
        let data = await response.json() 
        await expect (data()).toBe([
            {
                "colors": [
                    "Tan",
                    "Chocolate",
                    "Black",
                    "White"
                ],
                "_id": "5be9c8541c9d440000665243",
                "name": "Norbert",
                "price": 2900,
                "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
                "description": "azrmofi ham oiahz fmoasihfasmdoi fhadsmofi hasmo ifahdsmo fiasdh miodash"
            },
            {
                "colors": [
                    "Pale brown",
                    "Dark brown",
                    "White"
                ],
                "_id": "5beaa8bf1c9d440000a57d94",
                "name": "Arnold",
                "price": 3900,
                "imageUrl": "http://localhost:3000/images/teddy_2.jpg",
                "description": "amoif  azomifhazoeimfhazeoi zeoifh ozimf hazeoimfehzoifhaz"
            },
            {
                "colors": [
                    "Brown"
                ],
                "_id": "5beaaa8f1c9d440000a57d95",
                "name": "Lenny and Carl",
                "price": 5900,
                "description": "sdamoifh asd fomiazhf mozihfomzif hamozihefo miazh fmoaizh ",
                "imageUrl": "http://localhost:3000/images/teddy_3.jpg"
            },
            {
                "colors": [
                    "Brown",
                    "Blue",
                    "Pink"
                ],
                "_id": "5beaabe91c9d440000a57d96",
                "name": "Gustav",
                "price": 4500,
                "imageUrl": "http://localhost:3000/images/teddy_4.jpg",
                "description": "oamsih azmo ihzaefmo iazehfmo iazeomfihaz ioza "
            },
            {
                "colors": [
                    "Beige",
                    "Tan",
                    "Chocolate"
                ],
                "_id": "5beaacd41c9d440000a57d97",
                "name": "Garfunkel",
                "price": 5500,
                "description": "asdfmio a zmeofihazeoimfhazeomifh maoziehf maoizhe moaziehf moiazeh omzefh ",
                "imageUrl": "http://localhost:3000/images/teddy_5.jpg"
            }
        ])
        }
    })


