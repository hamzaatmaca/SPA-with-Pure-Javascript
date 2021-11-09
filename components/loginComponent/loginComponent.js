const template=document.createElement('template');
template.innerHTML=`
<style>
@import 'components/loginComponent/loginComponent.css';
</style>
<div id="container">

<div class="icon">
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div class="proton"></div>
<div id="electron1"></div>
<div id="electron2"></div>
<div id="electron3"></div>
<div id="electron4"></div>
</div>

<div class="area">
<form id="confirm" action="login" name="form">
<label for="user">Username</label>
<input  id="user" name="user" type="text" required placeholder=" hamza">
<label for="pass">Password</label>
<input  id="pass" name="pass" type="password" required placeholder=" 12345">
<button id="enter" type="submit"><span>Login</span></button>
</form>
</div>

</div>
`;

export class login extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({ mode:'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.user = this.shadowRoot.getElementById('user');
    this.pass = this.shadowRoot.getElementById('pass');
  }
  connectedCallback(){
     this.getU();
  }
  getU(){

   
      this.shadowRoot.getElementById('confirm').addEventListener('submit',(e)=>{
        e.preventDefault();
      
        if(this.user.value == localStorage.getItem('user') && this.pass.value == localStorage.getItem('pass')){
          localStorage.setItem('login','valid');
          
          window.location.href = 'http://localhost/login#campaing';
            
        }else{
         
          alert('Uppss!! There is a Problem');
        }

      }) ;

    

   
  }

}

window.customElements.define('login-page',login)