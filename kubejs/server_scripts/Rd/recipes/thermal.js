// priority: 99
events.listen('recipes', event => {
    event.recipes.thermal.smelter(Item.of('thermal:nickel_ingot', 2),['#forge:ingots/iron','#forge:ingots/copper','#forge:ingots/zinc']).energy(4000)
    event.recipes.thermal.smelter(Item.of('thermal:nickel_ingot', 2),['#forge:dusts/iron','#forge:dusts/copper','#forge:dusts/zinc']).energy(4000)
    event.recipes.thermal.smelter(item.of('emendatusenigmatica:enderium_ingot',2),['3x emendatusenigmatica:lead_dust','2x miniutilities:ender_dust','emendatusenigmatica:diamond_dust']).energy(16000).id('avrd:enderium_ingot')

    event.recipes.thermal.pulverizer(item.of('mekanism:dust_refined_obsidian'), '#forge:ingots/refined_obsidian')
    event.recipes.thermal.pulverizer(item.of('mekanism:dust_uranium'), '#forge:ingots/uranium')
    event.recipes.thermal.pulverizer(item.of('mekanism:dust_osmium'), '#forge:ingots/osmium')
    event.recipes.thermal.pulverizer(item.of('mekanism:fluorite_gem', 6), '#forge:ores/fluorite')
    event.recipes.thermal.pulverizer(item.of('mekanism:dust_obsidian', 4), '#forge:obsidian')

    event.recipes.thermal.pulverizer(item.of('minecraft:glowstone_dust'), '#forge:ingots/refined_glowstone')

    event.remove({id: 'thermal:machine/create/smelter_create_crushed_iron_ore'})
    event.remove({id: 'thermal:machine/create/smelter_create_crushed_gold_ore'})

    event.remove({id: 'thermal:machine/create/smelter_create_crushed_copper_ore'})
    event.remove({id: 'thermal:machine/create/smelter_create_crushed_copper_ore'})
    event.remove({id: 'thermal:machine/create/smelter_create_crushed_copper_ore'})
    event.remove({id: 'emendatusenigmatica:alloy_dust/enderium'})
    event.remove({id: 'thermal:enderium_dust_2'})
    event.shaped(item.of('emendatusenigmatica:enderium_dust',2),[
        'LLL',
        'DEE',
        '   '
    ],{
        D:'emendatusenigmatica:diamond_dust',
        L:'emendatusenigmatica:lead_dust',
        E:'miniutilities:ender_dust'
    }).id('avrd:enderium_dust')
})