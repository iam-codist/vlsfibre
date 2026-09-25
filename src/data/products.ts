import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'pp-frp-chemical-reaction-vessel',
    slug: 'pp-frp-chemical-reaction-vessel',
    name: 'PP-FRP Chemical Reaction Vessel',
    category: 'industrial-chemical',
    subCategory: 'Reaction & Agitation Systems',
    materialType: 'PP-FRP',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'Dual-laminate reaction vessel equipped with heavy-duty top drive agitator mounting and internal/limpet heating coils.',
    fullDesc: 'Engineered for aggressive synthesis and exothermic reactions in API, pharma, and agrochemical operations. Built with a virgin Polypropylene (PPH) thermoformed inner liner seamlessly bonded to an external filament-wound structural FRP matrix with Derakane 411/470 vinyl ester resin.',
    image: '/images/products/pp-frp-chemical-reaction-vessel-blue.jpeg',
    featured: true,
    specs: {
      tensileStrength: '145 - 190 MPa (Outer FRP)',
      temperatureRange: '-10°C to +110°C continuous',
      resinMatrix: 'Derakane 411-350 / 470 Vinyl Ester',
      wallThickness: 'Inner PP: 5-8 mm | Outer FRP: 12-28 mm',
      designStandards: ['IS 2825 (Unfired Pressure Vessels)', 'BS 4994:1987', 'ASME Section X', 'EN 13121'],
      chemicalResistance: ['Hydrochloric Acid (HCl 33%)', 'Sulfuric Acid (H2SO4 70%)', 'Sodium Hypochlorite', 'Chlorinated Solvents'],
      sparkTestVoltage: '15 kV - 20 kV Non-Destructive High Voltage Test',
      capacitiesAvailable: '500 Liters to 40,000 Liters (0.5 kL - 40 kL)'
    },
    applications: ['Active Pharmaceutical Ingredients (API)', 'Pesticides & Agrochemicals', 'Specialty Chemical Synthesis', 'Dye Intermediates'],
    features: [
      'Zero metal contact with reaction medium',
      'Dual-laminate spark tested 100% seam integrity',
      'Engineered vortex breaker and baffle assemblies',
      'Jacketed or half-pipe limpet coil for rapid thermal transfer',
      'Dynamically balanced shaft and impeller matching'
    ]
  },
  {
    id: 'pp-frp-packed-bed-scrubber',
    slug: 'pp-frp-packed-bed-scrubber',
    name: 'Dual Column Packed Bed Fume Scrubber',
    category: 'industrial-chemical',
    subCategory: 'Pollution Control & Scrubbing',
    materialType: 'PP-FRP',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'High-efficiency multi-stage gas absorption towers for toxic, acidic, and halogenated vapor abatement.',
    fullDesc: 'Designed to comply with stringent PCB / CPCB emission norms (below 5 mg/Nm³). Features multi-tier Pall Ring / Tellerette packing stages, non-clogging full-cone spray headers, chevron mist eliminators, and recirculation pump skids.',
    image: '/images/products/pp-frp-scrubber-packed-columns-towers.jpeg',
    featured: true,
    specs: {
      tensileStrength: '130 - 175 MPa',
      temperatureRange: 'Ambient up to 95°C',
      resinMatrix: 'Fire-Retardant Vinyl Ester (Derakane 510A)',
      wallThickness: '8 mm to 24 mm engineered load profile',
      designStandards: ['CPCB Guidelines / State PCB Norms', 'IS 10661', 'BS 4994:1987', 'ASTM D3299'],
      chemicalResistance: ['Chlorine (Cl2)', 'Hydrogen Chloride (HCl)', 'Sulfur Dioxide (SO2)', 'Nitric Acid Fumes (NOx)', 'Ammonia (NH3)'],
      sparkTestVoltage: '15 kV spark tested',
      capacitiesAvailable: '500 CFM to 65,000 CFM (850 to 110,000 m³/hr)'
    },
    applications: ['Chemical Processing Exhaust', 'Metal Pickling Lines', 'Pharma Cleanroom Venting', 'Electroplating Bath Emission Control'],
    features: [
      'Up to 99.8% removal efficiency for acidic vapors',
      'Integrated pH sensor wells & dosing automation ports',
      'Dual high-efficiency chevron type demister pads',
      'Inspection viewports with toughened borosilicate glass',
      'Complete turn-key skid integration with pump and blower'
    ]
  },
  {
    id: 'pp-frp-centrifugal-blower',
    slug: 'pp-frp-centrifugal-blower',
    name: 'High-Pressure PP-FRP Centrifugal Exhaust Blower',
    category: 'industrial-chemical',
    subCategory: 'Pollution Control & Scrubbing',
    materialType: 'PP-FRP',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'Aerodynamically profiled, statically and dynamically balanced blowers for aggressive chemical air movement.',
    fullDesc: 'Custom-moulded backward-curved and radial blade blowers fabricated in solid PP or PP-FRP. Ideal for continuous duty in corrosive atmospheres where metallic blowers corrode and fail within months.',
    image: '/images/products/pp-frp-centrifugal-exhaust-blower.jpeg',
    featured: true,
    specs: {
      tensileStrength: '120 - 160 MPa',
      temperatureRange: '-5°C to +85°C',
      resinMatrix: 'Premium Vinyl Ester with Graphite Anti-Static Additive (Optional)',
      wallThickness: 'Casing: 8-15 mm | Impeller: solid PP reinforced hub',
      designStandards: ['IS 4894 (Industrial Centrifugal Fans)', 'AMCA 210', 'BS 4994'],
      chemicalResistance: ['Wet Chlorine', 'Sulfuric Acid Mist', 'Caustic Aerosols', 'Organic Solvents'],
      sparkTestVoltage: '12 kV on dual-laminate housings',
      capacitiesAvailable: 'Static Pressure up to 650 mm WG | Flow: 500 to 50,000 CFM'
    },
    applications: ['Acid Pickling Exhausts', 'Fume Hood Extraction', 'Scrubber Draft Induction', 'Wastewater Odor Control'],
    features: [
      'Dynamically balanced to ISO 1940 Grade G2.5',
      'V-Belt driven or direct coupled with flameproof motors',
      'PTFE shaft lip seals preventing acid leakage to bearings',
      'Reinforced external structural steel base frame'
    ]
  },
  {
    id: 'frp-vertical-chemical-storage-tank',
    slug: 'frp-vertical-chemical-storage-tank',
    name: 'Heavy-Duty FRP Vertical Storage Tank',
    category: 'industrial-chemical',
    subCategory: 'Chemical Storage Tanks',
    materialType: 'Pure FRP/GRP',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'Filament-wound monolithic vertical storage tanks engineered for bulk hazardous acid and chemical storage.',
    fullDesc: 'Automated continuous helical filament winding technology delivers optimal hoop and axial tensile strength. Configured with flat bottom, conical, or dished top heads, anchor lugs, engineered lifting trunnions, and integral sight level indicators.',
    image: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg',
    featured: true,
    specs: {
      tensileStrength: '220 - 310 MPa (Filament Wound Hoop Direction)',
      temperatureRange: '-20°C to +105°C',
      resinMatrix: 'Isophthalic / Vinyl Ester C-Glass veil barrier',
      wallThickness: 'Engineered gradient: 8 mm top to 32 mm base knuckle',
      designStandards: ['IS 10661 (Chemical Storage Tanks)', 'IS 6746', 'BS 4994:1987', 'ASME RTP-1', 'ASTM D3299'],
      chemicalResistance: ['Hydrochloric Acid 33%', 'Sulfuric Acid up to 98%', 'Alum', 'Phosphoric Acid 85%', 'Ferric Chloride'],
      sparkTestVoltage: '100% Barcol Hardness & Resin Rich Veil Verification',
      capacitiesAvailable: '1,000 Liters to 120,000 Liters (1 kL - 120 kL)'
    },
    applications: ['Bulk Chemical Storage Farms', 'Water Treatment Plants (ETP / STP / RO)', 'Pulp & Paper Bleach Storage', 'Power Plant DM Water Systems'],
    features: [
      'Monolithic seamless winding eliminates vertical seam risk',
      'UV resistant gelcoat with 25+ year outdoor weatherability',
      'Engineered hold-down anchor clips calculated for seismic & wind loads',
      'Custom nozzle schedules (PN10 / PN16 / ANSI 150#)'
    ]
  },
  {
    id: 'pp-rectangular-pickling-tank',
    slug: 'pp-rectangular-pickling-tank',
    name: 'Heavy-Duty PP/FRP Pickling & Galvanizing Tank',
    category: 'industrial-chemical',
    subCategory: 'Pickling & Surface Treatment',
    materialType: 'PP-FRP',
    resinGrade: 'Isophthalic',
    shortDesc: 'Steel-reinforced PP-FRP rectangular dip tanks for continuous wire, pipe, and sheet hot-dip pickling.',
    fullDesc: 'Fabricated with ultra-thick Polypropylene homopolymer sheets butt-fusion welded, reinforced externally with structural square tube cages encased in hand lay-up FRP laminate. Engineered to resist heavy physical shock and concentrated hot hydrochloric or sulfuric acid baths.',
    image: '/images/products/pp-rectangular-pickling-tanks.jpeg',
    featured: false,
    specs: {
      tensileStrength: '110 - 150 MPa composite structure',
      temperatureRange: 'Ambient up to 85°C bath operating temperature',
      resinMatrix: 'Isophthalic polyester with chemical resistance veil',
      wallThickness: '12 mm to 30 mm PP sheet + 8 mm FRP encasement',
      designStandards: ['IS 10661', 'DVS 2205 (German Thermoplastic Vessel Standard)', 'BS 4994'],
      chemicalResistance: ['Hydrochloric Acid 15-20% at 60°C', 'Sulfuric Acid 10-18% at 75°C', 'Flux and Passivation Salts'],
      sparkTestVoltage: '15 kV high-voltage seam spark testing',
      capacitiesAvailable: 'Length up to 18 meters | Custom dimensions per batch crane cycle'
    },
    applications: ['Steel Tube Pickling', 'Continuous Wire Galvanizing', 'Coil & Rod Surface Cleaning', 'Automotive Electro-coating'],
    features: [
      'Encapsulated steel rib cage prevents deflection under hydrostatic head',
      'Heavy-duty rim lip protection against crane hook impacts',
      'Slope-bottom drains for fast sludge cleanout',
      'Integrated lip exhaust vapor capture manifolds'
    ]
  },
  {
    id: 'hdpe-spiral-acid-tanker',
    slug: 'hdpe-spiral-acid-tanker',
    name: 'HDPE Spiral Wound Road Transport Tanker',
    category: 'industrial-chemical',
    subCategory: 'Transportation & Logistics',
    materialType: 'HDPE Spiral',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'Seamless spiral-wound PE-100 high-density tanker for road transport of corrosive liquids.',
    fullDesc: 'Manufactured by automated extrusion spiral winding technology with zero longitudinal weld seams. Mounted with specialized anti-surge baffles, heavy-duty chassis saddle cradles, and acid-resistant spill containment enclosures.',
    image: '/images/products/hdpe-spiral-acid-tanker.jpeg',
    featured: true,
    specs: {
      tensileStrength: '25 - 32 MPa yield (High Ductility, Impact Resistant)',
      temperatureRange: '-30°C to +65°C',
      resinMatrix: 'Virgin PE-100 High Density Polyethylene',
      wallThickness: '25 mm to 45 mm solid profile',
      designStandards: ['PESO Regulations (Govt. of India)', 'Central Motor Vehicles Rules (CMVR)', 'IS 4984', 'EN 13575'],
      chemicalResistance: ['Commercial HCl (Hydrochloric)', 'Caustic Soda Lye 48%', 'Liquid Alum', 'Spent Acids'],
      sparkTestVoltage: 'Continuous weld ultrasonic & spark inspection',
      capacitiesAvailable: '10,000 Liters to 35,000 Liters (10 kL - 35 kL)'
    },
    applications: ['Bulk Acid Inter-Plant Road Transport', 'Chemical Logistics & Haulage', 'Waste Acid Collection'],
    features: [
      'Zero risk of inner liner debonding due to monolithic spiral construction',
      'Anti-surge internal HDPE baffles for high-speed road stability',
      'Corrosion-free exterior eliminating painting and repainting costs',
      'Lower tare weight compared to rubber-lined MS tankers (high fuel efficiency)'
    ]
  },
  {
    id: 'pvdf-jacketed-tank',
    slug: 'pvdf-jacketed-tank',
    name: 'PVDF-FRP Jacketed Thermal Reaction Vessel',
    category: 'industrial-chemical',
    subCategory: 'Reaction & Agitation Systems',
    materialType: 'PVDF-FRP',
    resinGrade: 'Epoxy Novolac',
    shortDesc: 'Ultra-pure, extreme chemical and thermal resistant vessel for high temperature halogenated processes.',
    fullDesc: 'Combines the exceptional inertness of Polyvinylidene Fluoride (PVDF) with high-strength Epoxy Novolac FRP outer structural shell. Features an outer heating/cooling jacket with internal baffles to ensure rapid temperature cycling up to 135°C.',
    image: '/images/products/pvdf-jacketed-tank.jpeg',
    featured: false,
    specs: {
      tensileStrength: '160 - 210 MPa outer composite',
      temperatureRange: '-20°C to +135°C',
      resinMatrix: 'Derakane 470 Epoxy Novolac Vinyl Ester',
      wallThickness: '3 mm - 4 mm fabric-backed PVDF + 14-22 mm FRP',
      designStandards: ['IS 2825', 'BS 4994:1987 Category I', 'ASME RTP-1'],
      chemicalResistance: ['Wet Halogens (Bromine, Chlorine)', 'Hot Nitric Acid', 'Chromic Acid', 'Chlorinated Organics'],
      sparkTestVoltage: '20 kV spark tested across entire PVDF weld matrix',
      capacitiesAvailable: '500 Liters to 20,000 Liters'
    },
    applications: ['Bromination Reactions', 'Chlor-Alkali Processing', 'High-Purity Pharma API Formulation', 'Nuclear Waste Reprocessing'],
    features: [
      'Synthetic knit-mesh fabric backing guarantees chemical bond to resin',
      'Thermal jacket rated for 3.5 bar steam / hot oil circulation',
      'Ultra-smooth mirror finish interior preventing batch contamination',
      'Complete thermal expansion relief geometry'
    ]
  },
  {
    id: 'ms-ptfe-teflon-lined-spool-pipes',
    slug: 'ms-ptfe-teflon-lined-spool-pipes',
    name: 'MS PTFE/Teflon Lined Spool Pipes & Manifolds',
    category: 'industrial-chemical',
    subCategory: 'Piping & Linings',
    materialType: 'MS-PTFE Lined',
    resinGrade: 'Bisphenol',
    shortDesc: 'Heavy carbon steel flanged spools paste-extruded with virgin PTFE liners for universal chemical service.',
    fullDesc: 'Engineered for high-pressure corrosive liquid piping networks. Seamless PTFE liners are flanged over the steel stub faces to provide an uninterrupted gasketless seal. Every piece undergoes full vacuum and dielectric testing.',
    image: '/images/products/ms-ptfe-teflon-lined-spool-pipes.jpeg',
    featured: false,
    specs: {
      tensileStrength: 'Steel Casing: 415 MPa | PTFE Liner: 28 MPa',
      temperatureRange: '-40°C to +230°C',
      resinMatrix: 'Virgin Dupont / Daikin PTFE Paste Extruded Liner',
      wallThickness: 'Liner: 3.5 mm - 6.0 mm | Steel: Sch 40 / Sch 80',
      designStandards: ['IS 4984 / IS 14885', 'ASTM F1545', 'ASME B16.5 Class 150 / 300#'],
      chemicalResistance: ['Universal pH 0 to 14', 'Aqua Regia', 'Hydrofluoric Acid (HF)', 'Thionyl Chloride'],
      sparkTestVoltage: '15 kV spark tested, 100% pinhole free',
      capacitiesAvailable: '25 mm (1") NB up to 300 mm (12") NB | Spools up to 3 meters'
    },
    applications: ['Acid Transfer Pipelines', 'Fine Chemical Manifolds', 'Hazardous Vent Lines', 'Corrosive Effluent Mains'],
    features: [
      'Vent hole plugs in steel pipe to prevent jacket pressure trap',
      'Full vacuum resistant design with locked-in liner technology',
      'Rotating floating backer flanges for effortless site bolt alignment',
      'Zero maintenance life cycle exceeding 15 years'
    ]
  },
  {
    id: 'ptfe-pfa-lined-valves',
    slug: 'ptfe-pfa-lined-valves',
    name: 'PTFE/PFA Lined Ball & Check Flow Valves',
    category: 'industrial-chemical',
    subCategory: 'Piping & Linings',
    materialType: 'MS-PTFE Lined',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'Ductile iron / carbon steel valves with injection-moulded PFA/PTFE lining for zero-leakage chemical isolation.',
    fullDesc: 'Precision engineered valves designed for throttling and isolation of highly toxic, corrosive, and permeating fluids. The injection-moulded PFA lining is mechanically locked into body anchor grooves to withstand thermal cycling and high vacuum.',
    image: '/images/products/ptfe-pfa-lined-ball-valves.jpeg',
    featured: false,
    specs: {
      tensileStrength: 'Body: GGG40.3 / ASTM A216 WCB | Liner: PFA',
      temperatureRange: '-30°C to +200°C',
      resinMatrix: 'PFA / High Purity Virgin Teflon',
      wallThickness: '3.5 mm to 5.0 mm dovetail locked liner',
      designStandards: ['IS 13095 / IS 14846', 'API 598', 'ISO 5211 Actuator Pad', 'BS EN 12266-1'],
      chemicalResistance: ['Concentrated Nitric Acid', 'Hydrofluoric Acid', 'Oleum', 'Wet Chlorine Gas'],
      sparkTestVoltage: '20 kV spark tested on 100% production run',
      capacitiesAvailable: 'DN15 (1/2") to DN200 (8") | Flange ANSI 150#'
    },
    applications: ['Reactor Bottom Drain Isolation', 'Acid Dosing Regulation', 'Corrosive Manifold Switching'],
    features: [
      'Self-adjusting chevron PTFE stem packing preventing fugitive emissions',
      'ISO 5211 mounting pad for electric and pneumatic actuators',
      'Blow-out proof stem design',
      'Bi-directional zero bubble-tight shutoff'
    ]
  },
  {
    id: 'pp-frp-nutsche-filter',
    slug: 'pp-frp-nutsche-filter',
    name: 'PP-FRP Agitated Nutsche Vacuum Filter',
    category: 'industrial-chemical',
    subCategory: 'Reaction & Agitation Systems',
    materialType: 'PP-FRP',
    resinGrade: 'Vinyl Ester (Derakane)',
    shortDesc: 'Solid-liquid vacuum separation filter with removable bottom grid for high value pharma slurry recovery.',
    fullDesc: 'Designed for batch solid-liquid separation under vacuum or positive nitrogen pressure. Features a slotted PP filter bottom bed, perforated support plate, hydraulic/manual cake discharge manway, and smooth wash liquid spray nozzles.',
    image: '/images/products/pp-frp-nutsche-filter-bottom-grid.jpeg',
    featured: false,
    specs: {
      tensileStrength: '135 - 180 MPa',
      temperatureRange: '-10°C to +95°C',
      resinMatrix: 'Vinyl Ester Derakane 411',
      wallThickness: 'Bottom Plate: 20 mm PP | Shell: 14 mm FRP',
      designStandards: ['IS 2825 (Unfired Vessels)', 'BS 4994', 'ASME Section VIII Div 1 rules adapted'],
      chemicalResistance: ['Acidic Cakes & Slurries', 'Brine', 'Solvents (MDC, Toluene, Acetone with appropriate liner)'],
      sparkTestVoltage: '15 kV test verified',
      capacitiesAvailable: 'Diameter 600 mm to 2,500 mm (Filtering area 0.28 to 5 m²)'
    },
    applications: ['Pharma API Cake Washing', 'Pigment Separation', 'Precipitated Salt Dewatering'],
    features: [
      'Quick opening clamped bottom for rapid cloth changeover',
      'Zero metal contact with product slurry',
      'Vacuum rated down to 720 mm Hg',
      'Sight glasses and CIP spray ball nozzles integrated'
    ]
  },
  {
    id: 'frp-motor-canopies-guards',
    slug: 'frp-motor-canopies-guards',
    name: 'Moulded FRP Motor Canopies & Pump Guards',
    category: 'custom-moulding',
    subCategory: 'Acoustic & Protective Enclosures',
    materialType: 'Pure FRP/GRP',
    resinGrade: 'Isophthalic',
    shortDesc: 'Aesthetic, heavy-duty UV-stabilized FRP protective guards and canopies for outdoor process plant motors and pumps.',
    fullDesc: 'Shields electric motors and chemical pumps from corrosive chemical splash, acid rain, and direct sunlight degradation. Features louvered ventilation slots for adequate motor airflow and stainless steel quick-release fasteners.',
    image: '/images/products/frp-motor-canopies-pump-guards.jpeg',
    featured: false,
    specs: {
      tensileStrength: '95 - 130 MPa',
      temperatureRange: '-20°C to +80°C',
      resinMatrix: 'Isophthalic polyester with UV stabilizers',
      wallThickness: '4.0 mm to 6.5 mm uniform moulding',
      designStandards: ['IS 13947 / IS/IEC 60529', 'IS 6746', 'IP 55 Protective Standard Compliant'],
      chemicalResistance: ['Atmospheric Acid Mists', 'Coastal Saline Air', 'Caustic Splash'],
      sparkTestVoltage: 'High-gloss gelcoat dielectric finish',
      capacitiesAvailable: 'Standard Frame Sizes 63 to 355M (0.25 kW to 315 kW)'
    },
    applications: ['Chemical Plant Pump Yards', 'Coastal Refineries', 'Fertilizer Slurry Units', 'Cooling Tower Fan Drives'],
    features: [
      'Eliminates motor burnout due to outdoor solar heat gain',
      'Lightweight design enables easy single-technician removal for maintenance',
      'Integral moulded mounting brackets',
      'Permanent safety yellow / blue pigmentation (no repainting needed)'
    ]
  },
  {
    id: 'frp-architectural-roofing-cladding',
    slug: 'frp-architectural-roofing-cladding',
    name: 'Industrial Corrugated FRP Roofing & Cladding Sheets',
    category: 'architectural',
    subCategory: 'Roofing & Building Panels',
    materialType: 'Pure FRP/GRP',
    resinGrade: 'Isophthalic',
    shortDesc: 'Shatter-proof, corrosion-immune translucent and opaque composite roofing panels for chemical factory sheds.',
    fullDesc: 'Traditional galvanized corrugated iron sheets rust and disintegrate within 1-2 years in chemical plant environments. VLS FRP roofing sheets are engineered with continuous roving strand reinforcement and DuPont Melinex 301 UV barrier films to provide 20+ years of maintenance-free service.',
    image: '/images/products/frp-vertical-storage-tank-crane-hoist.jpeg',
    featured: false,
    specs: {
      tensileStrength: '110 MPa cross-directional',
      temperatureRange: '-30°C to +90°C',
      resinMatrix: 'Light-Stabilized Isophthalic Resin with Class 1 Fire Retardant option',
      wallThickness: '1.5 mm, 2.0 mm, 2.5 mm, 3.0 mm',
      designStandards: ['IS 12866 (Translucent FRP Roofing Sheets)', 'ASTM D3841'],
      chemicalResistance: ['Acid Vapors', 'Sulfur Smoke', 'Coastal Saline Humidity', 'Industrial Smog'],
      sparkTestVoltage: 'High electrical insulation',
      capacitiesAvailable: 'Custom lengths up to 12 meters per sheet'
    },
    applications: ['Chemical Plant Shed Roofs', 'Pickling Shed Side Cladding', 'Port Warehouse Skylights', 'Paper Mill Ventilation Tops'],
    features: [
      'Up to 85% diffused natural daylight transmission without glare',
      'Never corrodes, rots, or requires anti-rust painting',
      'Matches all standard metal sheet profiles (Trapezoidal, Corrugated, Sinusoidal)',
      'High impact resistance against hailstone and fallen branch damage'
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'industrial-chemical',
    title: 'Industrial & Chemical Equipment',
    description: 'Reaction vessels, dual-laminate tanks, scrubbers, blowers, and acid-resistant piping.',
    count: '9 Flagship Systems'
  },
  {
    id: 'architectural',
    title: 'Architectural & Building Panels',
    description: 'Corrosion-proof roofing sheets, translucent skylights, structural cladding panels, and domes.',
    count: '4 Product Lines'
  },
  {
    id: 'custom-moulding',
    title: 'Custom Moulding & Transportation',
    description: 'Motor canopies, acoustic enclosures, acid road tankers, and bespoke industrial mouldings.',
    count: '5 Custom Solutions'
  }
];

export const CLIENT_SECTORS = [
  { name: 'Chlor-Alkali & Caustic Plants', logoText: 'CHLOR-ALKALI' },
  { name: 'Pharma & Active Pharmaceutical Ingredients', logoText: 'PHARMACEUTICALS' },
  { name: 'Steel Pickling & Galvanizing Mills', logoText: 'STEEL & PICKLING' },
  { name: 'Specialty & Agrochemical Synthesis', logoText: 'AGROCHEMICALS' },
  { name: 'Water & Industrial Wastewater (ETP/STP)', logoText: 'WATER TREATMENT' },
  { name: 'Pulp, Paper & Cellulose Processing', logoText: 'PULP & PAPER' },
  { name: 'Electroplating & Metal Finishing', logoText: 'SURFACE FINISHING' },
  { name: 'Dyes, Intermediates & Pigments', logoText: 'DYES & PIGMENTS' }
];

export const MATERIAL_COMPARISON = [
  {
    metric: 'Corrosion Resistance (Concentrated HCl/H2SO4)',
    frp: '100% Immune (No corrosion rate)',
    mildSteel: 'Severe corrosion (Rapid failure)',
    ss316: 'Susceptible to pitting & stress cracking',
    aluminum: 'Attacked aggressively',
    winner: 'frp'
  },
  {
    metric: 'Weight vs Strength Ratio',
    frp: 'Lightweight (1.8 g/cm³) - High tensile',
    mildSteel: 'Heavy (7.85 g/cm³) - High foundation cost',
    ss316: 'Heavy (8.0 g/cm³)',
    aluminum: 'Medium (2.7 g/cm³) - Lower strength',
    winner: 'frp'
  },
  {
    metric: 'Expected Service Lifespan in Acid Plants',
    frp: '25+ Years with Zero Maintenance',
    mildSteel: '2 - 4 Years (Requires rubber relining)',
    ss316: '4 - 7 Years in halide environments',
    aluminum: '1 - 3 Years',
    winner: 'frp'
  },
  {
    metric: 'Lifecycle Maintenance Cost',
    frp: 'Extremely Low (Zero repainting/cathodic anode)',
    mildSteel: 'Very High (Annual sandblasting & painting)',
    ss316: 'High (Passivation & weld treatment)',
    aluminum: 'Moderate',
    winner: 'frp'
  },
  {
    metric: 'Thermal Conductivity & Insulation',
    frp: 'Very Low (0.2 W/m·K - Energy saving)',
    mildSteel: 'High (50 W/m·K - Severe heat loss)',
    ss316: 'Moderate (16 W/m·K)',
    aluminum: 'Extremely High (205 W/m·K)',
    winner: 'frp'
  }
];
