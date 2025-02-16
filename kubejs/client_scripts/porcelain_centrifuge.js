// Modify the event handler for right-clicking the centrifuge
BlockEvents.rightClicked(event => {
    let player = event.player;
    let block = event.block;

    // Check if the block is the centrifuge and if the player is holding an empty bottle
    if (block.id == "thermal:machine_centrifuge" && player.getMainHandItem().id == "exdeorum:porcelain_bucket") {
        console.log("Right-clicked: " + block.id + " with " + player.getMainHandItem().id);

        // Get the block entity at this position
        let blockEntity = block.getEntity();

        if (blockEntity) {
            console.log("Block entity found!");

            // Try accessing the tank inventory from the block entity
            let tankInventory = blockEntity.getTankInv();

            if (tankInventory) {
                console.log("Tank inventory found!");

                // Get the fluid in the first tank
                let fluidStack = tankInventory.getFluidInTank(0); // Get fluid in the first tank
                let amount = fluidStack.amount;

                if (amount >= 1000) {
                    console.log("Enough purified water found! Dispensing bottle...");

                    // Give the player a filled bottle with purified water
                    event.item.count--
                    event.entity.runCommandSilent('playsound minecraft:item.bucket.fill master @p ~ ~ ~');
                    event.entity.runCommandSilent('give @p kubejs:porcelain_purified_water_bucket');

                    // Drain 1000mb of purified water from the tank
                    tankInventory.drain(1000);
                } else {
                    console.log("Not enough purified water in the centrifuge! Current amount: " + amount + "mb");
                }
            } else {
                console.log("No tank inventory found!");
            }
        } else {
            console.log("No block entity found!");
        }
    }
});