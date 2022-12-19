import React, {createContext, useEffect, useState} from 'react'

interface IUser {
    id: string;
    loaded: boolean;
    empty: boolean;
}

export const UserContext = createContext({
    user: { id: "", loaded: false, empty: false },
    updateUser: (user: IUser) => {},
    removeUser: () => {}
})

const UserContextProvider = (props: any) => {
    const [user, setUser] = useState<IUser>({
        id: "",
        loaded: false,
        empty: false    
    });

    useEffect(() => {
        const localData: string | null = localStorage.getItem('user');
        
        if (localData || typeof localData === "string") {
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

    const updateUser = (user: IUser) => {
        setUser(user)
    }

    const removeUser = () => {
        setUser({
            id: "",
            loaded: false,
            empty: false    
        });
        localStorage.removeItem('user')
    }

    useEffect(() => {
        user.id !== "" && localStorage.setItem('user', JSON.stringify(user.id));
    }, [user.id])

    return (
        <UserContext.Provider value={{user, updateUser, removeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider