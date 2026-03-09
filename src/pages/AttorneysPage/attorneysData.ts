import abuAhmedImage from '../../assets/Abu Ahmed.webp'
import usmanAhmedImage from '../../assets/Usman Ahmed.webp'

export interface AttorneyProfile {
  slug: string
  name: string
  title: string
  image: string
  tagline: string
  bio: string[]
  education: { school: string; degree: string }[]
  barAdmissions: string[]
  practiceAreas: string[]
  highlights: string[]
}

export const ATTORNEYS: AttorneyProfile[] = [
  {
    slug: 'abu-ahmed',
    name: 'Abu Ahmed',
    title: 'Esquire',
    image: abuAhmedImage,
    tagline: 'Founding attorney with over four decades of experience fighting for injured New Yorkers.',
    bio: [
      'Abu Ahmed founded Ahmed Law Firm in 1981 with a singular mission: to provide exceptional legal representation to individuals and families who have been injured through no fault of their own. For over forty years, he has been a steadfast advocate for victims of negligence throughout New York, including Long Island, Nassau County, Queens County, The Bronx, Brooklyn, NYC, and Suffolk County.',
      'Mr. Ahmed believes that every client deserves personalized attention and aggressive representation. He has built the firm on a foundation of trust, integrity, and an unwavering commitment to securing the compensation his clients need to move forward after life-changing injuries.',
      'Under his leadership, Ahmed Law Firm has recovered millions of dollars for clients in personal injury, medical malpractice, workers’ compensation, and wrongful death cases. He takes pride in the firm’s contingency fee structure—clients do not pay unless the firm wins their case.',
    ],
    education: [
      { school: 'Juris Doctor', degree: 'Accredited Law School' },
      { school: 'Undergraduate Studies', degree: 'Liberal Arts & Pre-Law' },
    ],
    barAdmissions: ['State of New York', 'Federal Courts in New York'],
    practiceAreas: [
      'Personal Injury',
      'Medical Malpractice',
      'Workers’ Compensation',
      'Wrongful Death',
      'Vehicle & Transportation Accidents',
      'Premises Liability',
    ],
    highlights: [
      'Founded Ahmed Law Firm in 1981',
      'Over 40 years of experience representing injury victims',
      'Millions recovered for clients across New York',
      'Contingency fee basis—no fee unless we win',
    ],
  },
  {
    slug: 'usman-ahmed',
    name: 'Usman Ahmed',
    title: 'Esquire',
    image: usmanAhmedImage,
    tagline: 'Dedicated advocate for injury victims, committed to justice and full compensation.',
    bio: [
      'Usman Ahmed brings a sharp legal mind and a deep commitment to client-centered representation at Ahmed Law Firm. He works alongside the firm’s founding attorney to serve injured individuals and their families throughout the greater New York area, including Long Island, Nassau County, Queens County, Kings County, The Bronx, Brooklyn, NYC, and Suffolk County.',
      'Mr. Ahmed understands the physical, emotional, and financial toll that serious injuries can take. He focuses on clear communication, thorough case preparation, and aggressive advocacy so that clients can focus on recovery while the firm fights for the compensation they deserve.',
      'His practice spans the full range of personal injury and related matters—from car accidents and slip-and-fall cases to medical malpractice and workers’ compensation. He is committed to the firm’s core values: no fees unless we win, and no client left without a voice.',
    ],
    education: [
      { school: 'Juris Doctor', degree: 'Accredited Law School' },
      { school: 'Undergraduate Degree', degree: 'Pre-Law & Political Science' },
    ],
    barAdmissions: ['State of New York', 'Federal Courts in New York'],
    practiceAreas: [
      'Personal Injury',
      'Car & Motor Vehicle Accidents',
      'Slip & Fall / Premises Liability',
      'Workers’ Compensation',
      'Construction & Workplace Injuries',
      'Catastrophic & Abuse Cases',
    ],
    highlights: [
      'Focused practice in personal injury and workers’ rights',
      'Committed to contingency fee representation',
      'Serving clients across the New York metro area',
      'Dedicated to securing maximum compensation for victims',
    ],
  },
]

export function getAttorneyBySlug(slug: string): AttorneyProfile | null {
  return ATTORNEYS.find((a) => a.slug === slug) ?? null
}
