// DOM Caching
const pokeContainer = document.querySelector('.pokemon-container');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const modal = document.querySelector('#modal');
const modalImg = document.querySelector('#modalImage');
const overlay = document.querySelector('#overlay');
const closeModalBtn = document.querySelector('#closeModal');

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
        newDiv.dataset.name = pokemon.name;
        newDiv.innerHTML = `
            <img src=${imgSrc} alt=${pokemon.name} />
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

//모달 열기 함수
const openModal = async (pokemonName) => {
    modal.style.display = 'flex';
    overlay.style.display = 'flex';
    const response = await fetch(`${url}/${pokemonName}`);
    const pokemonData = await response.json()

    console.log(pokemonData.sprites.front_default)
    modalImg.src = pokemonData.sprites.front_default;
    modal.style.display = 'flex';
}
//모달 닫기 함수
const closeModal = () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
//모달 닫기 버튼 클릭 이벤트
closeModalBtn.addEventListener('click', closeModal);

//포콧몬을 클릭하면 실행할 이벤트
pokeContainer.addEventListener('click', (event) => {
    // 1. Find the nearest ancestor with the class 'pokemon'
    const pokemonCard = event.target.closest('.pokemon');
    // 2. Guard clause: If the click wasn't inside a .pokemon card, exit early
    if (!pokemonCard) return;

    const pokemonName = pokemonCard.dataset.name;
    openModal(pokemonName);
})

// 무한 스크롤링 옵저버 설정

// 초기 실행 코드
getPokemon();