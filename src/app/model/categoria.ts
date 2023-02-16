/*categoria*/
export interface Categoria{
    id: string;
    name: string;
}

export type NewCategoria = Omit<Categoria, '_id'>;