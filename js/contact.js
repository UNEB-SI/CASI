function sendForm() {
	emailjs.init("user_30W9GaH9rPRlS5fXr3J23");
	emailjs.send("gmail", "template_kjjsnkdnsssdv", 
		{ 	sender_name: $("#nome").val(), 
			sender_matricula: $("#matricula").val(),
			sender_email: $("#email").val(),
			sender_subject: $("#assunto").val(),
			sender_message: $("#descricao").val()
	}).then(function(response) {
	   	var notification = document.querySelector('.mdl-js-snackbar');
		notification.MaterialSnackbar.showSnackbar({message: 'Enviado com sucesso'});
		var frm = document.getElementsByName('form')[0];
		frm.reset();
	}, function(err) {
	   	var notification = document.querySelector('.mdl-js-snackbar');
		notification.MaterialSnackbar.showSnackbar({message: 'Erro ao enviar'});
	});
}

function clearForm() {
	var frm = document.getElementsByName('form')[0];
	frm.reset();
}