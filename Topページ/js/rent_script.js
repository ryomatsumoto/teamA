﻿/*ロールオーバー画像切り替え
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

$(function(){
	$('#mapbtn01').hover(function(){
		$(this).css('background-image','url("image/button/supermarket_on.png")')
	}),
	$('#mapbtn01').mouseout(function(){
		$(this).css('background-image','url("image/button/supermarket_off.png")')
	});
});
$(function(){
	$('#mapbtn02').hover(function(){
		$(this).css('background-image','url("image/button/station_on.png")')
	}),
	$('#mapbtn02').mouseout(function(){
		$(this).css('background-image','url("image/button/station_off.png")')
	});
});
$(function(){
	$('#mapbtn03').hover(function(){
		$(this).css('background-image','url("image/button/library_on.png")')
	}),
	$('#mapbtn03').mouseout(function(){
		$(this).css('background-image','url("image/button/library_off.png")')
	});
});
$(function(){
	$('#mapbtn04').hover(function(){
		$(this).css('background-image','url("image/button/police_on.png")')
	}),
	$('#mapbtn04').mouseout(function(){
		$(this).css('background-image','url("image/button/police_off.png")')
	});
});
$(function(){
	$('#mapbtn05').hover(function(){
		$(this).css('background-image','url("image/button/clinic_on.png")')
	}),
	$('#mapbtn05').mouseout(function(){
		$(this).css('background-image','url("image/button/clinic_off.png")')
	});
});
$(function(){
	$('#mapbtn06').hover(function(){
		$(this).css('background-image','url("image/button/sports_center_on.png")')
	}),
	$('#mapbtn06').mouseout(function(){
		$(this).css('background-image','url("image/button/sports_center_off.png")')
	});
});
$(function(){
	$('#mapbtn07').hover(function(){
		$(this).css('background-image','url("image/button/school_on.png")')
	}),
	$('#mapbtn07').mouseout(function(){
		$(this).css('background-image','url("image/button/school_off.png")')
	});
});
$(function(){
	$('#mapbtn08').hover(function(){
		$(this).css('background-image','url("image/button/restaurant_on.png")')
	}),
	$('#mapbtn08').mouseout(function(){
		$(this).css('background-image','url("image/button/restaurant_off.png")')
	});
});
$(function(){
	$('#mapbtn09').hover(function(){
		$(this).css('background-image','url("image/button/sweets_on.png")')
	}),
	$('#mapbtn09').mouseout(function(){
		$(this).css('background-image','url("image/button/sweets_off.png")')
	});
});
$(function(){
	$('#mapbtn10').hover(function(){
		$(this).css('background-image','url("image/button/park_on.png")')
	}),
	$('#mapbtn10').mouseout(function(){
		$(this).css('background-image','url("image/button/park_off.png")')
	});
});
