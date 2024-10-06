local draw = love.draw

function love.draw()
	if G.STAGE == G.STAGES.RUN then win_game() end
	draw()
end
