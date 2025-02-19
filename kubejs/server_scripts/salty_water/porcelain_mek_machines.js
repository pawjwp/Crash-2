BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de porcelana vazio
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.FluidTanks) return;
    
    let tank = blockEntity.FluidTanks.find(t => t.Tank === 0);
    if (!tank || !tank.stored || tank.stored.FluidName !== "survive:purified_water" || tank.stored.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove o balde vazio da mão do jogador
    event.item.count--;
    
    // Adiciona um balde de água purificada ao inventário do jogador
    player.give(Item.of('kubejs:porcelain_purified_water_bucket'));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.stored.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});


BlockEvents.rightClicked(event => {
    let { player, hand, item, block } = event;
    
    // Verifica se o jogador está segurando um balde de porcelana vazio
    if (!item.is('exdeorum:porcelain_bucket')) return;
    
    let blockEntity = block.entityData;
    if (!blockEntity || !blockEntity.FluidTanks) return;
    
    let tank = blockEntity.FluidTanks.find(t => t.Tank === 0);
    if (!tank || !tank.stored || tank.stored.FluidName !== "minecraft:water" || tank.stored.Amount < 1000) return; // Garante que há fluido suficiente
    
    // Remove o balde vazio da mão do jogador
    event.item.count--;
    
    // Adiciona um balde de água purificada ao inventário do jogador
    player.give(Item.of('exdeorum:porcelain_water_bucket'));
    
    // Atualiza o tanque do bloco, reduzindo 1000 do fluido armazenado
    tank.stored.Amount -= 1000;
    block.entityData = blockEntity;
    entity.updateBlock()
});
