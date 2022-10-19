import { MemeData } from "../components/meme_data";

interface MemesResponse {
    success: boolean;
    data: {
        memes: MemeData[];
    };
}

export const getAllMeme = async (): Promise<MemeData[]> => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const res = (await response.json()) as MemesResponse;
    return res.data.memes;
};
