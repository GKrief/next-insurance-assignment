export class Movie {
  id: number;
  title: string;
  synopsis: string;
  rating: number;
  released: number;
  runtime: string;
  smallImageUrl: string;
  largeImageUrl: string;


  constructor(id: number, title: string, synopsis: string, rating: number, released: number, runtime: string,
              smallImageUrl: string, largeImageUrl: string) {
    this.id = id;
    this.title = title;
    this.synopsis = synopsis;
    this.rating = rating;
    this.released = released;
    this.runtime = runtime;
    this.smallImageUrl = smallImageUrl;
    this.largeImageUrl = largeImageUrl;
  }
}
