export interface loginReq {
    email: String,
    password: String
}
export interface loginRes {
    token: String
    user: {
        id: String,
        role: String,
    }
}