//$ Pull items from the DOM
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

//$ Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

//$ Show input success message
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//$ Regex check for valid email
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

/**
 *
 * @description Checks if required form fields are empty or not, displays success on non-trivial fields, displays error on empty fields
 * @param {Array} inputArr Array contains "required" form fields
 * */
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${capitalizeWord(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

/**
 * @description Takes in a string and uppercases the first letter only
 * @param {string} input Form field input name
 * @example
 *      "string" --> "String"
 *      "only the first character gets capitalized" --> "Only the first character gets capitalized"
 * @returns Capitalized string
 */
function capitalizeWord(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//$ Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()

  checkRequired([username, email, password, password2])
})
