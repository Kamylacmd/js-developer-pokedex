// 1 - Alterar tabela
const about = document.querySelector('#about');
const baseStatus = document.querySelector('#base-status');

const tableCharacteristics = document.querySelector('.table-characteristics');
const tableBase = document.querySelector('.table-base');
tableBase.style.display = 'none';

baseStatus.addEventListener('click', () => {
    tableBase.style.display = 'flex';
    tableCharacteristics.style.display = 'none';
});

about.addEventListener('click', () => {
    tableBase.style.display = 'none';
    tableCharacteristics.style.display = 'flex';
});

// 2 - Adicionar as informações do pokemon no card de acordo com o pokemon clicado
function tableCharacteristicsTr(pokedex) {
    return`
        <tr>
            <td class="text">Experiência</td>
            <td class="result">${pokedex.experience}</td>
        </tr>
        <tr>
            <td class="text">Altura</td>
            <td class="result">${pokedex.height}</td>
        </tr>
        <tr>
            <td class="text">Peso</td>
            <td class="result">${pokedex.weight}</td>
        </tr>
    `
}

function tableBaseTr(pokedex) {
    return pokedex.stats.map((stat) => `
        <tr>
            <td class="text">${stat.name}</td>

            <td class="result">
                <div class="progress-bar">
                    <div class="bar">
                        <div
                            class="progress"
                            style="width:${stat.value}%">
                        </div>
                    </div>

                    <span>${stat.value}</span>
                </div>
            </td>
        </tr>
    `).join('');
}

function renderPokemonDetails(pokemon) {

    const card = document.querySelector('#cardPokemonDetails');

    card.classList.remove(
        'normal', 'grass', 'fire', 'water', 'electric',
        'ice', 'fighting', 'poison', 'ground', 'flying',
        'psychic', 'bug', 'rock', 'ghost', 'dragon',
        'dark', 'steel', 'fairy'
    );

    card.classList.add(pokemon.type);

    document.querySelector('.pokemon-names .number').textContent =
        `#${pokemon.id}`;

    document.querySelector('.pokemon-names h2').textContent =
        pokemon.name;

    document.querySelector('.pokemon-names .types').innerHTML =
        pokemon.types.map(type =>
            `<li class="type">${type}</li>`
        ).join('');

    document.querySelector('#cardPokemonDetails .pokemon-image').src =
        pokemon.photo;

    document.querySelector('#cardPokemonDetails .pokemon-image').alt =
        pokemon.name;

    document.querySelector('.table-characteristics').innerHTML =
        tableCharacteristicsTr(pokemon);

    document.querySelector('.table-base').innerHTML =
        tableBaseTr(pokemon);
}

// 3 - Adicionar o botão de fechar o card
const close = document.querySelector('#close');

close.addEventListener('click', () => {
    const telaEscura = document.querySelector('#tela_escura');
    const cardDetails = document.querySelector('#cardPokemonDetails');
    telaEscura.style.display = 'none';

    cardDetails.removeAttribute('data-aos');
    cardDetails.classList.remove('aos-animate');
});