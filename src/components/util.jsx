export function validateEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


export function validatePass(pass)
{
    return (/[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && pass.length>7);
}

export function valueIsNumber(value)
{
    return (/^[0-9\b]*$/.test(value))
}

export function saveCredentials(userID,email,token,image,rememberMe)
{
    if(rememberMe)
    {
        localStorage.setItem("user-email",email)
        localStorage.setItem("user-image",image)
        localStorage.setItem("user-id",userID)
        localStorage.setItem("user-token",token)
        localStorage.setItem("user-remember-me",rememberMe)
        sessionStorage.removeItem("user-email")
        sessionStorage.removeItem("user-image")
        sessionStorage.removeItem("user-id")
        sessionStorage.removeItem("user-token")
        sessionStorage.removeItem("user-remember-me")
    }
    else
    {
        sessionStorage.setItem("user-email",email)
        sessionStorage.setItem("user-image",image)
        sessionStorage.setItem("user-id",userID)
        sessionStorage.setItem("user-token",token)
        sessionStorage.setItem("user-remember-me",rememberMe)
        localStorage.removeItem("user-email")
        localStorage.removeItem("user-image")
        localStorage.removeItem("user-id")
        localStorage.removeItem("user-token")
        localStorage.removeItem("user-remember-me")
    }
}

export function clearCredentials()
{
        sessionStorage.removeItem("user-token")
        sessionStorage.removeItem("user-id")
        sessionStorage.removeItem("user-email")
        sessionStorage.removeItem("user-image")
        sessionStorage.removeItem("user-remember-me")
        localStorage.removeItem("user-email")
        localStorage.removeItem("user-token")
        localStorage.removeItem("user-id")
        localStorage.removeItem("user-image")
        localStorage.removeItem("user-remember-me")
}

export function getItem(item)
{
    return (localStorage.getItem(item) || sessionStorage.getItem(item))
}

export function showMemoryVariables()
{
    console.log(getItem("user-email"))
    console.log(getItem("user-image"))
    console.log(getItem("user-token"))
    console.log(getItem("user-id"))
    console.log(getItem("user-remember-me"))
}


