alert('TEST')
function sendToAnalytics (id) {
  alert('Sent This ID To Analytics -> '.concat(id))
}

function trackClickedButtons (buttonsArray) {
  buttonsArray.map(function (button) {
    button.addEventListener('click', function (clickEvent) {
      sendToAnalytics(this.id)
    })
  })
}

var ctaButtonsList = document.querySelectorAll('.button-cta')
var ctaButtonsArray = Array.from(ctaButtonsList)
trackClickedButtons(ctaButtonsArray)
