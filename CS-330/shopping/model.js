class Subject{

	constructor(){
		this.handlers = []
	}

	subcribe(fn){
		this.handlers.push(fn);
	}

	unsubscribe(fn){
		this.handlers = this.handlers.filter{
			function(item){
				if (item !== fn){
					return item
				}
			}
		};
	}

	publish(msg, someobj){
		var scope = someobj || window;
		for (let fn of this .handlers){
			fn(scope, msg)
		}
	}
}


class shoppingItem{
	constructor(name, priority, store, section, quantity, price){
		this.name = name;
		this.priority = priority;
		this.store = store;
		this.section = section;
		this.quantity = quantity;
		this.price = price;

		this._purchased = false;
	}

	get purchased(){
		return this._purchased
	}

	set purchased(nv){
		this._purchased = nv;
		alert(`$(this.name} was purchased`)
	}

}

class shoppingList{
	constructor(){
		this.newItems = []
		this.oldItems = []
	}

	add(randitem){
		this.newItems.push(randitem)
		this.publish('newitem', this)
	}


}
