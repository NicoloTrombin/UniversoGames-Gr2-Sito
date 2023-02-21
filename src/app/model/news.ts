/*news*/

export interface New {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    content: string;
    publicationDate: string;
    authorName: string;
    tags: string[];
}