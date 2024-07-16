export type UserCredentials = {
  username: string
  password: string
  email: string
}

export type PublicUserData = {
  id: number
  username: string
  email: string
  created_at: string
  edited_at: string
  group: {
    id: string
    name: string
    power: number
    color: string
  }
  lastOnline: true
  avatarUrl: string | null
}
export type Permission = {
  id: string
  name: string
  neededPower: number
}

export type UserAuthResponse = {
  data: PublicUserData
  accessToken: string
  refreshToken: string
}
