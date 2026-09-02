// DOM Caching
const pokeContainer = document.querySelector('.pokemon-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

// 전역 변수 선언
const url = 'https://pokeapi.co/api/v2/pokemon';
let offset = 0;
let limit = 40;
let pokeCount = 0;

// 함수 정의
const renderPokemonList = async (pokemonList) => {

    const detailList = await Promise.all(
        pokemonList.map(pokeData =>
            fetch(pokeData.url).then(response => response.json()))
    );

    for (const pokemon of detailList) {

        const imgSrc = pokemon.sprites.front_default;

        const newDiv = document.createElement('div');
        newDiv.classList.add('pokemon');
        newDiv.innerHTML = `
            <img src=${imgSrc} alt="pokemon image">
            <h3>${pokemon.name}</h3>
        `;

        pokeContainer.append(newDiv);
    }
};

async function getPokemon() {

    const response = await fetch(url + `?offset=${offset}&limit=${limit}`);
    const { count, results } = await response.json();
    pokeCount = count;

    renderPokemonList(results);

}

//다음 버튼 클릭 이벤트
prevBtn.addEventListener('click', () => {
    console.log('clicked next');
    offset -= limit;
    if (offset <= 0) {
        prevBtn.disabled = true;
    }
    pokeContainer.innerHTML = '';
    getPokemon();
});

nextBtn.addEventListener('click', () => {
    prevBtn.disabled = false;
    offset += limit;
    if (offset > pokeCount) {
        nextBtn.disabled = true;
    }
    pokeContainer.innerHTML = '';
    getPokemon();
});

// 초기 실행 코드
getPokemon();