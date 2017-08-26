function sendForm() {
	emailjs.init("user_30W9GaH9rPRlS5fXr3J23");
	emailjs.send("gmail", "template_kjjsnkdnsssdv", 
		{ 	sender_name: $("#nome").val(), 
			sender_matricula: $("#matricula").val(),
			sender_email: $("#email").val(),
			sender_subject: $("#assunto").val(),
			sender_message: $("#descricao").val()
	}).then(function(response) {
	   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
	}, function(err) {
	   console.log("FAILED. error=", err);
	});
}

function clearForm() {
	var frm = document.getElementsByName('form')[0];
	frm.reset();
}