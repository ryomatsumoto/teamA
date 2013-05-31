			function initialize() {
				//緯度・経度
				var myLatlng = new google.maps.LatLng(34.706938, 135.462854);
				
				var myOptions = {
					zoom: 16,
					center: myLatlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				
				//キャンバス
				var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
				
				//マーカー
				var marker = new google.maps.Marker({
					position: myLatlng, 
					map: map,
					title: "テスト"
				}); 
				
				//吹き出しのテキスト
				var contentString = 'ロイヤルユタカ';
				
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
			    
				infowindow.open(map, marker);
			    
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map, marker);
				});
			}
