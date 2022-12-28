import { Request, Response } from "express";
import { RoomRepository } from "../repositories/roomRepository";
import { VideoRepository } from "../repositories/videoRepository";


export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Please insert a name'});
    }

    if (!description) {
       return res.status(400).json({ message: 'Please insert a description'});
    }

    try {
      const newRoom = RoomRepository.create({ name, description });

      await RoomRepository.save(newRoom);

      return res.status(201).json(newRoom);

      console.log(newRoom);

    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal server error'})
    }
  }

  async createVideo (req: Request, res: Response) {
    const { title, url  } = req.body;
    const  { idRoom } = req.params;

    try {
      // const room = RoomRepository.findOne({where: {id: Number(idRoom)}})
      const room = await RoomRepository.findOneBy({id: Number(idRoom)});

      if(!room) {
        return res.status(404).json({ message: 'Not found'});
      }

      const newVideo = VideoRepository.create({
        title,
        url,
        room
      });

      await VideoRepository.save(newVideo);

      return res.status(201).json(newVideo);
      
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal server error'});
    }
  }
}