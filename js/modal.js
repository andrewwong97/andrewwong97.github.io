// convert from bulma to bootstrap or just use bulma

$(document).ready(function() {
	var modal = $("#contactModal");
	var btn = $("#contactBtn");

	btn.click(function() {
		modal.addClass('is-active');
	});

	$(".modal-background, #cancel, .delete").click(function() {
		modal.removeClass('is-active');
	});

	$("#sendBtn").click(function() {
		var email = $("#email");
		var sub = $("#sub");
		var msg = $("#msg");

		var emailText = $("#email").val();
		var subjectText = $("#sub").val();
		var msgText = $("#msg").val();

		console.log(msgText);

		var mailto = 'mailto:wongandrew97@gmail.com?Subject=' + encodeURI(subjectText) + '&body=' + encodeURI(msgText);

		$("#sendBtn").attr('href', mailto);

		email.val('');
		sub.val('');
		msg.val('');
		modal.removeClass('is-active');
	});
});

