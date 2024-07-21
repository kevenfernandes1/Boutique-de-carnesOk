// ROLAGEM DO HEADER
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', this.window.scrollY > 5)
});


// CONTADOR CARRINHO
fora.addEventListener("mousedown", function() {
  let num = parseInt(contador.innerText);
  num++;
  contador.innerText = num;
});

fora2.addEventListener("mousedown", function() {
  let num = parseInt(contador.innerText);
  num++;
  contador.innerText = num;
});

fora3.addEventListener("mousedown", function() {
  let num = parseInt(contador.innerText);
  num++;
  contador.innerText = num;
});

fora4.addEventListener("mousedown", function() {
  let num = parseInt(contador.innerText);
  num++;
  contador.innerText = num;
});
  
fora5.addEventListener("mousedown", function() {
  let num = parseInt(contador.innerText);
  num++;
  contador.innerText = num;
});
fora6.addEventListener("mousedown", function() {
  let num = parseInt(contador.innerText);
  num++;
  contador.innerText = num;
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});


const swiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	mousewheel: {},
	effect: 'cube',
	keyboard: {
	  enabled: true,
	  onlyInViewport: false
	}
  });

