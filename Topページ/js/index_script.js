﻿
/*会社概要角丸ボックス作成
**************************************/
$("#company dl").corner("8px");



/*ロールオーバー画像切り替え
**************************************/
$(function(){
	$('a img').hover(function(){
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	}, function(){
		if (!$(this).hasClass('currentPage')) {
			$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
		}
	});
});
