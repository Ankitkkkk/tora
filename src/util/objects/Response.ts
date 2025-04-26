export interface Response<T> {
    content: T
}

export const parse = <T>(obj: string): T => {
    return JSON.parse(obj) as T
} 