
 export function formatDate(newDate){

 			let date = new Date(newDate * 1000);

		  let dd = date.getDate();
		  if (dd < 10) dd = '0' + dd;

		  let mm = date.getMonth() + 1;
		  if (mm < 10) mm = '0' + mm;

		  let yy = date.getFullYear();

		  let diff = new Date() - date;
		  let min = Math.ceil(diff / 60000);
		  let hours = min/60;

		  if (min < 60) {
		      return `get at ${dd }.${mm}.${yy}, ${min} minutes ago`;
		  }
		  else{
					min = (hours - Math.floor(hours)) * 60;
					hours = Math.floor(hours); 
					min = Math.ceil(min);  
				  return `Last update ${dd}.${mm}.${yy}, ${hours}h  ${min} min ago`; 
		  }							
 }

  export function formatTime(date){
		var formatter = new Intl.DateTimeFormat("en", {
		  hour: "numeric",
		  minute: "numeric",
		});
		return formatter.format(date * 1000); 							
 }

export function formatTimeChart(date){
		var formatter = new Intl.DateTimeFormat("ru", {
		  hour: "numeric",
		  minute: "numeric",
		});

		return formatter.format(date * 1000); 							
 }

 export function formatTimeHourly(date){
		var formatter = new Intl.DateTimeFormat("en", {
			day:"numeric",
			month:"short",
			weekday:"long",
			
		  hour: "numeric",
		  minute: "numeric",
		});

		return formatter.format(date * 1000); 							
 }

