import React, {useCallback, useEffect, useMemo, useState} from 'react';
import axios from "axios";
import SearchForm from "./SearchForm";
import AccountInfo from "./AccountInfo";
import NotFound from "./NotFound";


const getLoginFromUrl = () => {
    const search = new URLSearchParams(window.location.search);
    return search.get('login');
};

const GitProfile = () => {
    const loginFromUrl = useMemo(() => getLoginFromUrl(), []);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState(loginFromUrl);
    const [error, setError] = useState();

    const getUser = useCallback(() => {
        setLoading(true);
        axios.get('https://api.github.com/users/'+login)
            .then(result => setUser(result.data))
            .catch(error => setError(error.response))
            .finally(() => setLoading(false));
    }, [login]);

    useEffect(() => {
        if (login) {
            window.history.pushState(null, null, `/?login=${login}`);
            getUser();
        }
    }, [login, getUser]);

    return (
        <div className="app-container">
            <SearchForm onSubmitSearch={setLogin} blockSearch={loading} />
            {user && !error && <AccountInfo account={user} />}
            {error && <NotFound code={error.status} statusText={error.statusText} />}
        </div>
    );
};

export default GitProfile;