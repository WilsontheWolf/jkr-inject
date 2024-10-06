local alreadyLoaded = false

local origGamePrepStage = Game.prep_stage

function Game:prep_stage(new_stage, new_state, new_game_obj)
    if not alreadyLoaded then
        alreadyLoaded = true
        initSteamodded()
    end
    origGamePrepStage(self, new_stage, new_state, new_game_obj)
end