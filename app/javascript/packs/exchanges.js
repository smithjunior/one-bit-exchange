document.addEventListener('turbolinks:load', (event) => {
  document.querySelector('#exchange_form').addEventListener('ajax:success', (event) => {
    const [result] = event.detail
    document.querySelector('#result').value = result.value
  })
})
