
JEIAddedEvents.registerCategories((event) => {
    // Register a new CustomCategory with the id "kubejsadditions:drying".
    event.custom("kubejsadditions:drying", (category) => {
        // Set the title of the category to "Painful Blocks".
        category.title("Drying")
                // Set the background of the category to a blank 100x50 drawable canvas.
                .background(guiHelper.createBlankDrawable(100, 50))
                // Set the icon of the category to a cactus item.
                .icon(guiHelper.createDrawableItemStack(Item.of('yaam:drying_rack')))
                // Set the callback function that will verify if a recipe is a valid recipe for this category.
                .isRecipeHandled((recipe) => {
                    return global["verifyRecipe"](category.jeiHelpers, recipe);
                })
                // Set the callback function that will allow JEI to index this recipe and determine
                // what the inputs and outputs of each recipe are.
                .handleLookup((builder, recipe, focuses) => {
                    global["handleLookup"](category.jeiHelpers, builder, recipe, focuses);
                })

    });
});

// Here we can hook into the JEI recipe registration event to add some recipes to our
// newly created category.
JEIAddedEvents.registerRecipes((event) => {
    // This utilized the new recipe category you made above here.
    // All that's left is to add as many different recipes as your heart desires.
    // There are no limitations to what you can store as a "recipe". Nothing that you don't control
    // cares about the format of the data.
    // If you want it to be an object, an array, a string, a number, a boolean, or even a function,
    // It does not matter. It's all up to you. Go wild.
    // Just make sure to update how you render it in the category definition.
    event.custom("kubejsadditions:painful_blocks")
            .add({name: 'minecraft:cactus', type: 'block', description: 'It is kind of prickly.'})
            .add({name: 'minecraft:stick', type: 'item', description: 'It could be sharp!'})
            .add({name: 'minecraft:lava', type: 'fluid', description: 'It is very hot.'})
            .add({name: 'minecraft:sugar', type: 'item', description: 'It causes diabetes.'})
    // .add([])
    // .add("")
    // .add(true)
    // .add(50)
    // .add(12.4)
    // .add(()=> Item.of('steak'))
});