
const sendLoginData = async (email, password) => fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'kminchelle',
        // username: email,
        password: '0lelplR',
        // password,
        // expiresInMins: 60, // optional
    })
})
    .then(res => res.json())
    .then(response => handleSuccessfulSignIn(response));

function handleSuccessfulSignIn(data) {
    console.log(data)

    localStorage.setItem('useData', JSON.stringify(data))

    window.location.replace('./')
}

function handleSubmit (event) {

    const email = document.querySelector('#loginEmail')
    const password = document.querySelector('#loginPassword')

    console.log('handle submit', email.value, password.value)

    if(!!email.value && !!password.value) {
        console.log('Form Valid', )
        sendLoginData(email, password)
    }
    event.preventDefault()

}
