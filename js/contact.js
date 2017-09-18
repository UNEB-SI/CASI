function sendForm() {
	if ($("#nome").val() == "" || 
		$("#matricula").val() == "" || 
		$("#email").val() == "" || 
		$("#assunto").val() == "" || 
		$("#descricao").val() == "" ) 
	{
		swal("Mensagem não enviada", "Você deixou algum campo vazio", "warning");
		return;
	}

	if (document.getElementById("email").checkValidity() == false) {
		swal("Mensagem não enviada", "O email é inválido", "warning");
		return;
	}

	document.getElementById('btn_enviar').disabled = true;
	emailjs.init("user_30W9GaH9rPRlS5fXr3J23");
	emailjs.send("gmail", "template_kjjsnkdnsssdv", 
		{ 	sender_name: $("#nome").val(), 
			sender_matricula: $("#matricula").val(),
			sender_email: $("#email").val(),
			sender_subject: $("#assunto").val(),
			sender_message: $("#descricao").val()
	}).then(function(response) {
	   	swal("Mensagem enviada", "Entraremos em contato o mais breve possível ;)", "success");
		var frm = document.getElementsByName('form')[0];
		frm.reset();
		document.getElementById('btn_enviar').disabled = false;
	}, function(err) {
		swal("Mensagem não enviada", "Entre em contato diretamente pelo nosso email: casi.uneb@gmail.com", "error");
		document.getElementById('btn_enviar').disabled = true;
	});
}

function clearForm() {
	var frm = document.getElementsByName('form')[0];
	frm.reset();
}