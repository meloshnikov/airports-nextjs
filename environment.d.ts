declare namespace NodeJS {
  export interface ProcessEnv {
    readonly DB_URL: string
    readonly JWT_ACCESS_SECRET: string
    readonly JWT_REFRESH_SECRET: string
  }
}
