events.listen('recipes', event => {
    event.remove({id: 'betternether:blackstone_stalacitte_from_blackstone'})
    event.remove({id: 'extrastorage:part/storagepart_16384k'})
    event.remove({id: 'projecte:watch_of_flowing_time'})
    event.remove({id: 'betternether:basalt_stalactite_from_basalt'})
})