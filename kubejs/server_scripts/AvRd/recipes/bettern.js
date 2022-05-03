// priority: 98
events.listen('recipes', event => {
    event.remove({id: 'betternether:quartz_glass'})
    event.shapeless(item.of('betternether:quartz_glass', 1), 'minecraft:quartz').id('avrd:quartz_glass')
})