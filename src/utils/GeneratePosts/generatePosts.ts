import { randomTweetsComments } from "../../Const/RandomTweetsComments/randomTweetsComments"

export default function generatePosts() {
    const indice = Math.floor(Math.random() * randomTweetsComments.length)
    return randomTweetsComments[indice]
}