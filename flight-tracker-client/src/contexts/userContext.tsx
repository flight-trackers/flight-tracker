import React, {createContext, useEffect, useState} from 'react'

interface props {

}

interface IState {
    id: string;
    loaded: boolean;
    empty: boolean;
}

export const UserContext = createContext({
    user: { id: "", loaded: false, empty: false },
    setUser: { id: "", loaded: false, empty: false },
    removeUser: () => undefined
})

const UserContextProvider = (props: any) => {
    const [user, setUser] = useState<IState>({
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

    const removeUser = () => {
        localStorage.removeItem('user')
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser, removeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider