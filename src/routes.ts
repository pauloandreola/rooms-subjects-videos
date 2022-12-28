import { Router } from "express";

import { RoomController } from "./controllers/roomController";
import { SubjectController } from "./controllers/subjectController";

export const routes = Router();

routes.get('/room', new RoomController().list);
routes.post('/subject', new SubjectController().create);
routes.post('/room', new RoomController().create);
routes.post('/room/:idRoom/create', new RoomController().createVideo);
routes.post('/room/:idRoom/subject', new RoomController().roomSubject);
