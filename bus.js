// Bus Model
var Bus = Backbone.Model.extend({
	defaults:{
		busModel: '',
		registrationNumber: ''	
	}
});


// Bus Collection
var Buses = Backbone.Collection.extend({});

var buses = new Buses();

// Bus Views

var BusView = Backbone.View.extend({
	model: new Bus(),
	tagName: 'tr',
	initialize: function(){
		this.template = _.template($('.bus-list-template').html());
	},
	events: {
		'click .edit-bus': 'edit'
	},
	edit: function(){
		$('.edit-bus').hide();
		$('.delete-bus').hide();
		$('.update-bus').show();
		$('.cancel').show();

		var busModel = this.$('.bus-model').html(),
			registrationNumber = this.$('.registration-number').html();

		this.$('.bus-model').html('<input type="text" class = "form-control bus-model-update" value = "'+ busModel+'">' );
		this.$('.registration-number').html('<input type="text" class = "form-control bus-model-update" value = "'+ registrationNumber+'">' );
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

var BusesView = Backbone.View.extend({
	model: buses,
	el: $('.bus-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(bus) {
			self.$el.append((new BusView({model: bus})).render().$el);
		});
		return this;
	}
});

var busesView = new BusesView();

document.addEventListener('DOMContentLoaded', function() {
	$('.add-bus').on('click', function() {
		var bus = new Bus({
			busModel: $('.bus-model-input').val(),
			registrationNumber: $('.registration-number-input').val()
		});
		$('.bus-model-input, .registration-number-input').val('');
	
		console.log(bus.toJSON());
		buses.add(bus);
	})
});
