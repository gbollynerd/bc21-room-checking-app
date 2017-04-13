$('body').on('click', '#submit', (e) => {
	e.preventDefault();
	const room = $('body').find('#category').val();
	const data = 'data=' + room;

	const callAjax = (url, data) => {
		$.ajax({
		method: 'POST',
		url: url,
		dataType: 'text',
		data: data,
		success: (data) => {
			
		},
		error: (error) => {

		}
	}) 
	}

	switch(room){
		case 'working': {
			const url = '/rooms/working';
			callAjax(url, room);
			break;
		}
		case 'quiet' : {
			const url = '/rooms/quiet';
			callAjax(url, room);
			break;
		}
		case 'games': {
			const url = '/rooms/games';
			callAjax(url, room);
			break;
		}
		case 'learning': {
			const url = '/rooms/learning';
			callAjax(url, room);
			break;
		}
		case 'meeting': {
			const url = '/rooms/meeting';
			callAjax(url, room);
			break;
		}
		default: {
			return 'Invalid argument passed!';
		}
	}
	
	console.log(data);
})