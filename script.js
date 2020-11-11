//$ Pull items from the DOM
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

//$ Show input error message
/**
 * Adds `.error` class to parent element of `input`, so that a red border is added to the form field and a specified error `message` is applied underneath the field
 * @param {string} input Form field ID (username, email, password, etc)
 * @param {string} message The desired error message to be displayed under the form field
 */
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

//$ Show input success message
/**
 * Adds `.success` class to parent element of `input`, so that a green border is added to the form field
 * @param {string} input Form field ID (username, email, password, etc)
 */
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

//$ Regex check for valid email
/**
 * Validates that the `input` matches the format of an email address, such as: `example@domain.tld`
 * @param {string} input Email address
 */
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, 'Email is not valid')
  }
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

//$ Check input length
/**
 * Checks if a string's length is greater than a min value, and less than or equal to a max value
 * @param {string} input String to be evaluated for char length
 * @param {number} minLength Minumum allowed length of input
 * @param {number} maxLength Maximum allowed length of input
 * @returns Error on invalid `input` length, success on valid `input` length
 */
function checkLength(input, minLength, maxLength) {
  if (input.value.length < minLength) {
    showError(input, `${capitalizeWord(input)} must be at least ${minLength} characters`)
  } else if (input.value.length >= maxLength) {
    showError(input, `${capitalizeWord(input)} cannot be longer than ${maxLength} characters`)
  } else {
    showSuccess(input)
  }
}

//$ Check for matching passwords
/**
 * Validates if `Password` and `Confirm Password` fields match
 * @param {string} input1 Password field
 * @param {string} input2 Password confirmation field
 */
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match')
  }
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
  checkLength(username, 3, 63)
  checkLength(password, 8, 63)  
  checkEmail(email)
  checkPasswordsMatch(password, password2)
})
