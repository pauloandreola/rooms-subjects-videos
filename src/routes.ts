import { Router } from "express";
import { SubjectController } from "./controllers/subjectController";

export const routes = Router();

routes.post('/subject', new SubjectController().create);
