$(document).ready(()=>{
    console.log('hello worlds')

    checkLogin()

    $('#formLogin').on('submit', (e)=>{
        e.preventDefault()
        login()
    })

    $('#tombolLogout').on('click', (e)=>{
        e.preventDefault()
        logout()
    })

})


const checkLogin = () =>{
    if(!localStorage.getItem('access_token')){
        $('#halamanLogin').show()
        $('#halamanHome').hide()
    }else{
        $('#halamanLogin').hide()
        $('#halamanHome').show()
    }
}

const login = () =>{
    const email = $('#email').val()
    const password = $('#password').val()
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/login",
        data:{
            email,
            password
        }
    })
    .done((data)=>{
        const {access_token} = data
        localStorage.setItem('access_token', access_token)
        sessionStorage.setItem('access_token', access_token)
        checkLogin()
        $('#email').val('')
        $('#password').val('')
    })
    .fail((err)=>{
        console.log(err)
    })
} 

const logout = ()=>{
    localStorage.removeItem('access_token')
    sessionStorage.removeItem('access_token')
    checkLogin()
}