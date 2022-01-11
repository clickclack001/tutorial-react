import React, {useEffect, useState} from 'react';
import axios from "axios";
import SearchForm from "./SearchForm";
import AccountInfo from "./AccountInfo";




const GitProfile = () => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)

    const getUser = async (query) => {
        try{
            setLoading(true);
            const result = await axios.get('https://61dc87f0591c3a0017e1a9de.mockapi.io/gituser');
            setUser(result.data[0]);
            addSearchToUrl(query);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const addSearchToUrl = (query) => {
        window.history.pushState(null, null, '/?login='+query)
    }

    useEffect(() => {
        const search = [...new URLSearchParams(window.location.search).entries()].reduce((r, [k,v]) => { r[k] = v; return r; }, {})
        if(search.login) {

        }
    }, [])

    return (
        <div className="app-container">
            <SearchForm getUser={getUser} blockSearch={loading} />
            {user && <AccountInfo account={user} />}
        </div>
    );
};

export default GitProfile