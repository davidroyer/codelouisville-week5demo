/**
 * Mocks sending the id of the element clicked to analytics
 */
function sendToAnalytics (value) {
  alert(`Sent This value To Analytics -> ${value}`)
}

/**
 * Get the relevant data from the element so it can be sent to analytics
 */
function getAnalyticsInfo (element, valueName) {
  return element.getAttribute(valueName)
}

/**
 * Adds the click event listener and gets the value from the analytics function
 * Note: `this` is equal to the current `button` element
 */
function trackClickedButtons (buttonsArray) {
  buttonsArray.forEach((button) => {
    button.addEventListener('click', function (clickEvent) {
      var value = getAnalyticsInfo(this, 'id')
      sendToAnalytics(value)
    })
  })
}

// Get a reference to all matching elements we want to track clicks on
var ctaButtonsList = document.querySelectorAll('.button-cta')

// Pass this Array of matching elements as an `argument` to the function
trackClickedButtons(ctaButtonsList)
