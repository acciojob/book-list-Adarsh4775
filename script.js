//your JS code here. If required.
function  bookList(){
	let title = document.getElementById("title");
	
	let author = document.getElementById("author");
	
	let isbn = document.getElementById("isbn");

	let body = document.getElementById("book-list");
	
	let button = document.getElementById("submit");

	
	
	
	
	button.addEventListener("click", function(event){

      event.preventDefault();

		let title1 = title.value;
		let author1 = author.value;
		let isbn1 = isbn.value;

		let table = document.querySelector("table table-striped");
		
		
		
	let NewRow = document.createElement("tr");

		let titleCell = document.createElement("td");
		let authorCell = document.createElement("td");
		let isbnCell = document.createElement("td");
         let deleteCell = document.createElement("td");
		let delButton = document.createElement("button");
		
		titleCell.textContent = title1;
		authorCell.textContent = author1;
		isbnCell.textContent = isbn1;
         delButton.textContent = "Clear";
		delButton.style.backgroundColor="blue";
		delButton.style.color = "red";
		delButton.className = "delete";
		deleteCell.appendChild(delButton);

		
		
		NewRow.appendChild(titleCell);
		NewRow.appendChild(authorCell);
		NewRow.appendChild(isbnCell);
		NewRow.appendChild(deleteCell);

		 delButton.addEventListener("click", function () {
      body.removeChild(NewRow);
    });
		body.appendChild(NewRow);

		 title.value = "";
    author.value = "";
    isbn.value = "";  
	
	});
}
bookList();