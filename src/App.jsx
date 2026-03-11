import React, { useState } from 'react'
import {
  Users,
  Map,
  BookOpen,
  Activity,
  Building2,
  Factory,
  PieChart,
  TrendingUp,
  Building,
  CircleDollarSign,
  Cpu,
  Ship,
  Anchor,
  Train,
  Zap,
  Mountain,
  Shield,
  Tractor,
  Sunrise,
  Sun,
} from 'lucide-react'

const themes = {
  west: { gradient: 'from-amber-300 via-orange-200 to-rose-200', bgStart: 'from-slate-800 via-slate-700/95', bgEnd: 'to-amber-900/35', textPrimary: 'text-amber-300', textSecondary: 'text-orange-100', bgPrimarySubtle: 'bg-amber-400/12', borderPrimarySubtle: 'border-amber-200/20', borderPrimaryStrong: 'border-amber-300/30', shadowPrimary: 'shadow-[0_0_18px_rgba(251,191,36,0.22)]', orbPrimary: 'bg-amber-300/18', orbSecondary: 'bg-rose-200/14' },
  awadh: { gradient: 'from-fuchsia-300 via-violet-200 to-indigo-200', bgStart: 'from-slate-800 via-slate-700/95', bgEnd: 'to-fuchsia-900/35', textPrimary: 'text-fuchsia-300', textSecondary: 'text-violet-100', bgPrimarySubtle: 'bg-fuchsia-400/12', borderPrimarySubtle: 'border-fuchsia-200/20', borderPrimaryStrong: 'border-fuchsia-300/30', shadowPrimary: 'shadow-[0_0_18px_rgba(232,121,249,0.22)]', orbPrimary: 'bg-fuchsia-300/18', orbSecondary: 'bg-indigo-200/14' },
  east: { gradient: 'from-cyan-300 via-sky-200 to-blue-200', bgStart: 'from-slate-800 via-slate-700/95', bgEnd: 'to-cyan-900/35', textPrimary: 'text-cyan-300', textSecondary: 'text-sky-100', bgPrimarySubtle: 'bg-cyan-400/12', borderPrimarySubtle: 'border-cyan-200/20', borderPrimaryStrong: 'border-cyan-300/30', shadowPrimary: 'shadow-[0_0_18px_rgba(34,211,238,0.22)]', orbPrimary: 'bg-cyan-300/18', orbSecondary: 'bg-blue-200/14' },
  bundel: { gradient: 'from-emerald-300 via-lime-200 to-green-200', bgStart: 'from-slate-800 via-slate-700/95', bgEnd: 'to-emerald-900/35', textPrimary: 'text-emerald-300', textSecondary: 'text-lime-100', bgPrimarySubtle: 'bg-emerald-400/12', borderPrimarySubtle: 'border-emerald-200/20', borderPrimaryStrong: 'border-emerald-300/30', shadowPrimary: 'shadow-[0_0_18px_rgba(52,211,153,0.22)]', orbPrimary: 'bg-emerald-300/18', orbSecondary: 'bg-lime-200/14' },
}

const regionsData = {
  west: {
    tabId: 'west', tabLabel: 'Western UP', theme: themes.west,
    header: { title: 'Western Uttar Pradesh', subtitle: '(Pashchim Pradesh Zone)', desc: 'The industrial and technological muscle of the state. Anchored by the massive Noida-Ghaziabad IT corridors and the automated manufacturing hubs of Meerut and Agra.', icon: Factory },
    metrics: [
      { title: 'Zone Population', value: '9.3 Crore', subtext: 'Highly urbanized demographic', icon: Users, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
      { title: 'Zone Economy', value: '$645 Billion', subtext: 'Highest per-capita GDP in UP', icon: CircleDollarSign, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
      { title: 'Zone Area', value: '79,832 sq km', subtext: 'Spanning 26 key districts', icon: Map, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
      { title: 'Avg. Density', value: '1,165 / sq km', subtext: 'Extreme density in NCR border', icon: Activity, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
      { title: 'Literacy Rate', value: '91.8%', subtext: 'Strong technical skill base', icon: BookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
      { title: 'Urbanization', value: '68.9%', subtext: 'Rapid peri-urban sprawl', icon: Building, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
    ],
    districts: [
      { name: 'Noida (Gautam Buddha Nagar)', pop: '4.9M', area: '1,282', density: '3,822', edu: '97.2%', urban: '99.2%', growth: '14.2%', hindu: 84.6, muslim: 13.1, other: 2.3, gdp: '240', services: 68, industry: 30, agri: 2 },
      { name: 'Ghaziabad (Smart Transit)', pop: '7.1M', area: '1,179', density: '6,022', edu: '94.6%', urban: '96.5%', growth: '10.8%', hindu: 72.9, muslim: 25.3, other: 1.8, gdp: '145', services: 55, industry: 42, agri: 3 },
      { name: 'Agra (Tourism/Mfg)', pop: '6.3M', area: '4,027', density: '1,564', edu: '87.5%', urban: '71.8%', growth: '7.1%', hindu: 88.8, muslim: 9.3, other: 1.9, gdp: '84', services: 40, industry: 45, agri: 15 },
      { name: 'Meerut (Sports/Tech)', pop: '5.8M', area: '2,522', density: '2,300', edu: '89.3%', urban: '78.6%', growth: '8.9%', hindu: 63.4, muslim: 34.4, other: 2.2, gdp: '76', services: 34, industry: 52, agri: 14 },
      { name: 'Aligarh (Hardware Hub)', pop: '5.3M', area: '3,650', density: '1,452', edu: '84.2%', urban: '61.7%', growth: '9.1%', hindu: 79.1, muslim: 19.8, other: 1.1, gdp: '56', services: 29, industry: 48, agri: 23 },
      { name: 'Mathura (Pilgrimage/Oil)', pop: '3.9M', area: '3,340', density: '1,168', edu: '85.8%', urban: '63.2%', growth: '7.6%', hindu: 90.5, muslim: 8.5, other: 1.0, gdp: '49', services: 38, industry: 34, agri: 28 },
    ],
    insights: [
      { title: 'The Global IT & Aero Core', desc: "Noida and Greater Noida house massive semiconductor fabs, GCCs, and the Jewar Aerotropolis, driving the bulk of UP's international exports.", icon: Cpu },
      { title: 'The Expressway Sprawl', desc: 'Districts like Meerut and Aligarh are now fully connected to the capital via high-speed RRTS loops and 8-lane expressways, acting as advanced manufacturing hubs.', icon: Train },
      { title: 'Tourism & Heritage Tech', desc: 'Agra and Mathura have modernized their massive cultural economies, utilizing AI-crowd management and green-transit for millions of global pilgrims and tourists.', icon: Sun },
    ],
  },
  awadh: {
    tabId: 'awadh', tabLabel: 'Central UP', theme: themes.awadh,
    header: { title: 'Awadh Mega Region', subtitle: '(Central UP Corridor)', desc: 'The administrative and service-sector heart of Uttar Pradesh. Anchored by the Lucknow-Kanpur twin-city mega-cluster and the rapidly modernizing Ayodhya cultural node.', icon: Building2 },
    metrics: [
      { title: 'Zone Population', value: '8.0 Crore', subtext: 'High-density central plains', icon: Users, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10 border-fuchsia-500/20' },
      { title: 'Zone Economy', value: '$470 Billion', subtext: 'Service & governance driven', icon: CircleDollarSign, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
      { title: 'Zone Area', value: '65,000 sq km', subtext: 'Spanning the central river basins', icon: Map, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
      { title: 'Avg. Density', value: '1,231 / sq km', subtext: 'Heavy urban concentration', icon: Activity, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10 border-fuchsia-500/20' },
      { title: 'Literacy Rate', value: '88.4%', subtext: 'Rising administrative hubs', icon: BookOpen, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
      { title: 'Urbanization', value: '64.8%', subtext: 'Driven by Lucknow-Kanpur core', icon: Building, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
    ],
    districts: [
      { name: 'Lucknow (Admin/Services)', pop: '8.2M', area: '2,528', density: '3,244', edu: '94.1%', urban: '91.6%', growth: '11.8%', hindu: 71.7, muslim: 26.4, other: 1.9, gdp: '155', services: 72, industry: 20, agri: 8 },
      { name: 'Kanpur Nagar (Ind. Forge)', pop: '7.4M', area: '3,155', density: '2,345', edu: '91.2%', urban: '85.9%', growth: '7.2%', hindu: 82.5, muslim: 15.7, other: 1.8, gdp: '129', services: 38, industry: 54, agri: 8 },
      { name: 'Ayodhya (Global Heritage)', pop: '4.6M', area: '2,522', density: '1,824', edu: '85.4%', urban: '54.8%', growth: '16.6%', hindu: 84.8, muslim: 14.8, other: 0.4, gdp: '66', services: 52, industry: 18, agri: 30 },
      { name: 'Unnao (Logistics Hub)', pop: '4.8M', area: '4,558', density: '1,053', edu: '85.3%', urban: '49.9%', growth: '10.4%', hindu: 88.1, muslim: 11.5, other: 0.4, gdp: '45', services: 30, industry: 42, agri: 28 },
      { name: 'Sitapur (Agri-Tech)', pop: '6.4M', area: '5,743', density: '1,114', edu: '80.6%', urban: '31.7%', growth: '7.8%', hindu: 79.3, muslim: 19.9, other: 0.8, gdp: '39', services: 18, industry: 20, agri: 62 },
      { name: 'Barabanki (Warehouse)', pop: '5.1M', area: '4,402', density: '1,158', edu: '82.1%', urban: '41.6%', growth: '8.7%', hindu: 76.6, muslim: 22.6, other: 0.8, gdp: '43', services: 26, industry: 28, agri: 46 },
    ],
    insights: [
      { title: 'The Twin-City Mega Core', desc: 'Lucknow (services, IT, admin) and Kanpur (textiles, heavy industry) have merged physically via the Unnao logistics corridor, forming the primary economic engine of Central UP.', icon: Activity },
      { title: 'The Global Spiritual Hub', desc: 'Ayodhya has experienced explosive growth. It operates as a master-planned, high-revenue international cultural and tourism hub with its own international aerotropolis.', icon: Sunrise },
      { title: 'Agrarian Transition', desc: 'The massive populations of Sitapur and Hardoi provide the food security and demographic labor dividend that fuels the hyper-urbanization of the Lucknow-Kanpur core.', icon: Tractor },
    ],
  },
  east: {
    tabId: 'east', tabLabel: 'Purvanchal (East)', theme: themes.east,
    header: { title: 'Purvanchal Mega Region', subtitle: '(Eastern UP Gateway)', desc: 'The rising powerhouse of the East. Deeply connected by the Purvanchal Expressway and inland waterways, anchored by the ancient-yet-modern metropolises of Varanasi and Prayagraj.', icon: Ship },
    metrics: [
      { title: 'Zone Population', value: '10.6 Crore', subtext: 'Most populous UP sub-region', icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
      { title: 'Zone Economy', value: '$405 Billion', subtext: 'Fastest growing GDP in UP', icon: CircleDollarSign, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
      { title: 'Zone Area', value: '85,420 sq km', subtext: 'Spanning the Eastern plains', icon: Map, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
      { title: 'Avg. Density', value: '1,241 / sq km', subtext: 'Extremely dense rural-urban mix', icon: Activity, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
      { title: 'Literacy Rate', value: '84.7%', subtext: 'Rapidly improving education metrics', icon: BookOpen, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
      { title: 'Urbanization', value: '45.9%', subtext: 'Major potential for urban expansion', icon: Building, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    ],
    districts: [
      { name: 'Varanasi (Culture/Trade)', pop: '5.9M', area: '1,535', density: '3,844', edu: '90.7%', urban: '71.9%', growth: '11.6%', hindu: 84.5, muslim: 14.8, other: 0.7, gdp: '112', services: 48, industry: 22, agri: 30 },
      { name: 'Prayagraj (Edu/Admin)', pop: '9.1M', area: '5,482', density: '1,660', edu: '88.9%', urban: '51.8%', growth: '8.9%', hindu: 85.6, muslim: 13.3, other: 1.1, gdp: '122', services: 54, industry: 20, agri: 26 },
      { name: 'Gorakhpur (Health/Tech)', pop: '7.1M', area: '3,321', density: '2,138', edu: '87.3%', urban: '49.7%', growth: '12.1%', hindu: 90.2, muslim: 9.1, other: 0.7, gdp: '95', services: 36, industry: 28, agri: 36 },
      { name: 'Azamgarh (Agri-Business)', pop: '6.6M', area: '4,054', density: '1,628', edu: '81.9%', urban: '28.9%', growth: '5.4%', hindu: 84.1, muslim: 15.5, other: 0.4, gdp: '48', services: 18, industry: 19, agri: 63 },
      { name: 'Jaunpur (Remittance/Edu)', pop: '6.3M', area: '4,038', density: '1,560', edu: '82.8%', urban: '23.5%', growth: '4.8%', hindu: 88.5, muslim: 10.7, other: 0.8, gdp: '44', services: 20, industry: 18, agri: 62 },
      { name: 'Ghazipur (River Transit)', pop: '4.9M', area: '3,377', density: '1,451', edu: '83.6%', urban: '20.6%', growth: '6.2%', hindu: 89.3, muslim: 10.1, other: 0.6, gdp: '35', services: 22, industry: 24, agri: 54 },
    ],
    insights: [
      { title: 'The Multi-Modal Hub (Varanasi)', desc: "Varanasi is no longer just a heritage center. It operates as the premier inland-waterway port (NW-1) connecting UP's goods directly to the Bay of Bengal.", icon: Anchor },
      { title: 'The Knowledge & Legal Capital', desc: 'Prayagraj remains the judicial center of the state, but has massively expanded its tech-parks and educational institutes, driving the eastern knowledge economy.', icon: BookOpen },
      { title: 'The Northern Anchor (Gorakhpur)', desc: 'Driven by intense infrastructure focus, Gorakhpur acts as the healthcare, manufacturing, and transit anchor for northeastern UP and the Nepal border region.', icon: Shield },
    ],
  },
  bundel: {
    tabId: 'bundel', tabLabel: 'Bundelkhand', theme: themes.bundel,
    header: { title: 'Bundelkhand Mega Region', subtitle: '(Southern Plateau Zone)', desc: "The resource and green-energy backbone. Bundelkhand has transitioned from an arid plateau into a high-tech defense corridor and India's largest solar farm zone.", icon: Mountain },
    metrics: [
      { title: 'Zone Population', value: '1.7 Crore', subtext: 'Sparse, resource-rich plateau', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
      { title: 'Zone Economy', value: '$155 Billion', subtext: 'Driven by Defense & Energy', icon: CircleDollarSign, color: 'text-lime-400', bg: 'bg-lime-500/10 border-lime-500/20' },
      { title: 'Zone Area', value: '29,000 sq km', subtext: 'Massive land availability', icon: Map, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
      { title: 'Avg. Density', value: '586 / sq km', subtext: 'Lowest density in the state', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
      { title: 'Literacy Rate', value: '82.9%', subtext: 'Industrial upskilling in progress', icon: BookOpen, color: 'text-lime-400', bg: 'bg-lime-500/10 border-lime-500/20' },
      { title: 'Urbanization', value: '41.8%', subtext: 'Concentrated in defense nodes', icon: Building, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
    ],
    districts: [
      { name: 'Jhansi (Defense/Transit)', pop: '3.2M', area: '5,024', density: '637', edu: '87.6%', urban: '64.7%', growth: '10.3%', hindu: 88.5, muslim: 9.8, other: 1.7, gdp: '63', services: 31, industry: 45, agri: 24 },
      { name: 'Lalitpur (Mining/Solar)', pop: '2.1M', area: '5,039', density: '417', edu: '80.4%', urban: '29.8%', growth: '7.1%', hindu: 92.5, muslim: 5.5, other: 2.0, gdp: '29', services: 15, industry: 51, agri: 34 },
      { name: 'Banda (Agri/Trade)', pop: '2.7M', area: '4,408', density: '612', edu: '82.1%', urban: '31.6%', growth: '5.3%', hindu: 91.0, muslim: 8.5, other: 0.5, gdp: '24', services: 16, industry: 18, agri: 66 },
      { name: 'Jalaun (Solar/Industrial)', pop: '2.4M', area: '4,565', density: '526', edu: '83.5%', urban: '38.9%', growth: '8.4%', hindu: 89.5, muslim: 10.1, other: 0.4, gdp: '28', services: 18, industry: 42, agri: 40 },
      { name: 'Mahoba (Heritage/Water)', pop: '1.4M', area: '3,144', density: '445', edu: '78.2%', urban: '34.7%', growth: '4.9%', hindu: 93.4, muslim: 6.2, other: 0.4, gdp: '13', services: 14, industry: 24, agri: 62 },
      { name: 'Chitrakoot (Tourism)', pop: '1.6M', area: '3,216', density: '497', edu: '79.1%', urban: '24.2%', growth: '5.8%', hindu: 95.5, muslim: 4.2, other: 0.3, gdp: '14', services: 22, industry: 12, agri: 66 },
    ],
    insights: [
      { title: 'The Defense Industrial Node', desc: 'Jhansi serves as the absolute core of the UP Defense Corridor, manufacturing artillery, drones, and heavy armor for the national armed forces.', icon: Shield },
      { title: 'The Solar Battery of UP', desc: 'Lalitpur and Jalaun leverage their massive arid land banks to host gigawatt-scale solar parks, supplying green energy to the northern industrial cities.', icon: Zap },
      { title: 'Resource & Eco-Tourism', desc: 'Chitrakoot and Mahoba are balancing resource mining with high-value eco and spiritual tourism, deeply connected via the Bundelkhand Expressway.', icon: Mountain },
    ],
  },
}

const MetricCard = ({ title, value, subtext, icon: Icon, color, bg }) => (
  <div className={`rounded-2xl border p-6 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl ${bg}`}>
    <div className="flex items-start justify-between">
      <div>
        <p className="mb-1 text-sm font-medium text-slate-300">{title}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p className="mt-2 text-xs text-slate-400">{subtext}</p>
      </div>
      <div className="rounded-xl bg-slate-900/50 p-3">
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
    </div>
  </div>
)

const InsightCard = ({ title, desc, icon: Icon, theme }) => (
  <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.22)] backdrop-blur-xl transition-all duration-500 hover:bg-white/14">
    <div className={`shrink-0 rounded-xl border p-3 shadow-inner ${theme.bgPrimarySubtle} ${theme.textPrimary} ${theme.borderPrimaryStrong}`}>
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h4 className="mb-2 font-semibold text-slate-50">{title}</h4>
      <p className="text-sm leading-relaxed text-slate-300">{desc}</p>
    </div>
  </div>
)

const DemographicBar = ({ district, hindu, muslim, other }) => (
  <div className="mb-6 rounded-xl border border-white/10 bg-white/8 p-4 backdrop-blur-md">
    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
      <Map className="h-4 w-4 text-slate-400" />
      {district}
    </div>
    <div className="mb-4 flex h-3 w-full overflow-hidden rounded-full border border-slate-700/50 bg-slate-950/80 shadow-inner">
      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-500 hover:brightness-125" style={{ width: `${hindu}%` }}></div>
      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 hover:brightness-125" style={{ width: `${muslim}%` }}></div>
      <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-400 transition-all duration-500 hover:brightness-125" style={{ width: `${other}%` }}></div>
    </div>
    <div className="grid grid-cols-3 gap-2 rounded-lg border border-white/8 bg-slate-950/35 p-2.5 text-[11px] font-bold uppercase tracking-wider md:text-xs">
      <div className="flex flex-col items-center justify-center gap-1 border-r border-slate-700/50 text-center">
        <div className="mb-0.5 flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></div><span className="text-slate-400">Hindu</span></div>
        <span className="text-sm text-orange-400">{hindu}%</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 border-r border-slate-700/50 text-center">
        <div className="mb-0.5 flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div><span className="text-slate-400">Muslim</span></div>
        <span className="text-sm text-emerald-400">{muslim}%</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <div className="mb-0.5 flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div><span className="text-slate-400">Other</span></div>
        <span className="text-sm text-purple-400">{other}%</span>
      </div>
    </div>
  </div>
)

const CompositionBar = ({ district, services, industry, agri }) => (
  <div className="mb-6 rounded-xl border border-white/10 bg-white/8 p-4 backdrop-blur-md">
    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
      <Map className="h-4 w-4 text-slate-400" />
      {district}
    </div>
    <div className="mb-4 flex h-3 w-full overflow-hidden rounded-full border border-slate-700/50 bg-slate-950/80 shadow-inner">
      <div className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500 hover:brightness-125" style={{ width: `${services}%` }}></div>
      <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-500 hover:brightness-125" style={{ width: `${industry}%` }}></div>
      <div className="h-full bg-gradient-to-r from-emerald-500 to-lime-400 transition-all duration-500 hover:brightness-125" style={{ width: `${agri}%` }}></div>
    </div>
    <div className="grid grid-cols-3 gap-2 rounded-lg border border-white/8 bg-slate-950/35 p-2.5 text-[11px] font-bold uppercase tracking-wider md:text-xs">
      <div className="flex flex-col items-center justify-center gap-1 border-r border-slate-700/50 text-center">
        <div className="mb-0.5 flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"></div><span className="text-slate-400">Services</span></div>
        <span className="text-sm text-cyan-400">{services}%</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 border-r border-slate-700/50 text-center">
        <div className="mb-0.5 flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]"></div><span className="text-slate-400">Industry</span></div>
        <span className="text-sm text-orange-400">{industry}%</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <div className="mb-0.5 flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.6)]"></div><span className="text-slate-400">Agri</span></div>
        <span className="text-sm text-lime-400">{agri}%</span>
      </div>
    </div>
  </div>
)

export default function App() {
  const [activeTab, setActiveTab] = useState('west')
  const data = regionsData[activeTab]
  const HeaderIcon = data.header.icon

  return (
    <div className={`relative min-h-screen overflow-hidden bg-gradient-to-br p-4 font-sans transition-colors duration-700 ease-in-out md:p-8 lg:p-12 ${data.theme.bgStart} ${data.theme.bgEnd}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className={`absolute -left-24 top-[-5rem] h-80 w-80 rounded-full blur-3xl ${data.theme.orbPrimary}`}></div>
        <div className={`absolute bottom-[-6rem] right-[-4rem] h-96 w-96 rounded-full blur-3xl ${data.theme.orbSecondary}`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.03)_28%,rgba(255,255,255,0.06)_62%,rgba(255,255,255,0.02)_100%)]"></div>
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        <div className="mb-8 flex justify-center">
          <div className="flex w-full flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 p-2 shadow-[0_20px_60px_rgba(15,23,42,0.22)] backdrop-blur-xl md:w-auto md:rounded-full">
            {Object.keys(regionsData).map((key) => {
              const region = regionsData[key]
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 md:rounded-full md:px-8 md:text-sm ${isActive ? `${region.theme.bgPrimarySubtle} ${region.theme.textPrimary} ${region.theme.borderPrimaryStrong} border ${region.theme.shadowPrimary}` : 'border border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
                >
                  <region.header.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{region.tabLabel}</span>
                  <span className="sm:hidden">{key.toUpperCase()}</span>
                </button>
              )
            })}
          </div>
        </div>

        <header className="space-y-4 text-center">
          <div className={`mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium shadow-[0_0_10px_currentColor] ${data.theme.bgPrimarySubtle} ${data.theme.textPrimary} ${data.theme.borderPrimarySubtle}`}>
            <HeaderIcon className="h-4 w-4" />
            2050 Regional Economic Zones
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${data.theme.gradient}`}>{data.header.title}</span>
          </h1>
          <h2 className="text-xl font-medium text-slate-300 md:text-2xl">{data.header.subtitle}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-400">{data.header.desc}</p>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.metrics.map((metric, idx) => <MetricCard key={idx} {...metric} />)}
          </div>
        </section>

        <section>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur-xl">
            <div className="border-b border-white/10 bg-white/6 p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold text-white">
                <Map className={`h-5 w-5 ${data.theme.textPrimary}`} />
                Primary District Telemetry (2050)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse whitespace-nowrap text-left">
                <thead>
                    <tr className="bg-slate-950/45 text-sm uppercase tracking-wider text-slate-300">
                    <th className="p-4 pl-6 font-semibold">District Node</th>
                    <th className={`p-4 font-semibold ${data.theme.textSecondary}`}>Pop.</th>
                    <th className="p-4 font-semibold text-amber-400">GDP ($B)</th>
                    <th className="p-4 font-semibold">Area (km²)</th>
                    <th className="p-4 font-semibold">Density</th>
                    <th className="p-4 font-semibold">Lit. Rate</th>
                    <th className="p-4 font-semibold">Urban %</th>
                    <th className="p-4 font-semibold">Growth Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/6">
                  {data.districts.map((district, idx) => (
                    <tr key={idx} className="transition-colors duration-200 hover:bg-white/6">
                      <td className="p-4 pl-6 font-medium text-white">{district.name}</td>
                      <td className={`p-4 font-bold ${data.theme.textSecondary}`}>{district.pop}</td>
                      <td className="p-4 font-medium text-amber-400/90">${district.gdp}B</td>
                      <td className="p-4 text-slate-300">{district.area}</td>
                      <td className="p-4 text-slate-300">{district.density}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${parseFloat(district.edu) > 85 ? `${data.theme.bgPrimarySubtle} ${data.theme.textPrimary} ${data.theme.borderPrimaryStrong}` : 'border-slate-600 bg-slate-800 text-slate-300'}`}>
                          {district.edu}
                        </span>
                      </td>
                      <td className="mt-0.5 flex items-center gap-1.5 p-4 text-slate-300"><Building className={`h-3.5 w-3.5 ${data.theme.textPrimary}`} /> {district.urban}</td>
                      <td className="p-4 text-slate-300">
                        <span className={`flex items-center gap-1 ${parseFloat(district.growth) < 10 && parseFloat(district.growth) > 0 ? 'text-amber-400' : parseFloat(district.growth) < 0 ? 'text-indigo-400' : 'text-emerald-400'}`}>
                          <TrendingUp className={`h-3.5 w-3.5 ${parseFloat(district.growth) < 0 ? 'rotate-180' : ''}`} /> {parseFloat(district.growth) > 0 ? '+' : ''}{district.growth}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <section className="space-y-6 xl:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur-xl lg:p-8">
              <h2 className="mb-8 flex items-center gap-2 text-xl font-bold text-white">
                <PieChart className="h-6 w-6 text-amber-400" />
                Demographic Equilibrium (2050)
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                <div className="space-y-4">
                  {data.districts.slice(0, 3).map((d) => <DemographicBar key={d.name} district={d.name} hindu={d.hindu} muslim={d.muslim} other={d.other} />)}
                </div>
                <div className="space-y-4">
                  {data.districts.slice(3, 6).map((d) => <DemographicBar key={d.name} district={d.name} hindu={d.hindu} muslim={d.muslim} other={d.other} />)}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.24)] backdrop-blur-xl lg:p-8">
              <h2 className="mb-8 flex items-center gap-2 text-xl font-bold text-white">
                <PieChart className="h-6 w-6 text-cyan-400" />
                Economic Composition (2050)
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                <div className="space-y-4">
                  {data.districts.slice(0, 3).map((d) => <CompositionBar key={d.name} district={d.name} services={d.services} industry={d.industry} agri={d.agri} />)}
                </div>
                <div className="space-y-4">
                  {data.districts.slice(3, 6).map((d) => <CompositionBar key={d.name} district={d.name} services={d.services} industry={d.industry} agri={d.agri} />)}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4 xl:col-span-1">
            <h2 className="mb-2 flex items-center gap-2 px-2 text-xl font-bold text-white">
              <Activity className={`h-5 w-5 ${data.theme.textPrimary}`} />
              Regional Architecture
            </h2>
            {data.insights.map((insight, idx) => <InsightCard key={idx} {...insight} theme={data.theme} />)}
          </section>
        </div>
      </div>
    </div>
  )
}
