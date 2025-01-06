ItemEvents.rightClicked('minecraft:glass_bottle', event => event.cancel())

ItemEvents.firstRightClicked('minecraft:glass_bottle', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.item.count--;
    e.server.scheduleInTicks(0, () => e.player.give('kubejs:salty_water_bottle'));
    e.cancel();
})

ItemEvents.rightClicked('cold_sweat:waterskin', event => event.cancel())

ItemEvents.firstRightClicked('cold_sweat:waterskin', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})

ItemEvents.rightClicked('thirst:terracotta_bowl', event => event.cancel())

ItemEvents.firstRightClicked('thirst:terracotta_bowl', e => {
    const {block} = e.target;
    if(!block || block.id != 'minecraft:water' && block.id != 'minecraft:still_water') return;
    e.cancel();
})