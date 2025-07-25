export type newTweet = {
    id: string,
    name: string,
    username: string
    content: string
    avatar: string
    time: string
    image?: string | null
    likes?: number | null
    retweets?: number | null
    comments?: number | null
}
