export interface ResTopHeadlines {
  timestamp: number;
  articleCount: number;
  articles: Article[];
}

export interface Article {
  title: string;
  description: string;
  url: string;
  image?: any;
  publishedAt: string;
  source: Source;
}

export interface Source {
  name: string;
  url: string;
}
