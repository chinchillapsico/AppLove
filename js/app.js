/*
 * Archivo principal de funcionalidad de JS
 */

 (function main(){
 	/*función autoinvocada (function miAlert(){....
 })()   es igual a  function miAlert(){....} miAlert()*/

 	var boxes = Array.from(document.getElementByClassName("box-services"));
 	var modal = document.getElementById("box-services-modal");
 	var bodyModal;

   boxes.forEach(function(box){
   	box.addEventListener("click", function(){
 		modal.innerHTML = "";
 		bodyModal = document.createElement("div");
 		bodyModal.classList.add("modal-body");

 	});
   	
   	
   	bodyModal.innerHTML = box.innerHTML;
 	 box.addEventListener("click", function(){
 		modal.classList.remove("hide");

 	});
 });
 })();