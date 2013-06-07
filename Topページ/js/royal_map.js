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

<!-- ********** #mapbtn01  ************************************************************ -->

	$("#mapbtn01").click(function(){

		$.gmap3.panTo($("#map1"), {
			latitude: 34.709762,
			longitude: 135.463056,
		});
	$.gmap3.removeAllMarkers($("#map1"));
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706886,
				longitude: 135.462914,
				title: 'ロイヤルユタカ・モータープール花川',
				icon: "images/zitaku.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92" Height="63"></A><Img Src="images/yutakaparking.jpg" Width="92" Height="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.705105,
				longitude: 135.457411,
				title: 'ピアット・フォルテ姫島店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ピアット・フォルテ姫島店</h4><p><Img Src="images/pforte.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１０－６<br>06-6474-2725</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704882,
				longitude: 135.458277,
				title: 'グルメシティ姫島店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>グルメシティ姫島店</h4><p><Img Src="images/gurume.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里１丁目２６－１９ 姫島駅前ビル<br>06-6473-9188</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71169,
				longitude: 135.460162,
				title: 'スーパーナショナル 野里店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>スーパーナショナル 野里店</h4><p><Img Src="images/supern.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里３丁目６－２３<br>06-6474-1535</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.714523,
				longitude: 135.462993,
				title: 'ライフコーポレーション 歌島店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ライフコーポレーション 歌島店</h4><p><Img Src="images/lifeutasima.jpg" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島２丁目６－１３<br>06-4808-0971</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713887,
				longitude: 135.463824,
				title: '元気市場西淀店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>元気市場西淀店</h4><p><Img Src="images/genkiitibanisiyodo.jpg" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島２丁目２－１２ 西淀マンション 1F<br>06-6477-9141</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711621,
				longitude: 135.46666,
				title: '花川市場',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>花川市場</h4><p><Img Src="images/hanakawaitiba.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目３－６<br>06-6472-9204</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711728,
				longitude: 135.466500,
				title: 'サンディ塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>サンディ塚本店</h4><p><Img Src="images/sandy.jpg" Width="92" Height="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目３－３<br>06-4808-8594</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711046,
				longitude: 135.467082,
				title: 'ライフコーポレーション 塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ライフコーポレーション 塚本店</h4><p><Img Src="images/lifetukamoto.jpg" Width="92" Height="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目７－３２<br>06-6471-9895</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713637,
				longitude: 135.469393,
				title: '万代・塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>万代・塚本店</h4><p><Img Src="images/mandaitukamoto.jpg" Width="92" Height="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－５<br>06-6306-1270</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713818,
				longitude: 135.469368,
				title: '阪急ファミリーストア塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>阪急ファミリーストア塚本店</h4><p><Img Src="images/hankyufamilystore.jpg" Width="92" Height="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－１８<br>06-6305-7871</div>'
	});

	});



<!-- ********** #mapbtn05  ************************************************************ -->


	$("#mapbtn05").click(function(){      // #mapbtn05をクリックした時の処理

		$.gmap3.panTo($("#map1"), {
			latitude: 34.709762,
			longitude: 135.463056,
		});

	$.gmap3.removeAllMarkers($("#map1"));

	$.gmap3.addMarker($("#map1"), {
        address: '大阪市西淀川区花川2-21-19',         // 住所
				title: 'ロイヤルユタカモータープール花川',
				icon: "images/zitaku.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカモータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92" Height="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',
	});


	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708224,
				longitude: 135.458938,
				title: '苗加病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>苗加病院</h4><p><Img Src="images/naekabyoin.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１７－２１<br>06-6471-0015</div>'

	});

	});      // #mapbtn05をクリックした時の処理



});// ページ読み込み時に実行したい処理

});

