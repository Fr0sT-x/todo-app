class InventoryManager {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`📦 Added to inventory: ${item.name} (${item.rarity}) - ${item.description}`);
    }

    viewInventory() {
        if (this.items.length === 0) {
            console.log("📂 Inventory is empty.");
        } else {
            console.log("📂 Inventory:");

            // Group items by name and rarity
            const itemCounts = {};
            this.items.forEach(item => {
                const key = `${item.name}_${item.rarity}`;
                if (itemCounts[key]) {
                    itemCounts[key].count++;
                } else {
                    itemCounts[key] = { ...item, count: 1 };
                }
            });

            // Sort by rarity
            const rarityOrder = { "Mythic": 6, "Legendary": 5, "Epic": 4, "Rare": 3, "Uncommon": 2, "Common": 1 };
            const sortedItems = Object.values(itemCounts).sort((a, b) => {
                return rarityOrder[b.rarity] - rarityOrder[a.rarity];
            });

            sortedItems.forEach((item, index) => {
                const countText = item.count > 1 ? ` x${item.count}` : '';
                console.log(`${index + 1}. ${item.name}${countText} [${item.rarity}] - ${item.description} (${item.category})`);
            });
        }
    }

    clearInventory() {
        this.items = [];
        console.log("🧹 Inventory wiped clean.");
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = InventoryManager;
} else {
    window.InventoryManager = InventoryManager;
}

