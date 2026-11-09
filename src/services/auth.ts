const DEMO_USER = {
    email: 'pokemail@gmail.com',
    password: 'pokemon ',
};

export function validateLogin(
    email: string,
    password: string
) : boolean {
    return email === DEMO_USER.email && password === DEMO_USER.password;
}
