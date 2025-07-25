import CryptoJS from "crypto-js";


export const getAvatar = (email: string) => {
    const hash = CryptoJS.MD5(email.trim()).toString().toLowerCase();
    return `https://www.gravatar.com/avatar/${hash}?s=40&d=identicon`;
}


export const getRandomImage = () => {
    return `https://picsum.photos/600/400?random=${Math.random()}`
}