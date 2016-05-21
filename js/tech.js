!(function ($) {
var baseOffset = 3;
var techs = [{
	name: 'Neutron Bombs',
	cost: '2/2',
	track: '.stars',
}, {
	name: 'Starbase',
	cost: '4/3',
	track: '.stars'
}, {
	name: 'Plasma Cannon',
	cost: '6/4',
	track: '.stars'
}, {
	name: 'Phase Shield',
	cost: '8/5',
	track: '.stars'
}, {
	name: 'Advanced Mining',
	cost: '10/6',
	track: '.stars'
}, {
	name: 'Tachyon Source',
	cost: '12/6',
	track: '.stars'
}, {
	name: 'Plasma Missile',
	cost: '14/7',
	track: '.stars'
}, {
	name: 'Gluon Computer',
	cost: '16/8',
	track: '.stars'
}, {
	name: 'Gauss Shield',
	cost: '2/2',
	track: '.squares'
}, {
	name: 'Improved Hull',
	cost: '4/3',
	track: '.squares'
}, {
	name: 'Fusion Source',
	cost: '6/4',
	track: '.squares'
}, {
	name: 'Positron Computer',
	cost: '8/5',
	track: '.squares'
}, {
	name: 'Advanced Economy',
	cost: '10/6',
	track: '.squares'
}, {
	name: 'Tachyon Drive',
	cost: '12/6',
	track: '.squares'
}, {
	name: 'Antimatter Cannon',
	cost: '14/7',
	track: '.squares'
}, {
	name: 'Quantum Grid',
	cost: '16/8',
	track: '.squares'
}, {
	name: 'Nanorobots',
	cost: '2/2',
	track: '.gears'
}, {
	name: 'Fusion Drive',
	cost: '4/3',
	track: '.gears'
}, {
	name: 'Advanced Robotics',
	cost: '6/4',
	track: '.gears'
}, {
	name: 'Orbitals',
	cost: '8/5',
	track: '.gears'
}, {
	name: 'Advanced Labs',
	cost: '10/6',
	track: '.gears'
}, {
	name: 'Monolith',
	cost: '12/6',
	track: '.gears'
}, {
	name: 'Artifact Key',
	cost: '14/7',
	track: '.gears'
}, {
	name: 'Wormhole Generator',
	cost: '16/8',
	track: '.gears'
}];

var buildCard = function(techName) {
	return $('<div>')
		.addClass('card')
    .addClass(techName)
	}

var buildCardSlot = function (tech) {
  return $('<div>')
    .addClass('card-slot')
    .attr('data-tech', tech.name.replace(" ", ""))
    .attr('data-offset', '0')
}

techs.forEach(function(tech, i) {
	$(tech.track).append(
		buildCardSlot(tech)
	);
});

$('.card-slot').click(function() {
  var $slot = $(this);
  var tech = $slot.attr('data-tech');
  var offset = parseInt($slot.attr('data-offset'));
  var card = buildCard(tech)
    .css('transform', 'translate('+offset+'px, '+offset+'px)');
  $slot.append(card
  );
  $slot.attr('data-offset', offset + baseOffset);
});

$('.card-slot').on('contextmenu', function() {
  $slot = $(this);
  var offset = parseInt($slot.attr('data-offset'));
  var lastCard = $slot.find('.card').last();
  lastCard.remove();
  $slot.attr('data-offset', offset - baseOffset);
	return false;
});
})(window.jQuery);
