import {status} from "../config/response.status.js";
import {pool} from "../config/db.config.js";
import {BaseError} from "../config/error.js";

export const addPoi = async (data) => {
    try {
        const conn = await pool.getConnection();

        // 쿼리를 나눠도 좋지만, 나중에 ORM을 사용하는 것이 더욱 깔끔하다
        // 지금은 쿼리를 직접 넣는다
        const result = await pool.query(`INSERT INTO poi(region_id, poi_name, poi_type_id, poi_address, poi_coordinate, poi_open_time, poi_close_time) VALUES(?, ?, ?, ?, ?, ?, ?)`, [data.region_id, data.name, data.poi_type, data.poi_address, data.poi_coordinate, data.poi_open_time, data.poi_close_time]);
        const poiId = result.insertId;

        await conn.release();

        return poiId;
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

/**
 * poi id로 poi 정보 가져오기
 * @param data.poi_id poi id
 */
export const getPoi = async (data) => {
    try {
        const conn = await pool.getConnection();

        const result = await pool.query(`SELECT * FROM poi WHERE poi_id = ?`, [data.poi_id]);

        await conn.release();

        return result[0];
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const addReview = async (data) => {
    try {
        const conn = await pool.getConnection();

        const result = await pool.query(`INSERT INTO review(poi_id, star, content) VALUES(?, ?, ?)`, [data.poi_id, data.star, data.content]);
        const reviewId = result.insertId;

        await conn.release();

        return reviewId;
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const getReview = async (data) => {
    try {
        const conn = await pool.getConnection();

        const result = await pool.query(`SELECT * FROM review WHERE review_id = ?`, [data.review_id]);

        await conn.release();

        return result[0];
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}