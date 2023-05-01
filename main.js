function zipcodeSearch() {
  let result = document.querySelector('.resultSearch')
  let zipcode = document.getElementById('zipcodeSearch').value
  if (zipcode === '') {
    alert('Não foi informado nenhum CEP para pesquisa.')
  } else {
    const urlApi = `https://brasilapi.com.br/api/cep/v1/${zipcode}`

    btnSearch.textContent = 'Pesquisando'

    fetch(urlApi)
      .then(response => response.json())
      .then(data => {
        if (data.cep === undefined) {
          alert('O CEP informado não existe ou é inválido.')
        } else {
          result.innerHTML = `
            <p id="zipcodeText">
              CEP: <span id="zipcodeResult">${data.cep}</span>
            </p>
            <p id="streetText">
              Logradouro: <span id="streetResult">${data.street}</span>
            </p>
            <p id="neighborhoodText">
              Bairro: <span id="neighborhoodResult">${data.neighborhood}</span>
            </p>
            <p id="cityText">
              Cidade: <span id="cityResult">${data.city}</span>
            </p>
            <p id="stateText">
              UF: <span id="stateResult">${data.state}</span>
            </p>
          `
        }
        btnSearch.textContent = 'Buscar CEP'
      })

    document.getElementById('zipcodeSearch').value = ''
  }
}
