
import { Application } from '@pixi/app'
import { Renderer } from '@pixi/core' 
import { BatchRenderer } from '@pixi/core'
Renderer.registerPlugin('batch', BatchRenderer)

import { TickerPlugin } from '@pixi/ticker' 
Application.registerPlugin(TickerPlugin)

import { AppLoaderPlugin } from '@pixi/loaders'
Application.registerPlugin(AppLoaderPlugin)

import { Sprite } from '@pixi/sprite'

const app = new Application({
	width: window.innerWidth,
	height: window.innerHeight
})
document.body.appendChild(app.view)


	
	

app.loader.add('logo', './assets/logo.png')
app.loader.add('bunny', './assets/bunny.png')
// app.loader.add('bunny', './assets/bunny.json')
app.loader.load(() => {
	const sprite1 = Sprite.from('bunny')
	sprite1.anchor.set(0.5)
	
	const sprite = Sprite.from('logo')
	sprite.anchor.set(0.5)
	
	// We want to rotate our sprite relative to the center, so 0.5
	app.stage.addChild(sprite)
	app.stage.addChild(sprite1)
	// Position the sprite at the center of the stage
	sprite.x = app.screen.width * 0.5
	sprite.y = app.screen.height * 0.5

	// Put the rotating function into the update loop
	app.ticker.add(delta => {
		sprite.rotation += 0.02 * delta
		sprite1.rotation += 0.02 * delta
	})
})