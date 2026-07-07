// AMT Infra Solutions - Core JavaScript Application
// Official Contact Number for WhatsApp Integration
const WHATSAPP_NUMBER = "919159796186";
const WA_ICON_SVG = `<svg class="wa-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.996 0C5.372 0 0 5.373 0 11.998c0 2.118.556 4.186 1.611 6.002L.052 23.518l5.674-1.488C7.5 23.088 9.728 23.685 12 23.685c6.626 0 12-5.373 12-11.998C24 5.065 18.626 0 11.996 0zm6.983 17.15c-.296.837-1.472 1.523-2.4 1.62-.647.067-1.493-.153-3.87-1.144-2.855-1.187-4.707-4.088-4.85-4.281-.143-.194-1.159-1.543-1.159-2.94 0-1.398.73-2.086.99-2.373.26-.288.573-.36.764-.36.192 0 .382.002.548.01.176.008.411-.067.643.493.24.58.82 2.01.892 2.155.071.145.118.315.023.508-.095.192-.143.312-.285.478-.143.167-.3.373-.428.5-.143.144-.294.301-.125.592.17.291.753 1.242 1.612 2.007 1.106.985 2.036 1.29 2.323 1.433.287.144.455.12.624-.072.167-.193.716-.837.907-1.124.192-.288.382-.24.643-.145.26.096 1.65.779 1.936.923.287.144.478.216.548.336.071.12.071.697-.225 1.534z"/></svg>`;

// Complete Product Catalogue Database (14 Specialized Products)
const productsData = [
  {
    id: "rolling-shutters",
    title: "Rolling Shutters",
    category: "security",
    categoryLabel: "Industrial & Security",
    image: "assets/amt_rolling_shutter.png",
    badge: "Heavy Duty",
    description: "Motorized and manual heavy-duty steel rolling shutters designed for maximum industrial security, warehouse protection, and commercial storefronts.",
    features: ["Motorized & Manual Options", "Heavy-Gauge Steel Slats", "Wind Lock Guides", "Emergency Manual Override"],
    specs: [
      "Material: Galvanized Steel / Aluminum Slats",
      "Operation: Remote Control Motorized or Chain Pulley",
      "Wind Load Resistance: Up to 120 km/h",
      "Finish: Powder Coated in Custom RAL Colors",
      "Optional: Vision Panels & Perforated Slats"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <pattern id="grid1" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid1)" />
      <polygon points="40,40 140,20 175,35 75,55" fill="rgba(56,189,248,0.1)" stroke="#e5a93b" stroke-width="2"/>
      <polygon points="40,40 75,55 75,75 40,60" fill="rgba(56,189,248,0.15)" stroke="#e5a93b" stroke-width="2"/>
      <polygon points="75,55 175,35 175,55 75,75" fill="rgba(56,189,248,0.2)" stroke="#e5a93b" stroke-width="2"/>
      <polygon points="40,60 45,58 45,160 40,162" fill="rgba(255,255,255,0.1)" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="75,75 80,73 80,175 75,177" fill="rgba(255,255,255,0.15)" stroke="#94a3b8" stroke-width="1.5" />
      <polygon points="175,55 180,53 180,155 175,157" fill="rgba(255,255,255,0.15)" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="78" y1="85" x2="175" y2="65" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="78" y1="100" x2="175" y2="80" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="78" y1="115" x2="175" y2="95" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="78" y1="130" x2="175" y2="110" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="78" y1="145" x2="175" y2="125" stroke="#38bdf8" stroke-width="1.5"/>
      <line x1="78" y1="160" x2="175" y2="140" stroke="#38bdf8" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: "upvc-windows",
    title: "UPVC Doors & Windows",
    category: "windows",
    categoryLabel: "Windows & Power",
    image: "assets/amt_upvc_windows.png",
    badge: "Weather & Sound Proof",
    description: "Multi-chambered UPVC profiles offering superior thermal insulation, sound attenuation, and weatherproofing for modern architectural projects.",
    features: ["Acoustic Soundproofing", "UV & Weather Resistant", "Multi-Point Locking", "Zero Maintenance"],
    specs: [
      "Profile Type: 3, 4, and 5 Chamber UPVC Extrusions",
      "Glass Options: Double/Triple Glazed Toughened Glass",
      "Sound Insulation: Up to 40 dB reduction",
      "Thermal Insulation: U-value < 1.4 W/m²K",
      "Hardware: Heavy-duty stainless steel friction stays & locks"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#38bdf8" stroke-width="1.5">
      <rect x="30" y="30" width="140" height="140" rx="4" stroke="#e5a93b" stroke-width="3" fill="rgba(229,169,59,0.15)"/>
      <rect x="42" y="42" width="54" height="116" rx="2" stroke="#38bdf8" stroke-width="2" fill="rgba(56,189,248,0.1)"/>
      <rect x="104" y="42" width="54" height="116" rx="2" stroke="#38bdf8" stroke-width="2" fill="rgba(56,189,248,0.1)"/>
      <line x1="42" y1="100" x2="96" y2="100" stroke="#94a3b8" stroke-dasharray="4,4"/>
      <line x1="104" y1="100" x2="158" y2="100" stroke="#94a3b8" stroke-dasharray="4,4"/>
      <circle cx="90" cy="100" r="3" fill="#e5a93b"/>
      <circle cx="110" cy="100" r="3" fill="#e5a93b"/>
    </svg>`
  },
  {
    id: "fire-rated-doors",
    title: "Fire Rated Doors",
    category: "safety",
    categoryLabel: "Fire & Safety",
    image: "assets/amt_red_fire_door.png",
    badge: "60-120 Min Rated",
    description: "Certified fire-resistant steel doors built to withstand intense heat and prevent flame spread, equipped with panic bar hardware and intumescent seals.",
    features: ["UL / CBRI Certified", "Intumescent Smoke Seals", "Panic Exit Push Bar", "Heavy Duty Hydraulic Closer"],
    specs: [
      "Fire Rating: 60, 90, and 120 Minutes Endurance",
      "Sheet Thickness: 1.2mm - 1.6mm Galvanized Steel",
      "Core Material: Rockwool / Honeycomb Insulation",
      "Hardware: SS Panic Bar, Fire Rated Hinges & Door Closer",
      "Compliance: Meets IS 3614 Part 2 & BS 476 Part 22"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#ef4444" stroke-width="1.5">
      <rect x="50" y="20" width="100" height="160" rx="2" stroke="#e5a93b" stroke-width="3" fill="rgba(239,68,68,0.08)"/>
      <rect x="60" y="30" width="80" height="140" stroke="#ef4444" stroke-width="1.5"/>
      <rect x="70" y="90" width="60" height="12" rx="4" fill="#ef4444" stroke="#fff"/>
      <line x1="50" y1="50" x2="55" y2="50" stroke="#fff" stroke-width="4"/>
      <line x1="50" y1="150" x2="55" y2="150" stroke="#fff" stroke-width="4"/>
      <text x="82" y="70" fill="#e5a93b" font-size="10" font-family="sans-serif" font-weight="bold">FIRE 120M</text>
    </svg>`
  },
  {
    id: "clean-room-doors",
    title: "Clean Room Doors",
    category: "medical",
    categoryLabel: "Hospital OT & Leadline Doors",
    image: "assets/amt_cleanroom_door.png",
    badge: "Zero Contamination",
    description: "Hermetically sealed cleanroom doors featuring flush surfaces, zero dust retention ledges, and PUF insulation for pharmaceutical and biotech laboratories.",
    features: ["Hermetic Air Sealing", "Flush Double Glazed Viewport", "PUF / Honeycomb Core", "Corrosion Free Finish"],
    specs: [
      "Surface Finish: Powder Coated GPSP / SS 304 Grade",
      "Core Insulation: High Density PUF (40 kg/m³)",
      "Sealing: 4-side EPDM rubber gaskets with bottom drop seal",
      "Vision Panel: Flush double glazed toughened glass with silica gel",
      "Interlock Support: Compatible with electronic cleanroom interlocks"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#22c55e" stroke-width="1.5">
      <rect x="45" y="25" width="110" height="150" rx="6" stroke="#22c55e" stroke-width="2.5" fill="rgba(34,197,94,0.05)"/>
      <circle cx="100" cy="70" r="24" stroke="#38bdf8" stroke-width="2" fill="rgba(56,189,248,0.1)"/>
      <rect x="88" y="105" width="24" height="8" rx="4" fill="#e5a93b"/>
      <path d="M 45 175 L 155 175" stroke="#38bdf8" stroke-width="4"/>
    </svg>`
  },
  {
    id: "hospital-ot-doors",
    title: "Hospital OT Doors",
    category: "medical",
    categoryLabel: "Hospital OT & Leadline Doors",
    image: "assets/amt_hospital_ot.png",
    badge: "Surgical Grade",
    description: "Automatic sliding and swing operation theater doors with hands-free foot/elbow switches, X-ray radiation lead lining options, and antibacterial coatings.",
    features: ["Hands-Free Sensor Switch", "Hermetic Magnetic Sealing", "Optional Lead Shielding", "Antibacterial Surface"],
    specs: [
      "Operation: Automatic Sliding / Manual Swing",
      "Actuation: Touchless sensor, foot switch, or elbow push",
      "Radiation Protection: Optional 2mm - 3mm lead lining for X-Ray / CT rooms",
      "Safety: Microprocessor controller with obstacle safety sensor",
      "Track System: Heavy-duty aluminum track with silent nylon rollers"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#38bdf8" stroke-width="1.5">
      <rect x="30" y="30" width="140" height="140" rx="3" stroke="#e5a93b" stroke-width="2" fill="rgba(14,165,233,0.05)"/>
      <rect x="50" y="30" width="100" height="140" stroke="#38bdf8" stroke-width="2.5" fill="rgba(56,189,248,0.1)"/>
      <path d="M 90 70 L 110 70 M 100 60 L 100 80" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <rect x="155" y="90" width="10" height="20" rx="2" fill="#22c55e"/>
    </svg>`
  },
  {
    id: "stainless-steel-doors",
    title: "Stainless Steel Doors",
    category: "industrial",
    categoryLabel: "Industrial & Security",
    image: "assets/amt_ss_door.png",
    badge: "SS 304 / 316 Grade",
    description: "High-durability stainless steel doors built for chemical plants, food processing facilities, and high-moisture industrial environments.",
    features: ["100% Rust & Corrosion Free", "Hygienic Satin Finish", "Heavy Duty Construction", "Custom Louvers & Glass"],
    specs: [
      "Material Grade: AISI 304 / 316 Stainless Steel",
      "Finish: Matt Satin / Mirror Polish #4 finish",
      "Door Thickness: 45mm to 50mm",
      "Applications: Food processing, dairy plants, chemical laboratories",
      "Hardware: All SS 304 heavy-duty butt hinges & mortise locks"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#94a3b8" stroke-width="1.5">
      <rect x="45" y="25" width="110" height="150" rx="2" stroke="#cbd5e1" stroke-width="3" fill="rgba(148,163,184,0.1)"/>
      <line x1="45" y1="50" x2="155" y2="50" stroke="#64748b"/>
      <line x1="45" y1="150" x2="155" y2="150" stroke="#64748b"/>
      <circle cx="130" cy="100" r="6" stroke="#e5a93b" stroke-width="2"/>
    </svg>`
  },
  {
    id: "lead-lined-doors",
    title: "Lead Lined Doors",
    category: "medical",
    categoryLabel: "Hospital OT & Leadline Doors",
    image: "assets/amt_lead_door.png",
    badge: "Radiation Shielding",
    description: "Specialized lead-shielded doors designed for radiology departments, X-ray rooms, CT scan centers, and radiotherapy installations.",
    features: ["2mm - 4mm Lead Sheet Core", "Lead Glass Vision Panel", "Heavy Duty Pivot Hinges", "AERB Compliance Ready"],
    specs: [
      "Lead Equivalency: 1.5mm, 2.0mm, 3.0mm, or 4.0mm Pb",
      "Frame Construction: Heavy steel frame lined with lead sheeting",
      "Vision Panel: Lead glass window with matching radiation shielding",
      "Hinges: Special heavy-duty ball-bearing hinges to support high weight",
      "Testing: Certified shielding integrity against scatter radiation"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#e5a93b" stroke-width="1.5">
      <rect x="50" y="25" width="100" height="150" stroke="#e5a93b" stroke-width="3" fill="rgba(229,169,59,0.15)"/>
      <path d="M 85 60 L 115 60 L 100 85 Z" fill="#ef4444"/>
      <circle cx="100" cy="72" r="4" fill="#fff"/>
      <rect x="65" y="110" width="70" height="40" stroke="#38bdf8" stroke-dasharray="4,4"/>
    </svg>`
  },
  {
    id: "emergency-exit-doors",
    title: "Emergency Exit Doors",
    category: "safety",
    categoryLabel: "Fire & Safety",
    image: "assets/amt_emergency_exit_door.jpg",
    badge: "Instant Egress",
    description: "Life-safety egress doors equipped with full-width push panic hardware to ensure rapid, unhindered evacuation during emergencies.",
    features: ["Full Width Push Panic Bar", "External Trim Handle Option", "Fire & Smoke Resistant", "High Visibility Signage"],
    specs: [
      "Hardware: Single/Double point touch bar panic exit device",
      "Material: High tensile galvanized steel sheet",
      "Operation: Instant egress from inside, lockable key access outside",
      "Closer: Heavy duty hydraulic closer with backcheck",
      "Application: Fire stairs, auditoriums, manufacturing plants, malls"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#22c55e" stroke-width="1.5">
      <rect x="45" y="25" width="110" height="150" stroke="#22c55e" stroke-width="2.5" fill="rgba(34,197,94,0.08)"/>
      <rect x="60" y="95" width="80" height="14" rx="4" fill="#22c55e" stroke="#fff"/>
      <path d="M 90 60 L 110 60 M 105 55 L 110 60 L 105 65" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "acoustic-doors",
    title: "Acoustic Soundproof Doors",
    category: "industrial",
    categoryLabel: "Industrial & Security",
    image: "assets/amt_acoustic_door.png",
    badge: "STC 45-55 dB",
    description: "High-performance sound insulating doors engineered for recording studios, auditoriums, conference rooms, and noisy generator generator rooms.",
    features: ["STC Rating: 45 dB to 55 dB", "Automatic Bottom Drop Seal", "Multi-Layer Damping Core", "Acoustic Perimeter Gaskets"],
    specs: [
      "Sound Transmission Class: Certified STC 45, 50, and 55 dB",
      "Core Construction: Multi-composite acoustic damping matrix & bitumen sheet",
      "Sealing: Magnetic perimeter seals + mechanical automatic drop seal",
      "Frame: Heavy gauge steel frame filled with acoustic mineral wool",
      "Application: Studios, theaters, engine rooms, executive boardrooms"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#38bdf8" stroke-width="1.5">
      <rect x="45" y="25" width="110" height="150" rx="3" stroke="#38bdf8" stroke-width="2.5" fill="rgba(56,189,248,0.05)"/>
      <path d="M 65 50 Q 80 40 95 50 T 125 50" stroke="#e5a93b" stroke-width="2"/>
      <path d="M 65 80 Q 80 70 95 80 T 125 80" stroke="#e5a93b" stroke-width="2"/>
      <path d="M 65 110 Q 80 100 95 110 T 125 110" stroke="#e5a93b" stroke-width="2"/>
    </svg>`
  },
  {
    id: "double-leaf-doors",
    title: "Double Leaf Industrial Doors",
    category: "industrial",
    categoryLabel: "Industrial & Security",
    image: "assets/amt_double_leaf_door.png",
    badge: "Wide Opening",
    description: "Robust double-leaf steel doors designed for wide industrial equipment entry, warehouse loading docks, and transformer bays.",
    features: ["Equal & Unequal Leaf Splits", "Heavy Duty Flush Bolts", "Reinforced Hinges", "Wind & Weather Proof"],
    specs: [
      "Configuration: Equal leaves or Active/Inactive unequal leaf setup",
      "Dimensions: Available up to 4.0m width and 4.5m height",
      "Locking: Heavy-duty 3-point industrial cremone bolt lock",
      "Infill: Stiffened steel ribs with rockwool insulation",
      "Finish: Epoxy zinc phosphate primer + PU finish topcoat"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#e5a93b" stroke-width="1.5">
      <rect x="30" y="25" width="140" height="150" stroke="#e5a93b" stroke-width="3" fill="rgba(229,169,59,0.15)"/>
      <line x1="100" y1="25" x2="100" y2="175" stroke="#e5a93b" stroke-width="2"/>
      <circle cx="92" cy="100" r="3" fill="#38bdf8"/>
      <circle cx="108" cy="100" r="3" fill="#38bdf8"/>
    </svg>`
  },
  {
    id: "fully-glazed-doors",
    title: "Fully Glazed Commercial Doors",
    category: "windows",
    categoryLabel: "Windows & Power",
    image: "assets/amt_glazed_door.png",
    badge: "Panoramic View",
    description: "Sleek aluminum and stainless steel framed glass doors providing panoramic transparency, maximum natural light, and architectural elegance.",
    features: ["Toughened Safety Glass", "Slimline Architectural Frame", "Floor Spring Concealed Closer", "Custom Etching Options"],
    specs: [
      "Glass: 10mm / 12mm Toughened or Laminated Safety Glass",
      "Frame: Anodized / Powder Coated slimline aluminum profile",
      "Hardware: Heavy duty floor spring (80kg - 150kg capacity)",
      "Handles: Full-length SS H-type push/pull tubular handles",
      "Application: Corporate offices, retail showrooms, hotel lobbies"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#38bdf8" stroke-width="1.5">
      <rect x="45" y="25" width="110" height="150" stroke="#94a3b8" stroke-width="3" fill="rgba(56,189,248,0.15)"/>
      <line x1="45" y1="25" x2="155" y2="175" stroke="rgba(255,255,255,0.2)"/>
      <rect x="55" y="80" width="8" height="40" rx="4" fill="#e5a93b"/>
    </svg>`
  },
  {
    id: "industrial-safety-doors",
    title: "Industrial Safety & Blast Doors",
    category: "safety",
    categoryLabel: "Fire & Safety",
    image: "assets/amt_safety_door.png",
    badge: "Maximum Protection",
    description: "Reinforced steel security and blast-mitigating doors built to protect sensitive defense, petrochemical, and high-security industrial installations.",
    features: ["Blast Overpressure Resistant", "Heavy Armor Plate Steel", "Multi-Point Bank Vault Lock", "Anti-Tamper Hinges"],
    specs: [
      "Blast Resistance: Designed for 0.5 Bar to 2.0 Bar overpressure",
      "Construction: Structural steel tubes clad with heavy steel plates",
      "Locking: High security multi-point mechanical or motorized deadbolts",
      "Hinges: Precision machined heavy duty bearing hinges",
      "Application: Ammunition depots, chemical storage, refineries, vaults"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#ef4444" stroke-width="1.5">
      <rect x="40" y="25" width="120" height="150" rx="4" stroke="#ef4444" stroke-width="3.5" fill="rgba(239,68,68,0.1)"/>
      <line x1="40" y1="25" x2="160" y2="175" stroke="rgba(239,68,68,0.3)" stroke-width="2"/>
      <line x1="160" y1="25" x2="40" y2="175" stroke="rgba(239,68,68,0.3)" stroke-width="2"/>
      <circle cx="100" cy="100" r="16" stroke="#e5a93b" stroke-width="3" fill="#11214d"/>
    </svg>`
  },
  {
    id: "generator-sales-service",
    title: "Generator Sales & Service",
    category: "windows",
    categoryLabel: "Windows & Power",
    image: "assets/amt_generator.png",
    badge: "24/7 Power Backup",
    description: "Supply, installation, acoustic enclosure fabrication, and AMC maintenance services for commercial and industrial diesel generators.",
    features: ["Acoustic Canopy Enclosures", "Turnkey Installation & Wiring", "Annual Maintenance Contracts (AMC)", "Rapid Breakdown Support"],
    specs: [
      "Capacity Range: 15 kVA to 1000+ kVA Diesel Generators",
      "Enclosure: CPCB-II compliant silent acoustic canopy",
      "Services: Load bank testing, AMF panel installation, overhaul",
      "AMC Support: Scheduled preventive maintenance & 24/7 emergency visits",
      "Spares: Genuine filter kits, AVRs, controllers, and batteries"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#e5a93b" stroke-width="1.5">
      <rect x="30" y="60" width="140" height="90" rx="6" stroke="#e5a93b" stroke-width="3" fill="rgba(229,169,59,0.15)"/>
      <circle cx="70" cy="105" r="20" stroke="#38bdf8" stroke-width="2"/>
      <path d="M 120 90 L 135 105 L 120 120" stroke="#22c55e" stroke-width="3" stroke-linecap="round"/>
      <rect x="50" y="45" width="20" height="15" fill="#94a3b8"/>
    </svg>`
  },
  {
    id: "fire-extinguishers",
    title: "Fire Extinguishers & Systems",
    category: "safety",
    categoryLabel: "Fire & Safety",
    image: "assets/amt_fire_extinguisher.png",
    badge: "ISI Certified",
    description: "Complete range of portable and modular fire extinguishers (ABC Powder, CO2, Clean Agent, Foam) along with hydrostatic testing and refilling services.",
    features: ["ISI / CE Marked Cylinders", "ABC Powder, CO2 & Clean Agent", "Annual Refilling & Testing AMC", "Wall Mount brackets included"],
    specs: [
      "Types Available: ABC Dry Powder, CO2 Gas, Clean Agent (HFC-236fa), Foam",
      "Capacities: 2kg, 4kg, 6kg, 9kg portable; 25kg / 50kg trolley mounted",
      "Cylinder Material: Seamless manganese steel / high grade mild steel",
      "Services: Hydrostatic pressure testing, powder refilling, valve replacement",
      "Compliance: Conforms to IS 15683 standards"
    ],
    cadSvg: `<svg viewBox="0 0 200 200" fill="none" stroke="#ef4444" stroke-width="1.5">
      <rect x="75" y="50" width="50" height="110" rx="25" stroke="#ef4444" stroke-width="3" fill="rgba(239,68,68,0.15)"/>
      <rect x="90" y="30" width="20" height="20" fill="#94a3b8"/>
      <path d="M 110 40 Q 140 40 140 80" stroke="#e5a93b" stroke-width="3" fill="none"/>
      <rect x="85" y="80" width="30" height="40" fill="rgba(255,255,255,0.1)" stroke="#fff"/>
    </svg>`
  }
];

// App State
let currentCategory = "all";
let currentSearch = "";
let currentModalProduct = null;

// Initialize Application on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderCatalog();
  initFilters();
  initSearch();
  initModal();
  initWhatsAppWidget();
  initEstimator();
  initMobileMenu();
});

// Navbar Scroll Effect
function initNavbar() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Render Products Grid
function renderCatalog() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  
  const filtered = productsData.filter(p => {
    const matchCategory = currentCategory === "all" || p.category === currentCategory;
    const matchSearch = p.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        p.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
                        p.features.some(f => f.toLowerCase().includes(currentSearch.toLowerCase()));
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results text-center" style="grid-column: 1 / -1; padding: 60px 20px;">
        <h3 style="font-size: 1.5rem; color: var(--gold-light); margin-bottom: 12px;">No Solutions Found</h3>
        <p style="color: var(--text-secondary);">We couldn't find any products matching your filter criteria. Try searching for a different keyword or category.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const waUrl = getWhatsAppUrl(`Hi AMT Infra Solutions, I am interested in getting a quote and technical specifications for *${product.title}*. Please assist me.`);
    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${product.title}" class="product-img" onerror="this.src='assets/amt_logo_color.png'">
          <span class="product-badge">${product.badge}</span>
        </div>
        <div class="product-content">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-features">
            ${product.features.slice(0, 3).map(f => `<span class="feature-tag">${f}</span>`).join("")}
          </div>
          <div class="product-actions">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-quote">
              ${WA_ICON_SVG} <span>Get Quote via WhatsApp</span>
            </a>
            <button class="btn-card-view" onclick="openModal('${product.id}')">View Details</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Filter Tabs Logic
function initFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      renderCatalog();
    });
  });
}

// Search Bar Logic
function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderCatalog();
  });
}

// Modal & CAD Blueprint Viewer
function initModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  const tabPhoto = document.getElementById("tab-photo");
  const tabCad = document.getElementById("tab-cad");
  const photoView = document.getElementById("modal-photo-view");
  const cadView = document.getElementById("modal-cad-view");

  if (!overlay) return;

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeModal();
    }
  });

  tabPhoto.addEventListener("click", () => {
    tabPhoto.classList.add("active");
    tabCad.classList.remove("active");
    photoView.style.display = "block";
    cadView.style.display = "none";
  });

  tabCad.addEventListener("click", () => {
    tabCad.classList.add("active");
    tabPhoto.classList.remove("active");
    photoView.style.display = "none";
    cadView.style.display = "block";
  });
}

function openModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  currentModalProduct = product;

  const overlay = document.getElementById("modal-overlay");
  const categoryEl = document.getElementById("modal-category");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-desc");
  const specsList = document.getElementById("modal-specs-list");
  const imgEl = document.getElementById("modal-img");
  const cadContainer = document.getElementById("modal-cad-svg");
  const waBtn = document.getElementById("modal-wa-btn");

  categoryEl.textContent = product.categoryLabel;
  titleEl.textContent = product.title;
  descEl.textContent = product.description;
  imgEl.src = product.image;
  cadContainer.innerHTML = product.cadSvg;

  specsList.innerHTML = product.specs.map(spec => `<li>${spec}</li>`).join("");

  const waUrl = getWhatsAppUrl(`Hi AMT Infra Solutions, I am reviewing the technical specifications for *${product.title}* on your website and would like to request an official pricing quote and catalog pdf.`);
  waBtn.setAttribute("href", waUrl);

  // Reset to Photo View by default
  document.getElementById("tab-photo").click();
  
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// WhatsApp Helper Functions
function getWhatsAppUrl(text) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

// Floating WhatsApp Widget
function initWhatsAppWidget() {
  const floatBtn = document.getElementById("wa-float-btn");
  const popup = document.getElementById("wa-popup");
  const sendBtn = document.getElementById("wa-send-btn");
  const inputEl = document.getElementById("wa-input");

  if (!floatBtn || !popup) return;

  floatBtn.addEventListener("click", () => {
    popup.classList.toggle("active");
  });

  const sendMessage = () => {
    const text = inputEl.value.trim() || "Hello AMT Infra Solutions, I would like to inquire about your infrastructure products and services.";
    const url = getWhatsAppUrl(text);
    window.open(url, "_blank");
    inputEl.value = "";
    popup.classList.remove("active");
  };

  sendBtn.addEventListener("click", sendMessage);
  inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

// Cost Estimate Calculator
function initEstimator() {
  const typeSelect = document.getElementById("est-type");
  const qtyInput = document.getElementById("est-qty");
  const ratingSelect = document.getElementById("est-rating");
  const resultEl = document.getElementById("est-value");
  const waBtn = document.getElementById("est-wa-btn");

  if (!typeSelect || !qtyInput) return;

  const basePrices = {
    "rolling-shutter": 450, // per sq ft
    "upvc-window": 550,     // per sq ft
    "fire-door": 18000,     // per unit
    "cleanroom-door": 24000,// per unit
    "ss-door": 22000,       // per unit
    "acoustic-door": 35000, // per unit
    "generator": 450000     // per unit
  };

  const updateEstimate = () => {
    const type = typeSelect.value;
    const qty = parseFloat(qtyInput.value) || 1;
    const multiplier = parseFloat(ratingSelect.value) || 1.0;
    
    const base = basePrices[type] || 5000;
    const total = Math.round(base * qty * multiplier);
    
    // Format in INR
    const formatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total);
    resultEl.textContent = `${formatted}*`;

    const typeText = typeSelect.options[typeSelect.selectedIndex].text;
    const ratingText = ratingSelect.options[ratingSelect.selectedIndex].text;
    const waUrl = getWhatsAppUrl(`Hi AMT Infra Solutions, I used your website estimator and got an approximate estimate of *${formatted}* for:\n- Product: ${typeText}\n- Qty/Area: ${qty}\n- Specification: ${ratingText}\n\nPlease contact me with a customized formal quote.`);
    waBtn.setAttribute("href", waUrl);
  };

  typeSelect.addEventListener("change", updateEstimate);
  qtyInput.addEventListener("input", updateEstimate);
  ratingSelect.addEventListener("change", updateEstimate);

  // Initial calculation
  updateEstimate();
}

// Mobile Menu Navigation
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
  });

  // Close when clicking link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      toggleBtn.textContent = "☰";
    });
  });
}
