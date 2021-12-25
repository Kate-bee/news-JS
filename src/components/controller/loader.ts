import { CallbackFunction } from './controller';
import { NewsPortal } from '../../interfaces/news.interface';
import { Resp } from '../../interfaces/resp.interface'


enum ErrorCode {
    UNAUTHRORIZED = 401,
    NOT_FOUND = 404,
    API_ERROR = 429
}
class Loader {

    private readonly baseLink: string;
    private readonly options: {[key: string]: string};

    constructor(baseLink: string, options: {[key: string]: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: Resp,
        callback: CallbackFunction<NewsPortal> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === ErrorCode.UNAUTHRORIZED || res.status === ErrorCode.NOT_FOUND || res.status === ErrorCode.API_ERROR)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: {[key: string]: string}, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load(method: string, endpoint: string, callback: CallbackFunction<NewsPortal>, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
