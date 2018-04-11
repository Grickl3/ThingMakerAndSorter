


var Thing = function(name,color) {
	this.name = name;
	this.color = color;
}


function makeThing(e) {
	var name = nameThing.value;
	var color = colorThing.value;
	
	var thing = new Thing(name,color);

	var thingy = document.createElement("div");
	thingy.classList.add("thing");
	thingy.classList.add(color);
	thingy.innerHTML = '<span class="thing-name' +
					color + '">' +
					name + '</span>';

	things.push(thing);
	console.log(things);

	display.appendChild(thingy);
}


// SORT THINGS (fubared)

// var grabbedThings = [];
// function grabThings() {
// 	var grabbedThings = things.slice();
// 	grabbedThings.sort(function(a,b) {
// 		return a.name - b.name;
// 	})
// 	return(grabbedThings);
// }

// function sortThings() {
	
// grabThings();
// console.log(grabbedThings);
// }


// SORT THINGS II
function sortThings() {
	things.sort(function(thing1, thing2) {
		if(thing1.name > thing2.name) {
			return 1; 
		}else{
			return -1;
		}
	})
	console.log(things);
}