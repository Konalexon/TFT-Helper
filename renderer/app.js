// ========================================
// TFT Helper - Complete MetaTFT Data
// TFT Set 16: Lore & Legends - Patch 16.1
// Data scraped from MetaTFT.com
// ========================================

// Champion name to TFT Set 16 ID mapping
const CHAMPION_IDS = {
    "Azir": "TFT16_Azir", "Renekton": "TFT16_Renekton", "Tibbers": "TFT16_Tibbers",
    "Shyvana": "TFT16_Shyvana", "Annie": "TFT16_Annie", "Seraphine": "TFT16_Seraphine",
    "Swain": "TFT16_Swain", "Neeko": "TFT16_Neeko", "Vi": "TFT16_Vi",
    "Miss Fortune": "TFT16_MissFortune", "Lucian & Senna": "TFT16_LucianSenna",
    "Tahm Kench": "TFT16_TahmKench", "Nautilus": "TFT16_Nautilus", "Fiddlesticks": "TFT16_Fiddlesticks",
    "Ornn": "TFT16_Ornn", "Taric": "TFT16_Taric", "Wukong": "TFT16_Wukong",
    "Vayne": "TFT16_Vayne", "Garen": "TFT16_Garen", "Kai'Sa": "TFT16_Kaisa",
    "Lux": "TFT16_Lux", "Poppy": "TFT16_Poppy", "Xin Zhao": "TFT16_XinZhao",
    "Jarvan IV": "TFT16_JarvanIV", "Sona": "TFT16_Sona", "Draven": "TFT16_Draven",
    "Gangplank": "TFT16_Gangplank", "Ambessa": "TFT16_Ambessa", "Loris": "TFT16_Loris",
    "Briar": "TFT16_Briar", "Diana": "TFT16_Diana", "Volibear": "TFT16_Volibear",
    "Kog'Maw": "TFT16_KogMaw", "Rek'Sai": "TFT16_RekSai", "Cho'Gath": "TFT16_Chogath",
    "Malzahar": "TFT16_Malzahar", "Baron Nashor": "TFT16_BaronNashor", "Bel'Veth": "TFT16_Belveth",
    "Rift Herald": "TFT16_RiftHerald", "Tryndamere": "TFT16_Tryndamere", "Ashe": "TFT16_Ashe",
    "Sejuani": "TFT16_Sejuani", "Kindred": "TFT16_Kindred", "Kalista": "TFT16_Kalista",
    "Thresh": "TFT16_Thresh", "Braum": "TFT16_Braum", "Viego": "TFT16_Viego",
    "Gwen": "TFT16_Gwen", "Yorick": "TFT16_Yorick", "Yunara": "TFT16_Yunara",
    "Lissandra": "TFT16_Lissandra", "Ryze": "TFT16_Ryze", "Kennen": "TFT16_Kennen",
    "Kobuko & Yuumi": "TFT16_KobukoYuumi", "Veigar": "TFT16_Veigar", "Fizz": "TFT16_Fizz",
    "Teemo": "TFT16_Teemo", "Rumble": "TFT16_Rumble", "Lulu": "TFT16_Lulu",
    "Sion": "TFT16_Sion", "Bard": "TFT16_Bard", "Aphelios": "TFT16_Aphelios",
    "Illaoi": "TFT16_Illaoi", "Shen": "TFT16_Shen", "Aatrox": "TFT16_Aatrox",
    "Sett": "TFT16_Sett", "Jhin": "TFT16_Jhin", "Zilean": "TFT16_Zilean",
    "Mel": "TFT16_Mel", "Yasuo": "TFT16_Yasuo", "Yone": "TFT16_Yone",
    "Ahri": "TFT16_Ahri", "Sylas": "TFT16_Sylas", "Galio": "TFT16_Galio",
    "Warwick": "TFT16_Warwick", "Jinx": "TFT16_Jinx", "Dr. Mundo": "TFT16_DrMundo",
    "Nasus": "TFT16_Nasus", "Xerath": "TFT16_Xerath", "Graves": "TFT16_Graves",
    "Darius": "TFT16_Darius", "LeBlanc": "TFT16_Leblanc", "Singed": "TFT16_Singed",
    "Ekko": "TFT16_Ekko", "Blitzcrank": "TFT16_Blitzcrank", "Ziggs": "TFT16_Ziggs",
    "Aurelion Sol": "TFT16_AurelionSol", "Leona": "TFT16_Leona", "Zoe": "TFT16_Zoe",
    "Milio": "TFT16_Milio", "Nidalee": "TFT16_Nidalee", "Qiyana": "TFT16_Qiyana",
    "Skarner": "TFT16_Skarner", "Brock": "TFT16_Brock", "T-Hex": "TFT16_THex",
    "Caitlyn": "TFT16_Caitlyn", "Orianna": "TFT16_Orianna", "Twisted Fate": "TFT16_TwistedFate",
    "Tristana": "TFT16_Tristana", "Anivia": "TFT16_Anivia", "Lucian": "TFT16_Lucian"
};

// Complete TFT Item Database with real CDN URLs
const TFT_ITEMS = {
    // Component items
    "BF": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1038.png",
    "Rod": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1058.png",
    "Bow": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1043.png",
    "Tear": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3070.png",
    "Chain": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1031.png",
    "Belt": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1011.png",
    "Cloak": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/1057.png",
    "Glove": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3086.png",
    // Completed items (placeholder using components for now)
    "IE": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3031.png",
    "RFC": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3094.png",
    "GS": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3035.png",
    "DB": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/6676.png",
    "JG": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3089.png",
    "BB": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3102.png",
    "Shojin": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3161.png",
    "HoJ": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/8020.png",
    "GA": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3026.png",
    "Warmog": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3083.png",
    "DClaw": "https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3065.png"
};

// BIS (Best In Slot) items for carry champions
const CHAMPION_BIS = {
    "Azir": ["IE", "JG", "Shojin"],
    "Renekton": ["GA", "Warmog", "DClaw"],
    "Draven": ["IE", "GS", "RFC"],
    "Diana": ["JG", "BB", "Shojin"],
    "Miss Fortune": ["IE", "GS", "RFC"],
    "Vayne": ["RFC", "GS", "IE"],
    "Kai'Sa": ["JG", "BB", "Shojin"],
    "Bel'Veth": ["RFC", "GS", "HoJ"],
    "Briar": ["BF", "BF", "Belt"],
    "Viego": ["IE", "BF", "GS"]
};

// Local champion images for special units
const LOCAL_CHAMPIONS = {
    "Tibbers": "assets/champions/tibbers.png",
    "Baron Nashor": "assets/champions/baron.png",
    "Wukong": "assets/champions/wukong.png",
    "Lucian & Senna": "assets/champions/luciansenna.png",
    "Kai'Sa": "assets/champions/kaisa.png",
    "Loris": "assets/champions/loris.png",
    "Rift Herald": "assets/champions/herald.png",
    "Bel'Veth": "assets/champions/belveth.png",
    "Cho'Gath": "assets/champions/chogath.png",
    "Yunara": "assets/champions/yunara.png",
    "T-Hex": "assets/champions/thex.png",
    "Mel": "assets/champions/mel.png",
    "Kobuko & Yuumi": "assets/champions/kobukoyuumi.png",
    "LeBlanc": "assets/champions/leblanc.png",
};

// Get champion image URL with fallbacks
function getChampionImageUrl(championName) {
    // Check for local images first
    if (LOCAL_CHAMPIONS[championName]) {
        return LOCAL_CHAMPIONS[championName];
    }
    const champId = CHAMPION_IDS[championName] || ('TFT16_' + championName.replace(/[^a-zA-Z]/g, ''));
    return `https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/${champId.toLowerCase()}.tft_set16.png`;
}

// Fallback to regular LoL champion icon or local
function getChampionIconUrl(championName) {
    // Check for local images first
    if (LOCAL_CHAMPIONS[championName]) {
        return LOCAL_CHAMPIONS[championName];
    }
    const cleanName = championName.replace(/[^a-zA-Z]/g, '');
    return `https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${cleanName}.png`;
};

// Unit helper - creates unit with stars
function u(name, stars = 2) {
    return { name, stars };
}

const compositions = [
    // ========== S-TIER ==========
    {
        id: 1, name: "Shurima Azir Renekton", tier: "S", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 3.38, pickRate: 0.09, winRate: 20.5, top4Rate: 71.9,
        units: [u("Azir", 2), u("Renekton", 2), u("Tibbers", 2), u("Shyvana", 2), u("Annie", 2), u("Seraphine", 2), u("Swain", 2), u("Neeko", 2), u("Vi", 2)]
    },
    {
        id: 2, name: "Bilgewater Miss Fortune Lucian & Senna", tier: "S", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 3.58, pickRate: 0.41, winRate: 25.6, top4Rate: 65.3,
        units: [u("Miss Fortune", 2), u("Lucian & Senna", 2), u("Tahm Kench", 2), u("Nautilus", 2), u("Fiddlesticks", 2), u("Ornn", 2), u("Shyvana", 2), u("Taric", 2), u("Wukong", 2)]
    },
    {
        id: 3, name: "Demacia Vayne Garen", tier: "S", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 3.80, pickRate: 0.09, winRate: 9.8, top4Rate: 66.7,
        units: [u("Vayne", 3), u("Garen", 3), u("Kai'Sa", 2), u("Lux", 2), u("Poppy", 3), u("Xin Zhao", 3), u("Jarvan IV", 3), u("Sona", 3)]
    },
    {
        id: 4, name: "Warden Draven", tier: "S", tag: "lvl 7", difficulty: "Medium",
        avgPlacement: 3.83, pickRate: 0.09, winRate: 12.8, top4Rate: 64.6,
        units: [u("Draven", 3), u("Gangplank", 2), u("Nautilus", 2), u("Ambessa", 2), u("Seraphine", 2), u("Loris", 2), u("Fiddlesticks", 2), u("Briar", 3)]
    },
    {
        id: 5, name: "Arcanist Diana", tier: "S", tag: "Fast 8", difficulty: "Medium",
        avgPlacement: 3.95, pickRate: 0.16, winRate: 14.6, top4Rate: 61.0,
        units: [u("Diana", 2), u("Swain", 2), u("Azir", 2), u("Shyvana", 2), u("Lucian & Senna", 2), u("Seraphine", 2), u("Taric", 2), u("Neeko", 2), u("Vi", 2)]
    },
    {
        id: 6, name: "Noxus Draven Gangplank", tier: "S", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 3.98, pickRate: 0.16, winRate: 12.8, top4Rate: 61.5,
        units: [u("Draven", 3), u("Gangplank", 2), u("Nautilus", 2), u("Ambessa", 2), u("Braum", 2), u("Swain", 2), u("Fiddlesticks", 2), u("Briar", 3)]
    },
    {
        id: 7, name: "Void Kai'Sa", tier: "S", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.04, pickRate: 0.45, winRate: 22.2, top4Rate: 56.5,
        units: [u("Kai'Sa", 2), u("Rift Herald", 2), u("Baron Nashor", 2), u("Bel'Veth", 2), u("Volibear", 2), u("Swain", 2), u("Malzahar", 2), u("Cho'Gath", 2), u("Rek'Sai", 2), u("Kog'Maw", 2)]
    },
    {
        id: 8, name: "Quickstriker Tryndamere", tier: "S", tag: "lvl 6", difficulty: "Medium",
        avgPlacement: 4.04, pickRate: 0.14, winRate: 10.9, top4Rate: 60.8,
        units: [u("Tryndamere", 3), u("Ashe", 3), u("Sejuani", 2), u("Swain", 2), u("Kindred", 2), u("Draven", 2), u("Neeko", 2), u("Briar", 3)]
    },
    {
        id: 9, name: "Shadow Isles Kalista", tier: "S", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.04, pickRate: 0.07, winRate: 11.2, top4Rate: 60.0,
        units: [u("Kalista", 2), u("Thresh", 2), u("Braum", 2), u("Viego", 3), u("Fiddlesticks", 2), u("Kindred", 2), u("Ornn", 2), u("Gwen", 2), u("Yorick", 3)]
    },
    {
        id: 10, name: "Quickstriker Yunara", tier: "S", tag: "Fast 8", difficulty: "Medium",
        avgPlacement: 4.16, pickRate: 0.32, winRate: 15.0, top4Rate: 56.6,
        units: [u("Yunara", 2), u("Wukong", 2), u("Lissandra", 2), u("Ryze", 2), u("Taric", 2), u("Kennen", 2), u("Kobuko & Yuumi", 2), u("Sejuani", 2), u("Ashe", 2)]
    },
    {
        id: 11, name: "Yordle Veigar", tier: "S", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.16, pickRate: 0.17, winRate: 16.1, top4Rate: 55.3,
        units: [u("Veigar", 3), u("Kennen", 3), u("Fizz", 2), u("Kobuko & Yuumi", 3), u("Poppy", 3), u("Teemo", 3), u("Lulu", 3), u("Rumble", 3)]
    },
    {
        id: 12, name: "Piltover Diana", tier: "S", tag: "Standard", difficulty: "Medium",
        avgPlacement: 4.17, pickRate: 0.25, winRate: 13.0, top4Rate: 56.7,
        units: [u("Diana", 2), u("Seraphine", 2), u("Swain", 2), u("Azir", 2), u("Lucian & Senna", 2), u("Shyvana", 2), u("Taric", 2), u("Neeko", 2), u("Vi", 2)]
    },
    {
        id: 13, name: "Freljord Lissandra", tier: "S", tag: "Fast 8", difficulty: "Easy",
        avgPlacement: 4.24, pickRate: 0.15, winRate: 11.9, top4Rate: 55.3,
        units: [u("Lissandra", 2), u("Braum", 2), u("Volibear", 2), u("Zilean", 2), u("Kobuko & Yuumi", 2), u("Sejuani", 2), u("Ashe", 2), u("Tryndamere", 2), u("Anivia", 2)]
    },
    // ========== A-TIER ==========
    {
        id: 14, name: "Bruiser Sion", tier: "A", tag: "lvl 8", difficulty: "Easy",
        avgPlacement: 4.26, pickRate: 0.20, winRate: 10.3, top4Rate: 55.9,
        units: [u("Sion", 3), u("Bard", 2), u("Aphelios", 2), u("Volibear", 2), u("Wukong", 2), u("Kobuko & Yuumi", 2), u("Illaoi", 3), u("Shen", 3)]
    },
    {
        id: 15, name: "Slayer Bel'Veth", tier: "A", tag: "Fast 8", difficulty: "Medium",
        avgPlacement: 4.27, pickRate: 0.11, winRate: 9.3, top4Rate: 55.6,
        units: [u("Bel'Veth", 2), u("Aatrox", 2), u("Swain", 2), u("Ambessa", 2), u("Fiddlesticks", 2), u("Shyvana", 2), u("Gangplank", 2), u("Cho'Gath", 2), u("Briar", 2)]
    },
    {
        id: 16, name: "Ionia Yunara Wukong", tier: "A", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.27, pickRate: 0.25, winRate: 13.2, top4Rate: 54.1,
        units: [u("Yunara", 2), u("Wukong", 2), u("Sett", 2), u("Kindred", 2), u("Ornn", 2), u("Kennen", 2), u("Xin Zhao", 2), u("Jhin", 2), u("Shen", 2)]
    },
    {
        id: 17, name: "Arcanist Annie Tibbers", tier: "A", tag: "Fast 8", difficulty: "Hard",
        avgPlacement: 4.31, pickRate: 0.56, winRate: 14.1, top4Rate: 54.4,
        units: [u("Annie", 2), u("Tibbers", 2), u("Sylas", 2), u("Sett", 2), u("Zilean", 2), u("Wukong", 2), u("Kennen", 2), u("Kobuko & Yuumi", 2), u("Sejuani", 2), u("Ashe", 2)]
    },
    {
        id: 18, name: "Void Kai'Sa Rift Herald", tier: "A", tag: "Fast 8", difficulty: "Medium",
        avgPlacement: 4.32, pickRate: 0.23, winRate: 14.3, top4Rate: 51.5,
        units: [u("Kai'Sa", 2), u("Rift Herald", 2), u("Bel'Veth", 2), u("Swain", 2), u("Volibear", 2), u("Malzahar", 2), u("Cho'Gath", 2), u("Rek'Sai", 2), u("Kog'Maw", 2)]
    },
    {
        id: 19, name: "Warden Kindred", tier: "A", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.35, pickRate: 0.24, winRate: 13.4, top4Rate: 53.0,
        units: [u("Kindred", 2), u("Braum", 2), u("Lucian & Senna", 2), u("Ornn", 2), u("Fiddlesticks", 2), u("Loris", 2), u("Sejuani", 2), u("Ashe", 2), u("Vi", 2)]
    },
    {
        id: 20, name: "Ionia Yasuo Yone", tier: "A", tag: "lvl 8", difficulty: "Easy",
        avgPlacement: 4.35, pickRate: 0.03, winRate: 9.5, top4Rate: 54.6,
        units: [u("Yasuo", 3), u("Yone", 2), u("Aatrox", 2), u("Wukong", 2), u("Sett", 2), u("Bel'Veth", 2), u("Aphelios", 2), u("Shen", 2)]
    },
    {
        id: 21, name: "Arcanist Annie", tier: "A", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.40, pickRate: 0.39, winRate: 13.2, top4Rate: 51.7,
        units: [u("Annie", 2), u("Tibbers", 2), u("Sylas", 2), u("Swain", 2), u("Fiddlesticks", 2), u("Shyvana", 2), u("Lux", 2), u("Taric", 2), u("Neeko", 2)]
    },
    {
        id: 22, name: "Arcanist Swain", tier: "A", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.43, pickRate: 0.30, winRate: 13.3, top4Rate: 50.7,
        units: [u("Swain", 2), u("Mel", 2), u("Lucian & Senna", 2), u("Shyvana", 2), u("Fiddlesticks", 2), u("Ambessa", 2), u("Seraphine", 2), u("Neeko", 2), u("Vi", 2)]
    },
    {
        id: 23, name: "Ionia Yasuo", tier: "A", tag: "lvl 8", difficulty: "Easy",
        avgPlacement: 4.44, pickRate: 0.06, winRate: 15.0, top4Rate: 50.8,
        units: [u("Yasuo", 2), u("Yunara", 2), u("Yone", 2), u("Wukong", 2), u("Ahri", 2), u("Kennen", 2), u("Xin Zhao", 2), u("Shen", 2)]
    },
    {
        id: 24, name: "Demacia Lux", tier: "A", tag: "Fast 8", difficulty: "Easy",
        avgPlacement: 4.47, pickRate: 0.16, winRate: 10.1, top4Rate: 51.3,
        units: [u("Lux", 2), u("Garen", 2), u("Swain", 2), u("Galio", 2), u("Zilean", 2), u("Poppy", 2), u("Xin Zhao", 2), u("Jarvan IV", 2), u("Sona", 2)]
    },
    // ========== B-TIER ==========
    {
        id: 25, name: "Quickstriker Warwick", tier: "B", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.54, pickRate: 0.05, winRate: 6.8, top4Rate: 50.7,
        units: [u("Warwick", 2), u("Braum", 2), u("Jinx", 2), u("Lucian & Senna", 2), u("Kindred", 2), u("Loris", 2), u("Sejuani", 2), u("Ashe", 2), u("Vi", 2)]
    },
    {
        id: 26, name: "Shadow Isles Kalista Thresh", tier: "B", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.54, pickRate: 0.04, winRate: 8.3, top4Rate: 49.8,
        units: [u("Kalista", 2), u("Thresh", 2), u("Gwen", 2), u("Loris", 2), u("Fiddlesticks", 2), u("Ornn", 2), u("Braum", 2), u("Seraphine", 2), u("Yorick", 2)]
    },
    {
        id: 27, name: "Noxus Ambessa", tier: "B", tag: "Fast 8", difficulty: "Hard",
        avgPlacement: 4.60, pickRate: 0.07, winRate: 9.5, top4Rate: 47.4,
        units: [u("Ambessa", 2), u("Mel", 2), u("Swain", 2), u("Azir", 2), u("Fiddlesticks", 2), u("Draven", 2), u("LeBlanc", 2), u("Sion", 2), u("Briar", 2)]
    },
    {
        id: 28, name: "Demacia Vayne", tier: "B", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 4.66, pickRate: 0.21, winRate: 6.8, top4Rate: 48.4,
        units: [u("Vayne", 3), u("Garen", 2), u("Lux", 2), u("Galio", 2), u("Poppy", 2), u("Xin Zhao", 3), u("Jarvan IV", 3), u("Sona", 3)]
    },
    {
        id: 29, name: "Shadow Isles Viego", tier: "B", tag: "lvl 5", difficulty: "Easy",
        avgPlacement: 4.67, pickRate: 0.10, winRate: 7.6, top4Rate: 47.8,
        units: [u("Viego", 3), u("Kalista", 2), u("Thresh", 2), u("Yorick", 3), u("Kindred", 2), u("Braum", 2), u("Gwen", 2), u("Loris", 2)]
    },
    {
        id: 30, name: "Shurima Azir", tier: "B", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.70, pickRate: 0.10, winRate: 12.0, top4Rate: 44.6,
        units: [u("Azir", 2), u("Nasus", 2), u("Tibbers", 2), u("Annie", 2), u("Shyvana", 2), u("Seraphine", 2), u("Swain", 2), u("Neeko", 2), u("Vi", 2)]
    },
    {
        id: 31, name: "Noxus Swain", tier: "B", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.71, pickRate: 0.05, winRate: 9.3, top4Rate: 44.5,
        units: [u("Swain", 2), u("Draven", 2), u("Ambessa", 2), u("Mel", 2), u("Fiddlesticks", 2), u("Kindred", 2), u("Darius", 2), u("Sion", 2), u("Briar", 2)]
    },
    // ========== C-TIER ==========
    {
        id: 32, name: "Piltover T-Hex Braum", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.75, pickRate: 0.05, winRate: 9.0, top4Rate: 44.8,
        units: [u("T-Hex", 2), u("Seraphine", 2), u("Braum", 2), u("Loris", 2), u("Azir", 2), u("Lucian & Senna", 2), u("Vi", 2), u("Caitlyn", 2)]
    },
    {
        id: 33, name: "Ionia Yunara", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.76, pickRate: 0.05, winRate: 9.8, top4Rate: 44.3,
        units: [u("Yunara", 2), u("Wukong", 2), u("Ahri", 2), u("Sett", 2), u("Kindred", 2), u("Kennen", 2), u("Xin Zhao", 2), u("Shen", 2)]
    },
    {
        id: 34, name: "Freljord Tryndamere", tier: "C", tag: "lvl 6", difficulty: "Medium",
        avgPlacement: 4.79, pickRate: 0.04, winRate: 8.4, top4Rate: 45.0,
        units: [u("Tryndamere", 3), u("Ashe", 3), u("Sejuani", 2), u("Braum", 2), u("Kindred", 2), u("Volibear", 2), u("Lissandra", 2), u("Anivia", 2)]
    },
    {
        id: 35, name: "Bilgewater Miss Fortune", tier: "C", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.80, pickRate: 0.14, winRate: 15.1, top4Rate: 42.5,
        units: [u("Miss Fortune", 2), u("Fizz", 2), u("Nautilus", 2), u("Tahm Kench", 2), u("Ornn", 2), u("Shyvana", 2), u("Gangplank", 2), u("Graves", 2), u("Illaoi", 2)]
    },
    {
        id: 36, name: "Targon Aurelion Sol", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.82, pickRate: 0.03, winRate: 9.2, top4Rate: 42.1,
        units: [u("Aurelion Sol", 2), u("Diana", 2), u("Taric", 2), u("Braum", 2), u("Ornn", 2), u("Lissandra", 2), u("Leona", 2), u("Zoe", 2), u("Anivia", 2)]
    },
    {
        id: 37, name: "Freljord Ashe", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.84, pickRate: 0.02, winRate: 8.5, top4Rate: 43.5,
        units: [u("Lissandra", 2), u("Ashe", 3), u("Braum", 2), u("Sejuani", 2), u("Ornn", 2), u("Volibear", 2), u("Tryndamere", 3), u("Anivia", 2)]
    },
    {
        id: 38, name: "Shadow Isles Kalista Thresh Warden", tier: "C", tag: "Fast 9", difficulty: "Hard",
        avgPlacement: 4.85, pickRate: 0.04, winRate: 6.2, top4Rate: 43.4,
        units: [u("Kalista", 2), u("Thresh", 2), u("Yorick", 2), u("Gwen", 2), u("Azir", 2), u("Fiddlesticks", 2), u("Kindred", 2), u("Ornn", 2), u("Viego", 2)]
    },
    {
        id: 39, name: "Targon Taric", tier: "C", tag: "Fast 9", difficulty: "Easy",
        avgPlacement: 4.85, pickRate: 0.06, winRate: 10.5, top4Rate: 42.4,
        units: [u("Taric", 2), u("Lucian & Senna", 2), u("Azir", 2), u("Kindred", 2), u("Fiddlesticks", 2), u("Shyvana", 2), u("Seraphine", 2), u("Swain", 2), u("Vi", 2)]
    },
    {
        id: 40, name: "Targon Aurelion Sol Diana", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.91, pickRate: 0.13, winRate: 10.8, top4Rate: 40.6,
        units: [u("Aurelion Sol", 2), u("Diana", 2), u("Taric", 2), u("Leona", 2), u("Tibbers", 2), u("Annie", 2), u("Zoe", 2), u("Aphelios", 2)]
    },
    {
        id: 41, name: "Arcanist Ahri Milio", tier: "C", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 4.92, pickRate: 0.01, winRate: 8.1, top4Rate: 42.3,
        units: [u("Ahri", 3), u("Milio", 3), u("Skarner", 2), u("Kennen", 2), u("Taric", 2), u("Wukong", 2), u("Kobuko & Yuumi", 2), u("Neeko", 2)]
    },
    {
        id: 42, name: "Zaun Warwick", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.94, pickRate: 0.04, winRate: 2.9, top4Rate: 42.4,
        units: [u("Warwick", 2), u("Singed", 2), u("Dr. Mundo", 2), u("Ziggs", 2), u("Kindred", 2), u("Seraphine", 2), u("Ekko", 2), u("Vi", 2), u("Blitzcrank", 2)]
    },
    {
        id: 43, name: "Freljord Yunara", tier: "C", tag: "Fast 8", difficulty: "Easy",
        avgPlacement: 4.95, pickRate: 0.08, winRate: 7.5, top4Rate: 41.3,
        units: [u("Yunara", 2), u("Braum", 2), u("Lissandra", 2), u("Ornn", 2), u("Sett", 2), u("Volibear", 2), u("Ashe", 2), u("Xin Zhao", 2), u("Anivia", 2)]
    },
    {
        id: 44, name: "Zaun Ekko", tier: "C", tag: "lvl 6", difficulty: "Easy",
        avgPlacement: 4.97, pickRate: 0.02, winRate: 3.0, top4Rate: 42.1,
        units: [u("Ekko", 3), u("Cho'Gath", 3), u("Singed", 2), u("Seraphine", 2), u("Swain", 2), u("Neeko", 2), u("Vi", 2), u("Blitzcrank", 2)]
    },
    {
        id: 45, name: "Bruiser Sion Volibear", tier: "C", tag: "Standard", difficulty: "Easy",
        avgPlacement: 4.99, pickRate: 0.02, winRate: 6.5, top4Rate: 42.0,
        units: [u("Sion", 3), u("Volibear", 2), u("Wukong", 2), u("Dr. Mundo", 2), u("Zilean", 2), u("Lissandra", 2), u("Kobuko & Yuumi", 2), u("Anivia", 2), u("Shen", 2)]
    },
    // ========== D-TIER ==========
    {
        id: 46, name: "Zaun Jinx", tier: "D", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 5.01, pickRate: 0.08, winRate: 2.7, top4Rate: 40.9,
        units: [u("Jinx", 3), u("Dr. Mundo", 2), u("Warwick", 2), u("Singed", 2), u("Lucian & Senna", 2), u("Ekko", 2), u("Vi", 2), u("Blitzcrank", 2)]
    },
    {
        id: 47, name: "Bilgewater Gangplank", tier: "D", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 5.04, pickRate: 0.15, winRate: 13.2, top4Rate: 38.4,
        units: [u("Gangplank", 3), u("Miss Fortune", 2), u("Nautilus", 2), u("Tahm Kench", 2), u("Fizz", 2), u("Graves", 3), u("Fiddlesticks", 2), u("Illaoi", 2)]
    },
    {
        id: 48, name: "Warden Miss Fortune", tier: "D", tag: "Standard", difficulty: "Easy",
        avgPlacement: 5.08, pickRate: 0.03, winRate: 9.9, top4Rate: 37.9,
        units: [u("T-Hex", 2), u("Miss Fortune", 2), u("Nautilus", 2), u("Lucian & Senna", 2), u("Ornn", 2), u("Shyvana", 2), u("Braum", 2), u("Loris", 2), u("Graves", 2)]
    },
    {
        id: 49, name: "Bruiser Sion Bard", tier: "D", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 5.08, pickRate: 0.04, winRate: 6.4, top4Rate: 39.4,
        units: [u("Sion", 3), u("Bard", 2), u("Volibear", 2), u("Wukong", 2), u("Kobuko & Yuumi", 2), u("Illaoi", 3), u("Shen", 2)]
    },
    {
        id: 50, name: "Disruptor Malzahar", tier: "D", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 5.10, pickRate: 0.01, winRate: 4.2, top4Rate: 39.3,
        units: [u("Malzahar", 3), u("Singed", 2), u("Rift Herald", 2), u("Seraphine", 2), u("Swain", 2), u("Dr. Mundo", 2), u("Neeko", 2), u("Vi", 2)]
    },
    {
        id: 51, name: "Noxus Draven", tier: "D", tag: "lvl 7", difficulty: "Easy",
        avgPlacement: 5.11, pickRate: 0.01, winRate: 4.6, top4Rate: 37.8,
        units: [u("Draven", 3), u("Darius", 3), u("Swain", 2), u("Ambessa", 2), u("LeBlanc", 2), u("Sejuani", 2), u("Sion", 2), u("Briar", 3)]
    },
    {
        id: 52, name: "Ionia Ahri", tier: "D", tag: "lvl 8", difficulty: "Easy",
        avgPlacement: 5.13, pickRate: 0.01, winRate: 8.4, top4Rate: 38.5,
        units: [u("Yasuo", 2), u("Ahri", 3), u("Yone", 2), u("Wukong", 2), u("Yunara", 2), u("Kennen", 2), u("Xin Zhao", 2), u("Shen", 2)]
    },
    {
        id: 53, name: "Vanquisher Gangplank", tier: "D", tag: "lvl 7", difficulty: "Hard",
        avgPlacement: 5.13, pickRate: 0.02, winRate: 8.2, top4Rate: 40.3,
        units: [u("Gangplank", 3), u("Nautilus", 2), u("Ambessa", 2), u("Fiddlesticks", 2), u("Lucian & Senna", 2), u("Shyvana", 2), u("Miss Fortune", 2), u("Swain", 2), u("Briar", 2)]
    },
    {
        id: 54, name: "Noxus Sion", tier: "D", tag: "lvl 8", difficulty: "Easy",
        avgPlacement: 5.18, pickRate: 0.03, winRate: 7.2, top4Rate: 36.1,
        units: [u("Sion", 3), u("Draven", 2), u("Ambessa", 2), u("Mel", 2), u("Swain", 2), u("Darius", 2), u("LeBlanc", 2), u("Briar", 2)]
    },
    {
        id: 55, name: "Invoker Lissandra", tier: "D", tag: "Fast 9", difficulty: "Easy",
        avgPlacement: 5.21, pickRate: 0.02, winRate: 7.5, top4Rate: 36.4,
        units: [u("Lissandra", 2), u("Taric", 2), u("Zilean", 2), u("Braum", 2), u("Ornn", 2), u("Volibear", 2), u("Kobuko & Yuumi", 2), u("Sejuani", 2), u("Anivia", 2)]
    },
    {
        id: 56, name: "Yordle Fizz", tier: "D", tag: "Fast 9", difficulty: "Easy",
        avgPlacement: 5.72, pickRate: 0.06, winRate: 6.5, top4Rate: 27.5,
        units: [u("Fizz", 2), u("Kennen", 2), u("Ziggs", 2), u("Kobuko & Yuumi", 2), u("Poppy", 2), u("Teemo", 2), u("Tristana", 2), u("Lulu", 2), u("Rumble", 2)]
    },
    {
        id: 57, name: "Noxus Sion LeBlanc", tier: "D", tag: "lvl 8", difficulty: "Easy",
        avgPlacement: 5.91, pickRate: 0.02, winRate: 3.1, top4Rate: 24.0,
        units: [u("Sion", 3), u("LeBlanc", 2), u("Draven", 2), u("Ambessa", 2), u("Swain", 2), u("Darius", 2), u("Briar", 2)]
    },
    {
        id: 58, name: "Freljord Sejuani", tier: "D", tag: "Standard", difficulty: "Easy",
        avgPlacement: 5.92, pickRate: 0.02, winRate: 2.5, top4Rate: 22.6,
        units: [u("Sejuani", 2), u("Lissandra", 2), u("Anivia", 2), u("Braum", 2), u("Volibear", 2), u("Yunara", 2), u("Ashe", 2), u("Tryndamere", 2)]
    },
    {
        id: 59, name: "Juggernaut Singed", tier: "D", tag: "Fast 8", difficulty: "Easy",
        avgPlacement: 5.94, pickRate: 0.01, winRate: 2.0, top4Rate: 22.6,
        units: [u("Singed", 2), u("Swain", 2), u("Shyvana", 2), u("Nautilus", 2), u("Cho'Gath", 2), u("Neeko", 2), u("Vi", 2), u("Blitzcrank", 2)]
    },
    {
        id: 60, name: "Arcanist Ahri", tier: "D", tag: "Standard", difficulty: "Easy",
        avgPlacement: 5.99, pickRate: 0.01, winRate: 2.1, top4Rate: 21.2,
        units: [u("Ahri", 2), u("Swain", 2), u("Lux", 2), u("Garen", 2), u("Taric", 2), u("Neeko", 2), u("Kog'Maw", 2), u("Lulu", 2)]
    },
    {
        id: 61, name: "Void Malzahar", tier: "D", tag: "Standard", difficulty: "Easy",
        avgPlacement: 6.12, pickRate: 0.02, winRate: 2.7, top4Rate: 20.6,
        units: [u("Malzahar", 2), u("Bel'Veth", 2), u("Rift Herald", 2), u("Cho'Gath", 2), u("Kai'Sa", 2), u("Swain", 2), u("Rek'Sai", 2), u("Kog'Maw", 2)]
    },
    {
        id: 62, name: "Ixtal Milio", tier: "D", tag: "Standard", difficulty: "Medium",
        avgPlacement: 6.16, pickRate: 0.09, winRate: 7.3, top4Rate: 21.5,
        units: [u("Skarner", 2), u("Milio", 2), u("Neeko", 2), u("Braum", 2), u("Lissandra", 2), u("Nidalee", 2), u("Sejuani", 2), u("Qiyana", 2)]
    },
    {
        id: 63, name: "Ionia Jhin", tier: "D", tag: "lvl 5", difficulty: "Easy",
        avgPlacement: 6.40, pickRate: 0.01, winRate: 3.0, top4Rate: 18.6,
        units: [u("Jhin", 2), u("Shen", 2), u("Wukong", 2), u("Yasuo", 2), u("Yunara", 2), u("Ahri", 2), u("Kennen", 2), u("Xin Zhao", 2)]
    }
];

// ================================
// REST OF APP CODE BELOW
// ================================

// Initialize the UI
function initApp() {
    renderCompositions();
    initHexGrid();
    initTitlebar();

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderCompositions(e.target.value);
        });
    }

    // Set last update time
    const lastUpdate = document.getElementById('lastUpdate');
    if (lastUpdate) {
        const now = new Date();
        lastUpdate.textContent = now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
    }

    // Set comps analyzed count
    const compsAnalyzed = document.getElementById('compsAnalyzed');
    if (compsAnalyzed) {
        compsAnalyzed.textContent = '552,748';
    }
}

// Create composition row HTML
function createCompRow(comp) {
    const tierColors = {
        'S': '#c9aa58',
        'A': '#3fb97a',
        'B': '#4a90d9',
        'C': '#9f5dd9',
        'D': '#d94a4a'
    };

    const tierColor = tierColors[comp.tier] || '#6a6a6a';

    const unitsHtml = comp.units.map(unit => {
        const starText = unit.stars === 3 ? '★★★' : '★★';
        const starClass = unit.stars === 3 ? 'stars-3' : 'stars-2';
        return `<div class="unit-icon" title="${unit.name}">
            <div class="unit-img-wrapper">
                <img src="${getChampionImageUrl('TFT16_' + unit.name.replace(/[^a-zA-Z]/g, ''))}" 
                     alt="${unit.name}"
                     onerror="this.onerror=null; this.src='${getChampionIconUrl(unit.name)}'; this.onerror=function(){this.src=''; this.alt='${unit.name.substring(0, 2)}';}">
                <span class="unit-stars ${starClass}">${starText}</span>
            </div>
            <span class="unit-name">${unit.name}</span>
        </div>`;
    }).join('');

    // Generate hex board positions (4 rows x 7 columns = 28 slots)
    const hexBoardHtml = createHexBoard(comp);

    // Items recommendations (placeholder - would come from data)
    const carryUnits = comp.units.slice(0, 3).map(u => u.name);

    return `
        <div class="comp-wrapper" data-id="${comp.id}">
            <div class="comp-row">
                <div class="comp-tier" style="background: ${tierColor}">${comp.tier}</div>
                <div class="comp-info">
                    <div class="comp-name">${comp.name}</div>
                    <div class="comp-tags">
                        <span class="comp-tag tag-${comp.tag.toLowerCase().replace(/\s+/g, '')}">${comp.tag}</span>
                        <span class="comp-tag tag-${comp.difficulty.toLowerCase()}">${comp.difficulty}</span>
                    </div>
                </div>
                <div class="comp-units">${unitsHtml}</div>
                <div class="comp-stats">
                    <div class="stat">
                        <span class="stat-value ${getAvgColor(comp.avgPlacement)}">${comp.avgPlacement.toFixed(2)}</span>
                        <span class="stat-label">AVG</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${comp.pickRate.toFixed(2)}</span>
                        <span class="stat-label">Pick Rate</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value ${getWinColor(comp.winRate)}">${comp.winRate.toFixed(1)}%</span>
                        <span class="stat-label">Win%</span>
                    </div>
                    <div class="stat stat-top4">
                        <span class="stat-value">${comp.top4Rate.toFixed(1)}%</span>
                        <span class="stat-label">Top 4</span>
                    </div>
                </div>
                <div class="comp-expand">▼</div>
            </div>
            <div class="comp-detail" style="display: none;">
                <div class="detail-tabs">
                    <button class="detail-tab active">Options & Quick Start</button>
                    <button class="detail-tab">Units & Items</button>
                    <button class="detail-tab">Traits & Stats</button>
                </div>
                <div class="detail-content">
                    <div class="detail-left">
                        <div class="stage-boards">
                            ${createStageBoardsHtml(comp)}
                        </div>
                    </div>
                    <div class="detail-right">
                        <div class="positioning-section">
                            <h4>Positioning</h4>
                            <div class="hex-board-large">${createHexBoardLarge(comp)}</div>
                        </div>
                        <div class="levelling-section">
                            <h4>Levelling: <span class="level-type">${comp.tag}</span></h4>
                            <div class="level-indicators">
                                ${createLevellingHtml(comp)}
                            </div>
                        </div>
                        <div class="carousel-section">
                            <h4>Carousel Priority</h4>
                            <div class="carousel-items">
                                ${createCarouselHtml()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create stage boards HTML (Lvl 4, 5, 6, 7)
function createStageBoardsHtml(comp) {
    const stages = [
        { level: 4, units: comp.units.slice(0, 4), winRate: 26.1 },
        { level: 5, units: comp.units.slice(0, 5), winRate: 32.0 },
        { level: 6, units: comp.units.slice(0, 6), winRate: 36.5 },
        { level: 7, units: comp.units.slice(0, 7), winRate: 33.7 }
    ];

    return stages.map(stage => `
        <div class="stage-board">
            <div class="stage-label">Lvl ${stage.level}</div>
            <div class="stage-units">
                ${stage.units.map(unit => `
                    <div class="stage-unit">
                        <img src="${getChampionImageUrl(unit.name)}" 
                             alt="${unit.name}"
                             class="unit-img"
                             onerror="this.onerror=null; this.src='${getChampionIconUrl(unit.name)}';">
                        <span class="unit-label">${unit.name.length > 7 ? unit.name.substring(0, 7) : unit.name}</span>
                    </div>
                `).join('')}
            </div>
            <div class="stage-winrate">${stage.winRate.toFixed(1)}%<br><small>Round Win Rate</small></div>
        </div>
    `).join('');
}

// Create large hex board with proper TFT layout - MetaTFT style
function createHexBoardLarge(comp) {
    // 4 rows × 7 columns hex grid (like TFT board)
    const board = Array(28).fill(null);

    // Position units: backline at top (rows 0-1), frontline at bottom (rows 2-3)
    const backline = comp.units.slice(0, Math.ceil(comp.units.length / 2));
    const frontline = comp.units.slice(Math.ceil(comp.units.length / 2));

    // Place backline in rows 0-1 (positions 0-13)
    backline.forEach((unit, i) => {
        if (i < 7) board[i] = unit.name;
        else if (i < 14) board[7 + (i - 7)] = unit.name;
    });

    // Place frontline in rows 2-3 (positions 14-27)
    frontline.forEach((unit, i) => {
        if (i < 7) board[14 + i] = unit.name;
        else if (i < 14) board[21 + (i - 7)] = unit.name;
    });

    // Generate HTML with rows
    let html = '';
    for (let row = 0; row < 4; row++) {
        const isOdd = row % 2 === 1;
        html += `<div class="hex-row${isOdd ? ' odd' : ''}">`;

        for (let col = 0; col < 7; col++) {
            const idx = row * 7 + col;
            const unit = board[idx];

            if (unit) {
                html += `<div class="hex-cell filled" title="${unit}">
                    <img src="${getChampionImageUrl(unit)}" 
                         alt="${unit}"
                         onerror="this.onerror=null; this.src='${getChampionIconUrl(unit)}';">
                    <span class="hex-name">${unit.length > 6 ? unit.substring(0, 6) : unit}</span>
                </div>`;
            } else {
                html += `<div class="hex-cell"></div>`;
            }
        }

        html += '</div>';
    }

    return html;
}

// Create levelling guide HTML
function createLevellingHtml(comp) {
    const levels = [
        { lvl: 3, stage: '1-4', icon: '↑' },
        { lvl: 4, stage: '2-2', icon: '↑' },
        { lvl: 5, stage: '2-6', icon: '↑' },
        { lvl: 6, stage: '3-2', icon: '↑' },
        { lvl: 7, stage: '3-6', icon: '↑' },
        { lvl: 8, stage: '4-2', icon: '↑' }
    ];

    if (comp.tag.includes('9')) {
        levels.push({ lvl: 9, stage: '5-1', icon: '↑' });
    }

    return levels.map(l => `
        <div class="level-badge">
            <span class="lvl-num">Lvl ${l.lvl}</span>
            <span class="lvl-arrow">${l.icon}</span>
            <span class="lvl-stage">${l.stage}</span>
        </div>
    `).join('') + `
        <div class="level-stats">
            <span>🪙 6.0</span>
            <span>🔄 23.3</span>
        </div>
    `;
}

// Create carousel priority HTML with item icons
function createCarouselHtml() {
    const items = ['BF', 'Rod', 'Bow', 'Tear', 'Chain', 'Belt', 'Cloak', 'Glove'];
    return items.map(item => `
        <div class="carousel-item" title="${item}">
            <img src="${TFT_ITEMS[item]}" alt="${item}" onerror="this.style.display='none'; this.parentElement.innerHTML='${item.substring(0, 2)}';">
        </div>
    `).join('');
}

// Create hex board HTML
function createHexBoard(comp) {
    const positions = [];
    for (let i = 0; i < 28; i++) {
        positions.push(null);
    }

    // Place units in reasonable positions (back row for carries, front for tanks)
    const tanks = comp.units.filter((u, i) => i >= comp.units.length - 3);
    const carries = comp.units.filter((u, i) => i < comp.units.length - 3);

    // Place tanks in front (positions 0-6)
    tanks.forEach((unit, i) => {
        positions[i] = unit.name;
    });

    // Place carries in back (positions 21-27)
    carries.forEach((unit, i) => {
        if (21 + i < 28) positions[21 + i] = unit.name;
    });

    return positions.map((unit, i) => {
        if (unit) {
            return `<div class="hex-slot filled" title="${unit}">
                <img src="${getChampionImageUrl('TFT16_' + unit.replace(/[^a-zA-Z]/g, ''))}" alt="${unit}" 
                     onerror="this.textContent='${unit.substring(0, 2)}'">
            </div>`;
        }
        return `<div class="hex-slot"></div>`;
    }).join('');
}

// Color helper for AVG placement (lower is better)
function getAvgColor(avg) {
    if (avg <= 4.0) return 'stat-green';
    if (avg <= 4.5) return 'stat-yellow';
    if (avg <= 5.0) return 'stat-orange';
    return 'stat-red';
}

// Color helper for Win Rate (higher is better)
function getWinColor(rate) {
    if (rate >= 15) return 'stat-green';
    if (rate >= 10) return 'stat-yellow';
    if (rate >= 5) return 'stat-orange';
    return 'stat-red';
}

// Render all compositions
function renderCompositions(filter = '') {
    const list = document.getElementById('compsList');
    if (!list) return;

    const filtered = compositions.filter(c =>
        c.name.toLowerCase().includes(filter.toLowerCase()) ||
        c.tag.toLowerCase().includes(filter.toLowerCase()) ||
        c.tier.toLowerCase().includes(filter.toLowerCase()) ||
        c.units.some(u => u.name.toLowerCase().includes(filter.toLowerCase()))
    );

    list.innerHTML = filtered.map(comp => createCompRow(comp)).join('');

    // Add click handlers for expand/collapse
    list.querySelectorAll('.comp-wrapper').forEach(wrapper => {
        const row = wrapper.querySelector('.comp-row');
        const detail = wrapper.querySelector('.comp-detail');
        const expandBtn = wrapper.querySelector('.comp-expand');

        row.addEventListener('click', () => {
            const isExpanded = detail.style.display === 'block';

            // Collapse all other panels
            list.querySelectorAll('.comp-detail').forEach(d => {
                d.style.display = 'none';
            });
            list.querySelectorAll('.comp-expand').forEach(e => {
                e.textContent = '▼';
                e.classList.remove('expanded');
            });
            list.querySelectorAll('.comp-row').forEach(r => {
                r.classList.remove('selected');
            });

            // Toggle current panel
            if (!isExpanded) {
                detail.style.display = 'block';
                expandBtn.textContent = '▲';
                expandBtn.classList.add('expanded');
                row.classList.add('selected');
            }
        });
    });
}

// Select and display composition details
function selectComposition(comp, row) {
    // Update selection style
    document.querySelectorAll('.comp-row').forEach(r => r.classList.remove('selected'));
    row.classList.add('selected');

    // Update details panel
    const detailName = document.getElementById('detailName');
    const detailTag = document.getElementById('detailTag');
    const detailDesc = document.getElementById('detailDesc');
    const avgPlace = document.getElementById('avgPlace');
    const winRateDetail = document.getElementById('winRateDetail');
    const top4Detail = document.getElementById('top4Detail');
    const detailTier = document.getElementById('detailTier');
    const unitsGrid = document.getElementById('unitsGrid');

    if (detailName) detailName.textContent = comp.name;
    if (detailTag) {
        detailTag.textContent = `${comp.tag} • ${comp.difficulty}`;
    }
    if (detailDesc) detailDesc.textContent = `${comp.tier}-Tier composition`;
    if (avgPlace) avgPlace.textContent = comp.avgPlacement.toFixed(2);
    if (winRateDetail) winRateDetail.textContent = comp.winRate.toFixed(1) + '%';
    if (top4Detail) top4Detail.textContent = comp.top4Rate.toFixed(1) + '%';

    if (detailTier) {
        detailTier.textContent = comp.tier;
        detailTier.className = 'detail-tier tier-' + comp.tier.toLowerCase();
    }

    // Render unit cards
    if (unitsGrid) {
        unitsGrid.innerHTML = comp.units.map(unit => {
            const starText = unit.stars === 3 ? '★★★' : '★★';
            return `
                <div class="unit-card">
                    <div class="unit-card-icon">
                        <img src="${getChampionImageUrl('TFT16_' + unit.name.replace(/[^a-zA-Z]/g, ''))}" 
                             alt="${unit.name}"
                             onerror="this.onerror=null; this.src='${getChampionIconUrl(unit.name)}'; this.onerror=function(){this.style.display='none'; this.parentElement.textContent='${unit.name.substring(0, 2)}';}">
                    </div>
                    <div class="unit-card-name">${unit.name}</div>
                    <div class="unit-card-stars">${starText}</div>
                </div>
            `;
        }).join('');
    }

    updateHexGrid(comp);
}

// Initialize hex grid
function initHexGrid() {
    const grid = document.querySelector('.hex-grid');
    if (!grid) return;

    grid.innerHTML = '';
    for (let i = 0; i < 28; i++) {
        const slot = document.createElement('div');
        slot.className = 'hex-slot';
        grid.appendChild(slot);
    }
}

// Update hex grid with positioning
function updateHexGrid(comp) {
    const slots = document.querySelectorAll('.hex-slot');
    slots.forEach(slot => {
        slot.classList.remove('filled');
        slot.innerHTML = '';
        slot.title = '';
    });

    // Simple positioning - place units in bottom rows
    if (comp.units && comp.units.length > 0) {
        const positions = [21, 22, 23, 24, 25, 26, 27, 0, 1, 2, 3];
        comp.units.forEach((unit, i) => {
            if (positions[i] !== undefined && slots[positions[i]]) {
                slots[positions[i]].classList.add('filled');
                slots[positions[i]].innerHTML = `<img src="${getChampionImageUrl('TFT16_' + unit.name.replace(/[^a-zA-Z]/g, ''))}" 
                    alt="${unit.name}" 
                    style="width:100%;height:100%;object-fit:cover;border-radius:2px;"
                    onerror="this.style.display='none'; this.parentElement.textContent='${unit.name.substring(0, 2)}';">`;
                slots[positions[i]].title = unit.name;
            }
        });
    }
}

// Titlebar controls
function initTitlebar() {
    const minimizeBtn = document.getElementById('minimizeBtn');
    const maximizeBtn = document.getElementById('maximizeBtn');
    const closeBtn = document.getElementById('closeBtn');

    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            if (window.electronAPI) window.electronAPI.minimizeWindow();
        });
    }

    if (maximizeBtn) {
        maximizeBtn.addEventListener('click', () => {
            if (window.electronAPI) window.electronAPI.maximizeWindow();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (window.electronAPI) window.electronAPI.closeWindow();
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
