class LevelManager {
    constructor() {
        this.level = 1;
        this.xp = 0;
        this.xpToNextLevel = 100;
        this.xpGrowthRate = 1.2;
    }

    // returns number of levels gained (0 if none)
    addXP(amount) {
        this.xp += amount;
        console.log(`+${amount} XP (Total: ${this.xp})`);
        let levelsGained = 0;

        while (this.xp >= this.xpToNextLevel) {
            this.xp -= this.xpToNextLevel;
            this.level++;
            levelsGained++;
            this.xpToNextLevel = Math.floor(this.xpToNextLevel * this.xpGrowthRate);
        }

        if (levelsGained > 0) {
            console.log(`🎉 Leveled up ${levelsGained} time(s)! Now level ${this.level}`);
        }
        return levelsGained;
    }

    getStats() {
        return {
            level: this.level,
            xp: this.xp,
            xpToNextLevel: this.xpToNextLevel
        };
    }
}

// Module/browser-compatible export
if (typeof module !== "undefined" && module.exports) {
    module.exports = LevelManager;
} else {
    window.LevelManager = LevelManager;
}


