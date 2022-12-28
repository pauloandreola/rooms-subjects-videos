import { Request, Response } from "express";

import { RoomRepository } from "../repositories/roomRepository";
import { SubjectRepository } from "../repositories/subjectRepository";
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

  async roomSubject (req: Request,  res: Response) {
    const { subject_id } = req.body;
    const { idRoom } = req.params;

    try {
      const room = await RoomRepository.findOneBy({ id: Number(idRoom)});

      if (!room) {
        return res.status(404).json({ message: 'Room not found, or not exists'})
      }

      const subject = await SubjectRepository.findOneBy({ id: Number(subject_id)});

      if (!subject) {
        return res.status(404).json({ message: 'Subject not found, or not exists'})
      }

      const roomUpdate = { ...room, subjects: [subject]}

      await RoomRepository.save(roomUpdate);

      return res.status(204).send();

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error'});      
    }
  };

  async list(req: Request, res: Response) {

    try {
      const rooms = await RoomRepository.find({
        relations: {
          subjects: true,
          videos: true,
        },
      });

      return res.json(rooms);
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error'});
    }

  };
}