class LootManager {
    constructor() {
        this.rarities = [
            { name: "Mythic", color: "#e53935", chance: 1 },
            { name: "Legendary", color: "#ffd700", chance: 5 },
            { name: "Epic", color: "#8e24aa", chance: 10 },
            { name: "Rare", color: "#1976d2", chance: 25 },
            { name: "Uncommon", color: "#43a047", chance: 40 },
            { name: "Common", color: "#ffffff", chance: 60 }
        ];

        this.lootTable = [
            // Consumables
            { name: "Minor Health Potion", rarity: "Common", description: "Restores 25 HP", category: "Consumable" },
            { name: "Bread", rarity: "Common", description: "Restores 10 HP and provides minor stamina", category: "Consumable" },
            { name: "Water Flask", rarity: "Common", description: "Quenches thirst and restores 5 HP", category: "Consumable" },
            { name: "Health Potion", rarity: "Uncommon", description: "Restores 50 HP", category: "Consumable" },
            { name: "Mana Crystal", rarity: "Uncommon", description: "Restores 30 MP", category: "Consumable" },
            { name: "Stamina Berry", rarity: "Uncommon", description: "Restores stamina and provides speed boost", category: "Consumable" },
            { name: "Greater Health Potion", rarity: "Rare", description: "Restores 100 HP", category: "Consumable" },
            { name: "Scroll of Protection", rarity: "Rare", description: "Grants temporary damage resistance", category: "Consumable" },
            { name: "Feast", rarity: "Rare", description: "Fully restores health and provides buffs", category: "Consumable" },
            { name: "Elixir of Strength", rarity: "Epic", description: "Permanently increases attack power", category: "Consumable" },
            { name: "Phoenix Feather", rarity: "Epic", description: "Revives with full health once", category: "Consumable" },
            { name: "Dragon's Blood", rarity: "Legendary", description: "Grants immunity to all damage for 10 seconds", category: "Consumable" },
            { name: "Ambrosia", rarity: "Mythic", description: "The food of gods, grants immortality for 1 hour", category: "Consumable" },

            // Weapons - Swords
            { name: "Rusty Sword", rarity: "Common", description: "A worn blade, better than nothing", category: "Weapon" },
            { name: "Iron Sword", rarity: "Common", description: "Standard military issue blade", category: "Weapon" },
            { name: "Steel Sword", rarity: "Uncommon", description: "Well-crafted and reliable", category: "Weapon" },
            { name: "Silver Blade", rarity: "Uncommon", description: "Effective against undead creatures", category: "Weapon" },
            { name: "Enchanted Sword", rarity: "Rare", description: "Glows with magical energy", category: "Weapon" },
            { name: "Flamebrand", rarity: "Rare", description: "Sword wreathed in eternal flames", category: "Weapon" },
            { name: "Moonlight Blade", rarity: "Epic", description: "Forged from celestial silver", category: "Weapon" },
            { name: "Dragonslayer", rarity: "Epic", description: "Ancient sword designed to slay dragons", category: "Weapon" },
            { name: "Excalibur", rarity: "Legendary", description: "The legendary sword of kings", category: "Weapon" },
            { name: "Void Ripper", rarity: "Mythic", description: "Tears through reality itself", category: "Weapon" },

            // Weapons - Ranged
            { name: "Wooden Bow", rarity: "Common", description: "Simple hunting bow", category: "Weapon" },
            { name: "Crossbow", rarity: "Uncommon", description: "Mechanical precision weapon", category: "Weapon" },
            { name: "Elven Bow", rarity: "Rare", description: "Crafted with ancient elven techniques", category: "Weapon" },
            { name: "Storm Bow", rarity: "Epic", description: "Arrows crackle with lightning", category: "Weapon" },
            { name: "Artemis' Bow", rarity: "Legendary", description: "Never misses its target", category: "Weapon" },

            // Weapons - Magic
            { name: "Apprentice Wand", rarity: "Common", description: "Basic magical focus", category: "Weapon" },
            { name: "Crystal Staff", rarity: "Uncommon", description: "Amplifies magical power", category: "Weapon" },
            { name: "Wizard's Staff", rarity: "Rare", description: "Channels powerful spells", category: "Weapon" },
            { name: "Staff of Elements", rarity: "Epic", description: "Controls fire, ice, and lightning", category: "Weapon" },
            { name: "Staff of Creation", rarity: "Legendary", description: "Can reshape reality with magic", category: "Weapon" },

            // Weapons - Heavy
            { name: "Hand Axe", rarity: "Common", description: "Versatile tool and weapon", category: "Weapon" },
            { name: "Battle Axe", rarity: "Uncommon", description: "Heavy two-handed weapon", category: "Weapon" },
            { name: "Dwarven Axe", rarity: "Rare", description: "Master-crafted with runic engravings", category: "Weapon" },
            { name: "Berserker's Axe", rarity: "Epic", description: "Grows stronger with each kill", category: "Weapon" },

            // Armor - Helmets
            { name: "Leather Cap", rarity: "Common", description: "Basic head protection", category: "Armor" },
            { name: "Iron Helmet", rarity: "Uncommon", description: "Solid metal protection", category: "Armor" },
            { name: "Knight's Helm", rarity: "Rare", description: "Full-face protection with good visibility", category: "Armor" },
            { name: "Crown of Wisdom", rarity: "Epic", description: "Increases magical power and insight", category: "Armor" },
            { name: "Helm of the Gods", rarity: "Legendary", description: "Grants divine protection", category: "Armor" },

            // Armor - Body
            { name: "Cloth Robe", rarity: "Common", description: "Simple fabric protection", category: "Armor" },
            { name: "Leather Armor", rarity: "Common", description: "Flexible and quiet", category: "Armor" },
            { name: "Chain Mail", rarity: "Uncommon", description: "Interlocking metal rings", category: "Armor" },
            { name: "Plate Armor", rarity: "Rare", description: "Heavy but excellent protection", category: "Armor" },
            { name: "Dragon Scale Armor", rarity: "Epic", description: "Nearly impenetrable scales", category: "Armor" },
            { name: "Celestial Raiment", rarity: "Legendary", description: "Woven from starlight itself", category: "Armor" },

            // Armor - Hands
            { name: "Cloth Gloves", rarity: "Common", description: "Basic hand protection", category: "Armor" },
            { name: "Leather Gauntlets", rarity: "Uncommon", description: "Flexible grip protection", category: "Armor" },
            { name: "Iron Gauntlets", rarity: "Rare", description: "Heavy-duty hand armor", category: "Armor" },
            { name: "Gauntlets of Power", rarity: "Epic", description: "Increases physical strength", category: "Armor" },

            // Armor - Feet
            { name: "Cloth Shoes", rarity: "Common", description: "Simple foot protection", category: "Armor" },
            { name: "Leather Boots", rarity: "Uncommon", description: "Comfortable and durable", category: "Armor" },
            { name: "Boots of Speed", rarity: "Rare", description: "Increases movement speed", category: "Armor" },
            { name: "Winged Sandals", rarity: "Epic", description: "Grants the ability to fly", category: "Armor" },

            // Tools
            { name: "Rusty Pickaxe", rarity: "Common", description: "Old mining tool", category: "Tool" },
            { name: "Iron Pickaxe", rarity: "Uncommon", description: "Reliable mining equipment", category: "Tool" },
            { name: "Diamond Pickaxe", rarity: "Rare", description: "Mines the hardest materials", category: "Tool" },
            { name: "Enchanted Pickaxe", rarity: "Epic", description: "Automatically sorts and smelts ore", category: "Tool" },
            { name: "Woodcutter's Axe", rarity: "Common", description: "Sharp tool for felling trees", category: "Tool" },
            { name: "Lumberjack's Axe", rarity: "Uncommon", description: "Professional-grade woodcutting", category: "Tool" },
            { name: "Basic Fishing Rod", rarity: "Common", description: "Catches common fish", category: "Tool" },
            { name: "Angler's Rod", rarity: "Rare", description: "Attracts rare fish", category: "Tool" },
            { name: "Lockpick Set", rarity: "Uncommon", description: "Opens basic locks", category: "Tool" },
            { name: "Master Lockpicks", rarity: "Epic", description: "Can open any lock", category: "Tool" },

            // Crafting Materials
            { name: "Copper Ore", rarity: "Common", description: "Basic crafting material", category: "Material" },
            { name: "Iron Ore", rarity: "Common", description: "Common metal ore", category: "Material" },
            { name: "Silver Ore", rarity: "Uncommon", description: "Precious metal ore", category: "Material" },
            { name: "Gold Ore", rarity: "Rare", description: "Valuable crafting material", category: "Material" },
            { name: "Mithril Ore", rarity: "Epic", description: "Legendary lightweight metal", category: "Material" },
            { name: "Adamantine", rarity: "Legendary", description: "Indestructible metal", category: "Material" },
            { name: "Oak Wood", rarity: "Common", description: "Sturdy crafting wood", category: "Material" },
            { name: "Birch Wood", rarity: "Common", description: "Light and flexible wood", category: "Material" },
            { name: "Enchanted Wood", rarity: "Rare", description: "Magically infused timber", category: "Material" },
            { name: "World Tree Branch", rarity: "Mythic", description: "Wood from the cosmic tree", category: "Material" },
            { name: "Healing Herbs", rarity: "Common", description: "Basic medicinal plants", category: "Material" },
            { name: "Magical Herbs", rarity: "Uncommon", description: "Enchanted plant matter", category: "Material" },
            { name: "Ruby", rarity: "Rare", description: "Fiery red gemstone", category: "Material" },
            { name: "Sapphire", rarity: "Rare", description: "Deep blue gemstone", category: "Material" },
            { name: "Emerald", rarity: "Epic", description: "Brilliant green gemstone", category: "Material" },
            { name: "Diamond", rarity: "Epic", description: "Hardest known gemstone", category: "Material" },
            { name: "Philosopher's Stone", rarity: "Legendary", description: "Transmutes base metals to gold", category: "Material" },

            // Unique Items
            { name: "Rusty Key", rarity: "Common", description: "Opens an old chest", category: "Unique" },
            { name: "Golden Key", rarity: "Rare", description: "Opens treasure vaults", category: "Unique" },
            { name: "Skeleton Key", rarity: "Epic", description: "Opens any door", category: "Unique" },
            { name: "Ancient Scroll", rarity: "Rare", description: "Contains forgotten knowledge", category: "Unique" },
            { name: "Tome of Power", rarity: "Epic", description: "Teaches a legendary spell", category: "Unique" },
            { name: "Map Fragment", rarity: "Uncommon", description: "Part of a treasure map", category: "Unique" },
            { name: "Complete Treasure Map", rarity: "Legendary", description: "Leads to ultimate treasure", category: "Unique" },
            { name: "Rune of Fire", rarity: "Rare", description: "Enhances weapons with fire damage", category: "Unique" },
            { name: "Rune of Ice", rarity: "Rare", description: "Enhances weapons with ice damage", category: "Unique" },
            { name: "Rune of Lightning", rarity: "Epic", description: "Enhances weapons with lightning", category: "Unique" },
            { name: "Master Rune", rarity: "Legendary", description: "Combines all elemental powers", category: "Unique" },
            { name: "Time Crystal", rarity: "Mythic", description: "Allows manipulation of time itself", category: "Unique" },
            { name: "Soul Gem", rarity: "Mythic", description: "Contains the essence of a powerful being", category: "Unique" },
            { name: "Reality Shard", rarity: "Mythic", description: "Fragment of the universe's foundation", category: "Unique" }
        ];
    }

    getLoot() {
        const roll = Math.random() * 100;
        let cumulative = 0;
        let rarity = null;

        for (let r of this.rarities) {
            cumulative += r.chance;
            if (roll <= cumulative) {
                rarity = r;
                break;
            }
        }
        if (!rarity) return null;

        // Filter loot by rarity, pick random
        const possibleLoot = this.lootTable.filter(item => item.rarity === rarity.name);
        if (possibleLoot.length === 0) return null;
        const item = possibleLoot[Math.floor(Math.random() * possibleLoot.length)];
        // Return all needed fields for inventory display
        return {
            name: item.name,
            rarity: rarity.name,
            color: rarity.color,
            description: item.description,
            category: item.category
        };
    }
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = LootManager;
} else {
    window.LootManager = LootManager;
}