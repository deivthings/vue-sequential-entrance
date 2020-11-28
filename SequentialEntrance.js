import { defineComponent, h } from 'vue'

const sequentialEntrance = defineComponent({
	name: 'sequentialEntrance',
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		delay: {
			type: String,
			default: '250',
		},
		animation: {
			type: String,
			default: 'entranceFromRight'
		}
	},

	render () {
		const children = this.$slots.default()
		let animation = null

		if (this.$props.fromTop !== undefined) animation = 'entranceFromTop'
		else if (this.$props.fromLeft !== undefined) animation = 'entranceFromLeft'
		else if (this.$props.fromRight !== undefined) animation = 'entranceFromRight'
		else if (this.$props.fromBottom !== undefined) animation = 'entranceFromBottom'
		else animation = this.$props.animation

		if (children && children[0].children.length) {
			children[0].children.forEach((child, index) => {
				setTimeout(() => {
					child.el.style.opacity = '0'
					child.el.style.animationFillMode = 'forwards'
					child.el.style.animationDelay = index * this.$props.delay + 'ms'
					child.el.classList.add(animation)
				}, 10)
			})
		}

		return h(this.$props.tag, { }, children)
	}
})

export default sequentialEntrance
