
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'c8756acc0ba94abb95f03e29a0901f15', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
