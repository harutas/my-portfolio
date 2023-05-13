export interface NavLinkPath {
  linkPath: string;
  navText: string;
}

export interface WorkResponse {
  contents: Work[];
}

export interface Work {
  id: string;
  title: string;
  description: string;
  body: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

interface Tag {
  id: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}
