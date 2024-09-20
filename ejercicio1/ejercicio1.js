// https://thronesapi.com/api/v2/Characters

const charactersList = document.querySelector("#character-list")
const characterImage = document.querySelector(".character-image")


const charactersAsync = async () => {
    
    try {
        const res = await fetch('https://thronesapi.com/api/v2/Characters');
        const characters = await res.json();
        console.log(characters);

        for (const character of characters) {
            
            const characterName = document.createElement("h1");
            characterName.textContent = `${character.firstName}, ${character.lastName}`;

            const characterImage = document.createElement("img");
            characterImage.src = character.imageUrl;
        
            charactersList.insertAdjacentElement("beforebegin", characterName);

            charactersList.innerHTML = characters;
        }
        
    } catch(err) {
        console.error("That character doesn't exist");
    }
}

charactersAsync();


/* const charactersNormal = fetch('https://thronesapi.com/api/v2/Characters')
.then ((res) => {
    return res.json()
    .then ((data) => {
        console.log(data);
    })
.catch ((err) => {
    console.error(err);
}) 
}) */