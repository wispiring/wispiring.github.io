$(document).ready(function() {
    $('.banner ul li').css('background-size', '100% 100%');
    $('.banner').unslider({
        speed: 5000, 
	    delay: 15000,
        dots: true,
        fluid: true 
    });
    if ($('#footer_map')) {
        // 百度地图API功能
        var map = new BMap.Map("footer_map");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,16);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        myGeo.getPoint("沈阳市和平区三好街79号", function(point){
            if (point) {
                map.centerAndZoom(point, 16);
                map.addOverlay(new BMap.Marker(point));
            }
        }, "沈阳市");
    }
});
