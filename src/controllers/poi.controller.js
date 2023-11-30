import { status } from "../config/response.status.js";
import { response } from "../config/response.js";
import {addPoiDTO} from "../dtos/poi.request.dto.js";
import {addPoiData} from "../services/poi.service.js";

export const poiAdd = (req, res, next) => {
    res.send(response(status.SUCCESS, addPoiData(addPoiDTO(req.body))));
}