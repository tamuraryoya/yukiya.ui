$(function() {
	// デバッグ用表示の有無
	const hash = location.href.match(/#(.+)$/g);
	const mode = hash ? hash[0].slice(1,) : null;
	if(mode === 'debug') {
		$('#debug').css({
			visibility: 'visible'
		});
	}
	// デバッグモードに移行
	let timer = 0;
	let count = 0;
	$(window).on('click', () => {
		const now = new Date;
		console.log(now - timer, count)
		if(now - timer < 200) {
			if(count >= 10) {
				if(mode === 'debug') {
					// 終了
					location.hash = '';
					location.reload();
				} else {
					// 移行
					location.hash = 'debug';
					location.reload();
				}
			}
			count++;
		} else {
			count = 1;
		}
		timer = now;
	});
});