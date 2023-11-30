import express from 'express';
import {poiAdd, poiAddReview, poiDoMission} from "../controllers/poi.controller.js";

export const poiRouter = express.Router();

poiRouter.post('/', poiAdd);
poiRouter.post('/:poiId/review', poiAddReview);
poiRouter.post('/:poiId/mission', poiDoMission);