export const loginFetch = async (email, password) => {
    try {
        const res = await fetch('http://localhost:3002/login/login', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(
                {
                    email,
                    password
                }
            )
        })
    
        const data= await res.json();
        console.log(data)
        // return data.user;

        // if(data){
        //     localStorage.setItem('token', data.token);
        //     localStorage.setItem('token_refresh', data.token_refresh);
        //     localStorage.setItem('idUser', data.user._id);

        //     console.log(`User with email ${email} has been logged correctly`);
        // }
        return data.user;
    } catch (error) {
        console.error("Something went wrong at login: ", error)
        
    }

}

export const registerNewUser = async (newUser) => {
    try {
        const res = await fetch('http://localhost:3002/login/signup', {
            method: 'POST',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify(
                
                    newUser
                
            )
        })
    
        const data= await res.json();
        console.log('El usuario se registro correctamente')
        return data.user;
    } catch (error) {
        console.error("Something went wrong at registration: ", error)
        
    }
    


}