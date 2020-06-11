/**
 * Mocks sending the id of the element clicked to analytics
 */
function trackClickedElement (id) {
  alert(`Sent This ID To Analytics -> ${id}`)
}

/**
 * @function
 * Adds the click event listener and sends the `id` to the analytics function
 * @param {array} buttonsArray
 */
function trackClickedButtons (buttonsArray) {
  buttonsArray.map(button => {
    button.addEventListener('click', function (clickEvent) {
      trackClickedElement(this.id)
    })
  })
}

function handleLinkAnalytics (linksArray) {
  linksArray.map(link => {
    link.addEventListener('click', function (clickEvent) {
      trackClickedElement(this.href)
    })
  })
}

const ctaButtonsList = document.querySelectorAll('.button-cta')
const ctaButtonsArray = Array.from(ctaButtonsList)
trackClickedButtons(ctaButtonsArray)

const footerLinksList = document.querySelectorAll('.footer-links a')
const footerLinksArray = Array.from(footerLinksList)
handleLinkAnalytics(footerLinksArray)
