import {login}  from '../components/loginComponent/loginComponent.js';
import * as campaing from '../components/campaingComponent/campaingComponent.js';
//Parse Url

let path = window.location.href;
let splitUrl =path.split('/');
let url =splitUrl[splitUrl.length-1];

//Parse Url

let root = document.getElementById('root')


switch(url){

	case '':

		root.innerHTML='<login-page></login-page>'

	break;

	case '#login':

		root.innerHTML='<login-page></login-page>'

	break;

	case '#campaing':

		root.innerHTML='<campaing-page></campaing-page>'

		/*if(localStorage.getItem('login') == 'valid'){
			root.innerHTML='<campaing-page></campaing-page>'
			
		}
		else{
			root.innerHTML='<login-page></login-page>'
		}*/
		
	break;

	default:
		root.innerHTML='<login-page></login-page>'
}