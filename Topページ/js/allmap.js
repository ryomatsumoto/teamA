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

/*
<!--  ****************************************************************  -->

	$("#royal").click(function(){

		$.gmap3.removeAllMarkers($("#map1"));

		$("#map1").gmap3({
		latitude: 34.709762,
		longitude: 135.463056,
		zoom: 15,
		navigationControl: true,
		mapTypeControl: true,
		scaleControl: true,
		
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706886,
				longitude: 135.462914,
				title: 'ロイヤルユタカ・モータープール花川',
				icon: "images/zitaku.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',
	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();

	});
<!--     ***********************************************************  -->

	$("#My2").click(function(){

		$.gmap3.removeAllMarkers($("#map1"));

		$("#map1").gmap3({
		latitude: 34.687729,
		longitude: 135.470771,
		zoom: 15,
		navigationControl: true,
		mapTypeControl: true,
		scaleControl: true,

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685896,
				longitude: 135.470204,
				icon: "images/zitaku.png",
				title: 'My2レジデンス',
				content: '<div class="infoWindowWrapper"><h4>My2レジデンス</h4><p><Img Src="images/my2residence.jpg" Width="92"eight="63"></A></p></div>'

	});


		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02b.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul2").slideDown();
		$("#mapul1").hide();
		$("#mapul3").hide();

	});

<!--     ************************************************************  -->
	$("#etc").click(function(){

		$.gmap3.removeAllMarkers($("#map1"));

		$("#map1").gmap3({
		latitude: 34.709762,
		longitude: 135.463056,
		zoom: 15,
		navigationControl: true,
		mapTypeControl: true,
		scaleControl: true,
		});
		$.gmap3.addMarker($("#map1"), {
			latitude: 34.706886,
			longitude: 135.462914,
			title: 'ロイヤルユタカ・モータープール花川',
			icon: "images/zitaku.png",
			content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03b.png)","background-repeat": "no-repeat"});
		$("#mapul3").slideDown();
		$("#mapul1").hide();
		$("#mapul2").hide();

	});
	$("#map1").gmap3({
		latitude: 34.709762,
		longitude: 135.463056,
		zoom: 15,
		navigationControl: true,
		mapTypeControl: true,
		scaleControl: true,
		
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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

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
				content: '<div class="infoWindowWrapper"><h4>サンディ塚本店</h4><p><Img Src="images/sandy.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目３－３<br>06-4808-8594</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711046,
				longitude: 135.467082,
				title: 'ライフコーポレーション 塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ライフコーポレーション 塚本店</h4><p><Img Src="images/lifetukamoto.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目７－３２<br>06-6471-9895</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713637,
				longitude: 135.469393,
				title: '万代・塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>万代・塚本店</h4><p><Img Src="images/mandaitukamoto.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－５<br>06-6306-1270</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713818,
				longitude: 135.469368,
				title: '阪急ファミリーストア塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>阪急ファミリーストア塚本店</h4><p><Img Src="images/hankyufamilystore.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－１８<br>06-6305-7871</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70646,
				longitude: 135.451586,
				title: '西淀公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>西淀公園</h4><p><Img Src="images/公園イメージ.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区大和田１丁目１<br></div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711454,
				longitude: 135.456137,
				title: '西淀川区役所・図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川区役所・図書館</h4><p><Img Src="images/nisiyodogawasiyakusyo.jpg" Width="92" Height="63"><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6478-9625<br>西淀川図書館<br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6474-7900<br>大阪市西淀川区役所</A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706462,
				longitude: 135.457997,
				title: 'ファミリー サポート・センター西淀川',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>ファミリー サポート・センター西淀川</h4><p><Img Src="images/kodomokosodate.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１３－２２<br>06-6474-7280</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711542,
				longitude: 135.45333,
				title: '西淀川警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川警察署</h4><p><Img Src="images/nisiyodogawakeisatu.jpg" Width="92" Height="63"></A></p><br>〒555-0013 大阪府大阪市西淀川区千舟２丁目６－２４<br>06-6474-1234</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.709787,
				longitude: 135.459802,
				title: '西淀川スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川スポーツセンター</h4><p><Img Src="images/nisiyodogawasports.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里２丁目１０－３５<br>06-6472-9200</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706920,
				longitude: 135.462793,
				title: 'ゆたか歯科クリニック・辻耳鼻咽喉科医院・ヒシヤ薬局',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ１Ｆテナント</h4><br><h4>ゆたか歯科クリニック TEL 06-6473-3710</h4><p><Img Src="images/yutakasika.jpg" Width="92"eight="63"></A><br><h4>辻耳鼻咽喉科医院 TEL 06-6471-2418</h4><Img Src="images/tujijibi.jpg" Width="92"eight="63"></A><br><h4>ヒシヤ薬局 TEL 06-6471-7282</h4><Img Src="images/hisiya.jpg" Width="92"eight="63"></A></p>〒555-0023 大阪府大阪市西淀川区花川<br>２丁目２－２０ ロイヤルユタカ 1F</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704424,
				longitude: 135.45821,
				title: '阪神姫島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神姫島駅</h4><p><Img Src="images/hansinhimejima.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712575,
				longitude: 135.468893,
				title: 'ＪＲ塚本駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ塚本駅</h4><p><Img Src="images/tukamotoeki2.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71259,
				longitude: 135.45568,
				title: 'ＪＲ御幣島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ御幣島駅</h4><p><Img Src="images/goheijimaeki.jpg" Width="92"eight="63"></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706886,
				longitude: 135.462914,
				title: 'ロイヤルユタカ・モータープール花川',
				icon: "images/zitaku.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711734,
				longitude: 135.458527,
				title: 'スシロー歌島店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>スシロー歌島店</h4><p><Img Src="images/susiro.jpg" Width="92"eight="63"></A><Img Src="images/スシロー歌島店" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島３丁目３－１１<br>06-6474-2209</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708724,
				longitude: 135.458258,
				title: '和食さと歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>和食さと歌島橋店</h4><p><Img Src="images/satoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里３丁目１－２８<br>06-6475-3805</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71061,
				longitude: 135.456127,
				title: '大阪王将 歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>大阪王将 歌島橋店</h4><p><Img Src="images/osakaoshoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目１－９<br>06-4808-7737</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713445,
				longitude: 135.457005,
				title: 'ＷＡＣＣＡ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>洋菓子 ＷＡＣＣＡ</h4><p><Img Src="images/wacca.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目７－２４<br>06-6475-5575</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707202,
				longitude: 135.462171,
				title: 'ブーランジェリー夢屋',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>パン ブーランジェリー夢屋</h4><p><Img Src="images/yumeya.jpg" Width="92"eight="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里１丁目７－１３<br>06-6475-6605</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708363,
				longitude: 135.458941,
				title: '炭火焼鳥かんぱ 姫里店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼鳥かんぱ 姫里店</h4><p><Img Src="images/kanpahimesato.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２丁目１７－２３<br>06-4808-1929</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704069,
				longitude: 135.457269,
				title: 'かつ膳',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>かつ膳</h4><p><Img Src="images/katuzen.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島１－２１－１７<br>06-6475-8466</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70503,
				longitude: 135.457666,
				title: 'らふ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カレー らふ</h4><p><Img Src="images/curryrafu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２－１０－６<br>06-6471-8508</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.703704,
				longitude: 135.452665,
				title: 'パティスリー　ラシーヌ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ケーキ パティスリー　ラシーヌ</h4><p><Img Src="images/rasinu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島5-3-19 アーバ姫島公園<br>06-6471-7744</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713401,
				longitude: 135.470426,
				title: 'むらおか ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>そば むらおか</h4><p><Img Src="images/muraoka.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－１７－１２<br>06-4977-0735</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711271,
				longitude: 135.469162,
				title: 'どんまい ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>おでん どんまい</h4><p><Img Src="images/donmai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－５<br>06-6473-0002</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713026,
				longitude: 135.469168,
				title: 'ケニア 塚本駅前店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>喫茶店 ケニア 塚本駅前店</h4><p><Img Src="images/kenia.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２８－２４<br>06-6308-1670</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712871,
				longitude: 135.469796,
				title: '炭火焼肉ホルモン こてつ 塚本店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼肉ホルモン こてつ 塚本店</h4><p><Img Src="images/kotetu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２４－４<br>06-6309-2929</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'イタリアンバール ブルッタ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアン イタリアンバール ブルッタ</h4><p><Img Src="images/ibb.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２１－６<br>06-6304-9300</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71301,
				longitude: 135.467918,
				title: '麺屋 雀',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋 雀</h4><p><Img Src="images/menyasuzume.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里３－１２－５ 吉田ビル １Ｆ<br>06-6474-2211</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'ジャムナ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ジャムナ</h4><p><Img Src="images/jamuna.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２丁目４－４０ １Ｆ<br>06-6475-5525</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713132,
				longitude: 135.463713,
				title: '中華萬来亭',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華萬来亭</h4><p><Img Src="images/banraitei.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２－１－１０<br>06-6473-8637</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711346,
				longitude: 135.466471,
				title: 'マッシュルーム ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>マッシュルーム</h4><p><Img Src="images/mushroom.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２丁目７－２２<br>06-6474-3645</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707829,
				longitude: 135.462902,
				title: '野里飯店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>野里飯店</h4><p><Img Src="images/nozatohanten.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区野里１－６－１１<br>06-6471-2369</div>'

	});


		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

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
				content: '<div class="infoWindowWrapper"><h4>サンディ塚本店</h4><p><Img Src="images/sandy.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目３－３<br>06-4808-8594</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711046,
				longitude: 135.467082,
				title: 'ライフコーポレーション 塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ライフコーポレーション 塚本店</h4><p><Img Src="images/lifetukamoto.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目７－３２<br>06-6471-9895</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713637,
				longitude: 135.469393,
				title: '万代・塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>万代・塚本店</h4><p><Img Src="images/mandaitukamoto.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－５<br>06-6306-1270</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713818,
				longitude: 135.469368,
				title: '阪急ファミリーストア塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>阪急ファミリーストア塚本店</h4><p><Img Src="images/hankyufamilystore.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－１８<br>06-6305-7871</div>'
	});

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();
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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711454,
				longitude: 135.456137,
				title: '西淀川区役所・図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川区役所・図書館</h4><p><Img Src="images/nisiyodogawasiyakusyo.jpg" Width="92" Height="63"><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6478-9625<br>西淀川図書館<br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6474-7900<br>大阪市西淀川区役所</A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706462,
				longitude: 135.457997,
				title: 'ファミリー サポート・センター西淀川',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>ファミリー サポート・センター西淀川</h4><p><Img Src="images/kodomokosodate.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１３－２２<br>06-6474-7280</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711542,
				longitude: 135.45333,
				title: '西淀川警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川警察署</h4><p><Img Src="images/nisiyodogawakeisatu.jpg" Width="92" Height="63"></A></p><br>〒555-0013 大阪府大阪市西淀川区千舟２丁目６－２４<br>06-6474-1234</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.709787,
				longitude: 135.459802,
				title: '西淀川スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川スポーツセンター</h4><p><Img Src="images/nisiyodogawasports.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里２丁目１０－３５<br>06-6472-9200</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706920,
				longitude: 135.462793,
				title: 'ゆたか歯科クリニック・辻耳鼻咽喉科医院・ヒシヤ薬局',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ１Ｆテナント</h4><br><h4>ゆたか歯科クリニック TEL 06-6473-3710</h4><p><Img Src="images/yutakasika.jpg" Width="92"eight="63"></A><br><h4>辻耳鼻咽喉科医院 TEL 06-6471-2418</h4><Img Src="images/tujijibi.jpg" Width="92"eight="63"></A><br><h4>ヒシヤ薬局 TEL 06-6471-7282</h4><Img Src="images/hisiya.jpg" Width="92"eight="63"></A></p>〒555-0023 大阪府大阪市西淀川区花川<br>２丁目２－２０ ロイヤルユタカ 1F</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704424,
				longitude: 135.45821,
				title: '阪神姫島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神姫島駅</h4><p><Img Src="images/hansinhimejima.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712575,
				longitude: 135.468893,
				title: 'ＪＲ塚本駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ塚本駅</h4><p><Img Src="images/tukamotoeki2.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71259,
				longitude: 135.45568,
				title: 'ＪＲ御幣島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ御幣島駅</h4><p><Img Src="images/goheijimaeki.jpg" Width="92"eight="63"></p></div>'

	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711734,
				longitude: 135.458527,
				title: 'スシロー歌島店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>スシロー歌島店</h4><p><Img Src="images/susiro.jpg" Width="92"eight="63"></A><Img Src="images/スシロー歌島店" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島３丁目３－１１<br>06-6474-2209</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708724,
				longitude: 135.458258,
				title: '和食さと歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>和食さと歌島橋店</h4><p><Img Src="images/satoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里３丁目１－２８<br>06-6475-3805</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71061,
				longitude: 135.456127,
				title: '大阪王将 歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>大阪王将 歌島橋店</h4><p><Img Src="images/osakaoshoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目１－９<br>06-4808-7737</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713445,
				longitude: 135.457005,
				title: 'ＷＡＣＣＡ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>洋菓子 ＷＡＣＣＡ</h4><p><Img Src="images/wacca.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目７－２４<br>06-6475-5575</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707202,
				longitude: 135.462171,
				title: 'ブーランジェリー夢屋',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>パン ブーランジェリー夢屋</h4><p><Img Src="images/yumeya.jpg" Width="92"eight="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里１丁目７－１３<br>06-6475-6605</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708363,
				longitude: 135.458941,
				title: '炭火焼鳥かんぱ 姫里店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼鳥かんぱ 姫里店</h4><p><Img Src="images/kanpahimesato.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２丁目１７－２３<br>06-4808-1929</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704069,
				longitude: 135.457269,
				title: 'かつ膳',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>かつ膳</h4><p><Img Src="images/katuzen.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島１－２１－１７<br>06-6475-8466</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70503,
				longitude: 135.457666,
				title: 'らふ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カレー らふ</h4><p><Img Src="images/curryrafu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２－１０－６<br>06-6471-8508</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.703704,
				longitude: 135.452665,
				title: 'パティスリー　ラシーヌ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ケーキ パティスリー　ラシーヌ</h4><p><Img Src="images/rasinu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島5-3-19 アーバ姫島公園<br>06-6471-7744</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713401,
				longitude: 135.470426,
				title: 'むらおか ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>そば むらおか</h4><p><Img Src="images/muraoka.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－１７－１２<br>06-4977-0735</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711271,
				longitude: 135.469162,
				title: 'どんまい ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>おでん どんまい</h4><p><Img Src="images/donmai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－５<br>06-6473-0002</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713026,
				longitude: 135.469168,
				title: 'ケニア 塚本駅前店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>喫茶店 ケニア 塚本駅前店</h4><p><Img Src="images/kenia.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２８－２４<br>06-6308-1670</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712871,
				longitude: 135.469796,
				title: '炭火焼肉ホルモン こてつ 塚本店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼肉ホルモン こてつ 塚本店</h4><p><Img Src="images/kotetu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２４－４<br>06-6309-2929</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'イタリアンバール ブルッタ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアン イタリアンバール ブルッタ</h4><p><Img Src="images/ibb.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２１－６<br>06-6304-9300</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71301,
				longitude: 135.467918,
				title: '麺屋 雀',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋 雀</h4><p><Img Src="images/menyasuzume.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里３－１２－５ 吉田ビル １Ｆ<br>06-6474-2211</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'ジャムナ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ジャムナ</h4><p><Img Src="images/jamuna.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２丁目４－４０ １Ｆ<br>06-6475-5525</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713132,
				longitude: 135.463713,
				title: '中華萬来亭',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華萬来亭</h4><p><Img Src="images/banraitei.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２－１－１０<br>06-6473-8637</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711346,
				longitude: 135.466471,
				title: 'マッシュルーム ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>マッシュルーム</h4><p><Img Src="images/mushroom.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２丁目７－２２<br>06-6474-3645</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707829,
				longitude: 135.462902,
				title: '野里飯店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>野里飯店</h4><p><Img Src="images/nozatohanten.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区野里１－６－１１<br>06-6471-2369</div>'

	});

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();

	});

<!-- ********** #mapbtn05  ************************************************************ -->
	$("#mapbtn05").click(function(){

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70646,
				longitude: 135.451586,
				title: '西淀公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>西淀公園</h4><p><Img Src="images/公園イメージ.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区大和田１丁目１<br></div>'

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


		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();

	});

<!-- ********** #mapbtn06  ************************************************************ -->
	$("#mapbtn06").click(function(){

		$.gmap3.panTo($("#map1"), {
		latitude: 34.687729,
		longitude: 135.470771,
		});
	$.gmap3.removeAllMarkers($("#map1"));
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.685896,
		longitude: 135.470204,
		icon: "images/zitaku.png",
		title: 'My2レジデンス',
		content: '<div class="infoWindowWrapper"><h4>My2レジデンス</h4><p><Img Src="images/my2residence.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.683108,
		longitude: 135.464091,
		title: 'ライフ西九条店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ライフ西九条店</h4><p><Img Src="images/lifenisikujo.jpg" Width="92"eight="63"></A></p><br>〒540-0012 大阪府大阪市 此花区 西九条６丁目１－１３２<br>06-6462-0200</div>'

	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.683213,
		longitude: 135.467094,
		title: 'ベストショップ西九条',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ベストショップ西九条</h4><p><Img Src="images/bests.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条３丁目１－１８<br>06-6461-1790</div>'

	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.685041,
		longitude: 135.469243,
		title: '業務スーパー・西九条店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>業務スーパー・西九条店</h4><p><Img Src="images/gsupernisikujyo.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目１－５<br>06-6460-4129</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.688288,
		longitude: 135.467599,
		title: '万代 福島吉野店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>万代 福島吉野店</h4><p><Img Src="images/mandaifukusimayosino.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目１１－２０<br>06-6467-5575</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.689756,
		longitude: 135.470129,
		title: 'ライフ・野田店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ライフ・野田店</h4><p><Img Src="images/lifenoda.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目２９－２５<br>06-6465-4011</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.69091,
		longitude: 135.475942,
		title: 'ビッグビィーンズ野田店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ビッグビィーンズ野田店</h4><p><Img Src="images/bbnoda.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野２丁目８－４<br>06-6441-7616</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.685496,
		longitude: 135.475612,
		title: '気ララ野田',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>気ララ野田</h4><p><Img Src="images/kiraranoda.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田２丁目１６－２８<br>06-6461-0375</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684604,
				longitude: 135.471977,
				title: '野田緑地',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>野田緑地</h4><p><Img Src="images/nodaryokuti.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区野田５丁目６<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687652,
				longitude: 135.468710,
				title: '新家公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>新家公園</h4><p><Img Src="images/singekoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区吉野５丁目９<br></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.689687,
				longitude: 135.470971,
				title: '吉野町公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>吉野町公園</h4><p><Img Src="images/yosinotyokoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区吉野４丁目１２<br></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685182,
				longitude: 135.473707,
				title: '大野町公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>大野町公園</h4><p><Img Src="images/onomatikoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区野田５丁目９<br></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691337,
				longitude: 135.472901,
				title: '江成公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>江成公園</h4><p><Img Src="images/enarikoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区吉野３丁目１７<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692339,
				longitude: 135.47223,
				title: '福島区役所',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>福島区役所</h4><p><Img Src="images/fukusimakuyakusyo.jpg" Width="92"eight="63"></A><Img Src="images/fukusimakuyakusyosyuhen.jpg" Width="92"eight="63"></A></p><br>〒553-0007 大阪府大阪市福島区大開１丁目８－１<br>06-6464-9986</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691456,
				longitude: 135.473129,
				title: '大阪市立福島図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立福島図書館</h4><p><Img Src="images/fukusimatoshokan.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１７－２３<br>06-6468-2336</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690968,
				longitude: 135.471848,
				title: '福島警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>福島警察署</h4><p><Img Src="images/fukusimakeisatu.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目９－１９<br>06-6465-1234</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.681508,
				longitude: 135.4631,
				title: '此花スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>此花スポーツセンター</h4><p><Img Src="images/konohanasports.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条６丁目１－２７<br>06-6465-5800</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691533,
				longitude: 135.473108,
				title: '福島スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>福島スポーツセンター</h4><p><Img Src="images/fukusimasports.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１７－２３<br>06-6468-0450</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692633,
				longitude: 135.470721,
				title: '大阪市立大開小学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立大開小学校</h4><p><Img Src="images/ohirasho.jpg" Width="92"eight="63"></A></p><br>〒553-0007 大阪府大阪市福島区大開２丁目１０－２８<br>06-6461-0460</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690022,
				longitude: 135.473434,
				title: '大阪市立吉野小学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立吉野小学校</h4><p><Img Src="images/yosinosho.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１０－５<br>06-6462-0051</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687221,
				longitude: 135.468611,
				title: '大阪市立野田中学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立野田中学校</h4><p><Img Src="images/nodachu.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目９－４<br>06-6462-3291</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682927,
				longitude: 135.468691,
				title: '西九条保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>西九条保育所</h4><p><Img Src="images/nisikujyohoikusyo.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条１丁目７－１４<br>06-6461-5329</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684327,
				longitude: 135.470096,
				title: 'ふじのもり保育園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>ふじのもり保育園</h4><p><Img Src="images/fujinomori.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田６丁目５－４１<br>06-6460-6060</div>'
	});	
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687049,
				longitude: 135.467085,
				title: '新家保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>新家保育所</h4><p><Img Src="images/singehoikusyo.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目６－１２<br>06-6462-0064</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687729,
				longitude: 135.470771,
				title: '託児所ぱれっと',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>託児所ぱれっと</h4><p><Img Src="images/paretto.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目２４－２６ 栄食ビル 1F<br>06-4862-6809</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685833,
				longitude: 135.477664,
				title: '野田保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>野田保育所</h4><p><Img Src="images/nodahoikusyo.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田２丁目１２－１<br>06-6462-0080</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690386,
				longitude: 135.477598,
				title: '保育園森のくまさん',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>保育園森のくまさん</h4><p><Img Src="images/kumasan.jpg" Width="92"eight="63"></A></p><br>〒553-0004 大阪府大阪市福島区玉川４丁目１３－２２ MICロイヤルハイツ 1F<br>06-6448-4152</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691146,
				longitude: 135.472571,
				title: '吉野保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>吉野保育所</h4><p><Img Src="images/yosinohoikusyo.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１７－１１<br>06-6461-1350</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.689627,
				longitude: 135.481053,
				title: 'ひばり保育園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>ひばり保育園</h4><p><Img Src="images/hibari.jpg" Width="92"eight="63"></A></p>〒553-0004 大阪府大阪市福島区玉川1丁目6-22F<br>06-6444-1225</div>'
	});

<!-- 　福島区編　病院等 ========================================================== -->

	$.gmap3.addMarker($("#map1"), {
				latitude: 34.686018,
				longitude: 135.471685,
				title: '首藤病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>首藤病院</h4><p><Img Src="images/syutobyoin.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田５丁目１８－１６<br>06-6461-1537</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.688971,
				longitude: 135.47091,
				title: '三上クリニック第一分院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>三上クリニック第一分院</h4><p><Img Src="images/mikamikurinikku01.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目１４－１５<br>06-6466-3813</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691982,
				longitude: 135.475276,
				title: 'フジタ病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>フジタ病院</h4><p><Img Src="images/fujita.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野２丁目１０－１１<br>06-6441-1181</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691904,
				longitude: 135.482359,
				title: '大阪厚生年金病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>大阪厚生年金病院</h4><p><Img Src="images/osakakoseinenkinbyoin.jpg" Width="92"eight="63"></A></p><br>〒553-0003　大阪市福島区福島 ４－２－７８<br>06-6441-5451</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683782,
				longitude: 135.46418,
				title: '西九条休日急病診療所',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>西九条休日急病診療所</h4><p><Img Src="images/nisikujyokyubyo.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条５丁目４－２５<br>06-6464-2111</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682088,
				longitude: 135.465552,
				title: '朝日橋胃腸科内科小児科診療所',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>朝日橋胃腸科内科小児科診療所</h4><p><Img Src="images/asahibasiityo.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条４丁目２－２６<br>06-6462-8710</div>'
	});

<!-- 　福島区編　公共交通等 ========================================================== -->
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.688883,
				longitude: 135.474740,
				title: 'ＪＲ野田駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ野田駅</h4><p><Img Src="images/jrnoda.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682628,
				longitude: 135.466768,
				title: 'ＪＲ西九条駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ西九条駅</h4><p><Img Src="images/nisikujyoeki.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682690,
				longitude: 135.465813,
				title: '阪神西九条駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神西九条駅</h4><p><Img Src="images/hansinnisikujyoeki.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683932,
				longitude: 135.467696,
				title: '麺屋　花壱',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋　花壱</h4><p><Img Src="images/menyahanaiti.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１０－２５<br>06-6466-3857</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683552,
				longitude: 135.465291,
				title: '沖縄居酒屋 はなはな',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>沖縄居酒屋 はなはな</h4><p><Img Src="images/hanahana.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－８－１８<br>090-1133-0870</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683491,
				longitude: 135.466707,
				title: 'イタリアンキッチンペロット',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアンキッチンペロット</h4><p><Img Src="images/ikp.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１２－１３<br>080-3516-8094</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683019,
				longitude: 135.466524,
				title: '十八番お好み焼 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>十八番お好み焼</h4><p><Img Src="images/18okonomiyaki.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１３－５<br>06-6466-0018</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.688618,
				longitude: 135.477206,
				title: '精養軒 （セイヨウケン）',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>精養軒（セイヨウケン）</h4><p><Img Src="images/seiyoken.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区玉川４－１０－１６<br>06-6441-1447</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692859,
				longitude: 135.475315,
				title: '川繁 （かわしげ） ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>川繁 （かわしげ）</h4><p><Img Src="images/kawasige.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野２－１４－１８<br>06-6441-4127</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.696634,
				longitude: 135.472162,
				title: '中華そば 無限 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華そば 無限</h4><p><Img Src="images/mugen.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区海老江５－５－１０<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.696253,
				longitude: 135.472004,
				title: '手打うどん やとう',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>手打うどん やとう</h4><p><Img Src="images/udonyatou.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区海老江７－１０－２１<br>06-6458-8107</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692665,
				longitude: 135.475126,
				title: 'お好み焼　粉匠 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>お好み焼　粉匠</h4><p><Img Src="images/okonomi.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野２－１３－１２<br>06-6445-2215</div>'

	});
	
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683935,
				longitude: 135.467307,
				title: 'グーテ・ド・アナトール ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>グーテ・ド・アナトール</h4><p><Img Src="images/gute.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１０－５ サンコーフィラン西九条１Ｆ<br>06-6465-1850</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682595,
				longitude: 135.466398,
				title: 'ホルモン大和 西九条本店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ホルモン大和 西九条本店</h4><p><Img Src="images/horumonyamato.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１６－２４<br>06-6468-5507</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.681599,
				longitude: 135.465883,
				title: '韓国家庭料理 焼肉の金海',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>韓国家庭料理 焼肉の金海</h4><p><Img Src="images/yakinikukinkai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条2-6-22 ブランパレ金海ビル 1F 2F<br>06-6466-0190</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.689201,
				longitude: 135.46871,
				title: '焼肉千成',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>焼肉千成</h4><p><Img Src="images/yakinikusennari.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野５－１４－１７<br>06-6463-2911</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684485,
				longitude: 135.475534,
				title: '旬味 まゆとろ ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>旬味 まゆとろ</h4><p><Img Src="images/mayutoro.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区野田４－１－３９<br>06-6469-1000</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684194,
				longitude: 135.479546,
				title: '中央市場 ゑんどう',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中央市場 ゑんどう</h4><p><Img Src="images/tyuouitibaendo.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区野田１－１－８６ 大阪市中央卸売市場内<br>06-6469-7108</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690254,
				longitude: 135.476559,
				title: 'カフェ ヘブン',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カフェ ヘブン</h4><p><Img Src="images/cafeheaven.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野２－１－４<br>06-6131-5357</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691157,
				longitude: 135.47634,
				title: 'ブーランジェリー ツール・ド・フランス',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ブーランジェリー ツール・ド・フランス</h4><p><Img Src="images/tdf.jpg" Width="92"eight="63"></A><br>大阪府大阪市福島区吉野２－３－１４<br>06-6444-7111</div>'
	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02b.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul2").slideDown();
		$("#mapul1").hide();
		$("#mapul3").hide();

	});

<!-- ********** #mapbtn07  ************************************************************ -->
	$("#mapbtn07").click(function(){

		$.gmap3.panTo($("#map1"), {
		latitude: 34.687729,
		longitude: 135.470771,
		});
	$.gmap3.removeAllMarkers($("#map1"));
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.685896,
		longitude: 135.470204,
		icon: "images/zitaku.png",
		title: 'My2レジデンス',
		content: '<div class="infoWindowWrapper"><h4>My2レジデンス</h4><p><Img Src="images/my2residence.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.683108,
		longitude: 135.464091,
		title: 'ライフ西九条店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ライフ西九条店</h4><p><Img Src="images/lifenisikujo.jpg" Width="92"eight="63"></A></p><br>〒540-0012 大阪府大阪市 此花区 西九条６丁目１－１３２<br>06-6462-0200</div>'

	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.683213,
		longitude: 135.467094,
		title: 'ベストショップ西九条',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ベストショップ西九条</h4><p><Img Src="images/bests.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条３丁目１－１８<br>06-6461-1790</div>'

	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.685041,
		longitude: 135.469243,
		title: '業務スーパー・西九条店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>業務スーパー・西九条店</h4><p><Img Src="images/gsupernisikujyo.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目１－５<br>06-6460-4129</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.688288,
		longitude: 135.467599,
		title: '万代 福島吉野店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>万代 福島吉野店</h4><p><Img Src="images/mandaifukusimayosino.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目１１－２０<br>06-6467-5575</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.689756,
		longitude: 135.470129,
		title: 'ライフ・野田店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ライフ・野田店</h4><p><Img Src="images/lifenoda.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目２９－２５<br>06-6465-4011</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.69091,
		longitude: 135.475942,
		title: 'ビッグビィーンズ野田店',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>ビッグビィーンズ野田店</h4><p><Img Src="images/bbnoda.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野２丁目８－４<br>06-6441-7616</div>'
	});
	$.gmap3.addMarker($("#map1"), {
		latitude: 34.685496,
		longitude: 135.475612,
		title: '気ララ野田',
		icon: "images/market.png",
		content: '<div class="infoWindowWrapper"><h4>気ララ野田</h4><p><Img Src="images/kiraranoda.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田２丁目１６－２８<br>06-6461-0375</div>'
	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02b.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul2").slideDown();
		$("#mapul1").hide();
		$("#mapul3").hide();


	});
<!-- ********** #mapbtn08  ************************************************************ -->
	$("#mapbtn08").click(function(){

		$.gmap3.panTo($("#map1"), {
		latitude: 34.687729,
		longitude: 135.470771,
		});
	$.gmap3.removeAllMarkers($("#map1"));
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685896,
				longitude: 135.470204,
				icon: "images/zitaku.png",
				title: 'My2レジデンス',
				content: '<div class="infoWindowWrapper"><h4>My2レジデンス</h4><p><Img Src="images/my2residence.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692339,
				longitude: 135.47223,
				title: '福島区役所',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>福島区役所</h4><p><Img Src="images/fukusimakuyakusyo.jpg" Width="92"eight="63"></A><Img Src="images/fukusimakuyakusyosyuhen.jpg" Width="92"eight="63"></A></p><br>〒553-0007 大阪府大阪市福島区大開１丁目８－１<br>06-6464-9986</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691456,
				longitude: 135.473129,
				title: '大阪市立福島図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立福島図書館</h4><p><Img Src="images/fukusimatoshokan.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１７－２３<br>06-6468-2336</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690968,
				longitude: 135.471848,
				title: '福島警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>福島警察署</h4><p><Img Src="images/fukusimakeisatu.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目９－１９<br>06-6465-1234</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.681508,
				longitude: 135.4631,
				title: '此花スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>此花スポーツセンター</h4><p><Img Src="images/konohanasports.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条６丁目１－２７<br>06-6465-5800</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691533,
				longitude: 135.473108,
				title: '福島スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>福島スポーツセンター</h4><p><Img Src="images/fukusimasports.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１７－２３<br>06-6468-0450</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692633,
				longitude: 135.470721,
				title: '大阪市立大開小学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立大開小学校</h4><p><Img Src="images/ohirasho.jpg" Width="92"eight="63"></A></p><br>〒553-0007 大阪府大阪市福島区大開２丁目１０－２８<br>06-6461-0460</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690022,
				longitude: 135.473434,
				title: '大阪市立吉野小学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立吉野小学校</h4><p><Img Src="images/yosinosho.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１０－５<br>06-6462-0051</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687221,
				longitude: 135.468611,
				title: '大阪市立野田中学校',
				icon: "images/School.png",
				content: '<div class="infoWindowWrapper"><h4>大阪市立野田中学校</h4><p><Img Src="images/nodachu.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目９－４<br>06-6462-3291</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682927,
				longitude: 135.468691,
				title: '西九条保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>西九条保育所</h4><p><Img Src="images/nisikujyohoikusyo.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条１丁目７－１４<br>06-6461-5329</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684327,
				longitude: 135.470096,
				title: 'ふじのもり保育園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>ふじのもり保育園</h4><p><Img Src="images/fujinomori.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田６丁目５－４１<br>06-6460-6060</div>'
	});	
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687049,
				longitude: 135.467085,
				title: '新家保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>新家保育所</h4><p><Img Src="images/singehoikusyo.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野５丁目６－１２<br>06-6462-0064</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687729,
				longitude: 135.470771,
				title: '託児所ぱれっと',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>託児所ぱれっと</h4><p><Img Src="images/paretto.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目２４－２６ 栄食ビル 1F<br>06-4862-6809</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685833,
				longitude: 135.477664,
				title: '野田保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>野田保育所</h4><p><Img Src="images/nodahoikusyo.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田２丁目１２－１<br>06-6462-0080</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690386,
				longitude: 135.477598,
				title: '保育園森のくまさん',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>保育園森のくまさん</h4><p><Img Src="images/kumasan.jpg" Width="92"eight="63"></A></p><br>〒553-0004 大阪府大阪市福島区玉川４丁目１３－２２ MICロイヤルハイツ 1F<br>06-6448-4152</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691146,
				longitude: 135.472571,
				title: '吉野保育所',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>吉野保育所</h4><p><Img Src="images/yosinohoikusyo.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野３丁目１７－１１<br>06-6461-1350</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.689627,
				longitude: 135.481053,
				title: 'ひばり保育園',
				icon: "images/kodomo.png",
				content: '<div class="infoWindowWrapper"><h4>ひばり保育園</h4><p><Img Src="images/hibari.jpg" Width="92"eight="63"></A></p>〒553-0004 大阪府大阪市福島区玉川1丁目6-22F<br>06-6444-1225</div>'
	});

<!-- 　福島区編　病院等 ========================================================== -->

	$.gmap3.addMarker($("#map1"), {
		latitude: 34.687729,
		longitude: 135.470771,
				title: '首藤病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>首藤病院</h4><p><Img Src="images/syutobyoin.jpg" Width="92"eight="63"></A></p><br>〒553-0005 大阪府大阪市福島区野田５丁目１８－１６<br>06-6461-1537</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.688971,
				longitude: 135.47091,
				title: '三上クリニック第一分院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>三上クリニック第一分院</h4><p><Img Src="images/mikamikurinikku01.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目１４－１５<br>06-6466-3813</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691982,
				longitude: 135.475276,
				title: 'フジタ病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>フジタ病院</h4><p><Img Src="images/fujita.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野２丁目１０－１１<br>06-6441-1181</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691904,
				longitude: 135.482359,
				title: '大阪厚生年金病院',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>大阪厚生年金病院</h4><p><Img Src="images/osakakoseinenkinbyoin.jpg" Width="92"eight="63"></A></p><br>〒553-0003　大阪市福島区福島 ４－２－７８<br>06-6441-5451</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683782,
				longitude: 135.46418,
				title: '西九条休日急病診療所',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>西九条休日急病診療所</h4><p><Img Src="images/nisikujyokyubyo.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条５丁目４－２５<br>06-6464-2111</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682088,
				longitude: 135.465552,
				title: '朝日橋胃腸科内科小児科診療所',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>朝日橋胃腸科内科小児科診療所</h4><p><Img Src="images/asahibasiityo.jpg" Width="92"eight="63"></A></p><br>〒554-0012 大阪府大阪市此花区西九条４丁目２－２６<br>06-6462-8710</div>'
	});

<!-- 　福島区編　公共交通等 ========================================================== -->
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.688883,
				longitude: 135.474740,
				title: 'ＪＲ野田駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ野田駅</h4><p><Img Src="images/jrnoda.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682628,
				longitude: 135.466768,
				title: 'ＪＲ西九条駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ西九条駅</h4><p><Img Src="images/nisikujyoeki.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682690,
				longitude: 135.465813,
				title: '阪神西九条駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神西九条駅</h4><p><Img Src="images/hansinnisikujyoeki.jpg" Width="92"eight="63"></A></p></div>'
	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02b.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul2").slideDown();
		$("#mapul1").hide();
		$("#mapul3").hide();


	});

<!-- ********** #mapbtn09  ************************************************************ -->
	$("#mapbtn09").click(function(){

		$.gmap3.panTo($("#map1"), {
		latitude: 34.687729,
		longitude: 135.470771,
		});
	$.gmap3.removeAllMarkers($("#map1"));
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685896,
				longitude: 135.470204,
				icon: "images/zitaku.png",
				title: 'My2レジデンス',
				content: '<div class="infoWindowWrapper"><h4>My2レジデンス</h4><p><Img Src="images/my2residence.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683932,
				longitude: 135.467696,
				title: '麺屋　花壱',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋　花壱</h4><p><Img Src="images/menyahanaiti.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１０－２５<br>06-6466-3857</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683552,
				longitude: 135.465291,
				title: '沖縄居酒屋 はなはな',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>沖縄居酒屋 はなはな</h4><p><Img Src="images/hanahana.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－８－１８<br>090-1133-0870</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683491,
				longitude: 135.466707,
				title: 'イタリアンキッチンペロット',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアンキッチンペロット</h4><p><Img Src="images/ikp.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１２－１３<br>080-3516-8094</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683019,
				longitude: 135.466524,
				title: '十八番お好み焼 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>十八番お好み焼</h4><p><Img Src="images/18okonomiyaki.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１３－５<br>06-6466-0018</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.688618,
				longitude: 135.477206,
				title: '精養軒 （セイヨウケン）',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>精養軒（セイヨウケン）</h4><p><Img Src="images/seiyoken.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区玉川４－１０－１６<br>06-6441-1447</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692859,
				longitude: 135.475315,
				title: '川繁 （かわしげ） ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>川繁 （かわしげ）</h4><p><Img Src="images/kawasige.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野２－１４－１８<br>06-6441-4127</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.696634,
				longitude: 135.472162,
				title: '中華そば 無限 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華そば 無限</h4><p><Img Src="images/mugen.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区海老江５－５－１０<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.696253,
				longitude: 135.472004,
				title: '手打うどん やとう',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>手打うどん やとう</h4><p><Img Src="images/udonyatou.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区海老江７－１０－２１<br>06-6458-8107</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.692665,
				longitude: 135.475126,
				title: 'お好み焼　粉匠 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>お好み焼　粉匠</h4><p><Img Src="images/okonomi.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野２－１３－１２<br>06-6445-2215</div>'

	});
	
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.683935,
				longitude: 135.467307,
				title: 'グーテ・ド・アナトール ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>グーテ・ド・アナトール</h4><p><Img Src="images/gute.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１０－５ サンコーフィラン西九条１Ｆ<br>06-6465-1850</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.682595,
				longitude: 135.466398,
				title: 'ホルモン大和 西九条本店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ホルモン大和 西九条本店</h4><p><Img Src="images/horumonyamato.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１６－２４<br>06-6468-5507</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.681599,
				longitude: 135.465883,
				title: '韓国家庭料理 焼肉の金海',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>韓国家庭料理 焼肉の金海</h4><p><Img Src="images/yakinikukinkai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条2-6-22 ブランパレ金海ビル 1F 2F<br>06-6466-0190</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.689201,
				longitude: 135.46871,
				title: '焼肉千成',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>焼肉千成</h4><p><Img Src="images/yakinikusennari.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野５－１４－１７<br>06-6463-2911</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684485,
				longitude: 135.475534,
				title: '旬味 まゆとろ ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>旬味 まゆとろ</h4><p><Img Src="images/mayutoro.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区野田４－１－３９<br>06-6469-1000</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684194,
				longitude: 135.479546,
				title: '中央市場 ゑんどう',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中央市場 ゑんどう</h4><p><Img Src="images/tyuouitibaendo.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区野田１－１－８６ 大阪市中央卸売市場内<br>06-6469-7108</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.690254,
				longitude: 135.476559,
				title: 'カフェ ヘブン',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カフェ ヘブン</h4><p><Img Src="images/cafeheaven.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区吉野２－１－４<br>06-6131-5357</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691157,
				longitude: 135.47634,
				title: 'ブーランジェリー ツール・ド・フランス',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ブーランジェリー ツール・ド・フランス</h4><p><Img Src="images/tdf.jpg" Width="92"eight="63"></A><br>大阪府大阪市福島区吉野２－３－１４<br>06-6444-7111</div>'
	});

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02b.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul2").slideDown();
		$("#mapul1").hide();
		$("#mapul3").hide();


	});

<!-- ********** #mapbtn10  ************************************************************ -->
	$("#mapbtn10").click(function(){

		$.gmap3.panTo($("#map1"), {
		latitude: 34.687729,
		longitude: 135.470771,
		});
	$.gmap3.removeAllMarkers($("#map1"));
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685896,
				longitude: 135.470204,
				icon: "images/zitaku.png",
				title: 'My2レジデンス',
				content: '<div class="infoWindowWrapper"><h4>My2レジデンス</h4><p><Img Src="images/my2residence.jpg" Width="92"eight="63"></A></p></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.684604,
				longitude: 135.471977,
				title: '野田緑地',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>野田緑地</h4><p><Img Src="images/nodaryokuti.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市福島区野田５丁目６<br></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.687652,
				longitude: 135.468710,
				title: '新家公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>新家公園</h4><p><Img Src="images/singekoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区吉野５丁目９<br></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.689687,
				longitude: 135.470971,
				title: '吉野町公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>吉野町公園</h4><p><Img Src="images/yosinotyokoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区吉野４丁目１２<br></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.685182,
				longitude: 135.473707,
				title: '大野町公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>大野町公園</h4><p><Img Src="images/onomatikoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区野田５丁目９<br></div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691337,
				longitude: 135.472901,
				title: '江成公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>江成公園</h4><p><Img Src="images/enarikoen.jpg" Width="92"eight="63"></A></p><br>大阪市福島区吉野３丁目１７<br></div>'

	});

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01a.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02b.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul2").slideDown();
		$("#mapul1").hide();
		$("#mapul3").hide();
	});
<!-- ********** #mapbtn11  ************************************************************ -->
	$("#mapbtn11").click(function(){

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

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
				content: '<div class="infoWindowWrapper"><h4>サンディ塚本店</h4><p><Img Src="images/sandy.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目３－３<br>06-4808-8594</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711046,
				longitude: 135.467082,
				title: 'ライフコーポレーション 塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ライフコーポレーション 塚本店</h4><p><Img Src="images/lifetukamoto.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目７－３２<br>06-6471-9895</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713637,
				longitude: 135.469393,
				title: '万代・塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>万代・塚本店</h4><p><Img Src="images/mandaitukamoto.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－５<br>06-6306-1270</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713818,
				longitude: 135.469368,
				title: '阪急ファミリーストア塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>阪急ファミリーストア塚本店</h4><p><Img Src="images/hankyufamilystore.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－１８<br>06-6305-7871</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70646,
				longitude: 135.451586,
				title: '西淀公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>西淀公園</h4><p><Img Src="images/公園イメージ.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区大和田１丁目１<br></div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711454,
				longitude: 135.456137,
				title: '西淀川区役所・図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川区役所・図書館</h4><p><Img Src="images/nisiyodogawasiyakusyo.jpg" Width="92" Height="63"><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6478-9625<br>西淀川図書館<br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6474-7900<br>大阪市西淀川区役所</A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706462,
				longitude: 135.457997,
				title: 'ファミリー サポート・センター西淀川',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>ファミリー サポート・センター西淀川</h4><p><Img Src="images/kodomokosodate.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１３－２２<br>06-6474-7280</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711542,
				longitude: 135.45333,
				title: '西淀川警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川警察署</h4><p><Img Src="images/nisiyodogawakeisatu.jpg" Width="92" Height="63"></A></p><br>〒555-0013 大阪府大阪市西淀川区千舟２丁目６－２４<br>06-6474-1234</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.709787,
				longitude: 135.459802,
				title: '西淀川スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川スポーツセンター</h4><p><Img Src="images/nisiyodogawasports.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里２丁目１０－３５<br>06-6472-9200</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706920,
				longitude: 135.462793,
				title: 'ゆたか歯科クリニック・辻耳鼻咽喉科医院・ヒシヤ薬局',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ１Ｆテナント</h4><br><h4>ゆたか歯科クリニック TEL 06-6473-3710</h4><p><Img Src="images/yutakasika.jpg" Width="92"eight="63"></A><br><h4>辻耳鼻咽喉科医院 TEL 06-6471-2418</h4><Img Src="images/tujijibi.jpg" Width="92"eight="63"></A><br><h4>ヒシヤ薬局 TEL 06-6471-7282</h4><Img Src="images/hisiya.jpg" Width="92"eight="63"></A></p>〒555-0023 大阪府大阪市西淀川区花川<br>２丁目２－２０ ロイヤルユタカ 1F</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704424,
				longitude: 135.45821,
				title: '阪神姫島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神姫島駅</h4><p><Img Src="images/hansinhimejima.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712575,
				longitude: 135.468893,
				title: 'ＪＲ塚本駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ塚本駅</h4><p><Img Src="images/tukamotoeki2.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71259,
				longitude: 135.45568,
				title: 'ＪＲ御幣島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ御幣島駅</h4><p><Img Src="images/goheijimaeki.jpg" Width="92"eight="63"></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706886,
				longitude: 135.462914,
				title: 'ロイヤルユタカ・モータープール花川',
				icon: "images/zitaku.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711734,
				longitude: 135.458527,
				title: 'スシロー歌島店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>スシロー歌島店</h4><p><Img Src="images/susiro.jpg" Width="92"eight="63"></A><Img Src="images/スシロー歌島店" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島３丁目３－１１<br>06-6474-2209</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708724,
				longitude: 135.458258,
				title: '和食さと歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>和食さと歌島橋店</h4><p><Img Src="images/satoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里３丁目１－２８<br>06-6475-3805</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71061,
				longitude: 135.456127,
				title: '大阪王将 歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>大阪王将 歌島橋店</h4><p><Img Src="images/osakaoshoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目１－９<br>06-4808-7737</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713445,
				longitude: 135.457005,
				title: 'ＷＡＣＣＡ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>洋菓子 ＷＡＣＣＡ</h4><p><Img Src="images/wacca.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目７－２４<br>06-6475-5575</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707202,
				longitude: 135.462171,
				title: 'ブーランジェリー夢屋',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>パン ブーランジェリー夢屋</h4><p><Img Src="images/yumeya.jpg" Width="92"eight="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里１丁目７－１３<br>06-6475-6605</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708363,
				longitude: 135.458941,
				title: '炭火焼鳥かんぱ 姫里店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼鳥かんぱ 姫里店</h4><p><Img Src="images/kanpahimesato.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２丁目１７－２３<br>06-4808-1929</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704069,
				longitude: 135.457269,
				title: 'かつ膳',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>かつ膳</h4><p><Img Src="images/katuzen.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島１－２１－１７<br>06-6475-8466</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70503,
				longitude: 135.457666,
				title: 'らふ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カレー らふ</h4><p><Img Src="images/curryrafu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２－１０－６<br>06-6471-8508</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.703704,
				longitude: 135.452665,
				title: 'パティスリー　ラシーヌ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ケーキ パティスリー　ラシーヌ</h4><p><Img Src="images/rasinu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島5-3-19 アーバ姫島公園<br>06-6471-7744</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713401,
				longitude: 135.470426,
				title: 'むらおか ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>そば むらおか</h4><p><Img Src="images/muraoka.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－１７－１２<br>06-4977-0735</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711271,
				longitude: 135.469162,
				title: 'どんまい ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>おでん どんまい</h4><p><Img Src="images/donmai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－５<br>06-6473-0002</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713026,
				longitude: 135.469168,
				title: 'ケニア 塚本駅前店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>喫茶店 ケニア 塚本駅前店</h4><p><Img Src="images/kenia.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２８－２４<br>06-6308-1670</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712871,
				longitude: 135.469796,
				title: '炭火焼肉ホルモン こてつ 塚本店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼肉ホルモン こてつ 塚本店</h4><p><Img Src="images/kotetu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２４－４<br>06-6309-2929</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'イタリアンバール ブルッタ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアン イタリアンバール ブルッタ</h4><p><Img Src="images/ibb.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２１－６<br>06-6304-9300</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71301,
				longitude: 135.467918,
				title: '麺屋 雀',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋 雀</h4><p><Img Src="images/menyasuzume.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里３－１２－５ 吉田ビル １Ｆ<br>06-6474-2211</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'ジャムナ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ジャムナ</h4><p><Img Src="images/jamuna.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２丁目４－４０ １Ｆ<br>06-6475-5525</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713132,
				longitude: 135.463713,
				title: '中華萬来亭',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華萬来亭</h4><p><Img Src="images/banraitei.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２－１－１０<br>06-6473-8637</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711346,
				longitude: 135.466471,
				title: 'マッシュルーム ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>マッシュルーム</h4><p><Img Src="images/mushroom.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２丁目７－２２<br>06-6474-3645</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707829,
				longitude: 135.462902,
				title: '野里飯店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>野里飯店</h4><p><Img Src="images/nozatohanten.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区野里１－６－１１<br>06-6471-2369</div>'

	});


		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();
	});
<!-- ********** #mapbtn12  ************************************************************ -->
	$("#mapbtn12").click(function(){

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

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
				content: '<div class="infoWindowWrapper"><h4>サンディ塚本店</h4><p><Img Src="images/sandy.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里３丁目３－３<br>06-4808-8594</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711046,
				longitude: 135.467082,
				title: 'ライフコーポレーション 塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>ライフコーポレーション 塚本店</h4><p><Img Src="images/lifetukamoto.jpg" Width="92"eight="63"></A></p><br>〒555-0022 大阪府大阪市西淀川区柏里２丁目７－３２<br>06-6471-9895</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713637,
				longitude: 135.469393,
				title: '万代・塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>万代・塚本店</h4><p><Img Src="images/mandaitukamoto.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－５<br>06-6306-1270</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713818,
				longitude: 135.469368,
				title: '阪急ファミリーストア塚本店',
				icon: "images/market.png",
				content: '<div class="infoWindowWrapper"><h4>阪急ファミリーストア塚本店</h4><p><Img Src="images/hankyufamilystore.jpg" Width="92"eight="63"></A></p><br>〒532-0026 大阪府大阪市淀川区塚本２丁目２６－１８<br>06-6305-7871</div>'
	});

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();
	});
<!-- ********** #mapbtn13  ************************************************************ -->
	$("#mapbtn13").click(function(){

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711454,
				longitude: 135.456137,
				title: '西淀川区役所・図書館',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川区役所・図書館</h4><p><Img Src="images/nisiyodogawasiyakusyo.jpg" Width="92" Height="63"><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6478-9625<br>西淀川図書館<br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目２－１０<br>06-6474-7900<br>大阪市西淀川区役所</A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706462,
				longitude: 135.457997,
				title: 'ファミリー サポート・センター西淀川',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>ファミリー サポート・センター西淀川</h4><p><Img Src="images/kodomokosodate.jpg" Width="92" Height="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里２丁目１３－２２<br>06-6474-7280</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711542,
				longitude: 135.45333,
				title: '西淀川警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川警察署</h4><p><Img Src="images/nisiyodogawakeisatu.jpg" Width="92" Height="63"></A></p><br>〒555-0013 大阪府大阪市西淀川区千舟２丁目６－２４<br>06-6474-1234</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.709787,
				longitude: 135.459802,
				title: '西淀川スポーツセンター',
				icon: "images/public office.png",
				content: '<div class="infoWindowWrapper"><h4>西淀川スポーツセンター</h4><p><Img Src="images/nisiyodogawasports.jpg" Width="92" Height="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里２丁目１０－３５<br>06-6472-9200</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.706920,
				longitude: 135.462793,
				title: 'ゆたか歯科クリニック・辻耳鼻咽喉科医院・ヒシヤ薬局',
				icon: "images/hospital.png",
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ１Ｆテナント</h4><br><h4>ゆたか歯科クリニック TEL 06-6473-3710</h4><p><Img Src="images/yutakasika.jpg" Width="92"eight="63"></A><br><h4>辻耳鼻咽喉科医院 TEL 06-6471-2418</h4><Img Src="images/tujijibi.jpg" Width="92"eight="63"></A><br><h4>ヒシヤ薬局 TEL 06-6471-7282</h4><Img Src="images/hisiya.jpg" Width="92"eight="63"></A></p>〒555-0023 大阪府大阪市西淀川区花川<br>２丁目２－２０ ロイヤルユタカ 1F</div>'

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
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704424,
				longitude: 135.45821,
				title: '阪神姫島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>阪神姫島駅</h4><p><Img Src="images/hansinhimejima.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712575,
				longitude: 135.468893,
				title: 'ＪＲ塚本駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ塚本駅</h4><p><Img Src="images/tukamotoeki2.jpg" Width="92"eight="63"></A></p></div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71259,
				longitude: 135.45568,
				title: 'ＪＲ御幣島駅',
				icon: "images/station.png",
				content: '<div class="infoWindowWrapper"><h4>ＪＲ御幣島駅</h4><p><Img Src="images/goheijimaeki.jpg" Width="92"eight="63"></p></div>'

	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();
	});
<!-- ********** #mapbtn14  ************************************************************ -->
	$("#mapbtn14").click(function(){

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711734,
				longitude: 135.458527,
				title: 'スシロー歌島店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>スシロー歌島店</h4><p><Img Src="images/susiro.jpg" Width="92"eight="63"></A><Img Src="images/スシロー歌島店" Width="92"eight="63"></A></p><br>〒555-0021 大阪府大阪市西淀川区歌島３丁目３－１１<br>06-6474-2209</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708724,
				longitude: 135.458258,
				title: '和食さと歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>和食さと歌島橋店</h4><p><Img Src="images/satoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0025 大阪府大阪市西淀川区姫里３丁目１－２８<br>06-6475-3805</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71061,
				longitude: 135.456127,
				title: '大阪王将 歌島橋店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>大阪王将 歌島橋店</h4><p><Img Src="images/osakaoshoutajimabasi.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目１－９<br>06-4808-7737</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713445,
				longitude: 135.457005,
				title: 'ＷＡＣＣＡ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>洋菓子 ＷＡＣＣＡ</h4><p><Img Src="images/wacca.jpg" Width="92"eight="63"></A></p><br>〒555-0012 大阪府大阪市西淀川区御幣島１丁目７－２４<br>06-6475-5575</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707202,
				longitude: 135.462171,
				title: 'ブーランジェリー夢屋',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>パン ブーランジェリー夢屋</h4><p><Img Src="images/yumeya.jpg" Width="92"eight="63"></A></p><br>〒555-0024 大阪府大阪市西淀川区野里１丁目７－１３<br>06-6475-6605</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.708363,
				longitude: 135.458941,
				title: '炭火焼鳥かんぱ 姫里店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼鳥かんぱ 姫里店</h4><p><Img Src="images/kanpahimesato.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２丁目１７－２３<br>06-4808-1929</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712001,
				longitude: 135.468712,
				title: '麺一盃 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺一盃</h4><p><Img Src="images/menipai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－２５<br>06-6195-5870</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.704069,
				longitude: 135.457269,
				title: 'かつ膳',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>かつ膳</h4><p><Img Src="images/katuzen.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島１－２１－１７<br>06-6475-8466</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70503,
				longitude: 135.457666,
				title: 'らふ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>カレー らふ</h4><p><Img Src="images/curryrafu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫里２－１０－６<br>06-6471-8508</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.703704,
				longitude: 135.452665,
				title: 'パティスリー　ラシーヌ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ケーキ パティスリー　ラシーヌ</h4><p><Img Src="images/rasinu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区姫島5-3-19 アーバ姫島公園<br>06-6471-7744</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713401,
				longitude: 135.470426,
				title: 'むらおか ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>そば むらおか</h4><p><Img Src="images/muraoka.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－１７－１２<br>06-4977-0735</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711271,
				longitude: 135.469162,
				title: 'どんまい ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>おでん どんまい</h4><p><Img Src="images/donmai.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２－１－５<br>06-6473-0002</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713026,
				longitude: 135.469168,
				title: 'ケニア 塚本駅前店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>喫茶店 ケニア 塚本駅前店</h4><p><Img Src="images/kenia.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２８－２４<br>06-6308-1670</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.712871,
				longitude: 135.469796,
				title: '炭火焼肉ホルモン こてつ 塚本店 ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>炭火焼肉ホルモン こてつ 塚本店</h4><p><Img Src="images/kotetu.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２４－４<br>06-6309-2929</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'イタリアンバール ブルッタ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>イタリアン イタリアンバール ブルッタ</h4><p><Img Src="images/ibb.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市淀川区塚本２－２１－６<br>06-6304-9300</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.71301,
				longitude: 135.467918,
				title: '麺屋 雀',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>麺屋 雀</h4><p><Img Src="images/menyasuzume.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里３－１２－５ 吉田ビル １Ｆ<br>06-6474-2211</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711849,
				longitude: 135.470148,
				title: 'ジャムナ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ジャムナ</h4><p><Img Src="images/jamuna.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２丁目４－４０ １Ｆ<br>06-6475-5525</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.713132,
				longitude: 135.463713,
				title: '中華萬来亭',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>中華萬来亭</h4><p><Img Src="images/banraitei.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区歌島２－１－１０<br>06-6473-8637</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.711346,
				longitude: 135.466471,
				title: 'マッシュルーム ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>マッシュルーム</h4><p><Img Src="images/mushroom.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区柏里２丁目７－２２<br>06-6474-3645</div>'

	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.707829,
				longitude: 135.462902,
				title: '野里飯店',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>野里飯店</h4><p><Img Src="images/nozatohanten.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区野里１－６－１１<br>06-6471-2369</div>'
	});
		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();
	});

<!-- ********** #mapbtn15  ************************************************************ -->
	$("#mapbtn15").click(function(){

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
				content: '<div class="infoWindowWrapper"><h4>ロイヤルユタカ・モータープール花川</h4><p><Img Src="images/royalyutakahiru.jpg" Width="92"eight="63"></A><Img Src="images/yutakaparking.jpg" Width="92"eight="63"></A></p></div>',
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.70646,
				longitude: 135.451586,
				title: '西淀公園',
				icon: "images/park.png",
				content: '<div class="infoWindowWrapper"><h4>西淀公園</h4><p><Img Src="images/公園イメージ.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市西淀川区大和田１丁目１<br></div>'

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

		$("#map2").hide();
		$("#map3").hide();
		$("#royal").css({"background-image": "url(./access_button/a_button_1_01b.png)","background-repeat": "no-repeat"});
		$("#My2").css({"background-image": "url(./access_button/a_button_1_02a.png)","background-repeat": "no-repeat"});
		$("#etc").css({"background-image": "url(./access_button/a_button_1_03a.png)","background-repeat": "no-repeat"});
		$("#mapul1").slideDown();
		$("#mapul2").hide();
		$("#mapul3").hide();
*/
	});
<!-- **********     関数最後尾     *************************************************************: -->


});
