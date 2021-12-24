import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsPortal } from '../../interfaces/news.interface';

class App {
    // TODO check e type
    private readonly controller: AppController = new AppController();
    private readonly view: AppView = new AppView();

    public start(): void {
        document.querySelector('.sources')?.addEventListener('click',
            (e) => this.controller.getNews(e, (data: NewsPortal) => this.view.drawNews(data)));
        this.controller.getSources((data: NewsPortal) => this.view.drawSources(data));
    }
}

export default App;
