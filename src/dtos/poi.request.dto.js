/**
 * POI 추가 DTO
 * @param data.region_id region id
 * @param data.name poi name
 * @param data.poi_type poi type
 * @param data.poi_address poi address
 * @param data.poi_coordinate poi coordinate
 * @param data.poi_open_time poi open time
 * @param data.poi_close_time poi close time
 */
export const addPoiDTO = (data) => {
    return {
        region_id: data.region_id,
        name: data.name,
        poi_type: data.poi_type,
        poi_address: data.poi_address,
        poi_coordinate: data.poi_coordinate,
        poi_open_time: data.poi_open_time,
        poi_close_time: data.poi_close_time
    };
}