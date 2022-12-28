import { AppDataSource } from "../data-source";

import { Room } from "../entities/room";

export const RoomRepository = AppDataSource.getRepository(Room);