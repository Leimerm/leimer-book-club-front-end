export class User {
  id: number
  user_name: string
  email: string
  password: string
  password_confirmation: string
constructor({
  id = null,
  user_name = "",
  email = "",
  password = "",
  password_confirmation = ""
}) {
  this.id = id
  this.user_name = user_name
  this.email = email
  this.password = password
  this.password_confirmation = password_confirmation
}
}
