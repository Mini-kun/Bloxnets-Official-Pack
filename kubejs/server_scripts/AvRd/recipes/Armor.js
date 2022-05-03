// priority: 99
events.listen('recipes', event => {
    //remove
    event.remove({ output: 'mekanismtools:wood_paxel' })
    event.remove({ output: 'mekanismtools:stone_paxel' })
    event.remove({ output: 'mekanismtools:iron_paxel' })
    event.remove({ output: 'mekanismtools:lapis_lazuli_paxel' })
    event.remove({ output: 'mekanismtools:refined_glowstone_paxel' })
    event.remove({ output: 'mekanismtools:osmium_paxel' })
    event.remove({ output: 'mekanismtools:diamond_paxel' })
    event.remove({ output: 'mekanismtools:netherite_paxel' })
    event.remove({ output: 'mekanismtools:steel_paxel' })
    event.remove({ output: 'mekanismtools:refined_obsidian_paxel'})
    event.remove({ output: 'mininggadgets:mininggadget'})
    event.remove( {output: 'mininggadgets:mininggadget_fancy'})
    event.remove( {output: 'mininggadgets:mininggadget_simple'})
    //Paxel
    event.smithing(Item.of('mekanismtools:stone_paxel', { Damage: 0, Unbreakable: 1 }).ignoreNBT(), Item.of('mekanismtools:wood_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'minecraft:furnace')
    event.smithing(Item.of('mekanismtools:iron_paxel', { Damage: 0, Unbreakable: 1 }).ignoreNBT(), Item.of('mekanismtools:stone_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'minecraft:iron_block')
    event.smithing(Item.of('mekanismtools:lapis_lazuli_paxel', { Damage: 0, Unbreakable: 1 }).ignoreNBT(), Item.of('mekanismtools:iron_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'minecraft:lapis_block')
    event.smithing(Item.of('mekanismtools:refined_glowstone_paxel', { Damage: 0, Unbreakable: 1 }).ignoreNBT(), Item.of('mekanismtools:lapis_lazuli_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'mekanism:block_refined_glowstone')
    event.smithing(Item.of('mekanismtools:osmium_paxel', { Damage: 0, Unbreakable: 1 }).ignoreNBT(), Item.of('mekanismtools:refined_glowstone_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'emendatusenigmatica:osmium_block')
    event.smithing(Item.of('mekanismtools:diamond_paxel', { Damage: 0, Unbreakable: 1 }).ignoreNBT(), Item.of('mekanismtools:osmium_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'minecraft:diamond_block')
    event.smithing(Item.of('mekanismtools:netherite_paxel', { Damage: 0, Unbreakable: 0 }).ignoreNBT(), Item.of('mekanismtools:diamond_paxel', '{Damage:0,Unbreakable:1}').ignoreNBT(), 'minecraft:netherite_block')
    event.smithing(Item.of('mekanismtools:steel_paxel', { Damage: 0, Unbreakable: 0 }).ignoreNBT(), Item.of('mekanismtools:netherite_paxel').ignoreNBT(), 'emendatusenigmatica:steel_block')
    event.smithing(Item.of('mekanismtools:refined_obsidian_paxel', { Damage: 0, Unbreakable: 0 }).ignoreNBT(), Item.of('mekanismtools:steel_paxel').ignoreNBT(), 'mekanism:block_refined_obsidian' )
    event.smithing('mininggadgets:mininggadget', 'minecraft:diamond_pickaxe','mininggadgets:upgrade_empty')
    //Change
    event.remove({id:'mekanism:mekasuit_bodyarmor'})
    event.shaped(Item.of('mekanism:mekasuit_bodyarmor', '{HideFlags:2}'), [
        'HUH',
        'HCH',
        'PBP'
    ], {
        H: 'mekanism:hdpe_sheet',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell',
        U: 'mekanism:ultimate_control_circuit',
        C: item.of('advancednetherite:netherite_diamond_chestplate').ignoreNBT()

    }).id('avrd:mekasuit_bodyarmor')
    event.remove({id:'mekanism:mekasuit_helmet'})
    event.shaped(Item.of('mekanism:mekasuit_helmet', '{HideFlags:2}'), [
        'HUH',
        'HCH',
        'PBP'
    ], {
        H: 'mekanism:hdpe_sheet',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell',
        U: 'mekanism:ultimate_control_circuit',
        C: item.of('advancednetherite:netherite_diamond_helmet').ignoreNBT()
    }).id('avrd:mekasuit_helmet')
    event.remove({id:'mekanism:mekasuit_pants'})
    event.shaped(Item.of('mekanism:mekasuit_pants', '{HideFlags:2}'), [
        'HUH',
        'HCH',
        'PBP'
    ], {
        H: 'mekanism:hdpe_sheet',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell',
        U: 'mekanism:ultimate_control_circuit',
        C: item.of('advancednetherite:netherite_diamond_leggings').ignoreNBT()
    }).id('avrd:mekasuit_pants')
    event.remove({id:'mekanism:mekasuit_boots'})
    event.shaped(Item.of('mekanism:mekasuit_boots', '{HideFlags:2}'), [
        'HUH',
        'HCH',
        'PBP'
    ], {
        H: 'mekanism:hdpe_sheet',
        P: 'mekanism:pellet_polonium',
        B: 'mekanism:basic_induction_cell',
        U: 'mekanism:ultimate_control_circuit',
        C: item.of('advancednetherite:netherite_diamond_boots').ignoreNBT()
    }).id('avrd:mekasuit_boots')
})