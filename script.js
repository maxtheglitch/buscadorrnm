const characterEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');
const statusFilterEl = document.getElementById('status-filter');
const genderFilterEl = document.getElementById('gender-filter');

async function getCharacters(name,status,gender){
    let url ='https://rickandmortyapi.com/api/character/';
    if(name||status||gender){
        url+='?';
        if(name){
            url+=`name=${name}&`;
        }
        if(status){
            url+=`status=${status}&`;
        }
        if(gender){
            url+=`gender=${gender}`;
        }
      
    }
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
    

}
async function displayCharacters(name,status,gender) {
    const characters = await getCharacters(name, status,gender);
    characterEl.innerHTML='';
    for(let character of characters){
        const card = document.createElement('div');
        card.classList.add('character-card');
        //console.log(`cadena de caracteres ${character.name}`)
        //console.log('cadena '+character.name)
        card.innerHTML = `
            <img src="${character.image}"/>
            <h2> ${character.name} </h2>
            <p> Status: ${character.status}</p>
            <p> Especie: ${character.species}</p>
            <p> Genero: ${character.gender}</p>
            
        `;
        characterEl.appendChild(card);
        
    }
}
displayCharacters()

nameFilterEl.addEventListener('input', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value, genderFilterEl.value);
});
statusFilterEl.addEventListener('change', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value, genderFilterEl.value);
})
genderFilterEl.addEventListener('change', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value, genderFilterEl.value);
})