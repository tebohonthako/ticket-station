
const signUp = async (company,email,contact, password) => fetch(
    'https://dummyjson.com/auth/login',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            company: company,
            contact: contact,
            email: email,
            password: password
            // expiresInMins: 60, // optional
        })
    })
    .then(res => res.json())
    .then(response => handleSuccessfulSignUp(response));

function handleSuccessfulSignUp(data) {
    console.log(data)

    localStorage.setItem('useData', JSON.stringify(data))

    window.location.replace('./')
}


function handleSubmit (event) {
    event.preventDefault()

    const companyName = document.querySelector('#companyName')
    const firstName =document.querySelector('#name')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#passwordConfirm')

    console.log('handle submit', companyName.value, firstName.value, email.value, password.value, confirmPassword.value)


    const errorMessage = validateForm();

    if(errorMessage.trim() === '') {
        console.log('form valid', )
        signUp()
    }

}

const validatePassword = (password) => {
    let errorMessage = "";


    if (password.length < 6) {
        errorMessage += "Password should be at least 6 characters long. ";
    }


    if (!/[A-Z]/.test(password)) {
        errorMessage += "Password should contain at least one uppercase letter. ";
    }


    if (!/[a-z]/.test(password)) {
        errorMessage += "Password should contain at least one lowercase letter. ";
    }


    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errorMessage += "Password should contain at least one special character. ";
    }


    if (!/\d/.test(password)) {
        errorMessage += "Password should contain at least one number. ";
    }

    return errorMessage;
};

const validateForm = () => {

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("passwordConfirm").value;

    const passwordErrorMessage = validatePassword(password);
    const matchErrorMessage = password !== confirmPassword ? "Passwords do not match. " : "";

    const errorMessage = passwordErrorMessage + matchErrorMessage;

    document.getElementById("message").textContent = errorMessage.trim();

    return errorMessage; // Prevent form submission
};




