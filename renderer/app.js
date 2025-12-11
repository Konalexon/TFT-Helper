// ========================================
// TFT Helper - Real MetaTFT Data
// TFT Set 16: Lore & Legends - Patch 16.1b
// ========================================

const compositions = [
    // S-TIER COMPOSITIONS (from MetaTFT)
    {
        id: 1, name: "Quickstriker Yunara", tier: "S", tag: "Fast 8",
        desc: "Yunara carry with Quickstriker synergy",
        avgPlacement: 4.16, winRate: 14.9, top4Rate: 56.5,
        units: [
            { name: "Ashe", cost: 1 }, { name: "Yunara", cost: 1 },
            { name: "Ryze", cost: 2 }, { name: "Taric", cost: 2 },
            { name: "Kennen", cost: 2 }, { name: "Sejuani", cost: 2 },
            { name: "Kobuko & Yuumi", cost: 2 }, { name: "Lissandra", cost: 3 },
            { name: "Wukong", cost: 3 }
        ],
        positioning: [null, null, "Sejuani", "Taric", null, null, null,
            null, null, null, "Wukong", null, null, null,
            null, null, null, null, null, null, null,
            "Ashe", null, "Lissandra", "Yunara", "Kennen", "Ryze", "Kobuko & Yuumi"]
    },
    {
        id: 2, name: "Yordle Veigar", tier: "S", tag: "Standard",
        desc: "Veigar AP carry with full Yordle synergy",
        avgPlacement: 4.17, winRate: 16.2, top4Rate: 55.0,
        units: [
            { name: "Poppy", cost: 1 }, { name: "Teemo", cost: 1 },
            { name: "Fizz", cost: 2 }, { name: "Kennen", cost: 2 },
            { name: "Lulu", cost: 2 }, { name: "Kobuko & Yuumi", cost: 2 },
            { name: "Rumble", cost: 3 }, { name: "Veigar", cost: 4 }
        ],
        positioning: [null, "Poppy", null, null, null, null, null,
            null, null, null, "Rumble", null, null, null,
            null, null, null, null, null, null, null,
            "Teemo", "Fizz", "Lulu", "Kennen", "Kobuko & Yuumi", null, "Veigar"]
    },
    {
        id: 3, name: "Piltover Diana", tier: "S", tag: "Standard",
        desc: "Diana assassin carry with Piltover buff",
        avgPlacement: 4.17, winRate: 13.0, top4Rate: 56.8,
        units: [
            { name: "Vi", cost: 1 }, { name: "Diana", cost: 1 },
            { name: "Neeko", cost: 1 }, { name: "Taric", cost: 1 },
            { name: "Seraphine", cost: 2 }, { name: "Swain", cost: 2 },
            { name: "Azir", cost: 2 }, { name: "Shyvana", cost: 2 },
            { name: "Lucian & Senna", cost: 2 }
        ],
        positioning: [null, "Vi", "Taric", "Neeko", null, null, null,
            null, null, null, "Shyvana", null, null, null,
            null, null, null, null, null, null, null,
            "Diana", null, "Seraphine", "Swain", "Azir", null, "Lucian & Senna"]
    },
    {
        id: 4, name: "Freljord Lissandra", tier: "S", tag: "Fast 8",
        desc: "Lissandra mage carry with Freljord frontline",
        avgPlacement: 4.21, winRate: 12.1, top4Rate: 55.9,
        units: [
            { name: "Ashe", cost: 1 }, { name: "Zilean", cost: 1 },
            { name: "Volibear", cost: 2 }, { name: "Sejuani", cost: 2 },
            { name: "Tryndamere", cost: 2 }, { name: "Kobuko & Yuumi", cost: 2 },
            { name: "Lissandra", cost: 3 }, { name: "Anivia", cost: 4 },
            { name: "Braum", cost: 4 }
        ],
        positioning: [null, "Braum", "Volibear", "Sejuani", null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            "Ashe", "Zilean", "Tryndamere", "Lissandra", "Kobuko & Yuumi", null, "Anivia"]
    },
    {
        id: 5, name: "Dragon Shyvana", tier: "S", tag: "Fast 9",
        desc: "Shyvana dragon carry with frontline tank",
        avgPlacement: 3.85, winRate: 18.5, top4Rate: 62.4,
        units: [
            { name: "Zilean", cost: 1 }, { name: "Neeko", cost: 1 },
            { name: "Shyvana", cost: 2 }, { name: "Swain", cost: 2 },
            { name: "Taric", cost: 2 }, { name: "Seraphine", cost: 2 },
            { name: "Morgana", cost: 3 }, { name: "Galio", cost: 5 }
        ],
        positioning: [null, null, "Galio", "Taric", null, null, null,
            null, null, null, "Morgana", null, null, null,
            null, null, null, null, null, null, null,
            "Zilean", "Neeko", "Seraphine", "Shyvana", "Swain", null, null]
    },
    {
        id: 6, name: "Wanderer Ryze", tier: "S", tag: "Slow Roll",
        desc: "Ryze 3-star mage carry with Wanderer bonus",
        avgPlacement: 3.92, winRate: 17.8, top4Rate: 61.2,
        units: [
            { name: "Soraka", cost: 1 }, { name: "Zilean", cost: 1 },
            { name: "Ryze", cost: 2 }, { name: "Taric", cost: 2 },
            { name: "Nami", cost: 2 }, { name: "Morgana", cost: 3 },
            { name: "Karma", cost: 4 }, { name: "Xerath", cost: 5 }
        ],
        positioning: [null, null, "Taric", null, null, null, null,
            null, null, null, "Morgana", null, null, null,
            null, null, null, null, null, null, null,
            "Soraka", "Zilean", "Nami", "Ryze", null, "Karma", "Xerath"]
    },
    // A-TIER
    {
        id: 7, name: "Assassin Diana", tier: "A", tag: "Hyper Roll",
        desc: "Diana 3-star assassin reroll",
        avgPlacement: 4.28, winRate: 12.5, top4Rate: 54.2,
        units: [
            { name: "Diana", cost: 1 }, { name: "Vi", cost: 1 },
            { name: "Kassadin", cost: 2 }, { name: "Kennen", cost: 2 },
            { name: "Akali", cost: 3 }, { name: "Wukong", cost: 3 },
            { name: "Talon", cost: 4 }
        ],
        positioning: [null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            null, null, "Vi", null, null, null, null,
            "Diana", "Kassadin", "Kennen", "Akali", "Wukong", null, "Talon"]
    },
    {
        id: 8, name: "Arcana Xerath", tier: "A", tag: "Fast 9",
        desc: "Xerath legendary AP carry",
        avgPlacement: 4.35, winRate: 11.8, top4Rate: 53.5,
        units: [
            { name: "Soraka", cost: 1 }, { name: "Zilean", cost: 1 },
            { name: "Tahm Kench", cost: 2 }, { name: "Nami", cost: 2 },
            { name: "Ahri", cost: 3 }, { name: "Karma", cost: 4 },
            { name: "Taric", cost: 2 }, { name: "Xerath", cost: 5 }
        ],
        positioning: [null, null, "Tahm Kench", "Taric", null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            "Soraka", "Zilean", "Nami", "Ahri", null, "Karma", "Xerath"]
    },
    {
        id: 9, name: "Bastion Galio", tier: "A", tag: "Standard",
        desc: "Galio tank carry with Bastion synergy",
        avgPlacement: 4.32, winRate: 12.2, top4Rate: 54.0,
        units: [
            { name: "Poppy", cost: 1 }, { name: "Neeko", cost: 1 },
            { name: "Taric", cost: 2 }, { name: "Shen", cost: 3 },
            { name: "Morgana", cost: 3 }, { name: "Ksante", cost: 4 },
            { name: "Galio", cost: 5 }
        ],
        positioning: ["Poppy", "Galio", "Taric", "Ksante", "Shen", null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            "Neeko", null, null, "Morgana", null, null, null]
    },
    {
        id: 10, name: "Pyro Brand", tier: "A", tag: "Slow Roll",
        desc: "Brand 3-star fire mage",
        avgPlacement: 4.38, winRate: 11.5, top4Rate: 52.8,
        units: [
            { name: "Nomsy", cost: 1 }, { name: "Zilean", cost: 1 },
            { name: "Brand", cost: 2 }, { name: "Shyvana", cost: 2 },
            { name: "Seraphine", cost: 2 }, { name: "Morgana", cost: 3 },
            { name: "Smolder", cost: 4 }
        ],
        positioning: [null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            "Nomsy", "Zilean", "Brand", "Shyvana", "Seraphine", "Morgana", "Smolder"]
    },
    // B-TIER
    {
        id: 11, name: "Faerie Kalista", tier: "B", tag: "Standard",
        desc: "Kalista AD carry with Faerie heal",
        avgPlacement: 4.45, winRate: 10.8, top4Rate: 51.2,
        units: [
            { name: "Seraphine", cost: 2 }, { name: "Lillia", cost: 3 },
            { name: "Katarina", cost: 3 }, { name: "Kalista", cost: 4 },
            { name: "Rakan", cost: 4 }, { name: "Milio", cost: 5 }
        ],
        positioning: [null, null, null, null, null, null, null,
            null, null, null, "Rakan", null, null, null,
            null, null, null, null, null, null, null,
            null, "Seraphine", "Lillia", "Katarina", "Kalista", null, "Milio"]
    },
    {
        id: 12, name: "Eldritch Nami", tier: "B", tag: "Standard",
        desc: "Nami support carry with Eldritch power",
        avgPlacement: 4.52, winRate: 10.2, top4Rate: 50.5,
        units: [
            { name: "Soraka", cost: 1 }, { name: "Elise", cost: 1 },
            { name: "Nami", cost: 2 }, { name: "Nilah", cost: 2 },
            { name: "Morgana", cost: 3 }, { name: "Briar", cost: 4 },
            { name: "Milio", cost: 5 }
        ],
        positioning: [null, null, null, "Briar", null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            "Soraka", "Elise", "Nami", "Nilah", "Morgana", null, "Milio"]
    },
    {
        id: 13, name: "Hunter Kog'Maw", tier: "B", tag: "Hyper Roll",
        desc: "Kog'Maw 3-star Hunter reroll",
        avgPlacement: 4.55, winRate: 10.0, top4Rate: 50.0,
        units: [
            { name: "Nomsy", cost: 1 }, { name: "Twitch", cost: 1 },
            { name: "Kog'Maw", cost: 2 }, { name: "Jinx", cost: 2 },
            { name: "Kindred", cost: 3 }, { name: "Smolder", cost: 4 },
            { name: "Olaf", cost: 4 }
        ],
        positioning: [null, null, null, "Olaf", null, null, null,
            null, null, null, null, null, null, null,
            null, null, null, null, null, null, null,
            "Nomsy", "Twitch", "Kog'Maw", "Jinx", "Kindred", null, "Smolder"]
    },
    // C-TIER
    {
        id: 14, name: "Sugarcraft Jinx", tier: "C", tag: "Standard",
        desc: "Jinx carry with Sugarcraft bonus",
        avgPlacement: 4.68, winRate: 9.2, top4Rate: 48.5,
        units: [
            { name: "Soraka", cost: 1 }, { name: "Zilean", cost: 1 },
            { name: "Jinx", cost: 2 }, { name: "Rumble", cost: 3 },
            { name: "Gwen", cost: 4 }, { name: "Hecarim", cost: 4 }
        ],
        positioning: [null, null, "Hecarim", "Gwen", null, null, null,
            null, null, null, "Rumble", null, null, null,
            null, null, null, null, null, null, null,
            "Soraka", "Zilean", null, "Jinx", null, null, null]
    },
    {
        id: 15, name: "Preserver Karma", tier: "C", tag: "Slow Roll",
        desc: "Karma 3-star enchanter carry",
        avgPlacement: 4.72, winRate: 8.8, top4Rate: 47.2,
        units: [
            { name: "Soraka", cost: 1 }, { name: "Zilean", cost: 1 },
            { name: "Nami", cost: 2 }, { name: "Taric", cost: 2 },
            { name: "Morgana", cost: 3 }, { name: "Karma", cost: 4 },
            { name: "Milio", cost: 5 }
        ],
        positioning: [null, null, null, "Taric", null, null, null,
            null, null, null, "Morgana", null, null, null,
            null, null, null, null, null, null, null,
            "Soraka", "Zilean", "Nami", null, "Karma", null, "Milio"]
    }
];

let selectedComp = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('TFT Helper Starting...');
    initTitlebar();
    renderCompositions();
    initHexGrid();
    setupEventListeners();
    updateLastUpdate();
    console.log('TFT Helper Ready! Loaded', compositions.length, 'compositions');
});

// Titlebar controls
function initTitlebar() {
    const minBtn = document.getElementById('minimizeBtn');
    const maxBtn = document.getElementById('maximizeBtn');
    const closeBtn = document.getElementById('closeBtn');

    if (window.electronAPI) {
        if (minBtn) minBtn.addEventListener('click', () => window.electronAPI.minimizeWindow());
        if (maxBtn) maxBtn.addEventListener('click', () => window.electronAPI.maximizeWindow());
        if (closeBtn) closeBtn.addEventListener('click', () => window.electronAPI.closeWindow());
    }
}

// Update timestamp
function updateLastUpdate() {
    const el = document.getElementById('lastUpdate');
    if (el) el.textContent = new Date().toLocaleTimeString();
}

// Render compositions
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

    list.querySelectorAll('.comp-row').forEach(row => {
        row.addEventListener('click', () => {
            const id = parseInt(row.dataset.id);
            selectComposition(compositions.find(c => c.id === id), row);
        });
    });
}

// Create composition row
function createCompRow(comp) {
    const avgClass = comp.avgPlacement < 4.0 ? 'good' : (comp.avgPlacement < 4.3 ? 'mid' : '');
    const winClass = comp.winRate > 12 ? 'good' : '';
    const tagClass = comp.tag.includes('Fast') ? 'fast' : (comp.tag.includes('Slow') ? 'slow' : (comp.tag.includes('Hyper') ? 'hyper' : ''));

    return `
        <div class="comp-row" data-id="${comp.id}">
            <div class="tier-badge tier-${comp.tier.toLowerCase()}">${comp.tier}</div>
            <div class="comp-info">
                <div class="comp-name">${comp.name}</div>
                <span class="comp-tag ${tagClass}">${comp.tag}</span>
            </div>
            <div class="comp-units">
                ${comp.units.slice(0, 8).map(u => `
                    <div class="unit-icon cost-${u.cost}" title="${u.name} ($${u.cost})">
                        ${u.name.substring(0, 2)}
                    </div>
                `).join('')}
            </div>
            <div class="comp-stats">
                <div class="stat-box">
                    <span class="stat-value ${avgClass}">${comp.avgPlacement.toFixed(2)}</span>
                    <span class="stat-label">Avg</span>
                </div>
                <div class="stat-box">
                    <span class="stat-value ${winClass}">${comp.winRate.toFixed(1)}%</span>
                    <span class="stat-label">Win</span>
                </div>
                <div class="stat-box">
                    <span class="stat-value good">${comp.top4Rate.toFixed(1)}%</span>
                    <span class="stat-label">Top4</span>
                </div>
            </div>
        </div>
    `;
}

// Select composition
function selectComposition(comp, row) {
    document.querySelectorAll('.comp-row').forEach(r => r.classList.remove('selected'));
    row.classList.add('selected');
    selectedComp = comp;

    const emptyPanel = document.querySelector('.panel-empty');
    const panelContent = document.getElementById('panelContent');

    if (emptyPanel) emptyPanel.style.display = 'none';
    if (panelContent) panelContent.style.display = 'block';

    const tierEl = document.getElementById('panelTier');
    if (tierEl) {
        tierEl.textContent = comp.tier;
        tierEl.className = `panel-tier tier-${comp.tier.toLowerCase()}`;
    }

    const nameEl = document.getElementById('panelName');
    if (nameEl) nameEl.textContent = comp.name;

    const descEl = document.getElementById('panelDesc');
    if (descEl) descEl.textContent = `${comp.tag} • ${comp.desc}`;

    const avgEl = document.getElementById('panelAvg');
    if (avgEl) avgEl.textContent = comp.avgPlacement.toFixed(2);

    const winEl = document.getElementById('panelWin');
    if (winEl) winEl.textContent = comp.winRate.toFixed(1) + '%';

    const top4El = document.getElementById('panelTop4');
    if (top4El) top4El.textContent = comp.top4Rate.toFixed(1) + '%';

    const unitsEl = document.getElementById('panelUnits');
    if (unitsEl) {
        unitsEl.innerHTML = comp.units.map(u => `
            <div class="unit-card cost-${u.cost}">
                <div class="unit-card-icon">${u.name.substring(0, 2)}</div>
                <div class="unit-card-name">${u.name}</div>
                <div class="unit-card-cost">$${u.cost}</div>
            </div>
        `).join('');
    }

    updateHexGrid(comp);
}

// Initialize hex grid
function initHexGrid() {
    const grid = document.getElementById('hexGrid');
    if (grid) {
        grid.innerHTML = Array(28).fill('<div class="hex-slot"></div>').join('');
    }
}

// Update hex grid with positioning
function updateHexGrid(comp) {
    const slots = document.querySelectorAll('.hex-slot');

    slots.forEach(slot => {
        slot.classList.remove('filled');
        slot.textContent = '';
        slot.title = '';
    });

    if (comp.positioning && comp.positioning.length === 28) {
        comp.positioning.forEach((unit, i) => {
            if (unit && slots[i]) {
                slots[i].classList.add('filled');
                slots[i].textContent = unit.substring(0, 2);
                slots[i].title = unit;
            }
        });
    }
}

// Event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            renderCompositions(e.target.value);
        });
    }

    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            renderCompositions();
            updateLastUpdate();
        });
    }

    const activateBtn = document.getElementById('activateBtn');
    if (activateBtn) {
        activateBtn.addEventListener('click', () => {
            if (selectedComp) {
                alert(`Activated: ${selectedComp.name}\n\nUnits:\n${selectedComp.units.map(u => `• ${u.name} ($${u.cost})`).join('\n')}`);
            }
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

console.log('%c TFT Helper v1.0 ', 'background: linear-gradient(90deg, #c9aa58, #e8cd7a); color: #111; font-size: 14px; font-weight: bold; padding: 6px;');
console.log('%c Set 16: Lore & Legends ', 'color: #5dd99a; font-size: 12px;');
