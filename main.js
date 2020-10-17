var page = require('webpage').create();

var fillLoginInfo = function(){
  	var frm = document.getElementById("login_form");
    frm.elements["email"].value = '';
    frm.elements["pass"].value = '';
    document.getElementById('login_reg_button').click()
}

page.onLoadFinished = function(){
	if(document.getElementsByClassName('login_header')[0].textContent == "Вход ВКонтакте"){
    page.evaluate(fillLoginInfo);
    console.log('in if')
		return;
	}
	else
  page.render('after1.jpeg', {format:'jpeg', quality:'100'});
	console.log("completed");
	phantom.exit();
}


page.open('');

