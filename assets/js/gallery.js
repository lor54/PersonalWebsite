function stopVideos() {
	$('video').off('play').on('play', function() {
		var dd = this.id
		$('video').each(function( index ) {
			if(dd != this.id){
				this.pause();
				this.currentTime = 0;
			}
		});
	});
}

document.addEventListener( 'DOMContentLoaded', function () {
	var splide = new Splide( '#image-slider-pepper' ).mount(window.splide.Extensions);

	splide.on( 'active', function( Splide ) {
		stopVideos();
	});

	var splidemakex = new Splide( '#image-slider-makex' ).mount(window.splide.Extensions);

	splidemakex.on( 'active', function( Splide ) {
		stopVideos();
	});
});

document.addEventListener("click", function(){
	if(document.getElementById("modal-header")) {
		console.log('ciao');
		document.getElementById("modal-header").addEventListener("click", stopVideos);
	}
});