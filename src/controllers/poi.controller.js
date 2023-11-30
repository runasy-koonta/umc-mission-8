import { status } from "../config/response.status.js";
import { response } from "../config/response.js";
import {addPoiDTO, addReviewDTO} from "../dtos/poi.request.dto.js";
import {addPoiData, addPoiReviewData} from "../services/poi.service.js";

export const poiAdd = (req, res, next) => {
    res.send(response(status.SUCCESS, addPoiData(addPoiDTO(req.body))));
}

export const poiAddReview = (req, res, next) => {
    res.send(response(status.SUCCESS, addPoiReviewData(addReviewDTO({ ...req.query, ...req.body }))));
}

export const poiDoMission = (req, res, next) => {
    res.send(response(status.SUCCESS, doPoiMission(req.params.id, req.body)));
}