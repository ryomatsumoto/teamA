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

<!-- ********** #mapbtn02  ************************************************************ -->

	$("#mapbtn02").click(function(){

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
				latitude: 34.704424,
				longitude: 135.45821,
				title: '阪神姫島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神姫島駅</h4><p><Img Src="images/hansinhimejima.jpg" Width="92" Height="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712575,
				longitude: 135.468893,
				title: 'ＪＲ塚本駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ塚本駅</h4><p><Img Src="images/tukamotoeki2.jpg" Width="92" Height="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71259,
				longitude: 135.45568,
				title: 'ＪＲ御幣島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ御幣島駅</h4><p><Img Src="images/goheijimaeki.jpg" Width="92" Height="63"></p></div>'

	});
	});

<!-- ********** #mapbtn03  ************************************************************ -->

	$("#mapbtn03").click(function(){

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
				latitude: 34.711454,
				longitude: 135.456137,
				title: '西淀川区役所・図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川区役所・図書館</h4><p><Img Src="images/nisiyodogawasiyakusyo.jpg" Width="92" Height="63"><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6478-9625<br>西淀川図書館<br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6474-7900<br>大阪市西淀川区役所</A></p></div>'

	});
	});
<!-- ********** #mapbtn04  ************************************************************ -->

	$("#mapbtn04").click(function(){

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
				latitude: 34.711542,
				longitude: 135.45333,
				title: '西淀川警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川警察署</h4><p><Img Src="images/nisiyodogawakeisatu.jpg" Width="92" Height="63"></A></p><br>〒555-0013 大阪府大阪市西淀川区千舟２丁目６－２４<br>06-6474-1234</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711484,
				longitude: 135.459071,
				title: '西淀病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>西淀病院</h4><p><Img Src="images/nisiyodobyoin.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里３丁目５－２２<br>06-6472-1141</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.710365,
				longitude: 135.466957,
				title: 'もりの眼科診療所',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>もりの眼科診療所</h4><p><Img Src="images/morinoganka.jpg" Width="92" Height="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目８－１４<br>06-6471-0270</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.710754,
				longitude: 135.469123,
				title: '西大阪病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>西大阪病院</h4><p><Img Src="images/nisiosakabyoin.jpg" Width="92" Height="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里１丁目１４－１３<br>06-6475-0001</div>'

	});
	});    // #mapbtn05をクリックした時の処理
<!-- ********** #mapbtn06  ************************************************************ -->


	$("#mapbtn06").click(function(){      // #mapbtn05をクリックした時の処理

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
				latitude: 34.709787,
				longitude: 135.459802,
				title: '西淀川スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川スポーツセンター</h4><p><Img Src="images/nisiyodogawasports.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里２丁目１０－３５<br>06-6472-9200</div>'

	});
	});
<!-- ********** #mapbtn07  ************************************************************ -->


	$("#mapbtn07").click(function(){      // #mapbtn05をクリックした時の処理

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
				latitude: 34.710237,
				longitude: 135.465687,
				title: '大阪市立柏里小学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立柏里小学校</h4><p><Img Src="images/kasiwazatosho.jpg" Width="92" Height="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目１３－３３<br>06-6474-5225</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706367,
				longitude: 135.458322,
				title: '大阪市立姫里小学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立姫里小学校</h4><p><Img Src="images/himezatosho.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目８－２４<br>06-6474-5555</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.714926,
				longitude: 135.461477,
				title: '大阪市立歌島中学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立歌島中学校</h4><p><Img Src="images/utasimachu.jpg" Width="92" Height="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島２丁目１１－９<br>06-6471-0197</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.715012,
				longitude: 135.4621,
				title: '野里幼稚園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>野里幼稚園</h4><p><Img Src="images/nozatoyotien.jpg" Width="92" Height="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島２丁目５－２５<br>06-6471-1360</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712646,
				longitude: 135.472904,
				title: '塚本幼稚園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>塚本幼稚園</h4><p><Img Src="images/tukamotoyotien.jpg" Width="92" Height="63"></A></p><br>〒532-0026大阪府大阪市淀川区塚本１丁目６－２５<br>06-6301-2176</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.715012,
				longitude: 135.4621,
				title: '野里保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>野里保育所</h4><p><Img Src="images/nozatohoikusyo.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里２丁目１０－１５<br>06-6472-9261</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707420,
				longitude: 135.467173,
				title: '聖花保育園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>聖花保育園</h4><p><Img Src="images/seikahoikuen.jpg" Width="92" Height="63"></A></p><br>〒555-0023 大阪府大阪市西淀川区花川１丁目６－２<br>06-6471-6224</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706378,
				longitude: 135.457844,
				title: '姫里保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>姫里保育所</h4><p><Img Src="images/himezatohoikusyo.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１３－２<br>06-6474-7845</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712762,
				longitude: 135.465046,
				title: '柏里保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>柏里保育所</h4><p><Img Src="images/kasiwazatohoikusyo.jpg" Width="92" Height="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目１７－１<br>06-6471-0440</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71513,
				longitude: 135.469582,
				title: '高等森友学園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>高等森友学園</h4><p><Img Src="images/koutoumoritomo.jpg" Width="92" Height="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本４丁目７－８<br>06-6305-2313</div>'

	});
	});
<!-- ********** #mapbtn08  ************************************************************ -->


	$("#mapbtn08").click(function(){      // #mapbtn05をクリックした時の処理

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
				latitude: 34.711734,
				longitude: 135.458527,
				title: 'スシロー歌島店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>スシロー歌島店</h4><p><Img Src="images/susiro.jpg" Width="92" Height="63"></A><Img Src="images/スシロー歌島店" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島３丁目３－１１<br>06-6474-2209</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708724,
				longitude: 135.458258,
				title: '和食さと歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>和食さと歌島橋店</h4><p><Img Src="images/satoutajimabasi.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里３丁目１－２８<br>06-6475-3805</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71061,
				longitude: 135.456127,
				title: '大阪王将 歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>大阪王将 歌島橋店</h4><p><Img Src="images/osakaoshoutajimabasi.jpg" Width="92" Height="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目１－９<br>06-4808-7737</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708363,
				longitude: 135.458941,
				title: '炭火焼鳥かんぱ 姫里店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼鳥かんぱ 姫里店</h4><p><Img Src="images/kanpahimesato.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区姫里２丁目１７－２３<br>06-4808-1929</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704069,
				longitude: 135.457269,
				title: 'かつ膳',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>かつ膳</h4><p><Img Src="images/katuzen.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区姫島１－２１－１７<br>06-6475-8466</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70503,
				longitude: 135.457666,
				title: 'らふ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カレー らふ</h4><p><Img Src="images/curryrafu.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区姫里２－１０－６<br>06-6471-8508</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713401,
				longitude: 135.470426,
				title: 'むらおか ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>そば むらおか</h4><p><Img Src="images/muraoka.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市淀川区塚本２－１７－１２<br>06-4977-0735</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711271,
				longitude: 135.469162,
				title: 'どんまい ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>おでん どんまい</h4><p><Img Src="images/donmai.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－５<br>06-6473-0002</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713026,
				longitude: 135.469168,
				title: 'ケニア 塚本駅前店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>喫茶店 ケニア 塚本駅前店</h4><p><Img Src="images/kenia.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市淀川区塚本２－２８－２４<br>06-6308-1670</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712871,
				longitude: 135.469796,
				title: '炭火焼肉ホルモン こてつ 塚本店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼肉ホルモン こてつ 塚本店</h4><p><Img Src="images/kotetu.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市淀川区塚本２－２４－４<br>06-6309-2929</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'イタリアンバール ブルッタ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアン イタリアンバール ブルッタ</h4><p><Img Src="images/ibb.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市淀川区塚本２－２１－６<br>06-6304-9300</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71301,
				longitude: 135.467918,
				title: '麺屋 雀',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋 雀</h4><p><Img Src="images/menyasuzume.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区柏里３－１２－５ 吉田ビル １Ｆ<br>06-6474-2211</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'ジャムナ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ジャムナ</h4><p><Img Src="images/jamuna.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区歌島２丁目４－４０ １Ｆ<br>06-6475-5525</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713132,
				longitude: 135.463713,
				title: '中華萬来亭',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華萬来亭</h4><p><Img Src="images/banraitei.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区歌島２－１－１０<br>06-6473-8637</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711346,
				longitude: 135.466471,
				title: 'マッシュルーム ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>マッシュルーム</h4><p><Img Src="images/mushroom.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区柏里２丁目７－２２<br>06-6474-3645</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707829,
				longitude: 135.462902,
				title: '野里飯店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>野里飯店</h4><p><Img Src="images/nozatohanten.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区野里１－６－１１<br>06-6471-2369</div>'

	});
	});
<!-- ********** #mapbtn09  ************************************************************ -->


	$("#mapbtn09").click(function(){      // #mapbtn05をクリックした時の処理

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
				latitude: 34.703704,
				longitude: 135.452665,
				title: 'パティスリー　ラシーヌ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ケーキ パティスリー　ラシーヌ</h4><p><Img Src="images/rasinu.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区姫島5-3-19 アーバ姫島公園<br>06-6471-7744</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707202,
				longitude: 135.462171,
				title: 'ブーランジェリー夢屋',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>パン ブーランジェリー夢屋</h4><p><Img Src="images/yumeya.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里１丁目７－１３<br>06-6475-6605</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713445,
				longitude: 135.457005,
				title: 'ＷＡＣＣＡ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>洋菓子 ＷＡＣＣＡ</h4><p><Img Src="images/wacca.jpg" Width="92" Height="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目７－２４<br>06-6475-5575</div>'
	});


	});
<!-- ********** #mapbtn10  ************************************************************ -->


	$("#mapbtn10").click(function(){      // #mapbtn05をクリックした時の処理

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
				latitude: 34.70646,
				longitude: 135.451586,
				title: '西淀公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>西淀公園</h4><p><Img Src="images/公園イメージ.jpg" Width="92" Height="63"></A></p><br>大阪府大阪市西淀川区大和田１丁目１<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70461,
				longitude: 135.453191,
				title: '姫嶋神社',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>姫嶋神社</h4><p><Img Src="images/himejimajinja.jpg" Width="92" Height="63"></A></p><br>〒555-0033 大阪府大阪市西淀川区姫島４丁目１４－２<br>06-6471-5230</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.710237,
				longitude: 135.462829,
				title: '住吉神社',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>住吉神社</h4><p><Img Src="images/sumiyosijinjya.jpg" Width="92" Height="63"></A></p><br>555-0024 大阪府大阪市西淀川区野里１丁目１５－１２<br>06-6471-0277</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.710944,
				longitude: 135.456898,
				title: '大野川緑陰道路',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>大野川緑陰道路</h4><p><Img Src="images/onogawadoro.jpg" Width="92" Height="63"></A></p><br>歌島二丁目から同区百島二丁目に至る<br>約3.9kmの歩行者・自転車専用道路</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706357,
				longitude: 135.465234,
				title: '花川西公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>花川西公園</h4><p><Img Src="images/hanakawanisikoen.jpg" Width="92" Height="63"></A></p><br>大阪市西淀川区花川２丁目３<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708774,
				longitude: 135.463587,
				title: '野里公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>野里公園</h4><p><Img Src="images/nozatokoen.jpg" Width="92" Height="63"></A></p><br>大阪市西淀川区野里１丁目９</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707649,
				longitude: 135.464837,
				title: '愛光児童遊園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>愛光児童遊園</h4><p><Img Src="images/aikoujidouyuuen.jpg" Width="92" Height="63"></A></p><br>大阪市西淀川区花川２丁目１６</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706116,
				longitude: 135.459185,
				title: '姫之里公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>姫之里公園</h4><p><Img Src="images/himenozatokoen.jpg" Width="92" Height="63"></A></p><br></div>'
	});


	});
<!-- ********************************************************************** -->



});// ページ読み込み時に実行したい処理

});

