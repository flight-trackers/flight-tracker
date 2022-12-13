import React, {createContext, useEffect, useState} from 'react'

interface props {

}

interface IState {
    id: string;
    loaded: boolean;
    empty: boolean;
}

export const UserContext = createContext({});

const UserContextProvider = (props: any) => {
    console.log(props)
    const [user, setUser] = useState({
        id: "",
        loaded: false,
        empty: false
    });

    useEffect(() => {
        const localData = localStorage.getItem('user');
        
        if (localData) {
            setUser({
                id: localData,
                loaded: true,
                empty: false
            })
        } else {
            setUser({
                id: "",
                loaded: true,
                empty: true
            })
        }
    }, [])

    const changeUser = (user: IState) => {
        setUser(user);
    }

    const removeUser = () => {
        localStorage.removeItem('user')
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <UserContext.Provider value={{user, changeUser, removeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider