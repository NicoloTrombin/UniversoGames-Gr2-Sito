/*Videogioco*/
export interface Videogioco {
    _id: string;
    title: string;
    category: string;
    releaseDate: string;
    genre: string;
    softwareHouse: string;
    publisher: string;
    numberOfPlayers: number;
    languages: Linguaggio;
    coverImage: string;
}

export interface Linguaggio{
    voice: string[];
    text: string[];
}