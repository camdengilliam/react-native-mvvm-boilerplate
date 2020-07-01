class User {

  private _id? :string | number

  private _nameFirst? :string

  private _nameLast? :string

  get id(): string | number | undefined  {
    return this._id
  }

  set id(id: string | number | undefined ) {
    this._id = id
  }

  get nameFirst(): string | undefined  {
    return this._nameFirst
  }

  set nameFirst(nameFirst: string | undefined ) {
    this._nameFirst = nameFirst
  }

  get nameLast(): string | undefined  {
    return this._nameLast
  }

  set nameLast(nameLast: string | undefined ) {
    this._nameLast = nameLast
  }

  static deserialize(json : any) : User | undefined {
    if (!json) return undefined

    let user:User = new User()

    user.id = json.id

    user.nameFirst = json.nameFirst

    user.nameLast = json.nameLast

    return user
  }
}

export default User
