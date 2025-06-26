export function getImgUrl(image) {
    return new URL(`../assets/movie-covers/${image}`, import.meta.url).href;
}
