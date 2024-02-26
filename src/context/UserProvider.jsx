import { UserContext } from './userContext'

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ name: 'Juan Falcón' }}>
            {children}
        </UserContext.Provider>
    )
}
