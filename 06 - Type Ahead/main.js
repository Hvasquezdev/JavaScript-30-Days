const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];

const defaultHtml = `
  <li>Filter for a city</li>
  <li>or a state</li>`;
const searchInput = document.querySelector('.search');
const searchButton = document.querySelector('.btn');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data))
  .catch(err => console.error(err));

function findMatches (wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

function displayMatches () {
  const matchArray = findMatches(this.value, cities);

  if(this.value !== '') {
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${place.population}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  } else {
    suggestions.innerHTML = defaultHtml;
  }

}

function clearInput() {
  searchInput.value = '';
  suggestions.innerHTML = defaultHtml;
}



searchInput.addEventListener('keyup', displayMatches);
searchButton.addEventListener('click', clearInput);