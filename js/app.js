(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services")); /*accedo al div box services*/
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;
	/* Recorro el arreglo boxes que contiene a todas las subsecciones de "servicios". Esto lo hago con la función "box" */
	boxes.forEach(function(box){
		box.addEventListener("click", function(){ /*Cuando el ususario hace click se ejecuta una función que crea un string vacío en el div vacío*/
			modal.innerHTML = "";
			bodyModal = document.createElement("div"); /*bodyModal crea un div, le da la clase modal-body*/
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal); /*lo que está en paréntesis se hace nodo hijo, es decir bodyModal se hace nodo hijo de modal*/
			modal.classList.remove("hide");/*esconde*/
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();

	

/*
funcion autoinvocada
(function miAlert(){
	....
})()
Es equivalente a:
function miAlert(){
	...
};
miAlert(); */