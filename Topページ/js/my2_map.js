$(function(){


$(document).ready( function(){ // ページ読み込み時に実行したい処理

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

<!-- ********** #mapbtn01  ************************************************************ -->

	$("#mapbtn01").click(function(){

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
	});

<!-- ********** #mapbtn02  ************************************************************ -->

	$("#mapbtn02").click(function(){

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
	});

<!-- ********** #mapbtn03  ************************************************************ -->

	$("#mapbtn03").click(function(){

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
	});
<!-- ********** #mapbtn04  ************************************************************ -->

	$("#mapbtn04").click(function(){

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
				latitude: 34.690968,
				longitude: 135.471848,
				title: '福島警察署',
				icon: "images/police.png",
				content: '<div class="infoWindowWrapper"><h4>福島警察署</h4><p><Img Src="images/fukusimakeisatu.jpg" Width="92"eight="63"></A></p><br>〒553-0006 大阪府大阪市福島区吉野４丁目９－１９<br>06-6465-1234</div>'

	});


	});

<!-- ********** #mapbtn05  ************************************************************ -->


	$("#mapbtn05").click(function(){      // #mapbtn05をクリックした時の処理

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

	});    // #mapbtn05をクリックした時の処理
<!-- ********** #mapbtn06  ************************************************************ -->


	$("#mapbtn06").click(function(){      // #mapbtn05をクリックした時の処理

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
	});
<!-- ********** #mapbtn07  ************************************************************ -->


	$("#mapbtn07").click(function(){      // #mapbtn05をクリックした時の処理

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
	});

<!-- ********** #mapbtn08  ************************************************************ -->


	$("#mapbtn08").click(function(){      // #mapbtn05をクリックした時の処理

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
	});
<!-- ********** #mapbtn09  ************************************************************ -->


	$("#mapbtn09").click(function(){      // #mapbtn05をクリックした時の処理

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
				latitude: 34.683935,
				longitude: 135.467307,
				title: 'グーテ・ド・アナトール ',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>グーテ・ド・アナトール</h4><p><Img Src="images/gute.jpg" Width="92"eight="63"></A></p><br>大阪府大阪市此花区西九条３－１０－５ サンコーフィラン西九条１Ｆ<br>06-6465-1850</div>'
	});
	$.gmap3.addMarker($("#map1"), {
				latitude: 34.691157,
				longitude: 135.47634,
				title: 'ブーランジェリー ツール・ド・フランス',
				icon: "images/restaurant.png",
				content: '<div class="infoWindowWrapper"><h4>ブーランジェリー ツール・ド・フランス</h4><p><Img Src="images/tdf.jpg" Width="92"eight="63"></A><br>大阪府大阪市福島区吉野２－３－１４<br>06-6444-7111</div>'
	});

	});
<!-- ********** #mapbtn10  ************************************************************ -->


	$("#mapbtn10").click(function(){      // #mapbtn05をクリックした時の処理

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

	});
<!-- ********************************************************************** -->



});// ページ読み込み時に実行したい処理

});

