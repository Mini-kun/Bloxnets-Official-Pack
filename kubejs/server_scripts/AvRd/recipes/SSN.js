// prioity: 99
events.listen('recipes', event => {
    event.remove({ id: 'storagenetwork:crafting_remote' })
    event.remove({ id: 'storagenetwork:inventory_remote' })
    event.remove({ id: 'refinedstorage:machine_casing'})
    event.remove({ id: 'refinedstorage:cable'})
    event.remove({ id: 'storagenetwork:kabel'})
    event.remove({ id: 'appliedenergistics2:network/cables/glass_fluix'})
    event.remove({ id: 'appliedenergistics2:network/blocks/energy_energy_acceptor'})
    event.remove({ id: 'appliedenergistics2:network/blocks/controller'})
    event.remove({ id: 'ae2wtlib:infinity_booster_card'})
    event.remove({ id: 'rsinfinitybooster:infinity_card'})
    event.remove({ id: 'rsinfinitybooster:dimension_card'})
    event.remove({ id: 'refinedstorage:controller'})
    event.shaped(item.of('refinedstorage:controller'),[
        'QSQ',
        'PCM',
        'QSQ'
    ],{
        Q: 'refinedstorage:quartz_enriched_iron',
        S: '#forge:gems/silicon',
        P: 'refinedstorage:advanced_processor',
        C: 'refinedstorage:machine_casing',
        M: 'storagenetwork:master'
    })
    event.shaped(item.of('rsinfinitybooster:infinity_card'),[
        'PQD','SRS','DSP'
    ],{
        P:'mekanism:hdpe_sheet',
        Q:'mekanism:quantum_entangloporter',
        D:'advancednetherite:netherite_diamond_ingot',
        S:'minecraft:nether_star',
        R:'refinedstorage:range_upgrade'
    }).id('arvd:rsinf_card')
    event.shaped(item.of('rsinfinitybooster:dimension_card'),[
        'PQD','SRS','DWP'
    ],{
        P:'mekanism:hdpe_sheet',
        Q:'mekanism:quantum_entangloporter',
        D:'advancednetherite:netherite_diamond_ingot',
        S:'minecraft:nether_star',
        W:item.of('waystones:warp_stone').ignoreNBT(),
        R:'rsinfinitybooster:infinity_card'
    }).id('arvd:rsdim_card')
    event.shaped(Item.of('storagenetwork:crafting_remote'), [
        'EBE',
        'GRG',
        'ECE'
    ], {
            G: 'minecraft:gold_block',
            B: 'minecraft:emerald_block',
            R: 'storagenetwork:inventory_remote',
            C: 'minecraft:crafting_table',
            E: 'minecraft:emerald'
    }).id('avrd:craftig_remote') 
    event.shaped(Item.of('storagenetwork:inventory_remote'), [
        'SGS',
        'BIB',
        'SCS'
    ], {
            B: 'minecraft:gold_block',
            G: 'minecraft:glowstone_dust',
            I: 'storagenetwork:inventory',
            C: 'minecraft:chest',
            S: 'minecraft:slime_ball'
    }).id('avrd:inventory_remote')
    event.shaped(Item.of('storagenetwork:kabel', 8),[
        'SSS',
        'QRQ',
        'SSS'
    ],{
        S: 'minecraft:stone_slab',
        Q: 'appliedenergistics2:fluix_crystal',
        R: 'minecraft:redstone'
    }).id('avrd:kabel_ssn')
    event.shaped(Item.of('appliedenergistics2:fluix_glass_cable', 2),[
       'GQG',
       'GKG',
       'GQG' 
    ],{
        Q: '#appliedenergistics2:crystals/fluix',
        G: 'minecraft:glass',
        K: 'storagenetwork:kabel'
    }).id('avrd:cable_ae')
    event.shaped(Item.of('appliedenergistics2:energy_acceptor'),[
        'IQI',
        'QCQ',
        'IQI' 
     ],{
         Q: 'appliedenergistics2:quartz_glass',
         C: 'storagenetwork:master',
         I: '#forge:ingots/iron'
     }).id('avrd:ae_energy_acceptor')
     event.shaped(item.of('appliedenergistics2:controller',1),[
        'SFS',
        'EBT',
        'SFS'
    ],{
        S: 'appliedenergistics2:smooth_sky_stone_block',
        F: '#appliedenergistics2:crystals/fluix',
        E: 'appliedenergistics2:engineering_processor',
        B: 'mekanism:steel_casing',
        T: 'appliedenergistics2:energy_acceptor'
     }).id('avrd:ae_controller')
    event.shaped(item.of('ae2wtlib:infinity_booster_card',1),[
        'WTW',
        'PSP',
        'WIW'
    ],{
        P: 'appliedenergistics2:fluix_pearl',
        W: 'appliedenergistics2:wireless_booster',
        S: 'minecraft:nether_star',
        I: 'appliedenergistics2:wireless_receiver',
        T: 'mekanism:teleportation_core'
    }).id('avrd:infinity_booster_card')
    event.shaped(Item.of('refinedstorage:cable', 2),[
        'QQQ',
        'GKG',
        'QQQ' 
     ],{
         Q: 'refinedstorage:quartz_enriched_iron',
         G: 'minecraft:glass',
         K: 'storagenetwork:kabel'
     }).id('avrd:cabel_rs')
     event.shaped(Item.of('refinedstorage:machine_casing'),[
         'QQQ',
         'QCQ',
         'QQQ' 
      ],{
          Q: 'refinedstorage:quartz_enriched_iron',
          C: 'mekanism:steel_casing'
      }).id('avrd:rs_casing')
    event.shaped(Item.of('storagedrawers:creative_storage_upgrade'), [
        'PUI',
        'EUE',
        'SBR'
    ], {
            P: 'draconicevolution:chaotic_core',
            U: 'mekanism:ultimate_control_circuit', 
            I: 'industrialforegoing:pink_slime_ingot',
            E: 'storagedrawers:emerald_storage_upgrade',
            U: 'storagedrawers:upgrade_template',
            S: 'create:shadow_steel',
            B: 'mekanism:ultimate_bin',
            R: 'create:refined_radiance'
    }).id('avrd:drawers_creative')
})