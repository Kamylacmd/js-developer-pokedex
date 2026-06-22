const pokemonList = document.getElementById('pokemonsCardsOl');
const loadMoreButton = document.getElementById('load-more');
const limit = 15;
let offset = 0;
const maxRecords = 151;

function pokemonCards(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onclick="openPokemonDetails(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
                
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `

}

const pokemonsCardsOl = document.getElementById('pokemonsCardsOl');

pokemonsCardsOl.addEventListener('click', (event) => {
  if (event.target.closest('.pokemon')) {
        const telaEscura = document.querySelector('#tela_escura');
        const cardDetails = document.querySelector('#cardPokemonDetails');
        telaEscura.style.display = 'flex';

        cardDetails.setAttribute('data-aos', 'flip-right');
        cardDetails.classList.remove('aos-animate');

        AOS.refreshHard();

        setTimeout(() => {
        cardDetails.classList.add('aos-animate');
        }, 50);
    }
});


function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => { 
    pokemonsCardsOl.innerHTML += pokemonList.map((pokemon) =>
        pokemonCards(pokemon)).join('')
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecords = offset + limit;

    if (qtdRecords >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else{
        loadPokemonItens(offset, limit);
    }

})

loadPokemonItens(offset, limit)
