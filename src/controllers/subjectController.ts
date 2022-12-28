import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/subjectRepository";


export class SubjectController {
  async create(req: Request, res: Response){
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Please insert a name' });
    }

    try {
      const newSubject = SubjectRepository.create({ name });

      await SubjectRepository.save(newSubject);

      return res.status(201).json(newSubject);

      console.log(newSubject);
      
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal server error' })
    }

  }

}
