import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItem } from '../../interfaces/news.interface';

class App {
    // TODO check e type
    private readonly controller: AppController = new AppController();
    private readonly view: AppView = new AppView();

    public start(): void {
        document.querySelector('.sources')?.addEventListener('click',
            (e) => this.controller.getNews(e, (data: NewsItem) => this.view.drawNews(data)));
        this.controller.getSources((data: NewsItem) => this.view.drawSources(data));
    }
}

export default App;
