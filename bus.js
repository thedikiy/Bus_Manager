// Bus Model
var Bus = Backbone.Model.extend({
	defaults:{
		bus_model: '',
		registrationNumber: ''	
	}
});


// Bus Collection
var Buses = Backbone.Collection.extend({});

// Some Buses
var bus1 = new Bus({
	bus_model: "Ford",
	registrationNumber: "AE 1509" 
});

var bus2 = new Bus({
	bus_model: "Daewoo",
	registrationNumber: "AP 1697"
});