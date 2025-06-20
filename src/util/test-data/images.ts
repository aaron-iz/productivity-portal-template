const randomImageSources = [
    "https://random-d.uk/api/randomimg?type=jpeg",
    "https://cataas.com/cat",
    "https://placewaifu.com/image/400",
];

export function getProfilePictureUrl(): string {
    const source = Math.floor(Math.random() * randomImageSources.length);
    return randomImageSources[source];
}
