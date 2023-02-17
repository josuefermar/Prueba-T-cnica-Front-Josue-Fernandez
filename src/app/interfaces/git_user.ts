import { User } from "./user";

export interface GitUser {
    total_count: string,
    incomplete_results: string,
    items: User[]
}