export class Review {
  id: number
  body: string
  title: string
  book_id: number
  user_id: number
  user_name: string
  rating: number
  created_at: string
  updated_at: string
constructor({
  id = null,
  body = "",
  book_id = 0,
  user_id = 0,
  user_name = "",
  rating = 3,
  created_at = "",
  updated_at = "",
}) {
  this.id = id
  this.body = body
  this.book_id = book_id
  this.user_id = user_id
  this.user_name = user_name
  this.rating = rating
  this.created_at = created_at
  this.updated_at = updated_at
}
}
