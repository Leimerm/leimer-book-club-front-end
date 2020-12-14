export class Book {
    id: number
    title: string
    author: string
    genre: string
    intended_audience: string
    part_of_series: string
    next_book: string
    rating: number
    cover_picture: string
    alt_cover1: string
    alt_cover2: string
    alt_cover3: string
  constructor(
    id: number,
    title: string,
    author: string,
    genre: string,
    intended_audience: string,
    part_of_series: string,
    next_book: string,
    rating: number,
    cover_picture: string,
    alt_cover1: string,
    alt_cover2: string,
    alt_cover3: string
  ) {
    this.id = id
    this.title = title
    this.author = author
    this.genre = genre
    this.intended_audience = intended_audience
    this.part_of_series = part_of_series
    this.next_book = next_book
    this.rating = rating
    this.cover_picture = cover_picture
    this.alt_cover1 = alt_cover1
    this.alt_cover2 = alt_cover2
    this.alt_cover3 = alt_cover3
  }
}
