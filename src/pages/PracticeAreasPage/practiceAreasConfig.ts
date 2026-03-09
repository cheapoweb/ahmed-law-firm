/**
 * Single source of truth for Practice Areas: 6 main pages and their submenus.
 * Used by Header, AllPracticeAreasSection, PracticeAreaSidebar, and content config.
 */

export interface PracticeAreaLink {
  label: string
  path: string
  slug: string
}

export interface PracticeAreaCategory {
  title: string
  path: string
  slug: string
  items: PracticeAreaLink[]
}

export const PRACTICE_AREAS_CATEGORIES: PracticeAreaCategory[] = [
  {
    title: 'Personal Injury',
    slug: 'personal-injury',
    path: '/practice-areas/personal-injury',
    items: [
      { label: 'Construction Accidents', slug: 'construction-accidents', path: '/practice-areas/construction-accidents' },
      { label: 'Slip & Fall', slug: 'slip-fall', path: '/practice-areas/slip-fall' },
      { label: 'Premises Liability', slug: 'premises-liability', path: '/practice-areas/premises-liability' },
      { label: 'Workplace Injuries', slug: 'workplace-injuries', path: '/practice-areas/workplace-injuries' },
    ],
  },
  {
    title: 'Workers Compensation',
    slug: 'workers-compensation',
    path: '/practice-areas/workers-compensation',
    items: [
      { label: 'Workplace Injuries', slug: 'workplace-injuries', path: '/practice-areas/workplace-injuries' },
      { label: 'Construction Site Injuries', slug: 'construction-site-injuries', path: '/practice-areas/construction-site-injuries' },
      { label: 'Repetitive Stress Injuries', slug: 'repetitive-stress-injuries', path: '/practice-areas/repetitive-stress-injuries' },
      { label: 'Occupational Illness', slug: 'occupational-illness', path: '/practice-areas/occupational-illness' },
    ],
  },
  {
    title: 'Medical Malpractice',
    slug: 'medical-malpractice',
    path: '/practice-areas/medical-malpractice',
    items: [
      { label: 'Surgical Errors', slug: 'surgical-errors', path: '/practice-areas/surgical-errors' },
      { label: 'Misdiagnosis / Delayed Diagnosis', slug: 'misdiagnosis-delayed-diagnosis', path: '/practice-areas/misdiagnosis-delayed-diagnosis' },
      { label: 'Birth Injuries', slug: 'birth-injuries', path: '/practice-areas/birth-injuries' },
      { label: 'Medication Errors', slug: 'medication-errors', path: '/practice-areas/medication-errors' },
      { label: 'Hospital Negligence', slug: 'hospital-negligence', path: '/practice-areas/hospital-negligence' },
    ],
  },
  {
    title: 'Vehicle Accidents',
    slug: 'vehicle-accidents',
    path: '/practice-areas/vehicle-accidents',
    items: [
      { label: 'Car Accidents', slug: 'car-accidents', path: '/practice-areas/car-accidents' },
      { label: 'Motorcycle Accidents', slug: 'motorcycle-accidents', path: '/practice-areas/motorcycle-accidents' },
      { label: 'Truck Accidents', slug: 'truck-accidents', path: '/practice-areas/truck-accidents' },
      { label: 'Bicycle Accidents', slug: 'bicycle-accidents', path: '/practice-areas/bicycle-accidents' },
      { label: 'Pedestrian Accidents', slug: 'pedestrian-accidents', path: '/practice-areas/pedestrian-accidents' },
      { label: 'Bus Accidents', slug: 'bus-accidents', path: '/practice-areas/bus-accidents' },
      { label: 'Rideshare Accidents (Uber/Lyft)', slug: 'rideshare-accidents', path: '/practice-areas/rideshare-accidents' },
    ],
  },
  {
    title: 'Transportation Accidents',
    slug: 'transportation-accidents',
    path: '/practice-areas/transportation-accidents',
    items: [
      { label: 'Subway Accidents', slug: 'subway-accidents', path: '/practice-areas/subway-accidents' },
      { label: 'Train Accidents', slug: 'train-accidents', path: '/practice-areas/train-accidents' },
      { label: 'Plane Accidents', slug: 'plane-accidents', path: '/practice-areas/plane-accidents' },
      { label: 'Boating Accidents', slug: 'boating-accidents', path: '/practice-areas/boating-accidents' },
    ],
  },
  {
    title: 'Catastrophic & Abuse Cases',
    slug: 'catastrophic-abuse-cases',
    path: '/practice-areas/catastrophic-abuse-cases',
    items: [
      { label: 'Wrongful Death', slug: 'wrongful-death', path: '/practice-areas/wrongful-death' },
      { label: 'Nursing Home Abuse', slug: 'nursing-home-abuse', path: '/practice-areas/nursing-home-abuse' },
    ],
  },
]

/** All slugs that have a page (main + sub). Used for route/content config. */
export function getAllPracticeAreaSlugs(): string[] {
  const slugs: string[] = []
  for (const cat of PRACTICE_AREAS_CATEGORIES) {
    slugs.push(cat.slug)
    for (const item of cat.items) {
      if (!slugs.includes(item.slug)) slugs.push(item.slug)
    }
  }
  return slugs
}

/** Get the main category slug for a given page slug (for sidebar highlighting). */
export function getCategorySlugForPage(slug: string): string | null {
  for (const cat of PRACTICE_AREAS_CATEGORIES) {
    if (cat.slug === slug) return cat.slug
    if (cat.items.some((i) => i.slug === slug)) return cat.slug
  }
  return null
}
