import fs from 'fs';
import { compress, decompress, processFile, processJSON } from '../baltro-save/src/helpers/loading.js';

const path = process.argv[2];
if (!path) {
    console.log('Usage: node index.js <path to settings file>');
    process.exit(1);
}

const file = fs.readFileSync(path);
const arrayBuffer = new Uint8Array(file).buffer;

let data = decompress(arrayBuffer);

const toLoad = [
    "Steamodded/core/core.lua",
    "Steamodded/core/deck.lua",
    "Steamodded/core/joker.lua",
    "Steamodded/core/r_blind.lua",
    "Steamodded/core/sound.lua",
    "Steamodded/core/sprite.lua",
    "Steamodded/core/suit.lua",
    "Steamodded/core/tarot.lua",
    "Steamodded/core/voucher.lua",
    "Steamodded/core/planet.lua",
    "Steamodded/core/spectral.lua",
    "Steamodded/core/seal.lua",
    "Steamodded/core/StackTracePlus.lua",
    "Steamodded/debug/debug.lua",
    "Steamodded/loader/loader.lua",
    "loader.lua",
]

let toInject = "";
for (const file of toLoad) {
    const fileData = fs.readFileSync(file, 'utf8');
    toInject += fileData;
    toInject += '\n';
}

data = data.replace(/^.*-----actual-settings-----\n/s, '');

toInject += '-----actual-settings-----\n';

data = toInject + data;

console.log(data)

fs.writeFileSync(path, compress(data));
