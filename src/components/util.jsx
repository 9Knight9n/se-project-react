export function validateEmail(email)
{
    return /^[^\s@]+@[^\s@]+$/.test(email);
}


export function validatePass(pass)
{
    return (/[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-9]/.test(pass));
}


