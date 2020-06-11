document.addEventListener('turbolinks:load', (event) => {
  const amountField = $('#amount')
  const buttonReverse = $('#buttonReverse')

  const convert = async (event) => {
    event.preventDefault()

    const amount = $('#amount').val()

    if (!amount || amount === '') {
      $('input#result').val('resultado')
      return true
    }

    const sourceCurrency = $('#source_currency').val()
    const targetCurrency = $('#target_currency').val()

    await $.get(`/convert?amount=${amount}&source_currency=${sourceCurrency}&target_currency=${targetCurrency}`, (data) => {
      $('input#result').val(data.value)
    })

    return true
  }

  const revert = (event) => {
    const sourceCurrency = $('#source_currency')
    const targetCurrency = $('#target_currency')

    const sourceCurrencyValue = sourceCurrency.val()
    const targetCurrencyValue = targetCurrency.val()

    sourceCurrency.val(targetCurrencyValue)
    targetCurrency.val(sourceCurrencyValue)

    convert(event)
  }

  $('select').on('change', convert)

  amountField.on('keyup', convert)
  buttonReverse.on('click', revert)
})
