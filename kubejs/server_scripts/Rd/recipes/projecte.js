// priority: 98
events.listen('recipes', event => {
    //	event.shapeless(output,input).id('avrd:id')
    event.remove({id: 'miniutilities:angel_ring_crafting'})
    event.shaped(item.of('miniutilities:angel_ring',1),['G G','SES','UTU'],
    {
        T: 'mekanism:teleportation_core',
        S: 'minecraft:nether_star',
        E: 'minecraft:elytra',
        U: 'miniutilities:unstable_ingot',
        G: '#forge:glass'
    }).id('avrd:angel_ring')
})