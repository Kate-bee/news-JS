import { NewsItem } from "./news.item.inteface";
import { SourceItem } from "./source.type";

export interface NewsPortal{
  articles: NewsItem[];
  sources: SourceItem[];
}
