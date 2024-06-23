import { TokenType, UserType } from "./user"

export type AuthInitialStateType = {
    user: UserType | null,
    access_token: TokenType | null
}

export * from "./user"