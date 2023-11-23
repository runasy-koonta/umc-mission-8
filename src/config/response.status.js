export const status = {
    SUCCESS: {status: 200, "isSuccess": true, "code": 2000, "message": "success!"},
    BAD_REQUEST: {status: 400, "isSuccess": false, "code": "COMMON001", "message": "잘못된 요청입니다." },
    NOT_FOUND: {status: 404, isSuccess: false, code: 'COMMON005', message: '요청한 페이지를 찾을 수 없습니다.'},
};