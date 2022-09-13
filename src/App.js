import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import {BrowserRouter} from "react-router-dom";
import RouterPages from "./components/RouterPages";
import {useEffect, useState} from "react";
import {StatusContext} from "./components/assets/context/Context";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./components/redux/store";
import {authUser} from "./components/redux/authSlice";

function App() {
    const authData = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [init, setInit] = useState(false)
    useEffect(() => {
        dispatch(authUser())
            .then(() => {
                setInit(true)
            })
    }, [authData.isAuth])

    if(!init) return <div><h1>Загрузка.....</h1></div>
    return (
        <StatusContext.Provider  value={[authData.id, authData.isAuth]}>
            <div className="App">
                <Header login={authData.login} auth={authData.isAuth}/>
                <SideBar/>
                <RouterPages/>
            </div>
        </StatusContext.Provider>
    );
}

function AppContainer(props) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App {...props}/>
            </BrowserRouter>
        </Provider>
    )
}

export default AppContainer;
