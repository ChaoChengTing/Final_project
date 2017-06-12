$(function(){
		// 針對每一個區塊來處理
		$('.abgne-frame, .abgne-frame-2').each(function(){
			var $frame = $(this),
				$showImage = $frame.find('.show-image');

			// 當滑鼠移到 .abgne-block-20120106 中的某一個超連結時
			$frame.find('.abgne-block-20120106 a').mouseover(function(){
				var $this = $(this),
					_src = $this.find('img').attr('src');
				// 如果現在大圖跟目前要顯示的圖不是同一張時
				if($showImage.attr('src') != _src){
					$showImage.hide().attr('src', _src).stop(false, true).fadeTo(400, 1);
				}
			});
		});
	});
