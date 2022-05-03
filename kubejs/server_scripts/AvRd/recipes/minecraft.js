// priority: 98
onEvent('recipes', event => {
    event.remove({output: 'minecraft:bread'})
//	event.shapeless(output,input).id('avrd:id')
    event.remove({output: 'minecraft:smithing_table'})
    event.smelting('minecraft:leather','minecraft:rotten_flesh',1,20).id('avrd:rotten_leather')
    event.shapeless(item.of('minecraft:string',5),'minecraft:cobweb').id('avrd:cobweb_string')
    event.shapeless(item.of('#forge:gravel',3), ['minecraft:flint', 'minecraft:flint', 'minecraft:flint']).id('avrd:flint_gravel')
    event.shapeless(item.of('minecraft:clay_ball', 4), ['minecraft:clay']).id('avrd:clay')
    event.shapeless(item.of('minecraft:bread',1), ['#forge:crops/wheat', '#forge:crops/wheat', '#forge:crops/wheat']).id('avrd:bread')
    event.shapeless(item.of('minecraft:flint',3), ['#forge:gravel', '#forge:gravel', '#forge:gravel']).id('avrd:gravel_flint')
    event.shapeless(item.of('minecraft:wheat_seeds', 1), 'minecraft:wheat').id('avrd:seed')
    event.shapeless(item.of('betternether:basalt_stalactite',1),'minecraft:basalt').id('avrd:basalt_stalactite_betternether')
    event.shapeless(item.of('minecraft:ender_pearl', 1), ['miniutilities:ender_dust','miniutilities:ender_dust','miniutilities:ender_dust','miniutilities:ender_dust']).id('avrd:ender_peal')
    event.shaped(item.of('minecraft:smithing_table',1),[
        'SP ',
        'PS ',
        '   '
    ],{
        P:'#minecraft:planks',
        S:'#forge:cobblestone'
    }).id('avrd:smithing_table')
    event.shaped(item.of('minecraft:chest', 4), [
        'LLL',
        'L L',
        'LLL'
    ], {
        L: '#minecraft:logs'
    }).id('avrd:logs_chest')  
    event.shaped(item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: 'minecraft:oak_log',
    }).id('avrd:stick/oak')
    event.shaped(item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: 'minecraft:birch_log',
    }).id('avrd:stick/birch')
    event.shaped(item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: 'minecraft:jungle_log',
    }).id('avrd:stick/jungle')
    event.shaped(item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: 'minecraft:acacia_log',
    }).id('avrd:stick/acacia')
    event.shaped(item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: 'minecraft:dark_oak_log',
    }).id('avrd:stick/dark_oak')
    event.shaped(item.of('minecraft:stick', 16), [
        'L',
        'L'
    ], {
        L: 'minecraft:spruce_log'
    }).id('avrd:stick/spruce') 
    event.shapeless(item.of('minecraft:nether_wart', 9), 'minecraft:nether_wart_block').id('avrd:warts')
})