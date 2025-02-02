export enum ArticleTypeBlock {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMG = 'IMAGE'
}

export interface ArticleBlockDefault {
    id: string;
    type: ArticleTypeBlock;
}

export interface ArticleBlockText extends ArticleBlockDefault {
    type: ArticleTypeBlock.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleBlockImage extends ArticleBlockDefault {
    type: ArticleTypeBlock.IMG;
    title: string;
    src: string
}

export interface ArticleBlockCode extends ArticleBlockDefault {
    type: ArticleTypeBlock.CODE;
    code: string;
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText;

export enum  ArticleView {
    BIG = "big",
    SMALL = "small",
}

export enum ArticleType {
    IT = 'IT',
    SCIENCE ="SCIENCE",
}

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}