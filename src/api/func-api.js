 
 export function checkCity(city){
 				let allCities=[];		
						let checkCity = {};

						let localCities = JSON.parse(localStorage.getItem('cities'));
		        if(localCities){
		        	  allCities = localCities.slice();
		        }

		  			let cityName = city;

		  			 checkCity = allCities.filter(function(city) {
		            return city.toDay.name === cityName;
		        });

        	
        	return checkCity;

   };

