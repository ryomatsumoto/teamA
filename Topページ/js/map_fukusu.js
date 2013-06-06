        var _mapObj = null;
        var _markerObjs = new Array();

        google.maps.event.addDomListener(window, 'load', function()
        {
            var lng = 135.462854;
            var lat = 34.706938;

            var mapOptions = {
                zoom: 15,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scaleControl: true
            };
            _mapObj = new google.maps.Map(document.getElementById('gmap'), mapOptions);

            // スーパーマーケット
            var supermarkets = [
              ['グルメシティ姫島店', 34.704891, 135.458241],
              ['ピアット・フォルテ姫島店', 34.70503, 135.457666],
              ['スーパーナショナル野里店', 34.71169, 135.460162],
              ['ライフコーポレーション歌島店', 34.714523, 135.462993],
              ['花川市場', 34.711621, 135.46666],
              ['サンディ塚本店', 34.711728, 135.466500],
              ['元気市場西淀店', 34.713887, 135.463824],
              ['ライフコーポレーション塚本店', 34.711046, 135.467082],
              ['万代塚本店', 34.713637, 135.469393],
              ['阪急ファミリーストア塚本店', 34.713818, 135.469368],
            ];

            // マーカーを作成
            jQuery.each(supermarkets, function()
            {
                var latlng = new google.maps.LatLng(this[1], this[2]);
                _markerObjs.push(new google.maps.Marker({
                    position: latlng,
                    map: null,
                    title: this[0]
                }));
            });
        });

        // 地図にマーカーを追加
        function addMarker()
        {
            jQuery.each(_markerObjs, function()
            {
                this.setMap(_mapObj);
            });
        }

        // 地図からマーカーを削除
        function deleteMarker()
        {
            jQuery.each(_markerObjs, function()
            {
                this.setMap(null);
            });
        }
