import AppLoader from './appLoader';
import { NewsPortal } from '../../interfaces/news.interface';

export interface CallbackFunction<T1, T2 = void> {
    (param1: T1): T2;
}

class AppController extends AppLoader {
    public getSources(callback: CallbackFunction<NewsPortal>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: CallbackFunction<NewsPortal>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }

            target = target?.parentElement as HTMLElement;
        }
    }
}

export default AppController;
