const LevelManager = require('./LevelManager');
const LootManager = require('./LootManager');
const InventoryManager = require('./InventoryManager');

const player = new LevelManager();
const lootSystem = new LootManager();
const inventory = new InventoryManager();

function completeTask(taskName, xpReward) {
    console.log(`✅ Completed: ${taskName}`);
    player.addXP(xpReward);

    const loot = lootSystem.getLoot();
    if (loot) {
        inventory.addItem(loot);
    } else {
        console.log("No loot this time 😢");
    }

    console.log("-----");
}

// Simulate doing tasks
completeTask("Do homework", 50);
completeTask("Clean room", 70);
completeTask("Finish project", 120);

console.log("\nFinal Stats:", player.getStats());
inventory.viewInventory();


