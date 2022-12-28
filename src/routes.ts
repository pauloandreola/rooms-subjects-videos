import { create } from "domain";
import { Router } from "express";
import { RoomController } from "./controllers/roomController";
import { SubjectController } from "./controllers/subjectController";

export const routes = Router();

routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);
routes.post('/room/:idRoom/create', new RoomController().createVideo);
