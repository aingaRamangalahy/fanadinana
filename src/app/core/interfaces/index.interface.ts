export interface Mpiadina {
  id_mpiadina?: number,
  anarana: string,
  fiangonana: string,
  foibe_fanadinana: string,
  toerana_nianarana: string,
  kilasy: string
}

export interface Note {
  id_note?: number,
  math: number,
  science: number,
  malagasy: number,
  histoire: number,
  date_session: number,
  mpiadina: number
}

export interface User {
  login: string,
  password?: string
}
