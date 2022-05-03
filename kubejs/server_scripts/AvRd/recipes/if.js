// priority: 99
events.listen('recipes', event => {
    const LaserDrill = (out, whitelist, listType, listValues, dMin, dMax, weight, pointer, catalyst) => {
        const outJson = item.of(out).toResultJson()
        const rarity = {
            whitelist: {},
            blacklist: {},
            depth_min: dMin,
            depth_max: dMax,
            weight: weight
        }

        if (whitelist) {
            rarity.whitelist = {
                type: listType,
                values: listValues
            }
        } else {
            rarity.blacklist = {
                type: listType,
                values: listValues
            }
        }

        event.custom({
            type: 'industrialforegoing:laser_drill_ore',
            output: outJson,
            rarity: [rarity],
            pointer: pointer,
            catalyst: {
                item: catalyst
            }
        })
    }

    LaserDrill(item.of('thermal:apatite_ore'), false, 'minecraft:worldgen/biome', ['minecraft:nether_wastes', 'minecraft:soul_sand_valley', 'minecraft:crimson_forest', 'minecraft:warped_forest', 'minecraft:basalt_deltas', 'minecraft:the_end', 'minecraft:the_void', 'minecraft:small_end_islands', 'minecraft:end_barrens', 'minecraft:end_highlands', 'minecraft:end_midlands'], 0, 255, 8, 0, 'industrialforegoing:laser_lens11')
})