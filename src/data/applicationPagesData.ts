/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-ignore
import drillingBg from "../assets/images/drilling_rigs_split_1783610982614.jpg";
// @ts-ignore
import beverageBg from "../assets/images/beverage_bottling_plant_conveyor_1783611109275.jpg";
// @ts-ignore
import agricultureBg from "../assets/images/greenhouse_agriculture_cultivation_1783611464652.jpg";
// @ts-ignore
import coolingTowerBg from "../assets/images/cooling_tower_industrial_1783982968793.jpg";
// @ts-ignore
import refineryClearBg from "../assets/images/refinery_tanks_clear_1793814180788.jpg";

export interface ProConItem {
  title: string;
  description: string;
  tag?: string;
}

export interface ProsAndConsData {
  pros: ProConItem[];
  cons: ProConItem[];
}

export interface ApplicationPageData {
  slug: "drilling" | "food-beverage" | "agriculture" | "general-industrial" | "refineries" | "cooling-towers" | "wastewater";
  title: string;
  badge: string;
  heroHeadline: string;
  metaDescription: string;
  bgImage: string;
  accent: string;
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  prosAndCons: ProsAndConsData;
  technicalHighlights: {
    label: string;
    value: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const APPLICATION_PAGES: Record<string, ApplicationPageData> = {
  drilling: {
    slug: "drilling",
    title: "Drilling & Lithium Extraction",
    badge: "ONSHORE & OFFSHORE OILFIELD & MINERAL OPERATIONS",
    heroHeadline: "On-Site Alkaline Generation for Wellsite Mud Stabilization & Lithium Extraction",
    metaDescription: "Eliminate bulk liquid caustic logistics on remote rigs. Hydrology Systems produces high-purity NaOH (up to pH 12) on-demand for drilling mud, H2S sweetening, and lithium mineral brine recovery.",
    bgImage: drillingBg,
    accent: "from-blue-600/30 to-indigo-600/10",
    overview: "Remote land rigs, offshore platforms, and lithium brine processing fields encounter severe supply-chain bottlenecks, exorbitant hazardous-freight expenses, and personnel safety hazards when transporting liquid bulk caustic soda. Hydrology Systems’ on-site Alkaline Generator Skid synthesizes high-purity hydroxide solution (up to pH 12) directly at the operating site. From drill-fluid viscosity control and sour gas sweetening to hardness precipitation in direct lithium extraction (DLE), our self-contained skids provide instant alkalinity without chemical trucks.",
    challenges: [
      {
        title: "Hazardous Chemical Transportation to Remote Locations",
        description: "Hauling liquid sodium hydroxide (NaOH) to remote onshore basins or offshore marine platforms incurs extreme freight premiums, weather delays, and road weight restrictions."
      },
      {
        title: "Personnel Safety & High-Pressure Fluid Exposure",
        description: "Unloading high-strength caustic drums and totes in harsh environments exposes rig crews to acute chemical burn and inhalation risks."
      },
      {
        title: "Erratic Alkalinity in Brine & Mud Loops",
        description: "Manual batch dosing causes localized pH spikes that degrade expensive drilling mud polymers or interfere with mineral extraction yields."
      }
    ],
    solutions: [
      {
        title: "Automated On-Demand Skid Synthesis",
        description: "Synthesize high-purity alkaline solution (up to pH 12) directly at the wellpad or mineral extraction facility using safe solid-feed precursors and on-site water."
      },
      {
        title: "Closed-Loop Drilling Mud & H2S Sweetening",
        description: "Maintain continuous, automated pH trim for mud rheology stabilization, acid gas neutralization, and optimal lithium brine precipitation."
      },
      {
        title: "Substantial Freight & OPEX Slashes",
        description: "Eliminate expensive hot-shot chemical deliveries, demurrage charges, and secondary containment maintenance on site."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "100% Elimination of Hazardous Chemical Freight",
          description: "Zero bulk liquid caustic tanker deliveries to remote onshore basins or offshore platforms, eliminating weather road bans and demurrage fees.",
          tag: "Logistics"
        },
        {
          title: "Immediate 60%–75% Chemical OPEX Reduction",
          description: "Replaces high-markup liquid caustic and expedited hot-shot transport charges with low-cost on-site generation.",
          tag: "Cost Recovery"
        },
        {
          title: "Elimination of Wellsite Personnel Splash Burns",
          description: "Rig crews work exclusively with stable, safe dry precursors instead of hazardous 50% liquid NaOH drum offloading.",
          tag: "EHS Safety"
        },
        {
          title: "Micro-Dosed Viscosity & H2S Sweetening Precision",
          description: "Closed-loop automated pH trim prevents localized spikes that degrade high-dollar synthetic mud polymers and disrupt DLE lithium recovery.",
          tag: "Process Quality"
        }
      ],
      cons: [
        {
          title: "Rig Utility Connection Prerequisites",
          description: "Requires dedicated 460/480V 3-phase power drop and access to softened or fresh rig water. Pre-Water Filtration Required. (Hydrology Can Provide)",
          tag: "Utility Requirement"
        },
        {
          title: "Wellsite Footprint Allocation",
          description: "Requires an 12' x 8” X 8 ' skid container footprint near the mud tank walkway, mud logging area, or chemical additive pad.",
          tag: "Footprint"
        },
        {
          title: "Equipment Capital Deployment",
          description: "Requires capital equipment purchase or lease vs. spot chemical invoice purchasing (amortization typically achieved within 4–8 months).",
          tag: "Capex vs Opex"
        },
        {
          title: "Periodic Dry Precursor Hopper Loading",
          description: "Rig personnel must periodically load high-purity solid feed hoppers (approx. once every 1–2 weeks under typical drilling operations).",
          tag: "Maintenance"
        }
      ]
    },
    technicalHighlights: [
      { label: "Target Solution Output", value: "Up to pH 12.0", detail: "Continuous automated delivery" },
      { label: "Logistics Elimination", value: "100% Bulk Trucks", detail: "Zero liquid caustic deliveries" },
      { label: "Applications", value: "Drilling Mud, H2S, DLE", detail: "Lithium recovery & mud rheology" },
      { label: "Control Architecture", value: "Hazardous-Rated PLC", detail: "Automated dosing & SCADA telemetry" }
    ],
    faqs: [
      {
        question: "How does the skid integrate into existing drilling mud or brine manifolds?",
        answer: "The skid connects directly into your existing fluid mixing manifold or intermediate holding tank via standard industrial connections. Integrated sensors monitor mud pH and dose automated alkaline streams continuously."
      },
      {
        question: "Can this system withstand remote outdoor and offshore environments?",
        answer: "Yes, our skids are housed in heavy-gauge, corrosion-resistant industrial frames engineered for rugged field deployment with climate-controlled instrumentation enclosures."
      },
      {
        question: "What are the raw inputs required for wellsite generation?",
        answer: "The skid uses standard site power, local softened/potable water, and high-purity dry solid precursors, eliminating all bulk liquid tanker logistics."
      }
    ]
  },
  "food-beverage": {
    slug: "food-beverage",
    title: "Food & Beverage Production",
    badge: "CLEAN-IN-PLACE (CIP) & COMPLIANT EFFLUENT TREATMENT",
    heroHeadline: "Sanitary On-Site Alkaline Generation for CIP Cleaning & Wastewater Compliance",
    metaDescription: "Maintain strict FDA sanitary standards and municipal discharge compliance. Hydrology Systems delivers automated, safe on-site alkaline water for food and beverage plants.",
    bgImage: beverageBg,
    accent: "from-amber-600/30 to-orange-600/10",
    overview: "From commercial breweries and dairy processors to meat packing and bottling plants, food and beverage operations rely on high-volume alkalinity for Clean-In-Place (CIP) line sanitization and continuous wastewater neutralization. Hydrology Systems delivers modular, automated alkaline generation skids producing purified solution from pH 7 to 12 on-site. Eliminate delivered bulk liquid caustic storage risks inside food-grade facilities while ensuring absolute batch consistency and municipal discharge compliance.",
    challenges: [
      {
        title: "Hazardous Bulk Caustic in Sanitary Food Facilities",
        description: "Storing thousands of gallons of 50% delivered liquid caustic near sanitary production areas creates major EHS liabilities and contamination risks."
      },
      {
        title: "Municipal Wastewater Surcharges & Out-of-Spec Spikes",
        description: "High organic load and acidic wash cycles cause effluent swings that trigger severe municipal sewer penalties and permit violations."
      },
      {
        title: "Inconsistent CIP Sanitation & Chemical Waste",
        description: "Manual chemical mixing causes batch-to-batch variation, line residue, and excessive chemical consumption during rinse cycles."
      }
    ],
    solutions: [
      {
        title: "On-Demand CIP Alkaline Generation",
        description: "Generate consistent, high-purity alkaline streams (up to pH 12) for degreasing, clean-in-place sanitization, and equipment washing on demand."
      },
      {
        title: "Automated Effluent Neutralization Skids",
        description: "Continuous automated dosing into wastewater discharge flumes guarantees compliance with local municipal POTW pH limits."
      },
      {
        title: "Worker Safety & EHS Compliance",
        description: "Eliminate chemical offloading hoses, tank farm inspections, and employee exposure to concentrated chemical burns."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "Sanitary Line Consistency & Reduced Rinse Volume",
          description: "Micro-dispersed on-demand alkaline solution (pH 10–12) strips organic soils rapidly and rinses out 15%–25% faster than viscous delivered caustic.",
          tag: "Sanitation Quality"
        },
        {
          title: "Zero Bulk Caustic Stored Near Food Production",
          description: "Decommissions massive delivered caustic bulk tanks inside or adjacent to food-grade and packaging facility zones.",
          tag: "Food Safety"
        },
        {
          title: "Guaranteed Municipal Effluent Compliance (Zero POTW Fines)",
          description: "Closed-loop automated discharge neutralizing prevents sewer out-of-spec surcharge penalties and environmental notices of violation.",
          tag: "Compliance"
        },
        {
          title: "Worker EHS & Wet-Plant Burn Elimination",
          description: "Eliminates high-risk tanker hose connections, drum pump transfers, and worker splash hazards in busy washdown bays.",
          tag: "Personnel Safety"
        }
      ],
      cons: [
        {
          title: "Sanitary Stainless Interconnect Integration",
          description: "Requires tie-in with 304 or 316 sanitary stainless piping manifolds and clean potable facility water supply.",
          tag: "Plumbing Setup"
        },
        {
          title: "Quarterly Effluent Probe Verification",
          description: "Automated discharge compliance requires routine quarterly probe cleaning and buffer verification for POTW record-keeping.",
          tag: "Sensor Maintenance"
        },
        {
          title: "Capital Equipment Sizing for Peak CIP Flushes",
          description: "Facilities with simultaneous multi-line CIP schedules may require properly sized surge accumulation tanks to meet peak draw.",
          tag: "Capacity Sizing"
        },
        {
          title: "Initial Equipment Investment (Capital Budget)",
          description: "Requires equipment capital expenditure or lease approval vs. monthly chemical operating invoices (recouped within 7–12 months).",
          tag: "Capex vs Opex"
        }
      ]
    },
    technicalHighlights: [
      { label: "Delivered pH Range", value: "pH 7.0 to 12.0", detail: "Adjustable for CIP & effluent" },
      { label: "Wastewater Compliance", value: "100% On-Spec", detail: "Prevents POTW sewer fines" },
      { label: "Sanitary Compatibility", value: "Food-Grade Design", detail: "Wetted sanitary materials" },
      { label: "Automation", value: "Automated CIP Trim", detail: "Proportional flow pacing" }
    ],
    faqs: [
      {
        question: "Is the on-site alkaline output suitable for Clean-In-Place (CIP) systems?",
        answer: "Yes, our systems generate high-purity alkaline streams tailored for CIP cycles, effectively removing fats, proteins, and residues without leaving heavy chemical scale."
      },
      {
        question: "How does the system prevent municipal wastewater discharge violations?",
        answer: "The skid includes closed-loop instrumentation that continuously measures discharge pH and automatically injects exact neutralizer to keep effluent strictly between local limits (e.g., pH 6.5–8.5)."
      },
      {
        question: "Does this replace bulk chemical deliveries completely?",
        answer: "Yes, by generating the necessary alkaline cleaning and neutralization solution on-site, facilities can decommission or downsize delivered liquid caustic storage tanks."
      }
    ]
  },
  agriculture: {
    slug: "agriculture",
    title: "Agriculture & Cultivation Facilities",
    badge: "HYDROPONICS, COMMERCIAL GREENHOUSES & CULTIVATION",
    heroHeadline: "Precision pH Stabilization for High-Yield Agriculture & Effluent Management",
    metaDescription: "Prevent nutrient lockout, root burn, and runoff compliance penalties. Hydrology Systems provides continuous on-site catalytic hydroxide pH stabilization for commercial agriculture.",
    bgImage: agricultureBg,
    accent: "from-emerald-600/30 to-teal-600/10",
    overview: "From massive commercial greenhouses and CEA indoor facilities to specialized substrate operations, hemp/CBD cultivation, and mushroom farms, minor pH fluctuations in fertigation manifolds cause catastrophic nutrient lockout, root burn, and lost crop yields. Hydrology Systems’ Catalytic Hydroxide technology stabilizes pH by integrating directly into primary water and nutrient manifolds for continuous, reliable adjustment without caustic shock. Furthermore, automated skids balance runoff water before environmental discharge.",
    challenges: [
      {
        title: "Nutrient Lockout & Yield Loss from pH Spikes",
        description: "Conventional chemical injection often leads to localized chemical spikes that shock plant root zones and lock out critical micronutrients (iron, phosphorus, calcium)."
      },
      {
        title: "Dangerous Chemical Handling in Grow Rooms",
        description: "Growers and facility technicians regularly handle concentrated liquid acids and bases, posing significant employee hazards."
      },
      {
        title: "Agricultural Runoff Compliance Penalties",
        description: "Discharging acidic or nutrient-laden runoff into groundwater or municipal drains risks heavy environmental fines and operational shutdown."
      }
    ],
    solutions: [
      {
        title: "Catalytic Hydroxide Continuous Stabilization",
        description: "Delivers smooth, ultra-stable pH adjustment directly into irrigation and fertigation loops without erratic chemical surges."
      },
      {
        title: "Runoff Wastewater Balancing",
        description: "Automated pH neutralization skids ensure all wastewater and runoff discharge meets regional agricultural water quality limits."
      },
      {
        title: "Safe, Enclosed Automation",
        description: "Completely automated PLC operations remove the danger of staff manually pouring concentrated corrosive chemicals into reservoirs."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "Elimination of Root Shock & Nutrient Lockout",
          description: "Catalytic hydroxide introduces micro-dispersed alkalinity without localized high-pH spikes that cause iron, calcium, and phosphorus precipitation.",
          tag: "Crop Health & Yield"
        },
        {
          title: "Total Protection of Grow-Room Personnel",
          description: "Staff never handle or pour concentrated corrosive liquid acids/bases in humid greenhouse or indoor CEA facilities.",
          tag: "Worker Safety"
        },
        {
          title: "Automated Runoff Environmental Discharge Compliance",
          description: "Neutralizes agricultural runoff and leachate streams continuously, preventing groundwater permit fines and regulatory penalties.",
          tag: "Discharge Security"
        },
        {
          title: "Consistent ±0.1 pH Precision Across Crop Cycles",
          description: "Steady automated manifold delivery optimizes vegetative uptake rates and maximizes overall harvest weights.",
          tag: "Yield Consistency"
        }
      ],
      cons: [
        {
          title: "Feed Water Hardness Pre-Filtration Needed",
          description: "Facilities with hard well water (>300 ppm CaCO3) require upstream water softening or basic RO pre-filtration to ensure peak cell life.",
          tag: "Feedwater Quality"
        },
        {
          title: "Nutrient Salt Electrode Cleaning Routine",
          description: "Sensors installed in dense fertigation manifolds with heavy organic/mineral fertilizers require periodic monthly cleaning.",
          tag: "Electrode Maintenance"
        },
        {
          title: "Manifold Header Retrofit Required",
          description: "Requires inline injection port installation into primary irrigation feed pipes or centralized nutrient batch reservoirs.",
          tag: "Installation Setup"
        },
        {
          title: "Capital Skid Acquisition vs. Carboy Jug Purchasing",
          description: "Equipment acquisition involves initial capital budgeting rather than frequent retail jug replenishment (ROI achieved in 6–10 months).",
          tag: "Capex vs Opex"
        }
      ]
    },
    technicalHighlights: [
      { label: "Target pH Precision", value: "±0.1 pH Stability", detail: "Prevents root burn & lockout" },
      { label: "Irrigation Manifold", value: "Inline Integration", detail: "Direct into fertigation feed" },
      { label: "Agricultural Sectors", value: "Greenhouse & CEA", detail: "Hydroponics, hemp & mushrooms" },
      { label: "Discharge Security", value: "Runoff Compliance", detail: "Automated drain neutralization" }
    ],
    faqs: [
      {
        question: "How does catalytic hydroxide prevent nutrient lockout compared to conventional caustic dosing?",
        answer: "Traditional chemical pump injections cause localized high-concentration zones that precipitate nutrients out of solution. Catalytic hydroxide provides uniform, micro-dispersed alkalinity that stabilizes root-zone pH smoothly."
      },
      {
        question: "Can the system be used for runoff wastewater neutralization?",
        answer: "Yes, our automated skids are routinely installed on discharge manifolds to balance leachates and irrigation runoff prior to sewer release or recirculation."
      },
      {
        question: "Is this suitable for large commercial hydroponic facilities?",
        answer: "Yes, our modular skids scale from boutique cultivation facilities up to 50+ acre commercial greenhouse complexes requiring continuous flow rates."
      }
    ]
  },
  "general-industrial": {
    slug: "general-industrial",
    title: "General Industrial, Cooling Towers & Wastewater",
    badge: "PROCESS COOLING, HEAVY MANUFACTURING & REFINERY WASTEWATER",
    heroHeadline: "Automated On-Site pH Control for Cooling Towers & Industrial Effluent Skids",
    metaDescription: "Protect cooling tower infrastructure and eliminate municipal surcharge penalties. Hydrology Systems provides automated on-site pH neutralization skids for heavy industry.",
    bgImage: coolingTowerBg,
    accent: "from-cyan-600/30 to-sky-600/10",
    overview: "From refinery cooling towers and power generation circuits to heavy manufacturing and metal finishing plants, inconsistent pH dosing results in severe pipe corrosion, heat-exchanger fouling, and expensive municipal sewer surcharges. Hydrology Systems provides automated on-site pH neutralization skids that generate ultra-stable alkaline streams directly at the facility. Eliminate delivered 50% liquid caustic storage tanks, simplify EHS compliance, and safeguard critical water infrastructure.",
    challenges: [
      {
        title: "Severe Bulk Tank Storage & PSM Regulations",
        description: "Storing 10,000+ gallons of liquid sodium hydroxide triggers OSHA Process Safety Management scrutiny, secondary containment maintenance, and freeze-protection heating costs."
      },
      {
        title: "Cooling Tower Scaling & Acidic Pipe Corrosion",
        description: "Under-dosing leads to acid corrosion in condenser tubes, while localized chemical over-dosing induces mineral scaling and reduces heat-transfer efficiency."
      },
      {
        title: "Continuous Wastewater Neutralization Outages",
        description: "High-volume acidic effluent surges overwhelm conventional chemical feed pumps, resulting in municipal surcharge fines and permit violations."
      }
    ],
    solutions: [
      {
        title: "Automated On-Site Alkaline Generation",
        description: "Synthesize high-purity alkaline streams (up to pH 12) continuously on-site to replace delivered bulk chemical trucks."
      },
      {
        title: "Precision Cooling Tower Alkalinity Trim",
        description: "Maintain optimal cycles of concentration and stable pH in recirculating loops without chemical slug dosing."
      },
      {
        title: "High-Flow Industrial Effluent Neutralization",
        description: "High-throughput modular skids rapidly neutralize fluctuating acid loads in wastewater retention tanks before discharge."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "Eliminates Cooling Tower Tube Fouling & Acid Corrosion",
          description: "Micro-dosing maintains precise chemical equilibrium, preventing condenser tube acid pitting without localized calcium scale precipitation.",
          tag: "Asset Protection"
        },
        {
          title: "Up to 70% Chemical Procurement Cost Slashes",
          description: "Replaces volatile commercial 50% caustic tanker contracts with ultra-economical on-demand electrochemical generation.",
          tag: "Cost Recovery"
        },
        {
          title: "Exemption from OSHA PSM & Bulk SPCC Regulations",
          description: "Decommissioning 10,000+ gallon liquid caustic tank farms eliminates secondary containment inspections, diking repairs, and PSM audits.",
          tag: "Regulatory EHS"
        },
        {
          title: "Immunity to 54°F Winter Chemical Freezing",
          description: "Commercial 50% caustic freezes at 54°F (12°C), requiring heated tracing and insulated tanks; on-site generation eliminates cold-weather line freezes.",
          tag: "Winter Reliability"
        }
      ],
      cons: [
        {
          title: "Outdoor Climate Enclosure for Sub-Zero Climates",
          description: "Outdoor installations in extreme northern regions require skid thermal insulation packages and integrated internal space heaters.",
          tag: "Weatherproofing"
        },
        {
          title: "Dedicated Plant Power Drop (480V 3-Phase)",
          description: "Requires dedicated 480V 3-phase industrial power supply drop and continuous municipal or softened water supply line.",
          tag: "Utility Requirement"
        },
        {
          title: "Annual Catalytic Cell & Sensor Inspection",
          description: "Requires annual preventive inspection of internal electrolytic cells and calibration of high-range conductivity probes.",
          tag: "Annual Maintenance"
        },
        {
          title: "Internal Plant MOC (Management of Change) Approval",
          description: "Plant engineering requires internal review and MOC paperwork to transition from delivered bulk tanks to on-site generation.",
          tag: "Plant Engineering"
        }
      ]
    },
    technicalHighlights: [
      { label: "Delivered Output", value: "Up to pH 12.0", detail: "On-demand automated feed" },
      { label: "Cooling Tower Loops", value: "Continuous Balance", detail: "Protects heat exchangers" },
      { label: "Bulk Caustic Eliminated", value: "Up to 70% OPEX Cut", detail: "Zero tanker deliveries" },
      { label: "Permit Protection", value: "Municipal Compliance", detail: "Real-time automated logging" }
    ],
    faqs: [
      {
        question: "How does on-site pH control protect cooling towers from scale and corrosion?",
        answer: "By continuously dosing micro-measured alkaline streams directly into makeup or circulating lines, the system prevents aggressive low-pH corrosion and avoids the localized super-saturation spikes that form calcium carbonate scale."
      },
      {
        question: "Can an on-site skid handle massive acid surges in industrial wastewater?",
        answer: "Yes, our automated PLC system adjusts generation and delivery rates in real time based on incoming effluent pH and flow sensors, ensuring uninterrupted discharge compliance."
      },
      {
        question: "What EHS benefits does this bring to plant managers?",
        answer: "Eliminating bulk liquid caustic tanks removes tanker offloading hazard zones, PSM compliance overhead, secondary containment inspection costs, and tank heating energy in cold weather."
      }
    ]
  },
  refineries: {
    slug: "refineries",
    title: "Oil Refineries",
    badge: "CRUDE DESALTING & HYDROCARBON CONDENSATE NEUTRALIZATION",
    heroHeadline: "On-Site Catalytic Hydroxide for Crude Desalting & Atmospheric Overhead pH Control",
    metaDescription: "Eliminate bulk liquid caustic tanker deliveries in petroleum refineries. Hydrology Systems provides continuous on-site catalytic hydroxide generation to prevent overhead acid corrosion.",
    bgImage: refineryClearBg,
    accent: "from-blue-700/30 to-slate-800/10",
    overview: "Modern petroleum refineries consume tens of thousands of gallons of concentrated bulk sodium hydroxide monthly for atmospheric crude desalting, amine unit tail gas sweetening, and acidic condensate neutralization. Delivered 50% caustic requires heated tracing tanks, costly secondary containment, and constant offloading hazards. Hydrology Systems’ on-site catalytic hydroxide skids synthesize high-purity alkaline streams continuously, eliminating dangerous caustic truck logistics while delivering micro-dosed pH control that prevents overhead condensing unit corrosion.",
    challenges: [
      {
        title: "High-Volume Hazardous Bulk Caustic Storage",
        description: "Managing 20,000+ gallon liquid caustic storage farms creates heavy OSHA Process Safety Management (PSM) compliance overhead, diking maintenance, and tank offloading spill risks."
      },
      {
        title: "Crude Overhead Condenser Chloride Corrosion",
        description: "Acidic chlorides in crude overhead streams cause severe localized corrosion when conventional bulk caustic pumps under-dose or experience delivery delays."
      },
      {
        title: "Winter Line Freezing at 54°F (12°C)",
        description: "Commercial 50% liquid caustic crystallizes at 54°F, requiring continuous electrical or steam tracing and causing emergency shutdowns during deep freezes."
      }
    ],
    solutions: [
      {
        title: "Electrochemical On-Site Hydroxide Synthesis",
        description: "Generate high-purity alkaline solutions on-demand directly at the refinery unit battery limits using safe solid precursors and plant water."
      },
      {
        title: "Automated Overhead pH Micro-Trimming",
        description: "Closed-loop feedback control provides smooth, micro-measured neutralization that stabilizes crude overhead condensate without chemical overshoots."
      },
      {
        title: "Decommissioning of Bulk Liquid Caustic Tank Farms",
        description: "Completely eliminate tanker truck deliveries, hazardous offloading zones, and PSM compliance burdens."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "Elimination of Crude Overhead Acid Corrosion",
          description: "Continuous micro-dosing prevents localized chloride corrosion spikes in crude tower overhead condensers and accumulator boots.",
          tag: "Asset Protection"
        },
        {
          title: "Decommissioning of 50% Bulk Caustic Tank Farms",
          description: "Eliminates steam tracing, secondary containment inspections, and chemical offloading splash hazards across the refinery.",
          tag: "EHS Safety"
        },
        {
          title: "Up to 70% Chemical Procurement Cost Slashes",
          description: "Replaces volatile bulk caustic contracts and emergency freight surcharges with low-cost on-site catalytic generation.",
          tag: "Cost Recovery"
        },
        {
          title: "Zero Winter Freeze Shutdowns",
          description: "On-site synthesis operates continuously without 54°F commercial caustic line freezing risks in sub-zero winter ambient conditions.",
          tag: "Winter Reliability"
        }
      ],
      cons: [
        {
          title: "Refinery Class 1 Div 2 Electrical Certification",
          description: "Requires Class 1 Div 2 hazardous electrical classification packaging for process unit battery limit placement.",
          tag: "Hazardous Classification"
        },
        {
          title: "Dedicated 480V 3-Phase Industrial Power Drop",
          description: "Requires dedicated 480V 3-phase power feed and industrial softened or demineralized plant water supply hookup.",
          tag: "Utility Requirement"
        },
        {
          title: "Process Battery Limit Tie-In Approval",
          description: "Requires refinery process engineering review and standard MOC documentation for injection quill manifold tie-in.",
          tag: "Plant Engineering"
        },
        {
          title: "Periodic Solid Precursor Hopper Replenishment",
          description: "Plant operators must load safe, dry precursor hoppers once every 1–2 weeks under standard continuous refinery throughput.",
          tag: "Maintenance"
        }
      ]
    },
    technicalHighlights: [
      { label: "Refinery Applications", value: "Desalting & Overheads", detail: "Amine tail gas & sour water" },
      { label: "Target pH Delivery", value: "Up to pH 12.0", detail: "Closed-loop micro-trimming" },
      { label: "OPEX Reduction", value: "Up to 70% Saved", detail: "Replaces commercial caustic" },
      { label: "Safety Compliance", value: "Zero Offloading", detail: "Eliminates 50% NaOH truck racks" }
    ],
    faqs: [
      {
        question: "Can this system integrate directly into crude unit overhead lines?",
        answer: "Yes, our skids feature high-pressure automated metering pumps and corrosion-resistant injection quills designed for continuous dosing into crude column overhead vapor or reflux lines."
      },
      {
        question: "Does the equipment meet refinery explosion-proof standards?",
        answer: "Hydrology Systems engineers optional Class 1 Division 2 Group B/C/D purged enclosures and intrinsically safe instrumentation packages specifically for refinery process unit installations."
      },
      {
        question: "How does on-site generation eliminate cold-weather freeze risks?",
        answer: "Commercial 50% caustic freezes at 54°F, requiring costly steam-traced piping. Hydrology Systems synthesizes dilute, active alkaline solutions directly at the point of use that resist cold ambient freezing."
      }
    ]
  },
  "cooling-towers": {
    slug: "cooling-towers",
    title: "Cooling Towers",
    badge: "INDUSTRIAL RECIRCULATING WATER & CONDENSER SCALE PREVENTION",
    heroHeadline: "On-Site pH Neutralization for Industrial Cooling Towers & Recirculating Loops",
    metaDescription: "Protect industrial cooling tower infrastructure and heat exchangers. Hydrology Systems delivers on-demand pH balance without dangerous bulk caustic delivery.",
    bgImage: coolingTowerBg,
    accent: "from-cyan-600/30 to-blue-600/10",
    overview: "Heavy industrial cooling circuits and refinery condenser loops suffer catastrophic acid corrosion or severe calcium scaling when conventional chemical pumps slug-dose bulk caustic. Hydrology Systems provides automated, closed-loop on-site pH trimming that maintains exact chemical equilibrium in recirculating cooling water without chemical overshoots. By generating ultra-stable alkaline streams on demand, our skids protect condenser tube metallurgies, maximize cycles of concentration, and eliminate hazardous bulk chemical deliveries.",
    challenges: [
      {
        title: "Severe Bulk Tank Storage & PSM Regulations",
        description: "Storing bulk liquid sodium hydroxide near cooling towers triggers OSHA PSM scrutiny, containment diking maintenance, and winter line freezing."
      },
      {
        title: "Condenser Tube Pitting & Mineral Scale Fouling",
        description: "Acidic cooling water rapidly corrodes condenser tubes, while localized chemical over-dosing causes calcium carbonate scaling that degrades thermal efficiency."
      },
      {
        title: "High Freshwater Makeup & Surcharge Costs",
        description: "Poor alkalinity control forces excessive blowdown water dumping, inflating municipal sewer surcharges and freshwater utility bills."
      }
    ],
    solutions: [
      {
        title: "Automated On-Site Hydroxide Delivery",
        description: "Generate ultra-pure alkaline solutions on-site to maintain steady recirculating water pH without bulk chemical deliveries."
      },
      {
        title: "Closed-Loop Langelier Saturation Index (LSI) Trim",
        description: "Continuously balance pH and alkalinity to optimize cycles of concentration while protecting heat exchanger metallurgy."
      },
      {
        title: "Zero Hazard Footprint",
        description: "Eliminate chemical delivery trucks, offloading splash zones, and secondary containment compliance costs."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "Prevents Condenser Tube Acid Pitting & Scale",
          description: "Precise ±0.1 pH trim maintains Langelier Saturation Index balance without localized calcium precipitation.",
          tag: "Asset Protection"
        },
        {
          title: "Maximized Cycles of Concentration",
          description: "Reduces freshwater blowdown volume and cuts wastewater discharge surcharges by up to 35%.",
          tag: "Water Conservation"
        },
        {
          title: "100% Elimination of Bulk Caustic Storage",
          description: "Removes hazardous chemical delivery trucks, chemical totes, and secondary containment compliance.",
          tag: "EHS Safety"
        },
        {
          title: "Automated Wet-Bulb & Heat Load Compensation",
          description: "PLC automatically adjusts catalytic hydroxide dosing to compensate for diurnal heat load fluctuations.",
          tag: "Process Automation"
        }
      ],
      cons: [
        {
          title: "Dedicated 480V Power & Plant Water Hookup",
          description: "Requires dedicated 480V 3-phase industrial power drop and continuous municipal or softened water supply line.",
          tag: "Utility Requirement"
        },
        {
          title: "Sidestream Loop Tie-In Installation",
          description: "Requires physical installation of injection quill into primary cooling tower recirculating basin or bypass loop.",
          tag: "Installation Setup"
        },
        {
          title: "Conductivity & pH Probe Monthly Cleaning",
          description: "Circulating water probes require monthly calibration and bio-film cleaning under heavy cooling tower dust loads.",
          tag: "Sensor Maintenance"
        },
        {
          title: "Weatherized Enclosure for Northern Climates",
          description: "Outdoor basin installations in freezing climates require skid thermal insulation and integrated space heating.",
          tag: "Weatherproofing"
        }
      ]
    },
    technicalHighlights: [
      { label: "Cooling Application", value: "Recirculating Loops", detail: "Refinery & power plant towers" },
      { label: "pH Precision", value: "±0.1 pH Stability", detail: "Eliminates scaling & acid pitting" },
      { label: "Blowdown Slashes", value: "Up to 35% Water Saved", detail: "Higher cycles of concentration" },
      { label: "EHS Compliance", value: "Zero Bulk Caustic", detail: "No tank farms or offload risks" }
    ],
    faqs: [
      {
        question: "How does on-site pH trimming improve cooling tower cycles of concentration?",
        answer: "By preventing localized chemical spikes that cause premature calcium precipitation, our system allows water treaters to safely operate at higher cycles of concentration before blowdown is required."
      },
      {
        question: "Can the skid communicate with our existing cooling tower water controllers?",
        answer: "Yes, our skids feature standard 4-20mA, Modbus TCP, and Ethernet/IP protocols to seamlessly integrate with Walchem, Advantage, or plant DCS platforms."
      },
      {
        question: "Does this replace acid injection, caustic injection, or both?",
        answer: "Hydrology Systems primarily replaces delivered liquid caustic (NaOH) dosing, providing continuous alkalinity to offset acid accumulation from biological activity or acidic makeup water."
      }
    ]
  },
  wastewater: {
    slug: "wastewater",
    title: "Wastewater Treatment",
    badge: "INDUSTRIAL EFFLUENT & ENVIRONMENTAL DISCHARGE COMPLIANCE",
    heroHeadline: "High-Throughput On-Site Alkaline Generation for Industrial Wastewater Neutralization",
    metaDescription: "Guaranteed municipal sewer discharge compliance. Hydrology Systems provides high-flow on-site pH neutralization skids that eliminate hazardous bulk caustic deliveries.",
    bgImage: "/assets/images/wastewater_clear_aeration.jpg",
    accent: "from-teal-600/30 to-emerald-600/10",
    overview: "Industrial manufacturing plants, chemical processors, and food processors face crushing municipal surcharge fines and permit violations when acidic batch dumps overpower traditional neutralization tanks. Hydrology Systems’ high-throughput modular alkaline generation skids instantly neutralize high-volume acid surges in wastewater retention basins. Generating hydroxide on-site on demand eliminates volatile delivered caustic bills, prevents thermal hot-spot reactions, and guarantees automated 24/7 compliance with EPA NPDES and municipal sewer limits.",
    challenges: [
      {
        title: "Municipal Surcharge Fines & Environmental Violations",
        description: "Acidic effluent surges rapidly breach sewer discharge permit windows (pH 6.0–9.0), incurring steep municipal surcharges or shutdown orders."
      },
      {
        title: "Dangerous Exothermic Reactions in Pits",
        description: "Slug dosing 50% liquid caustic into concentrated acid retention basins generates dangerous boiling, spattering, and corrosive fumes."
      },
      {
        title: "Volatile Chemical Tanker Freight Bills",
        description: "Heavy industrial effluent neutralizers spend hundreds of thousands of dollars annually on delivered liquid caustic contracts and demurrage."
      }
    ],
    solutions: [
      {
        title: "High-Volume Automated Hydroxide Synthesis",
        description: "Generate high-purity alkaline neutralizer on-demand at the discharge basin to handle massive industrial flow rates."
      },
      {
        title: "Closed-Loop Dynamic Surge Balancing",
        description: "Automated PID control rapidly ramps generation to neutralize heavy acid dumps without lagging or chemical overshoot."
      },
      {
        title: "Smooth, Non-Boiling Chemical Dissipation",
        description: "Micro-dispersed catalytic hydroxide eliminates violent exothermic boiling and localized heat generation in neutralization tanks."
      }
    ],
    prosAndCons: {
      pros: [
        {
          title: "Guaranteed Municipal & NPDES Discharge Compliance",
          description: "Automated closed-loop pH trim keeps final effluent strictly within permit boundaries (pH 6.5–8.5).",
          tag: "Permit Security"
        },
        {
          title: "Instant Neutralization of Severe Acid Surges",
          description: "High-response catalytic hydroxide delivery neutralizes sudden production washdown dumps without overshoot.",
          tag: "Dynamic Response"
        },
        {
          title: "Up to 70% Neutralization Chemical Savings",
          description: "Eliminates high-markup commercial liquid caustic deliveries and emergency tanker demurrage fees.",
          tag: "Cost Recovery"
        },
        {
          title: "No Exothermic Tank Overheating",
          description: "Micro-dispersed catalytic hydroxide eliminates dangerous localized exothermic boiling in neutralization pits.",
          tag: "Safety & Integrity"
        }
      ],
      cons: [
        {
          title: "Discharge Basin Flow-Paced Signal Integration",
          description: "Requires 4-20mA or Ethernet/IP pacing signal from plant effluent flow meters and dual pH sensors.",
          tag: "Instrumentation Tie-In"
        },
        {
          title: "Periodic Effluent Probe Calibration",
          description: "Submerged discharge pH probes require standard bi-weekly or monthly cleaning in heavy organic streams.",
          tag: "Sensor Maintenance"
        },
        {
          title: "Dedicated Plant Power (480V 3-Phase)",
          description: "Requires standard 480V 3-phase industrial power feed and plant utility water hookup.",
          tag: "Utility Requirement"
        },
        {
          title: "Basin Retention Volume Prerequisite",
          description: "Requires minimum 5–10 minute retention time in mixing basin or equalization tank for complete neutralization.",
          tag: "Hydraulic Sizing"
        }
      ]
    },
    technicalHighlights: [
      { label: "Effluent Applications", value: "Industrial Neutralization", detail: "Chemical, food & manufacturing" },
      { label: "Discharge Compliance", value: "pH 6.5 – 8.5 Window", detail: "Prevents sewer surcharges" },
      { label: "Response Speed", value: "Real-Time PID Feed", detail: "Handles sudden acid dumps" },
      { label: "Cost Reduction", value: "Up to 70% Saved", detail: "Zero bulk tanker contracts" }
    ],
    faqs: [
      {
        question: "Can this system handle sudden acidic batch dumps from production CIP or washdowns?",
        answer: "Yes, our high-throughput skids utilize predictive feedforward and PID feedback control to rapidly ramp output when sudden acid loads enter the equalization basin."
      },
      {
        question: "Does the skid provide compliance data logging for EPA / municipal inspectors?",
        answer: "Yes, the onboard PLC maintains continuous timestamped data logs of effluent flow rate, incoming pH, and discharge pH for easy audit reporting."
      },
      {
        question: "How does catalytic hydroxide prevent tank overheating?",
        answer: "Delivered 50% caustic releases massive heat when mixed with acid, risking tank boiling. Our on-site solution is micro-dispersed at optimal concentration, safely neutralizing without thermal spikes."
      }
    ]
  }
};
