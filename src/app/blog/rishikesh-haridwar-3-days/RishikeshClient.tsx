"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import SmartImage from "@/components/ui/SmartImage";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const TOC = [
  {id:"honest",emoji:"⚡",label:"Rishikesh vs Haridwar"},
  {id:"season",emoji:"🌡️",label:"Best Time to Visit"},
  {id:"howtoreach",emoji:"🚌",label:"Getting There"},
  {id:"itinerary",emoji:"📅",label:"3-Day Itinerary"},
  {id:"rafting",emoji:"🚣",label:"Rafting Guide"},
  {id:"budget",emoji:"💰",label:"Budget Breakdown"},
  {id:"tips",emoji:"💡",label:"Pro Tips"},
  {id:"faq",emoji:"❓",label:"FAQ"},
];

function RP(){const[p,setP]=useState(0);useEffect(()=>{const u=()=>{const e=document.documentElement;setP(Math.min(100,(e.scrollTop/(e.scrollHeight-e.clientHeight))*100))};window.addEventListener("scroll",u,{passive:true});return()=>window.removeEventListener("scroll",u)},[]);return<div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-orange-500 transition-all duration-100" style={{width:`${p}%`}}/></div>}
function FAQ({q,a}:{q:string;a:string}){const[o,setO]=useState(false);return<div className="border border-parchment-2 rounded-xl overflow-hidden bg-white"><button onClick={()=>setO(!o)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"><span className="font-medium text-sm text-ink pr-4">{q}</span><span className={`text-orange-500 text-lg flex-shrink-0 transition-transform duration-200 ${o?"rotate-45":""}`}>+</span></button>{o&&<div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}</div>}

export default function RishikeshClient(){
  const[m,setM]=useState(false);
  const D=({day,title,items,cost}:{day:string;title:string;items:string[];cost:string})=>{
    const[o,setO]=useState(true);
    return<div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4"><button onClick={()=>setO(!o)} className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors"><div className="flex items-center gap-3"><span className="font-serif text-xl text-orange-600 font-light">{day}</span><span className="text-sm text-ink font-medium">{title}</span></div><span className="text-muted text-lg">{o?"−":"+"}</span></button>{o&&<div className="p-5"><ul className="space-y-2.5 mb-4">{items.map((item,i)=><li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed"><span className="text-orange-400 mt-1 flex-shrink-0 text-xs">●</span>{item}</li>)}</ul><div className="pt-3 border-t border-parchment-2"><span className="text-xs text-muted font-light">Est. cost: </span><span className="text-xs font-medium text-orange-600">{cost}</span></div></div>}</div>;
  };
  return<>
    <RP/><TableOfContents items={TOC}/><Navbar onPlanTrip={()=>setM(true)}/>
    <Breadcrumb destination="Rishikesh & Haridwar" />
    <main className="bg-cream min-h-screen">
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <SmartImage imageKey="rishikeshHero" fallback="https://images.unsplash.com/photo-1609766934887-3b4e0a8a62a0?w=1600&q=85" alt="Rishikesh Ganga river ghats Haridwar" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/30"/>
        <div className="absolute top-24 left-0 right-0 px-6 md:px-14"><div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs"><Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span><span className="text-white/70">Rishikesh & Haridwar</span></div></div>
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10"><div className="max-w-[860px] mx-auto">
          <div className="flex items-center gap-3 mb-4 flex-wrap"><span className="bg-orange-600 text-white text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Yoga Capital of the World</span><span className="text-white/60 text-xs">March 2026</span><span className="text-white/30">·</span><span className="text-white/60 text-xs">11 min read</span></div>
          <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Rishikesh & Haridwar in 3 Days:<em className="italic text-orange-300"> Rafting, Yoga & Ganga Aarti</em></h1>
          <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">White water rafting, Beatles Ashram ruins, sunrise yoga, and the most dramatic evening ceremony in India. Real costs, what to avoid, and where tourists overpay.</p>
        </div></div>
      </div>

      <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">
        <div className="flex items-center gap-4 text-xs text-muted mb-10 pb-8 border-b border-parchment-2"><span>🕉️ Uttarakhand</span><span>·</span><span>🗓 3 Days</span><span>·</span><span>💰 From ₹3,000</span></div>

        <section id="honest" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Rishikesh vs Haridwar — know the difference</h2>
          <blockquote className="border-l-4 border-orange-500 pl-6 mb-6 bg-orange-50 rounded-r-xl py-4 pr-4"><p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">Haridwar is the sacred city — ancient ghats, massive Ganga Aarti, pilgrims from across India. Rishikesh is the adventure town — rafting, yoga retreats, Beatles Ashram. They&apos;re 24km apart. You need both.</p></blockquote>
          <p className="text-sm text-muted font-light leading-relaxed mb-4">Haridwar is one of the four Kumbh Mela sites. The evening Ganga Aarti at Har Ki Pauri — 50,000 people watching priests swing fire over the river — is the single most overwhelming spectacle in India.</p>
          <p className="text-sm text-muted font-light leading-relaxed mb-6">Rishikesh is where the Beatles came in 1968. The Ganges here is clear green and cold. The rafting stretch is one of the best beginner white-water routes in Asia. The cafes are good. The yoga is genuine.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">{[{icon:"🚌",val:"249km",label:"From Delhi"},{icon:"🌡️",val:"Oct–Jun",label:"Best season"},{icon:"🚣",val:"Grade 3–4",label:"Rafting"},{icon:"💰",val:"₹3,000+",label:"Budget from"}].map(s=><div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center"><div className="text-2xl mb-1">{s.icon}</div><p className="font-serif text-lg font-light text-ink">{s.val}</p><p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p></div>)}</div>
        </section>

        <section id="season" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[{s:"Oct–Nov",i:"🍁",t:"Autumn — Best Overall",d:"Cool 15–25°C, Ganges clear green, rafting excellent. Post-monsoon — high river but safe. Best overall season.",b:"Recommended",c:"bg-green-50 border-green-200"},{s:"Feb–Jun",i:"🌸",t:"Spring — Rafting Peak",d:"Peak rafting and yoga season. March–May crowded. Gets hot by May (35°C). Best for activities.",b:"Rafting peak",c:"bg-amber-50 border-amber-200"},{s:"Dec–Jan",i:"❄️",t:"Winter — Peaceful",d:"5–15°C, almost no tourists. Extraordinary winter Ganga Aarti in fog. Great for serious yoga.",b:"Peaceful",c:"bg-blue-50 border-blue-200"},{s:"Jul–Sep",i:"🌧️",t:"Monsoon — Avoid",d:"Heavy rain, Ganges floods brown, all rafting stops. Not recommended.",b:"Avoid",c:"bg-red-50 border-red-200"}].map(s=><div key={s.s} className={`rounded-xl p-4 border ${s.c}`}><div className="flex items-center gap-2 mb-2"><span className="text-xl">{s.i}</span><div><p className="font-medium text-sm text-ink">{s.s} — {s.t}</p><p className="text-[0.65rem] font-medium text-teal">{s.b}</p></div></div><p className="text-xs text-muted font-light leading-relaxed">{s.d}</p></div>)}
          </div>
        </section>

        <section id="howtoreach" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚌 Getting There from Delhi</h2>
          <div className="space-y-3">
            {[{i:"🚌",t:"Overnight bus (best value)",d:"Delhi Kashmere Gate → Rishikesh/Haridwar: Rs.400–Rs.800, 6–7hrs. Depart 10pm, arrive 5am. Book on redbus.in.",b:"Best value",c:"bg-green-50 border-green-200"},{i:"🚂",t:"Train to Haridwar",d:"Delhi → Haridwar: 4–5hrs, Rs.200–Rs.500. Shatabdi is fastest. Then local bus to Rishikesh (Rs.50–Rs.150, 45min).",b:"Comfortable",c:"bg-amber-50 border-amber-200"},{i:"🚗",t:"Drive from Delhi",d:"249km via NH58, 5–6hrs. Straightforward until Haridwar, then scenic mountain road.",b:"Flexible",c:"bg-parchment border-parchment-2"}].map(t=><div key={t.t} className={`rounded-xl p-4 border ${t.c}`}><div className="flex items-start gap-3"><span className="text-2xl flex-shrink-0">{t.i}</span><div className="flex-1"><div className="flex items-center gap-2 mb-1 flex-wrap"><p className="font-semibold text-sm text-ink">{t.t}</p><span className="text-[0.62rem] bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/50">{t.b}</span></div><p className="text-xs text-muted font-light leading-relaxed">{t.d}</p></div></div></div>)}
          </div>
        </section>

        <section id="itinerary" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 3-Day Itinerary</h2>
          <D day="Day 1" title="Arrive Haridwar — Ganga Aarti Evening" cost="₹800–₹1,500" items={["Arrive Haridwar morning. Check in near Har Ki Pauri (Rs.500–Rs.2,500/night). Walk to ghats — 10 minutes from most accommodation.","Har Ki Pauri at noon — walk the ghats, watch pilgrims bathing, see the Charanamrit footprint temple. Don't hire a pandit unless you want to — they're persistent but optional.","Mansa Devi Temple by ropeway (Rs.126 return) — hilltop overlooking the Ganges. Go at 3pm. Views at sunset extraordinary.","6pm Ganga Aarti at Har Ki Pauri — ARRIVE 5:30PM for a front spot. 7 priests swing fire lamps as 50,000 people watch. Buy a diya (Rs.20) to float on the river. Free entry.","Dinner at Mohan Ji Puri Wale — famous puri sabzi, Rs.60–Rs.80. Best meal in Haridwar."]}/>
          <D day="Day 2" title="Move to Rishikesh — Rafting + Beatles Ashram" cost="₹1,200–₹2,500" items={["Morning: local bus to Rishikesh (Rs.50–Rs.80, 45min). Check in near Laxman Jhula (Rs.500–Rs.1,500/night).","9am: White water rafting — 16km Brahmpuri → Rishikesh route, Rs.600–Rs.900/person. Grade 3 rapids including Roller Coaster and Three Blind Mice. 2.5–3 hours.","Afternoon: Beatles Ashram (Rs.600 entry). The Maharishi's abandoned meditation centre, covered in extraordinary murals. Dome-shaped meditation cells where the Beatles composed White Album songs still stand.","Evening: Laxman Jhula suspension bridge at sunset — walk across, extraordinary river views. Triambakeshwar Temple at the far end.","Dinner at Little Buddha Cafe (rooftop, river view) or Freedom Cafe — Rs.150–Rs.350."]}/>
          <D day="Day 3" title="Sunrise Yoga + Neelkanth Temple + Depart" cost="₹600–₹1,200" items={["6am: Sunrise yoga at Parmarth Niketan Ashram — free morning yoga on the riverbank. Mat rental Rs.50. The Ganges at dawn, mountains in the mist — extraordinary.","Neelkanth Mahadev Temple (32km, Rs.400–Rs.600 by shared jeep) — jungle temple where Shiva drank the cosmic poison. Very atmospheric on a weekday.","Alternative: Kunjapuri Temple (25km) — panoramic Himalayan view, much less visited. On a clear morning you can see Gangotri glacier.","Return Rishikesh noon. Last coffee at German Bakery. Bus/train back to Delhi afternoon."]}/>
        </section>

        <section id="rafting" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚣 Rafting Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[{t:"16km route (Brahmpuri → Rishikesh)",g:"Grade 3",p:"Rs.600–Rs.900",d:"Best for beginners. 2.5–3 hours. 5–6 rapids including Roller Coaster and Three Blind Mice. Most popular. Includes riverside camping option.",c:"bg-green-50 border-green-200"},{t:"36km route (Marine Drive → Rishikesh)",g:"Grade 4–5",p:"Rs.1,200–Rs.1,800",d:"Advanced — full day. Huge rapids including The Wall. Swimming ability required. Don't do this as your first time rafting.",c:"bg-amber-50 border-amber-200"},{t:"When to book",g:"",p:"",d:"Book evening before at the camps — you'll negotiate 15–20% off morning prices. Never pre-book rafting from Delhi — overpriced by 50–100%.",c:"bg-parchment border-parchment-2"},{t:"What to bring",g:"",p:"",d:"Clothes you don't mind getting wet. Secure footwear, no flip-flops. Waterproof bag for phone. Helmet and life jacket provided.",c:"bg-parchment border-parchment-2"}].map(item=><div key={item.t} className={`rounded-xl p-4 border ${item.c}`}><div className="flex items-center justify-between mb-2 flex-wrap gap-2"><p className="font-medium text-sm text-ink">{item.t}</p>{item.g&&<span className="text-[0.62rem] bg-white/70 text-muted px-2 py-0.5 rounded-full border">{item.g}</span>}</div>{item.p&&<p className="text-xs text-teal font-medium mb-2">{item.p}</p>}<p className="text-xs text-muted font-light leading-relaxed">{item.d}</p></div>)}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4"><p className="text-sm text-red-800 font-light leading-relaxed"><strong className="font-medium">⚠️ Safety:</strong> All rafting stops July–August during monsoon. Only book IRCA-certified operators. If the Ganges looks brown and fast, it&apos;s not safe — don&apos;t let anyone talk you into it.</p></div>
        </section>

        <section id="budget" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
          <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
            <table className="w-full text-sm"><thead><tr className="bg-parchment"><th className="text-left p-3.5 text-xs font-medium text-muted">Category</th><th className="p-3.5 text-xs font-medium text-amber-700 text-center">Budget</th><th className="p-3.5 text-xs font-medium text-rose-700 text-center">Mid-Range</th><th className="p-3.5 text-xs font-medium text-purple-700 text-center">Comfortable</th></tr></thead>
            <tbody className="divide-y divide-parchment-2">{[["🚌 Transport (Delhi return)","₹800–₹1,600","₹800–₹1,600","₹3,000–₹5,000"],["🏨 Accommodation (2N)","₹1,000–₹2,000","₹2,500–₹5,000","₹5,000–₹10,000"],["🚣 Rafting","₹600–₹900","₹600–₹900","₹1,200–₹1,800"],["🍽 Food (3 days)","₹600–₹1,000","₹1,200–₹2,000","₹2,500–₹4,000"],["🎯 Entry + Activities","₹800–₹1,200","₹1,200–₹2,000","₹2,000–₹3,000"],["TOTAL","₹3,000–₹5,500","₹5,500–₹9,500","₹10,000–₹18,000"]].map(([cat,...vals])=><tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors"><td className="p-3.5 text-xs text-ink font-medium">{cat}</td>{vals.map((v,i)=><td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}</tr>)}</tbody></table>
          </div>
        </section>

        <AffiliateBlock destination="Rishikesh Uttarakhand" hotels={[{name:"Taj Rishikesh Resort & Spa",type:"Luxury · Ganges view",price:"From ₹12,000/night",rating:"5",badge:"Most luxurious",url:"https://www.booking.com/hotel/in/taj-rishikesh.html?aid=YOUR_AFFILIATE_ID"},{name:"Zostel Rishikesh",type:"Hostel · Laxman Jhula",price:"From ₹400/bed",rating:"4",badge:"Best budget",url:"https://www.booking.com/hotel/in/zostel-rishikesh.html?aid=YOUR_AFFILIATE_ID"},{name:"Brijwasi Royal Haridwar",type:"Hotel · Har Ki Pauri",price:"From ₹2,000/night",rating:"4",badge:"Best Haridwar",url:"https://www.booking.com/hotel/in/brijwasi-royal-haridwar.html?aid=YOUR_AFFILIATE_ID"},{name:"Aloha on the Ganges",type:"Resort · Rishikesh",price:"From ₹4,500/night",rating:"4",badge:"River views",url:"https://www.booking.com/hotel/in/aloha-on-the-ganges.html?aid=YOUR_AFFILIATE_ID"}]} activities={[{name:"Rishikesh White Water Rafting 16km",duration:"3hrs",price:"From ₹600/person",badge:"Must do",url:"https://www.getyourguide.com/rishikesh-l3010/?partner_id=PSZA5UI"},{name:"Haridwar Ganga Aarti Evening Tour",duration:"3hrs",price:"From ₹500/person",badge:"Iconic",url:"https://www.getyourguide.com/rishikesh-l3010/?partner_id=PSZA5UI"},{name:"Sunrise Yoga Class Rishikesh",duration:"1.5hrs",price:"From ₹300/person",url:"https://www.getyourguide.com/rishikesh-l3010/?partner_id=PSZA5UI"},{name:"Beatles Ashram + Rafting Combo",duration:"Full day",price:"From ₹1,200/person",url:"https://www.getyourguide.com/rishikesh-l3010/?partner_id=PSZA5UI"}]}/>

        <DestinationGallery title="Rishikesh & Haridwar" subtitle="The Yoga Capital and the Sacred City." spots={[{name:"Ganga Aarti Haridwar",query:"ganga aarti haridwar fire ceremony night ganges",desc:"50,000 people watch priests swing fire lamps over the Ganges at Har Ki Pauri."},{name:"White Water Rafting",query:"rishikesh white water rafting ganges river india rapids",desc:"Grade 3–4 rapids on the clear green Ganges — Asia's best beginner rafting route."},{name:"Laxman Jhula",query:"laxman jhula rishikesh suspension bridge ganges river",desc:"The iconic suspension bridge over the Ganges at Rishikesh."},{name:"Beatles Ashram",query:"beatles ashram rishikesh maharishi ruins murals abandoned",desc:"The abandoned meditation centre where John, Paul, George and Ringo composed the White Album."},{name:"Sunrise Yoga",query:"yoga rishikesh ganges river sunrise mountains morning",desc:"Yoga on the riverbank at dawn with the Himalayan foothills behind you."}]}/>

        <section id="tips" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[{i:"🔥",t:"Ganga Aarti — arrive 45 mins early",d:"Front area fills by 6pm. Arrive 5:30pm for the 7pm ceremony. Sit on the stone ghats rather than standing.",c:"bg-orange-50 border-orange-200"},{i:"🎸",t:"Beatles Ashram on a weekday",d:"Weekends fill with tourists. Tuesday morning you can walk it nearly alone — the meditation cells, murals, ruined stage.",c:"bg-amber-50 border-amber-200"},{i:"🌊",t:"Negotiate rafting the evening before",d:"Walk to rafting camps 6–8pm. Operators compete for bookings — negotiate 15–20% off morning prices.",c:"bg-blue-50 border-blue-200"},{i:"🍵",t:"Chotiwala Restaurant is a tourist trap",d:"The famous statue restaurant is mediocre food at tourist prices. Eat at the small dhabas behind Laxman Jhula — same food, half price.",c:"bg-rose-50 border-rose-200"},{i:"📵",t:"No alcohol or non-veg in Haridwar",d:"This is strictly enforced — it's a holy city. Rishikesh is more relaxed but officially also dry. Don't bring alcohol to the ghats.",c:"bg-purple-50 border-purple-200"},{i:"🧘",t:"Parmarth Niketan — free Ganga Aarti",d:"Rishikesh has its own Ganga Aarti at Parmarth Niketan (7pm). Much smaller than Haridwar but very atmospheric with live classical music.",c:"bg-green-50 border-green-200"}].map(t=><div key={t.t} className={`rounded-xl p-4 border ${t.c}`}><div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{t.i}</span><div><p className="font-medium text-sm text-ink mb-1">{t.t}</p><p className="text-xs text-muted font-light leading-relaxed">{t.d}</p></div></div></div>)}
          </div>
        </section>

        <div className="mb-14 bg-ink rounded-2xl p-8 text-center">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
          <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Trip Planned for You?</h2>
          <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group size and budget — personalised Rishikesh + Haridwar plan in 24 hours. Free.</p>
          <button onClick={()=>setM(true)} className="btn-gold">Plan My Trip →</button>
        </div>

        <section id="faq" className="mb-14">
          <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
          <div className="space-y-3">
            {[{q:"How far is Rishikesh from Delhi?",a:"249km — 5–6 hours. Overnight bus from Kashmere Gate (Rs.400–Rs.800) or train to Haridwar then local bus."},{q:"Can I combine with Manali or Ladakh?",a:"Yes — Rishikesh is on the way north. Delhi → Haridwar → Rishikesh → Manali is the classic Himalayan highway. Add 3 days at the start."},{q:"Is rafting safe?",a:"Yes with licensed IRCA-certified operators — Grade 3–4 is beginner-friendly. Never raft July–August during monsoon floods."},{q:"Is Haridwar strictly vegetarian?",a:"Yes — no meat, eggs or alcohol enforced anywhere in Haridwar. Rishikesh is more flexible but officially also dry."},{q:"Beatles Ashram entry fee?",a:"Rs.600 per person. Open 8am–5pm, closed Mondays. Tickets at the forest department gate."}].map((item,i)=><FAQ key={i} {...item}/>)}
          </div>
        </section>
        <Comments/>
        <section className="mt-14"><h3 className="font-serif text-lg font-light text-ink mb-4">Continue Your Journey</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{[{label:"Manali 5 Days — Snow & Cafes",href:"/blog/manali-5-days"},{label:"Leh Ladakh 7 Days — Bucket List",href:"/blog/leh-ladakh-7-days"},{label:"Varanasi 3 Days — India's Sacred City",href:"/blog/varanasi-3-days"},{label:"Golden Triangle 7 Days",href:"/blog/golden-triangle-7-days"}].map(link=><Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"><span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span><span className="text-xs text-muted">Read →</span></Link>)}</div>
        </section>
        <RelatedGuides currentSlug="rishikesh-haridwar-3-days" />
      </div>
    </main>
    <Footer/><InquiryModal isOpen={m} onClose={()=>setM(false)}/>
  </>;
}
