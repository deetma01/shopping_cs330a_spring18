
class ShoppingView{
	constructor(model){
		model.subscribe(this.redrawTable.bind(this))
	}

	function redrawTable(shoppingList, msg){
		let table = document.getElementById("shpList")
		table.innerHTML = ""
		for (let item of shoppingList.newItems){
			this.makeRow(item,tbl)
		}

	}

	function makeRow(item, parent){
    	let row = document.createElement("tr")
    	row.classList.add(document.getElementById("priority").value)
    	let cb = document.createElement("input")
    	cb.type = "checkbox"
    	cb.classList.add("form-control")
    	row.appendChild(cb)

    	for (let val of ['itemname', 'qty', 'store', 'category', 'price'] {
        	let td = document.createElement("td")
        	td.innerHTML = val
        	row.appendChild(td)
    	}
    	parent.appendChild(row)
	}
}


