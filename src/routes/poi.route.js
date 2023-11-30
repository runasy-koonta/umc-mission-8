import express from 'express';
import { poiAdd } from "../controllers/poi.controller.js";

export const poiRouter = express.Router();

poiRouter.post('/add', poiAdd);