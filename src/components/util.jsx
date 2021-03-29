import { useState, useEffect } from 'react';

export function validateEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


export function validatePass(pass)
{
    return (/[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-9]/.test(pass) && pass.length>7);
}

