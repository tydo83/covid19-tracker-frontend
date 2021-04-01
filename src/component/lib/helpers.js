import jwtDecode from 'jwt-decode'

export function checkIsUserLoggedIn() {
    let getJwtToken = localStorage.getItem('jwtToken');
    if(getJwtToken) {
        const currentTime = Date.now() / 1000;
        let decodedJWtToken = jwtDecode(getJwtToken);
        if(decodedJWtToken.exp < currentTime) {
            localStorage.removeItem('jwtToken')
            return false;
        } else {
            return true;
        }
    }
}