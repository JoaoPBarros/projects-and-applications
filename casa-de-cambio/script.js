const handleRates = (rates) => {
	console.log(rates);
	const currencyList = document.querySelector('#currency-list');

	const entries = Object.entries(ratesData.rates);
	entries.forEach((array) => {
		const [currency, rate] =array;

		const li = document.createElement('li');
		li.innerHTML = `<strong>${currency}:</strong> ${rate.toFixed(2)}`

		currencyList.appendChild(li);
	});
}

const fetchCurrency = (currency) => {
	const endpoint = `https://api.rates.io/api/latest?base=${currency}`;

	fetch(endpoint)
		.then((response) => response.json())
		.then((object) => {
			if (object.error) {
				throw new Error(object.error);
			}

			handleRates(object);
		})
		.catch((error) => {
			window.alert(error);
		});
}

const fetchCurrencyAsyncAwait = async (currency) => {

	const endpoint = `https://api.rates.io/api/latest?base=${currency}`;

	try {
		const response = await fetch(endpoint);
		const object = await response.json();
	} catch (error) {
		window.alert(error);
	}


}

const handleSearchEvent = () => {
	/* Capturar o local do texto/input */
	const searchInput = document.querySelector('#currency-input');

	/* Capturar o valor escrita pelo usuário e setar em caixa alta */
	const currency = searchInput.value.toUpperCase();

	fetchCurrencyAsyncAwait(currency);
}

const setupEvents = () => {
	/* Capturar o botão */
	const searchButton = document.querySelector('#search-button');

	/* Adicionar o evento de click para retornar algo */
	searchButton.addEventListener('click', handleSearchEvent);
}

window.onload = () => {
  setupEvents();
}
