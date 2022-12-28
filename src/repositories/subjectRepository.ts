import { AppDataSource } from "../data-source";
import { Subject } from "../entities/subject";


export const SubjectRepository = AppDataSource.getRepository(Subject)