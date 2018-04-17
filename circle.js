const PI = Math.PI;
exports.area = function (r) {
    return PI * r*r;
}     //익스포트를 사용해서 모듈만들기!

exports.circum = function (r) {
    return 2*PI*r;
}