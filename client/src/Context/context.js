import React, {useState, useCallback} from 'react'
import axios from "axios";
import {useCookies} from "react-cookie";
import config from "../config";
axios.defaults.baseURL = config.server;

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {

    //--------------------- STATE VARIABLES ------------------------------------------------------

    //Panel navigation state variable
    const [active, setActive] = useState("home");
    //Cookies
    const [cookies, setCookie, removeCookie] = useCookies(['authToken', 'userId', 'activeChain', 'timeDiff']);
    //User auth token
    const [authToken, setAuthToken] = useState(cookies.authToken);
    //User id
    const [userId, setUserId] = useState(cookies.userId);
    //Loading state on page refresh
    const [loadingMain, setLoadingMain] = useState(false);

    //User
    const [user, setUser] = useState(
        {
            //State of user ["NONE","LOGGED-IN","LOGGED-OUT"]
            state: "NONE",
            id: undefined,
            //Type ADMIN, USER
            role: "",
            balance: "NULL",
        })

    //User's balance on all chains
    const [usersBalances, setUsersBalances] = useState({});

    //Users pending balance on all chains
    const [usersPendingBalances, setUsersPendingBalances] = useState({});


    //Bottom notifinaction card/alert
    const [note, setNote] = useState({
        show: false,
        type: "info",
        msg: "Default message",
        heading: "Test"
    })

    //Middle of the screen notification card/alert
    const [notifCard, setNotifCard] = useState({
        show: false,
        color: "#EBB8B7",
        msg: "An attack has been detected, please check your balances",
        heading: "👺 Attack detected 👺"
    })


        /**
     * Login user function
     * @param {string} registerCode - User's register number
     * @param {string} password - User's password
     */
        const apiUserLogin = ((email, password) => {

            return new Promise(async (resolve, reject) => {
                try {
                    let out = await axios.get(`user/login`, {
                        params: {
                            email: email,
                            password: password }
                        })
                    resolve(out.data)
                } catch (e) {
                    reject(e);
                }
            })
        });


    /**
     * Fetches user's data
     * @returns {Object} user - User's object
     * @example {id: '63a576228ac157377b59bcec', ....}
     */
    const apiUserFetch = useCallback(() => {
        // console.log("Chain id " + chainId)
        return new Promise(async (resolve, reject) => {
            try {

                let out = await axios.get(`user`,
                 {
                    headers: {
                        authorization: cookies.authToken
                      }
                })
                // console.log(out.data.user)
                resolve(out.data.user)
            } catch (e) {
                reject(e);
            }
        })
    }, [cookies.authToken])

    return (
        <AppContext.Provider value={{
            user, setUser,
            usersBalances, setUsersBalances,
            usersPendingBalances, setUsersPendingBalances,
            active, setActive,
            authToken, setAuthToken,
            userId, setUserId,
            cookies, setCookie, removeCookie,
            note, setNote,
            notifCard, setNotifCard,
            loadingMain, setLoadingMain,
            apiUserLogin,
            apiUserFetch


        }}>
            {props.children}
        </AppContext.Provider>
    )
};