module.exports = function (width) {
    return {
        area: function () {
            return width * width;
            return this.width * this.width;
        },
        circum: function(){
            return 4 * width;
        }
    };
};                   //정사각형 넓이!  {} 이건 객체  [] 이건 배열