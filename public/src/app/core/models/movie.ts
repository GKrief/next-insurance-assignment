export class Movie {
  id: string;
  title: string;
  synopsis: string;
  rating: number;
  released: number;
  runtime: string;
  smallImageUrl: string;
  largeImageUrl: string;


  constructor(id: string, title: string, synopsis: string, rating: number, released: number, runtime: string,
              smallImageUrl: string, largeImageUrl: string) {
    this.id = id;
    this.title = title;
    this.synopsis = synopsis;
    this.rating = !isNaN(rating) ? rating : 0;
    this.released = released;
    this.runtime = runtime;
    this.smallImageUrl = smallImageUrl;
    this.largeImageUrl = largeImageUrl;
  }
}
