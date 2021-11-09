function storage(){
	localStorage.setItem('user','hamza')
	localStorage.setItem('pass','12345')
}
storage();

function delLogin(){

	localStorage.removeItem('login');
}

setTimeout(delLogin,5000);

