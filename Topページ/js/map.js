$(function(){

$(document).ready( function(){ // ページ読み込み時に実行したい処理

		$("#map1").gmap3({
		latitude: 34.709762,
		longitude: 135.463056,
		zoom: 15,
		navigationControl: true,
		mapTypeControl: true,
		scaleControl: true,
		});


	$.gmap3.addMarker($("#map1"), {
        address: '大阪市西淀川区花川2-21-19',         // 住所
				title: 'ロイヤルユタカ・モータープール花川',
				icon: "images/zitaku.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',
	});
});
});

