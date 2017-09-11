// Bus Model
var Bus = Backbone.Model.extend({
	defaults:{
		busModel: '',
		registrationNumber: ''	
	}
});


// Bus Collection
var Buses = Backbone.Collection.extend({
  url: "https://fa2b28bb.ngrok.io/api/buses"
});

var buses = new Buses();

// Bus Views

var BusView = Backbone.View.extend({
	model: new Bus(),
	tagName: 'tr',
	initialize: function(){
		this.template = _.template($('.bus-list-template').html());
	},
	events: {
		'click .edit-bus': 'edit',
		'click .update-bus': 'update',
		'click .cancel': 'cancel',
		'click .delete-bus': 'delete'
	},
	edit: function(){
		$('.edit-bus').hide();
		$('.delete-bus').hide();
		this.$('.update-bus').show();
		this.$('.cancel').show();

		var busModel = this.$('.bus-model').html(),
			registrationNumber = this.$('.registration-number').html();

		this.$('.bus-model').html('<input type="text" class = "form-control bus-model-update" value = "'+ busModel+'">' );
		this.$('.registration-number').html('<input type="text" class = "form-control registration-number-update" value = "'+ registrationNumber+'">' );
	},
	update: function(){
		var busModel = $('.bus-model-update').val(), 
			registrationNumber = $('.registration-number-update').val();
		this.model.set({busModel: busModel, registrationNumber: registrationNumber});
		this.model.save();
	},
	cancel: function(){
		busesView.render();
	},
	delete: function(){
		this.model.destroy();
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
		this.model.on('change', this.render, this);
		this.model.on('remove',this.render, this);

		this.model.fetch();
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
		buses.add(bus);
	  bus.save();
	})
});
