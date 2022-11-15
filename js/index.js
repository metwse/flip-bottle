console.log('sa')

const d = document, w = window
turning = false, timeout = 0

onload = () => {
	bottle = d.getElementById('bottle')
	onresize = () => {
		var vmin = Math.min(innerHeight, innerWidth)	
		bottle.parentNode.style.height = `calc(${2 * vmin - Math.sqrt(vmin ** 2 + (vmin * 2 / 3) ** 2)}px - 2em)`
	}
	onresize()

	onclick = () => {
		if (turning) {
			bottle.style = `transition: 0s; rotate: ${degrees % 360}deg`, turning = false
			return clearTimeout(timeout)
		}
		turning = true
		degrees = Math.random() * 720 + 360 * 5
		bottle.style.transition = 'all ease-out 3s'
		bottle.style.rotate = degrees + 'deg'
		timeout = setTimeout(() => (turning = false, bottle.style = `transition: 0s; rotate: ${degrees % 360}deg`), 3000)
	}
}
