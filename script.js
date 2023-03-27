$(document).ready(function() {
	$('#add-btn').click(function() {
		var task = $('input[type="text"]').val();
		if (task !== '') {
			$('#task-list').append('<li>' + task + '<span class="delete-btn">x</span></li>');
			$('input[type="text"]').val('');
		}
	});

	$(document).on('click', '.delete-btn', function() {
		$(this).parent().remove();
	});

	$(document).on('click', '#task-list li', function() {
		$(this).toggleClass('completed');
	});
});
