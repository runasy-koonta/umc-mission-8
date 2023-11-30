import {addPoiResponseDTO, addReviewResponseDTO} from "../dtos/poi.response.dto.js";
import {addPoi, addReview, getPoi, getReview} from "../models/poi.dao.js";

/**
 * POI 추가 서비스
 * @param data.region_id region id
 * @param data.name poi name
 * @param data.poi_type poi type
 * @param data.poi_address poi address
 * @param data.poi_coordinate poi coordinate
 * @param data.poi_open_time poi open time
 * @param data.poi_close_time poi close time
 */
export const addPoiData = async (data) => {
    const addedPoi = await addPoi(data);

    return addPoiResponseDTO(await getPoi(addedPoi));
}

export const addPoiReviewData = async (data) => {
    const addedReview = await addReview(data);

    return addReviewResponseDTO(await getReview(addedReview));
}
