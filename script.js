// Pull items from the DOM
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

// Show input success message
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// Valid email evaluator
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

// Event Listeners
form.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(username.value) //?

  // Username validation controller
  if (username.value === '') {
    showError(username, 'Username is required')
  } else {
    showSuccess(username)
  }

  // Email validation controller
  if (email.value === '') {
    showError(email, 'Email is required')
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Please enter a valid email')
  } else {
    showSuccess(email)
  }

  // Password validation controller
  if (password.value === '') {
    showError(password, 'Password is required')
  } else {
    showSuccess(password)
  }

  // Password validation controller
  if (password2.value === '') {
    showError(password2, 'Password is required')
  } else {
    showSuccess(password2)
  }
})
