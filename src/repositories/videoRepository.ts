import { AppDataSource } from "../data-source"

import { Video } from "../entities/video"

export const VideoRepository = AppDataSource.getRepository(Video);