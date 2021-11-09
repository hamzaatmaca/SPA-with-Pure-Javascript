const template=document.createElement('template');

template.innerHTML=`
<style>
@import 'components/campaingComponent/campaingComponent.css';
</style>
<div class="con">
	<div class="main">
		<div class="addArea">
		<form id="campaingForm" action="">
			<label for="addCampaing">* Enter Campaing Name</label>
				<input type="text" id="addCampaing" name="addCampaing" required>
			<label for="addCampaingPoint">* Enter Campaing Point Between 1-10</label>
				<input type="number" min="-1" max="10" id="addCampaingPoint" name="addCampaing" required>
			<label for="addCampaingExp">* Enter Campaing Description</label>
				<textarea id="addCampaingExp" name="addCampaingExp" required></textarea>
			<button id="add" type="submit">Add Campaing</button>
		</form>
		</div>	
	</div>	
	<!--<div class="addArea" style="display:none">
		<fieldset class="campField">
		    <legend>LAST CAMPAING:</legend>
		    <label>Campaing Date:</label>
			<span></span>
		    <label>Last Campaing Name :</label>
		    <span class="campaingName"></span>
		    <label>Last Campaing Description :</label>
		    <span class="campaingDesc"></span>
		</fieldset>
	</div>-->
</div>

`;

class campaing extends HTMLElement{
	constructor(){
		super();
		this.attachShadow({ mode:'open' })
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.addCampaing = this.shadowRoot.getElementById('addCampaing');
		this.addCampaingExp = this.shadowRoot.getElementById('addCampaingExp');
		this.addCampaingPoint = this.shadowRoot.getElementById('addCampaingPoint');
		
	}
	connectedCallback(){
		
		let arr=[];

		this.shadowRoot.getElementById('campaingForm').addEventListener('submit',(e)=>{
			
			e.preventDefault();

			let obj = {
				campName:this.addCampaing.value,
				campNameExp:this.addCampaingExp.value,
				campNamePoint:this.addCampaingPoint.value
			}

			arr.push(obj);

			localStorage.setItem('data',JSON.stringify(arr));

			this.addCampaing.value="";
			this.addCampaingExp.value="";
			this.addCampaingPoint.value="";
			this.getDB();
			
		})						
			
	}
	
	getDB(){
		
		let getarr = JSON.parse(localStorage.getItem('data'));

		let campaingName; 
		let campaingNameDesc;
		let campaingNamePoint;

		campaingName = getarr[getarr.length-1].campName
		campaingNameDesc = getarr[getarr.length-1].campNameExp
		campaingNamePoint = getarr[getarr.length-1].campNamePoint
		
		//DATE//
		let date = new Date()
		
		let day = date.getDate();
		let month = date.getMonth()
		let year= date.getFullYear()
		let time = day+'.'+month+'.'+year

		let hour = date.getHours()
		let minute = date.getMinutes();
		let second = date.getSeconds();
		let clock = hour+'.'+minute+'.'+second;

		//DATE//
		
		let html = `<div class="addArea" style="margin:20px">
						<fieldset class="campField">
						    <legend class="xx" style="font-weight:bolder;margin: 5px">CAMPAINGS:</legend>
						    <label style="font-weight:bolder;margin: 5px">Campaing Date:</label>
						    <span style="margin-left:5px">${time}&nbsp-&nbsp${clock}</span>
						    <label style="font-weight:bolder;margin: 5px">Campaing Name :</label>
						    <span style="margin-left:5px" class="campaingName">${campaingName}</span>
						    <label style="font-weight:bolder;margin: 5px">Campaing Description :</label>
						    <span style="margin-left:5px" class="campaingDesc">${campaingNameDesc}</span>
							<div style="position:absolute;margin-left:30%;width:100px;height:100px;border:1px solid;text-align:center; font-size:25px;display:flex;justify-content:center;align-items:center;flex-direction:column">
								<span style="margin-bottom:10px">Point</span>
								${campaingNamePoint}
							</div>
						</fieldset>

					</div>

					`;
		

		let div = document.createElement('div');
		div.innerHTML = html;
		this.shadowRoot.appendChild(div);
		
	}

}

window.customElements.define('campaing-page',campaing)