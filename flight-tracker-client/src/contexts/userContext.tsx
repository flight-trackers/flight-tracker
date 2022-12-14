import React, {createContext, useEffect, useState} from 'react'

interface IState {
    id: string;
    loaded: boolean;
    empty: boolean;
}

export const UserContext = createContext({
    user: { id: "", loaded: false, empty: false },
    updateUser: (user: IState) => {},
    removeUser: () => {}
})

const UserContextProvider = (props: any) => {
    const [user, setUser] = useState<IState>({
        id: "",
        loaded: false,
        empty: false
    });

    useEffect(() => {
        const localData: string | null = localStorage.getItem('user');
        
        if (typeof localData === "string") {
            setUser({
                id: JSON.parse(localData),
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

    const updateUser = (user: IState) => {
        setUser(user)
    }

    const removeUser = () => {
        localStorage.removeItem('user')
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user.id));
    }, [user.id])

    return (
        <UserContext.Provider value={{user, updateUser, removeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider