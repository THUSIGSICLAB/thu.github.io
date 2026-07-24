document.addEventListener('DOMContentLoaded', function () {
	var navigation = document.querySelector('.outcomes-nav');
	if (!navigation) {
		return;
	}

	if (window.jQuery) {
		window.jQuery('.outcomes-nav li').off('click');
	}

	navigation.querySelectorAll('.outcome-nav-toggle').forEach(function (toggle) {
		toggle.addEventListener('click', function () {
			var subnav = document.getElementById(toggle.getAttribute('aria-controls'));
			var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
			var description = toggle.querySelector('.sr-only');

			if (!subnav) {
				return;
			}

			toggle.setAttribute('aria-expanded', String(!isExpanded));
			subnav.hidden = isExpanded;
			if (description) {
				description.textContent = isExpanded ? '展开论文分类' : '收起论文分类';
			}
		});
	});
});
