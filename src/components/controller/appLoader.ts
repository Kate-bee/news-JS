// @ts-nocheck
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '312908d751224088a70bb6955f5ede8a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
