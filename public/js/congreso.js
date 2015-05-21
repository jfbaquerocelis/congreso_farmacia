$(document).ready(function () {
	// Mostrar contenido
	$('.Congress-more').on('click', function () {
		$(this).fadeOut('slow');
		$('.Congress-showMore').show(300, 'linear', function () {
			$('.Congress-hide').fadeIn('slow');
		});
	})

	// Ocultar contenido
	$('.Congress-hide').on('click', function () {
		$('.Congress-hide').hide();
		$('.Congress-showMore').hide(300, 'linear', function () {
			$('.Congress-more').fadeIn('slow');
		});
	})

	// Max y Min imagen de ejemplo
	$('.Humax-img').click(function () {
		if ($(this).width() === 320){
			$(this).css({
				'width' : '46em',
				'transition' : '.4s all ease'
			})
		}else{
			$(this).css({
				'width' : '20em',
				'transition' : '.4s all ease'
			})
		}
	})

	// Mostrar y Ocultar articles
	$('.Humax-linkItem').click(function () {
		$('.Humax-articleHome').fadeOut('fast')
		$('.Humax-linkItem').each(function (i) {
			this.style.color = "#333"
			this.style.marginLeft = "0"
		})
		$(this).css({
			'color' : '#EF5350',
			'margin-left' : '.5em'
		})
		$('.Humax-article').hide()
		$($(this).attr('href')).fadeIn('slow')
		$('body').animate({
			'scrollTop' : 400
		}, 1000)
	})

	// Usamos hasher para mostrar el article referente al article
	function handleChanges(newHash, oldHash){
		// Mostrar menu-left de Humax
		$('#'+newHash).fadeIn('slow')
		$('.Humax-linkItem[href=#'+newHash+']').css({
			'color' : '#EF5350',
			'margin-left' : '.5em'
		})
	}
	hasher.changed.add(handleChanges);
	hasher.initialized.add(handleChanges);
	hasher.init();

	// Mostrar tarjetas de presentación de speaker 301 715 1039
	$('.Speaker-contentAvatar').click(function () {
		$('.overlay').fadeIn('slow')
		$(this).next()
			.css({
				'position' : 'fixed'
			})
			.animate({
				'left' : '33%',
				'top' : '25%',
				'opacity' : '1'
			})
	})
	$('.overlay').click(function () {
		$(this).fadeOut('fast')
		$('.Speaker-contentAvatar').next()
			.animate({
				'left' : '-100%',
				'top' : '0',
				'opacity' : '0'
			})
	})

	// Mostrar articulos de items en home
	$('.Congress-linkItem').click(function (e) {
		e.preventDefault();
		$('.Congress-article').fadeOut('fast')
		$(this.hash).fadeIn('slow')
	})
	// Volver atras, ocultar articulos
	$('.Congress-back').click(function () {
		$('#home').fadeIn('slow')
		$('#calendar, #place, #price, #pencil').fadeOut(100, 'linear')
	})
	// Colapsar agenda con click en el header de la tabla
	$('.Congress-calendarHeader').click(function () {
		$(this).next().toggle('fast')
	})

	$('.redBox').click(function () {
		$('.blueBox').animate({
			'right' : '0',
			'bottom' : '100px',
			'opacity' : '1'
		}, 500)
	})

	// Mostrar detalles de los hoteles
	$('.Hotel-listItem').click(function () {
		$('.Hotel-listItem').css({
			'color' : '#333'
		})
		$(this).css({
			'color' : '#EF5350'
		})
		$('.Hotel-article').fadeOut()
		$(this.getAttribute('key')).fadeIn()
		$('.Hotel-name').addClass('glyphicon-star-empty')
		$(this).children('span').removeClass('glyphicon-star-empty')
		$(this).children('span').addClass('glyphicon-star')
	})
})