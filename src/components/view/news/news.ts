
import './news.css';
import { ImageItem } from '../../../interfaces/image.inteface';

class News {
    draw(data: ImageItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
debugger
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        //const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone = newsItemTemp.content.cloneNode(true).parentElement as HTMLElement;
                if (newsClone) {
                    if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
                    const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                    if (newsPhoto) {
                        newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                            })`;
                    }
                    const newsAuthor = <HTMLElement>newsClone.querySelector('.news__meta-author');
                    if (newsAuthor) {
                        newsAuthor.textContent = item.author || item.source.name;
                    }
                    const newsDate = <HTMLElement>newsClone.querySelector('.news__meta-date');
                    if (newsDate) {
                        newsDate.textContent = item.publishedAt
                            .slice(0, 10)
                            .split('-')
                            .reverse()
                            .join('-');
                    }
                    const newsTitle = newsClone.querySelector('.news__description-title');
                    if (newsTitle) {
                        newsTitle.textContent = item.title;
                    }
                    const newsSource = newsClone.querySelector('.news__description-source');
                    if (newsSource) {
                        newsSource.textContent = item.source.name;
                    }
                    const newsContent = newsClone.querySelector('.news__description-content') as HTMLElement;
                    if (newsContent) {
                        newsContent.textContent = item.description;
                    }
                    newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                    fragment.append(newsClone);
                }

            });
        }
        const newsEl = document.querySelector('.news');
        if (newsEl) {
            newsEl.innerHTML = '';
            newsEl.appendChild(fragment);
        }
    }
}

export default News;
