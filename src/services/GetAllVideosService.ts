import {getRepository} from "typeorm";
import {Videos} from "../entities/Videos";


class GetAllVideosService{
    async execute(){
        const repo = getRepository(Videos);
        const videos = await repo.find({
            relations:['category']
        });

        return videos
    }
}

export {GetAllVideosService}