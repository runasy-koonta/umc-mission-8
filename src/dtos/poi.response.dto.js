export const addPoiResponseDTO = (data) => {
    return {
        "poi_id": data.poi_id,
        "region_id": data.region_id,
        "name": data.poi_name,
        "poi_type": data.poi_type,
        "poi_address": data.poi_address,
        "poi_coordinate": data.poi_coordinate,
        "poi_open_time": data.poi_open_time,
        "poi_close_time": data.poi_close_time
    };
};