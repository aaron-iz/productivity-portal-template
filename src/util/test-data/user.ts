import { getProfilePictureUrl } from "./images";
import { getRandomName } from "./text";

export type TestUser = {
    ppicUrl: string;
    name: string;
};

export function getRandomTestUser(): TestUser {
    return { ppicUrl: getProfilePictureUrl(), name: getRandomName() };
}
