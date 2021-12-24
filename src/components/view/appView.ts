
import News from './news/news';
import Sources from './sources/sources';
import { NewsPortal } from '../../interfaces/news.interface';

export class AppView {

    private news: News = new News();
    private sources: Sources = new Sources();


    public drawNews(data: NewsPortal): void {
        const values = data?.articles || [];
        this.news.draw(values);
    }
    public drawSources(data: NewsPortal): void {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
