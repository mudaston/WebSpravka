'use strict'

document.addEventListener('DOMContentLoaded', () => {
	const circles = document.querySelectorAll('[data-circle]'),
		profile = document.querySelector('.profile__wrapper'),
		login = document.querySelector('.login')

	login.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.matches('button')) {
			e.preventDefault()

			circles.forEach(item => {
				item.removeAttribute('data-circle')
			})

			profile.classList.add('profile__wrapper--show')
			login.classList.add('login--hide')

			setTimeout(() => {
				const erosion = document.querySelector('.erosion-layer')
				erosion.classList.add('erosion-layer--hide')
				setTimeout(() => erosion.style.zIndex = '-999', 1000)
			}, 1500);
		}
	})
})
