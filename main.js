function zipcodeSearch() {
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
          zipcodeResult.innerHTML = data.cep
          streetResult.innerHTML = data.street
          neighborhoodResult.innerHTML = data.neighborhood
          cityResult.innerHTML = data.city
          stateResult.innerHTML = data.state
        }
        btnSearch.textContent = 'Buscar CEP'
      })

    document.getElementById('zipcodeSearch').value = ''
  }
}
