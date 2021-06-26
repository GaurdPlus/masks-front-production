export  const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (sessionStorage.getItem('mail') !== null) {
        const data = {
            id: sessionStorage.getItem("cpissq"),
            name:sessionStorage.getItem("name"),
            mail:sessionStorage.getItem("mail"),
            role:sessionStorage.getItem("rjkssm"),
        }
        return data;
    }
        else {
        return false;
    }
    };
    
export  const checkToken = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (sessionStorage.getItem("cpissq") !== null) {
        return true;
    }
        else {
        return false;
    }
    };



