import {ReactNode} from "react";
import {createReduxStore} from "@/app/StoreProvider/config/store.ts";
import {Provider} from "react-redux";
import {useNavigate} from "react-router-dom";
import {StateSchema} from "@/app/StoreProvider";

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {

    const navigate = useNavigate();
    const store = createReduxStore(initialState, navigate);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}