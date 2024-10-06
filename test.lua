function getDebugInfoForCrash()
    local info = "Additional Context:\nBalatro Version: " .. (VERSION or "???")
    local major, minor, revision, codename = love.getVersion()
    info = info .. string.format("\nLove2D Version: %d.%d.%d", major, minor, revision)
    return info
end

function love.draw()
    local pos = 70
    love.graphics.clear({0, 0, 0})
    local msg = getDebugInfoForCrash()
    love.graphics.printf(msg, pos, pos, love.graphics.getWidth() - pos * 2)
    love.graphics.present()
end
