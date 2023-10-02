

let url = 'https://rickandmortyapi.com/api/character';




	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			data.results.forEach((element) => {

				console.log(element);
                
				let imgContainer = document.createElement('div');				
				let imgDiv = document.createElement('div');
				let image = document.createElement('img');

				image.setAttribute('src', element.image);
				
				let imgDescription = document.createElement('div');

				let h3 = document.createElement('h3');
				h3.innerHTML += element.name;
                
				let p = document.createElement('p');
				p.innerHTML += element.species;
				

				imgDiv.appendChild(image);
				imgDescription.appendChild(h3);
				imgDescription.appendChild(p);
				imgContainer.appendChild(imgDiv);
				imgContainer.appendChild(imgDescription);
				contenedor.appendChild(imgContainer);
			});
			
		});