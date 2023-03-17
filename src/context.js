import React, { useState } from "react";

export const LoginContext = React.createContext({});

export const LoginProvider = (props) => {
    const [usuario, setUsuario] = useState({});
    const [dias, setDias] = useState([]);
    const [hab, setHab] = useState([])



    return (
        <LoginContext.Provider value={{ usuario, setUsuario, dias, setDias, hab, setHab }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => React.useContext(LoginContext)