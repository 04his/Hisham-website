var Preloader = (element) => {
	const video = document.getElementById(element),
		preloader = document.getElementById('preloader'),
		enter = document.getElementById('enter');

	var api = {};

	api._removePreloader = () => {
		preloader.style.opacity = 0;
		enter.style.opacity = 1;
	};

	api.startCheckingLoading = () => {
		video.addEventListener('click', function() {
			video.play();
		}, false);

		video.addEventListener('play', api._removePreloader());
	};

	return api;
};

window.addEventListener('load', () => {
	const preloader = Preloader('video');
	preloader.startCheckingLoading();
});
