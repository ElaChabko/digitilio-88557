export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type ArticleSection = {
  heading: string;
  blocks: ArticleBlock[];
};

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  category: string;
    image: string; 
  content: ArticleSection[];
};
