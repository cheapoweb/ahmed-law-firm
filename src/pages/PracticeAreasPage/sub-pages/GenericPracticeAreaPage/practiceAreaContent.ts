export type SidebarCategory =
  | 'personal-injury'
  | 'workers-compensation'
  | 'medical-malpractice'
  | 'vehicle-accidents'
  | 'transportation-accidents'
  | 'catastrophic-abuse-cases'

export interface PageConfig {
  title: string
  subtitle: string
  contentTitle: string
  sidebarCategory?: SidebarCategory
}

export interface ContentSection {
  heading: string
  intro?: string
  orderedSteps?: { strong: string; text: string }[]
  listItems?: string[]
  paragraphs?: string[]
  videoTitle?: string
}

const DEFAULT_WHY_CHOOSE: ContentSection = {
  heading: 'Why Choose Ahmed Law Firm',
  paragraphs: [
    'With over 10 years of experience representing injury victims throughout New York, Ahmed Law Firm has the knowledge, resources, and dedication needed to secure the best possible outcome for your case. We understand the challenges you are facing and are committed to providing personalized attention and aggressive representation.',
    'Our track record speaks for itself – we have successfully represented thousands of clients and recovered 2 million+ in compensation. We work on a contingency fee basis, so you do not pay unless we win your case. Contact us today for a free consultation and let us fight for the compensation you deserve.',
  ],
}

function buildSections(slug: string): ContentSection[] {
  const sections: ContentSection[] = []

  // What to Do After – custom per type
  const afterSteps = getAfterSteps(slug)
  if (afterSteps) sections.push(afterSteps)

  // How to File a Claim
  sections.push(getFileClaim(slug))

  // Common Causes / Factors
  const causes = getCommonCauses(slug)
  if (causes) sections.push(causes)

  // Types of Injuries / What We Handle
  const injuries = getTypesOfInjuries(slug)
  if (injuries) sections.push(injuries)

  // Why Choose Us
  sections.push(DEFAULT_WHY_CHOOSE)

  return sections
}

function getAfterSteps(slug: string): ContentSection | null {
  const templates: Record<string, ContentSection> = {
    'personal-injury': {
      heading: 'What to Do After an Injury',
      intro: 'If you have been injured due to someone else’s negligence, taking the right steps can protect your health and your claim:',
      orderedSteps: [
        { strong: 'Seek medical attention:', text: 'Get evaluated and follow your doctor’s treatment plan. Document all visits and diagnoses.' },
        { strong: 'Report the incident:', text: 'Report to the property owner, employer, or police as appropriate (e.g., slip and fall, car accident).' },
        { strong: 'Document everything:', text: 'Take photos of the scene, your injuries, and any property damage. Keep a journal of how you feel.' },
        { strong: 'Gather evidence:', text: 'Collect witness names and contact information, incident reports, and any correspondence.' },
        { strong: 'Avoid giving statements:', text: 'Do not give a recorded statement to the other party’s insurance without speaking to an attorney.' },
        { strong: 'Contact an attorney:', text: 'Reach out to an experienced personal injury lawyer as soon as possible to protect your rights.' },
      ],
    },
    'medical-malpractice': {
      heading: 'What to Do If You Suspect Medical Malpractice',
      intro: 'If you or a loved one has been harmed by medical negligence, consider these steps:',
      orderedSteps: [
        { strong: 'Get a second opinion:', text: 'See another doctor to assess your condition and, if appropriate, document that your outcome was avoidable.' },
        { strong: 'Request your medical records:', text: 'Obtain copies of all relevant records, including notes, imaging, and test results.' },
        { strong: 'Document your timeline:', text: 'Write down dates of procedures, symptoms, and when you first suspected something was wrong.' },
        { strong: 'Do not sign releases for the provider:', text: 'Avoid signing any broad authorizations from the hospital or doctor’s office until you speak with a lawyer.' },
        { strong: 'Preserve evidence:', text: 'Keep all bills, prescriptions, and correspondence related to your care.' },
        { strong: 'Contact a medical malpractice attorney:', text: 'New York has strict deadlines and complex rules; an experienced lawyer can guide you.' },
      ],
    },
    'workers-compensation': {
      heading: 'What to Do After a Workplace Injury',
      intro: 'To protect your right to workers’ compensation benefits in New York, take these steps:',
      orderedSteps: [
        { strong: 'Report the injury:', text: 'Notify your employer as soon as possible. New York law requires timely notice.' },
        { strong: 'Seek medical care:', text: 'Get the treatment you need. Your employer or their carrier may have a list of authorized providers.' },
        { strong: 'Document the incident:', text: 'Write down what happened, where, when, and who was present. Take photos if you can.' },
        { strong: 'File a claim:', text: 'Submit a C-3 form (Employee Claim) to the New York Workers’ Compensation Board. Deadlines apply.' },
        { strong: 'Keep records:', text: 'Save all medical bills, pay stubs, and correspondence with your employer and the insurance carrier.' },
        { strong: 'Consult a workers’ compensation lawyer:', text: 'An attorney can help you file correctly, appeal denials, and maximize your benefits.' },
      ],
    },
    'car-accidents': {
      heading: 'What to Do After a Car Accident',
      intro: 'If you have been involved in a car accident, taking the right steps can protect your rights and strengthen your case:',
      orderedSteps: [
        { strong: 'Check for injuries:', text: 'Check yourself and others for injuries. If anyone is seriously hurt, call 911 immediately.' },
        { strong: 'Move to safety:', text: 'If possible, move vehicles to a safe location to avoid further accidents.' },
        { strong: 'Call the police:', text: 'A police report documents the incident and is important for insurance and legal claims.' },
        { strong: 'Document everything:', text: 'Take photos of the scene, vehicle damage, and any visible injuries. Get witness contact information.' },
        { strong: 'Seek medical attention:', text: 'See a doctor soon even if you feel fine; some injuries appear later.' },
        { strong: 'Contact an attorney:', text: 'Do not give statements to the other side’s insurance before consulting an experienced car accident lawyer.' },
      ],
    },
    'motorcycle-accidents': {
      heading: 'What to Do After a Motorcycle Accident',
      intro: 'After a motorcycle crash, your safety and your legal rights depend on a few key steps:',
      orderedSteps: [
        { strong: 'Check for injuries:', text: 'Assess yourself and others. Call 911 for serious injuries.' },
        { strong: 'Move to safety:', text: 'If you can, get yourself and your bike out of traffic.' },
        { strong: 'Call the police:', text: 'Request a police report. It will document the scene and often fault.' },
        { strong: 'Document the scene:', text: 'Take photos of vehicles, road conditions, and your injuries and gear.' },
        { strong: 'Seek medical care:', text: 'Get evaluated promptly. Motorcycle injuries are often serious even when they seem minor at first.' },
        { strong: 'Contact a motorcycle accident lawyer:', text: 'Insurance companies may try to blame riders; an attorney can protect your rights.' },
      ],
    },
    'truck-accidents': {
      heading: 'What to Do After a Truck Accident',
      intro: 'Truck crashes often cause severe injuries. Protect yourself and your claim with these steps:',
      orderedSteps: [
        { strong: 'Ensure safety:', text: 'Check for injuries and move to a safe place if possible. Call 911.' },
        { strong: 'Report the crash:', text: 'Get a police report and, if applicable, ensure commercial driver and carrier information is taken.' },
        { strong: 'Document the scene:', text: 'Photograph vehicles, cargo, skid marks, and road conditions. Get witness and driver details.' },
        { strong: 'Seek medical attention:', text: 'Get evaluated immediately. Truck accident injuries are often serious.' },
        { strong: 'Preserve evidence:', text: 'Keep all medical records, repair estimates, and correspondence with insurers.' },
        { strong: 'Contact a truck accident attorney:', text: 'Claims against trucking companies and insurers are complex; experienced counsel is essential.' },
      ],
    },
    'bicycle-accidents': {
      heading: 'What to Do After a Bicycle Accident',
      intro: 'If you were hit or injured while cycling, these steps can help protect your health and your claim:',
      orderedSteps: [
        { strong: 'Get to safety:', text: 'Move off the road if you can. Call 911 for serious injuries.' },
        { strong: 'Call the police:', text: 'Request a police report and get the driver’s information and insurance.' },
        { strong: 'Document the scene:', text: 'Take photos of the vehicle, your bike, the road, and any injuries.' },
        { strong: 'Get witness information:', text: 'Collect names and contact details of anyone who saw the crash.' },
        { strong: 'Seek medical care:', text: 'Get checked out even if you feel okay; some injuries show up later.' },
        { strong: 'Contact a bicycle accident lawyer:', text: 'Cyclists often face bias from insurers; an attorney can fight for full compensation.' },
      ],
    },
    'pedestrian-accidents': {
      heading: 'What to Do After a Pedestrian Accident',
      intro: 'If you were hit by a vehicle while walking, take these steps to protect your health and your rights:',
      orderedSteps: [
        { strong: 'Get to safety:', text: 'Move to the sidewalk or another safe area if you are able.' },
        { strong: 'Call 911:', text: 'Request police and medical help. A report and early medical care are important.' },
        { strong: 'Document the scene:', text: 'If you can, take photos of the vehicle, license plate, and location. Get the driver’s information.' },
        { strong: 'Get witness contacts:', text: 'Ask bystanders for their names and phone numbers.' },
        { strong: 'Seek medical attention:', text: 'Go to the ER or see a doctor promptly. Document all treatment.' },
        { strong: 'Contact a pedestrian accident attorney:', text: 'We can help you pursue the driver and their insurance for full compensation.' },
      ],
    },
    'bus-accidents': {
      heading: 'What to Do After a Bus Accident',
      intro: 'Bus accidents can involve multiple parties and complex liability. Consider these steps:',
      orderedSteps: [
        { strong: 'Seek medical care:', text: 'Get evaluated and treated. Document all injuries and follow-up care.' },
        { strong: 'Report the accident:', text: 'Report to the bus operator or company and, if applicable, the police or transit authority.' },
        { strong: 'Document the scene:', text: 'Take photos and get contact information for the driver, witnesses, and other passengers if possible.' },
        { strong: 'Preserve evidence:', text: 'Keep tickets, passes, and any incident or claim numbers given to you.' },
        { strong: 'Do not sign quick settlements:', text: 'Transit and bus companies may offer low settlements; speak to a lawyer first.' },
        { strong: 'Contact a bus accident lawyer:', text: 'We can help identify all responsible parties and pursue full compensation.' },
      ],
    },
    'subway-accidents': {
      heading: 'What to Do After a Subway or Transit Accident',
      intro: 'If you were injured on the subway or other mass transit, these steps can help:',
      orderedSteps: [
        { strong: 'Seek medical attention:', text: 'Get care for your injuries and keep all medical records and bills.' },
        { strong: 'Report the incident:', text: 'Report to transit staff or police and get an incident or report number.' },
        { strong: 'Document the scene:', text: 'If possible, take photos of the area, conditions, and your injuries.' },
        { strong: 'Get witness information:', text: 'Collect names and contact details of anyone who saw what happened.' },
        { strong: 'Preserve evidence:', text: 'Keep your MetroCard or ticket, any incident paperwork, and all correspondence.' },
        { strong: 'Contact a transit accident attorney:', text: 'Claims against transit authorities have special rules; we can guide you.' },
      ],
    },
    'rideshare-accidents': {
      heading: 'What to Do After a Rideshare (Uber/Lyft) Accident',
      intro: 'If you were injured in an Uber, Lyft, or other rideshare vehicle, take these steps:',
      orderedSteps: [
        { strong: 'Ensure safety and call 911:', text: 'Get to a safe place and request police and medical help if needed.' },
        { strong: 'Document the crash:', text: 'Take photos of the vehicles, license plates, and the scene. Get the driver’s name and insurance.' },
        { strong: 'Report in the app:', text: 'Use the Uber or Lyft app to report the incident and request a copy of the trip details.' },
        { strong: 'Seek medical care:', text: 'Get evaluated and follow your doctor’s treatment plan. Keep all records.' },
        { strong: 'Preserve evidence:', text: 'Save trip receipts, in-app messages, and any correspondence with the company.' },
        { strong: 'Contact a rideshare accident lawyer:', text: 'Recovery can involve the driver, the app company, and other drivers; we can help.' },
      ],
    },
    'boating-accidents': {
      heading: 'What to Do After a Boating Accident',
      intro: 'After a boating or maritime accident, these steps can protect your safety and your claim:',
      orderedSteps: [
        { strong: 'Ensure safety:', text: 'Make sure everyone is accounted for and out of danger. Call for help if needed.' },
        { strong: 'Report the accident:', text: 'New York and federal law may require reporting. Notify the appropriate authorities.' },
        { strong: 'Document the scene:', text: 'Take photos of the vessels, conditions, and any injuries. Get names and contact information.' },
        { strong: 'Seek medical attention:', text: 'Get evaluated and treated. Document all care.' },
        { strong: 'Preserve evidence:', text: 'Keep logs, maintenance records, and any communications with other parties or insurers.' },
        { strong: 'Contact a maritime attorney:', text: 'Boating and maritime claims can be complex; we can help you pursue compensation.' },
      ],
    },
    'plane-accidents': {
      heading: 'What to Do After an Aviation or Plane Accident',
      intro: 'If you or a loved one was injured in an aviation incident, consider these steps:',
      orderedSteps: [
        { strong: 'Seek medical care:', text: 'Get appropriate medical treatment and keep detailed records.' },
        { strong: 'Preserve evidence:', text: 'Keep tickets, boarding passes, and any incident reports or correspondence from the airline.' },
        { strong: 'Document your experience:', text: 'Write down what happened, including flight number, date, and any witnesses.' },
        { strong: 'Do not sign releases:', text: 'Avoid signing any documents from the airline or insurer before speaking with a lawyer.' },
        { strong: 'Contact an aviation accident attorney:', text: 'Plane and helicopter accident claims involve strict laws and multiple parties; we can help.' },
      ],
    },
    'train-accidents': {
      heading: 'What to Do After a Train or Railroad Accident',
      intro: 'Train and railroad accidents often involve serious injuries and complex liability. Take these steps:',
      orderedSteps: [
        { strong: 'Seek medical attention:', text: 'Get care immediately and follow your treatment plan. Keep all medical records.' },
        { strong: 'Report the incident:', text: 'Report to the railroad, transit authority, or police and get a report or claim number.' },
        { strong: 'Document the scene:', text: 'If you can, take photos and get contact information for witnesses and crew.' },
        { strong: 'Preserve evidence:', text: 'Keep tickets, passes, incident reports, and all correspondence.' },
        { strong: 'Contact a train accident lawyer:', text: 'Railroad and transit claims have special rules and deadlines; we can protect your rights.' },
      ],
    },
    'construction-accidents': {
      heading: 'What to Do After a Construction Accident',
      intro: 'Construction site injuries can give you rights to workers’ comp and sometimes a third-party lawsuit. Consider these steps:',
      orderedSteps: [
        { strong: 'Report the injury:', text: 'Notify your employer and, if applicable, the site owner or general contractor as required.' },
        { strong: 'Seek medical care:', text: 'Get treatment and follow your doctor’s orders. Document all visits and restrictions.' },
        { strong: 'Document the scene:', text: 'If possible, take photos of the area, equipment, and your injuries. Note what caused the accident.' },
        { strong: 'File workers’ compensation:', text: 'Submit a claim to the Workers’ Compensation Board. Deadlines apply.' },
        { strong: 'Preserve evidence:', text: 'Keep all medical records, pay stubs, and correspondence with employers and insurers.' },
        { strong: 'Contact a construction accident lawyer:', text: 'You may have claims against multiple parties; we can evaluate your case.' },
      ],
    },
    'slip-fall': {
      heading: 'What to Do After a Slip and Fall',
      intro: 'If you were injured in a slip and fall, these steps can help protect your claim:',
      orderedSteps: [
        { strong: 'Seek medical attention:', text: 'Get evaluated and treated. Document your injuries and follow your doctor’s advice.' },
        { strong: 'Report the incident:', text: 'Report to the property owner or manager and ask for a written incident report.' },
        { strong: 'Document the scene:', text: 'Take photos of the condition that caused the fall (e.g., wet floor, uneven surface) and your injuries.' },
        { strong: 'Get witness information:', text: 'Collect names and contact details of anyone who saw the fall or the condition.' },
        { strong: 'Preserve evidence:', text: 'Keep your clothing and shoes if they were damaged. Save all medical and incident paperwork.' },
        { strong: 'Contact a slip and fall lawyer:', text: 'Premises liability claims require proving the owner knew or should have known of the hazard; we can help.' },
      ],
    },
    'wrongful-death': {
      heading: 'What to Do After a Wrongful Death',
      intro: 'Losing a loved one to someone else’s negligence is devastating. These steps can help protect your family’s rights:',
      orderedSteps: [
        { strong: 'Secure evidence:', text: 'Preserve any evidence related to the incident (e.g., accident reports, medical records, correspondence).' },
        { strong: 'Identify potential claims:', text: 'Wrongful death claims may arise from car accidents, medical malpractice, workplace incidents, and more.' },
        { strong: 'Document losses:', text: 'Keep records of funeral expenses, lost income, and the impact on the family.' },
        { strong: 'Avoid signing releases:', text: 'Do not sign any settlement or release from the at-fault party or insurer without legal advice.' },
        { strong: 'Contact a wrongful death attorney:', text: 'New York has strict rules and time limits. We can help your family seek justice and compensation.' },
      ],
    },
    'premises-liability': {
      heading: 'What to Do After a Premises Injury',
      intro: 'If you were hurt on someone else’s property due to a dangerous condition, consider these steps:',
      orderedSteps: [
        { strong: 'Seek medical care:', text: 'Get treatment and document all injuries and follow-up care.' },
        { strong: 'Report the incident:', text: 'Report to the property owner or manager and request a written incident report.' },
        { strong: 'Document the hazard:', text: 'Take photos of the condition that caused your injury (e.g., broken step, poor lighting, debris).' },
        { strong: 'Get witness information:', text: 'Collect names and contact details of anyone who saw the condition or your fall.' },
        { strong: 'Preserve evidence:', text: 'Keep clothing, shoes, and any incident or medical paperwork.' },
        { strong: 'Contact a premises liability lawyer:', text: 'We can help you prove the owner knew or should have known of the danger and pursue full compensation.' },
      ],
    },
    'workplace-injuries': {
      heading: 'What to Do After a Workplace Injury',
      intro: 'To protect your right to workers’ compensation and any other claims, take these steps:',
      orderedSteps: [
        { strong: 'Report the injury:', text: 'Notify your employer as soon as possible. Timely notice is required under New York law.' },
        { strong: 'Seek medical attention:', text: 'Get the care you need. Follow your employer’s rules regarding authorized providers if applicable.' },
        { strong: 'Document the incident:', text: 'Write down what happened, where, and who was present. Take photos if you can.' },
        { strong: 'File a workers’ compensation claim:', text: 'Submit a C-3 form to the Workers’ Compensation Board. Deadlines apply.' },
        { strong: 'Keep records:', text: 'Save all medical bills, pay stubs, and correspondence with your employer and the carrier.' },
        { strong: 'Consult a workers’ compensation attorney:', text: 'We can help you file, appeal denials, and secure the benefits you deserve.' },
      ],
    },
    'nursing-home-abuse': {
      heading: 'What to Do If You Suspect Nursing Home Abuse or Neglect',
      intro: 'If you believe a loved one is being abused or neglected in a nursing home, take these steps:',
      orderedSteps: [
        { strong: 'Ensure safety:', text: 'If there is immediate danger, contact the facility, call 911, or consider moving your loved one.' },
        { strong: 'Document signs of abuse or neglect:', text: 'Take photos of injuries, unsanitary conditions, or other concerns. Keep a dated journal.' },
        { strong: 'Report to authorities:', text: 'Report to the facility administrator and to the New York State Department of Health. File a complaint.' },
        { strong: 'Seek medical care:', text: 'Have your loved one evaluated by an independent doctor. Get copies of all medical records.' },
        { strong: 'Preserve evidence:', text: 'Save all communications with the facility, incident reports, and medical records.' },
        { strong: 'Contact a nursing home abuse attorney:', text: 'We can help your family hold the facility accountable and seek compensation.' },
      ],
    },
    'vehicle-accidents': {
      heading: 'What to Do After a Vehicle Accident',
      intro: 'If you have been injured in a car, motorcycle, truck, or other vehicle accident, take these steps:',
      orderedSteps: [
        { strong: 'Check for injuries:', text: 'Ensure everyone is safe. Call 911 for serious injuries.' },
        { strong: 'Move to safety:', text: 'If possible, move vehicles out of traffic to avoid further harm.' },
        { strong: 'Call the police:', text: 'A police report helps document the incident for insurance and legal claims.' },
        { strong: 'Document the scene:', text: 'Take photos of vehicles, damage, and any visible injuries. Get witness and driver information.' },
        { strong: 'Seek medical attention:', text: 'Get evaluated soon; some injuries appear later.' },
        { strong: 'Contact an attorney:', text: 'Do not give statements to the other side’s insurance before consulting an experienced injury lawyer.' },
      ],
    },
    'transportation-accidents': {
      heading: 'What to Do After a Transportation Accident',
      intro: 'If you were injured on the subway, train, plane, or boat, consider these steps:',
      orderedSteps: [
        { strong: 'Seek medical care:', text: 'Get treatment and keep all medical records and bills.' },
        { strong: 'Report the incident:', text: 'Report to the operator or authority and get an incident or report number.' },
        { strong: 'Document the scene:', text: 'If possible, take photos and get witness contact information.' },
        { strong: 'Preserve evidence:', text: 'Keep tickets, passes, incident paperwork, and all correspondence.' },
        { strong: 'Do not sign releases:', text: 'Avoid signing any documents from the carrier or insurer before speaking with a lawyer.' },
        { strong: 'Contact a transportation accident attorney:', text: 'Transit and maritime claims have special rules; we can guide you.' },
      ],
    },
    'catastrophic-abuse-cases': {
      heading: 'What to Do in Catastrophic or Abuse Cases',
      intro: 'Wrongful death and nursing home abuse demand prompt action to protect your rights:',
      orderedSteps: [
        { strong: 'Secure evidence:', text: 'Preserve any evidence related to the incident—reports, records, and correspondence.' },
        { strong: 'Document losses:', text: 'Keep records of expenses, lost income, and the impact on your family.' },
        { strong: 'Report abuse:', text: 'If abuse is suspected, report to the facility and the New York State Department of Health.' },
        { strong: 'Avoid signing releases:', text: 'Do not sign any settlement or release without legal advice.' },
        { strong: 'Contact an attorney:', text: 'We can help your family seek justice and the compensation you deserve.' },
      ],
    },
    'construction-site-injuries': {
      heading: 'What to Do After a Construction Site Injury',
      intro: 'Construction site injuries may give you rights to workers’ comp and sometimes a third-party claim. Consider these steps:',
      orderedSteps: [
        { strong: 'Report the injury:', text: 'Notify your employer and, if applicable, the site owner or general contractor.' },
        { strong: 'Seek medical care:', text: 'Get treatment and follow your doctor’s orders. Document all visits.' },
        { strong: 'Document the scene:', text: 'If possible, take photos of the area, equipment, and your injuries.' },
        { strong: 'File workers’ compensation:', text: 'Submit a claim to the Workers’ Compensation Board. Deadlines apply.' },
        { strong: 'Preserve evidence:', text: 'Keep all medical records, pay stubs, and correspondence.' },
        { strong: 'Contact a construction injury lawyer:', text: 'You may have claims against multiple parties; we can evaluate your case.' },
      ],
    },
    'repetitive-stress-injuries': {
      heading: 'What to Do After a Repetitive Stress Injury',
      intro: 'To protect your right to workers’ compensation for repetitive stress or overuse injuries, take these steps:',
      orderedSteps: [
        { strong: 'Report the condition:', text: 'Notify your employer as soon as you connect your symptoms to work. Timely notice is required.' },
        { strong: 'Seek medical care:', text: 'Get a diagnosis and treatment. Document when symptoms began and how work contributes.' },
        { strong: 'Document your job duties:', text: 'Describe the repetitive tasks, duration, and any workplace factors that aggravate the condition.' },
        { strong: 'File a workers’ compensation claim:', text: 'Submit a C-3 form to the Workers’ Compensation Board.' },
        { strong: 'Keep records:', text: 'Save all medical bills and correspondence with your employer and the carrier.' },
        { strong: 'Consult a workers’ compensation attorney:', text: 'We can help you prove work-relatedness and secure benefits.' },
      ],
    },
    'occupational-illness': {
      heading: 'What to Do If You Have an Occupational Illness',
      intro: 'Work-related illness claims require documentation and timely filing. Consider these steps:',
      orderedSteps: [
        { strong: 'Seek medical care:', text: 'Get a diagnosis and have your doctor document the link to your work environment or exposure.' },
        { strong: 'Report to your employer:', text: 'Notify your employer of your condition and that you believe it is work-related.' },
        { strong: 'Document exposure:', text: 'Note when and where you were exposed to toxins or conditions that may have caused your illness.' },
        { strong: 'File a workers’ compensation claim:', text: 'Submit a C-3 form to the Workers’ Compensation Board. Occupational disease claims have specific rules.' },
        { strong: 'Preserve evidence:', text: 'Keep all medical records, employment records, and any safety or exposure documentation.' },
        { strong: 'Contact an occupational illness attorney:', text: 'We can help you establish work-relatedness and secure benefits.' },
      ],
    },
    'surgical-errors': {
      heading: 'What to Do If You Were Harmed by a Surgical Error',
      intro: 'If you or a loved one was injured by a surgical mistake, consider these steps:',
      orderedSteps: [
        { strong: 'Get a second opinion:', text: 'See another surgeon to assess your condition and document that the error caused avoidable harm.' },
        { strong: 'Request your medical records:', text: 'Obtain operative reports, imaging, and all relevant records.' },
        { strong: 'Document your timeline:', text: 'Write down dates of the surgery, symptoms, and when you learned of the error.' },
        { strong: 'Do not sign releases for the provider:', text: 'Avoid signing any broad authorizations from the hospital or surgeon until you speak with a lawyer.' },
        { strong: 'Preserve evidence:', text: 'Keep all bills, prescriptions, and correspondence related to your care.' },
        { strong: 'Contact a surgical error attorney:', text: 'New York has strict deadlines; an experienced lawyer can protect your rights.' },
      ],
    },
    'misdiagnosis-delayed-diagnosis': {
      heading: 'What to Do If You Were Misdiagnosed or Diagnosis Was Delayed',
      intro: 'If a delayed or wrong diagnosis caused you harm, consider these steps:',
      orderedSteps: [
        { strong: 'Get a second opinion:', text: 'See another doctor to confirm the correct diagnosis and document the delay or error.' },
        { strong: 'Request your medical records:', text: 'Obtain all relevant records, including notes, imaging, and test results from the beginning of your care.' },
        { strong: 'Document your timeline:', text: 'Write down when you first had symptoms, when you were diagnosed, and how the delay or error affected you.' },
        { strong: 'Do not sign releases:', text: 'Avoid signing any broad authorizations from the at-fault provider until you speak with a lawyer.' },
        { strong: 'Contact a medical malpractice attorney:', text: 'Misdiagnosis cases require expert analysis; we can help you pursue compensation.' },
      ],
    },
    'birth-injuries': {
      heading: 'What to Do If Your Child Suffered a Birth Injury',
      intro: 'If you believe your child was injured during birth due to medical negligence, take these steps:',
      orderedSteps: [
        { strong: 'Seek follow-up care:', text: 'Have your child evaluated by specialists and document all ongoing needs.' },
        { strong: 'Request medical records:', text: 'Obtain prenatal, labor, and delivery records from the hospital and providers.' },
        { strong: 'Document the timeline:', text: 'Write down what happened during labor and delivery and when you first noticed problems.' },
        { strong: 'Do not sign releases:', text: 'Avoid signing any documents from the hospital or providers before speaking with a lawyer.' },
        { strong: 'Contact a birth injury attorney:', text: 'Birth injury cases are complex and time-sensitive; we can help your family seek justice.' },
      ],
    },
    'medication-errors': {
      heading: 'What to Do If You Were Harmed by a Medication Error',
      intro: 'If you were injured by a wrong prescription, dosage, or drug interaction, consider these steps:',
      orderedSteps: [
        { strong: 'Seek medical care:', text: 'Get treatment for the harm and document all follow-up care.' },
        { strong: 'Request your records:', text: 'Obtain pharmacy records, prescriptions, and hospital or doctor notes related to the medication.' },
        { strong: 'Preserve the medication:', text: 'Keep the bottle, label, and any remaining medication if safe to do so.' },
        { strong: 'Document your timeline:', text: 'Write down when you started the medication, when symptoms began, and how you were affected.' },
        { strong: 'Do not sign releases:', text: 'Avoid signing any documents from the pharmacy or provider before speaking with a lawyer.' },
        { strong: 'Contact a medication error attorney:', text: 'We can help you hold responsible parties accountable and seek compensation.' },
      ],
    },
    'hospital-negligence': {
      heading: 'What to Do If You Were Harmed by Hospital Negligence',
      intro: 'If you or a loved one was injured due to hospital error or neglect, consider these steps:',
      orderedSteps: [
        { strong: 'Seek follow-up care:', text: 'Get the medical care you need and document all treatment.' },
        { strong: 'Request your medical records:', text: 'Obtain your complete hospital and treatment records.' },
        { strong: 'Document what happened:', text: 'Write down what you observed—staff conduct, delays, errors, or unsafe conditions.' },
        { strong: 'Preserve evidence:', text: 'Keep all bills, prescriptions, and correspondence with the hospital.' },
        { strong: 'Do not sign releases:', text: 'Avoid signing any documents from the hospital or insurer before speaking with a lawyer.' },
        { strong: 'Contact a hospital negligence attorney:', text: 'We can help you pursue compensation for your injuries.' },
      ],
    },
  }
  return templates[slug] ?? null
}

function getFileClaim(slug: string): ContentSection {
  const intro = 'Our experienced attorneys can guide you through every step of the process. We help with:'
  const defaultItems = [
    'Gathering evidence and documentation',
    'Filing claims with all relevant parties and insurers',
    'Negotiating with insurance adjusters',
    'Calculating damages including medical expenses, lost wages, and pain and suffering',
    'Representing you in court if a fair settlement cannot be reached',
  ]
  const custom: Record<string, string[]> = {
    'workers-compensation': [
      'Filing your C-3 and other forms with the Workers’ Compensation Board',
      'Communicating with your employer and the insurance carrier',
      'Appealing denials and securing medical and wage benefits',
      'Negotiating lump-sum settlements when appropriate',
      'Representing you at hearings and before the Board',
    ],
    'medical-malpractice': [
      'Reviewing your medical records and identifying deviations from the standard of care',
      'Working with medical experts to support your claim',
      'Filing within New York’s statute of limitations and notice requirements',
      'Negotiating with defendants and their insurers',
      'Representing you at trial if necessary',
    ],
  }
  return {
    heading: slug === 'workers-compensation' ? 'How to File a Workers’ Compensation Claim' : 'How to File a Claim',
    intro: custom[slug] ? 'Navigating the claims process can be complex. We assist with:' : intro,
    listItems: custom[slug] ?? defaultItems,
  }
}

function getCommonCauses(slug: string): ContentSection | null {
  const templates: Record<string, ContentSection> = {
    'car-accidents': {
      heading: 'Common Causes of Car Accidents',
      intro: 'Car accidents can happen for many reasons. Some of the most common causes include:',
      listItems: [
        'Distracted driving (texting, phone calls, eating)',
        'Speeding and reckless driving',
        'Driving under the influence of alcohol or drugs',
        'Failure to yield right of way',
        'Running red lights or stop signs',
        'Following too closely (tailgating)',
        'Improper lane changes',
        'Weather conditions',
        'Vehicle defects or mechanical failures',
      ],
      videoTitle: 'What to do After a Car Accident | Ahmed Law Firm',
    },
    'motorcycle-accidents': {
      heading: 'Common Causes of Motorcycle Accidents',
      intro: 'Motorcycle crashes often result from:',
      listItems: [
        'Drivers failing to see motorcycles (left turns, lane changes)',
        'Distracted or impaired driving',
        'Speeding and aggressive driving',
        'Unsafe road conditions (potholes, debris, poor signage)',
        'Defective motorcycle parts or tires',
        'Dooring (drivers opening car doors into the path of cyclists)',
      ],
    },
    'truck-accidents': {
      heading: 'Common Causes of Truck Accidents',
      intro: 'Truck crashes can be caused by:',
      listItems: [
        'Driver fatigue and hours-of-service violations',
        'Speeding and reckless driving',
        'Improper loading or cargo shifts',
        'Poor maintenance (brakes, tires)',
        'Distracted or impaired driving',
        'Inadequate training or supervision',
      ],
    },
    'bicycle-accidents': {
      heading: 'Common Causes of Bicycle Accidents',
      intro: 'Bicycle accidents often result from:',
      listItems: [
        'Drivers failing to yield to cyclists',
        'Dooring (motorists opening doors into bike lanes)',
        'Unsafe road conditions and lack of bike infrastructure',
        'Distracted or impaired driving',
        'Speeding and aggressive driving',
        'Left-turn and right-hook collisions',
      ],
    },
    'pedestrian-accidents': {
      heading: 'Common Causes of Pedestrian Accidents',
      intro: 'Pedestrians are often hit when:',
      listItems: [
        'Drivers fail to yield at crosswalks',
        'Drivers are distracted or impaired',
        'Drivers speed in areas with heavy foot traffic',
        'Visibility is poor (dark clothing, inadequate lighting)',
        'Vehicles run red lights or stop signs',
        'Backing vehicles strike pedestrians in parking lots or driveways',
      ],
    },
    'medical-malpractice': {
      heading: 'Common Types of Medical Malpractice',
      intro: 'Medical malpractice can take many forms, including:',
      listItems: [
        'Surgical errors and wrong-site surgery',
        'Misdiagnosis or delayed diagnosis',
        'Medication errors and prescription mistakes',
        'Birth injuries and obstetric negligence',
        'Hospital-acquired infections and negligent care',
        'Failure to obtain informed consent',
      ],
    },
    'construction-accidents': {
      heading: 'Common Causes of Construction Accidents',
      intro: 'Construction site injuries often result from:',
      listItems: [
        'Falls from heights (ladders, scaffolding, roofs)',
        'Struck-by incidents (falling objects, equipment)',
        'Electrocution and electrical hazards',
        'Caught-in/between hazards (trenches, machinery)',
        'Inadequate training or safety equipment',
        'Defective tools or equipment',
      ],
    },
    'slip-fall': {
      heading: 'Common Causes of Slip and Fall Injuries',
      intro: 'Slip and fall accidents are often caused by:',
      listItems: [
        'Wet or slippery floors',
        'Uneven surfaces and broken pavement',
        'Poor lighting in stairwells and walkways',
        'Loose rugs or cords',
        'Ice and snow on sidewalks and parking lots',
        'Unmarked steps or changes in elevation',
      ],
    },
    'nursing-home-abuse': {
      heading: 'Common Types of Nursing Home Abuse and Neglect',
      intro: 'Abuse and neglect in nursing homes can include:',
      listItems: [
        'Bedsores and pressure ulcers from inadequate care',
        'Falls and fractures due to lack of supervision or assistance',
        'Medication errors and overmedication',
        'Dehydration and malnutrition',
        'Emotional or physical abuse by staff',
        'Wandering and elopement due to inadequate supervision',
      ],
    },
  }
  return templates[slug] ?? {
    heading: 'Common Causes and Contributing Factors',
    intro: 'Injuries in this area can result from a variety of causes. Our attorneys investigate the facts of your case to identify responsible parties and hold them accountable.',
    listItems: [
      'Negligence of others',
      'Unsafe conditions',
      'Lack of proper training or supervision',
      'Failure to follow safety rules and regulations',
      'Defective products or equipment',
    ],
  }
}

function getTypesOfInjuries(slug: string): ContentSection | null {
  const defaultInjuries = [
    'Head and traumatic brain injuries',
    'Neck and back injuries',
    'Spinal cord damage and paralysis',
    'Broken bones and fractures',
    'Internal organ damage',
    'Cuts, lacerations, and scarring',
    'Emotional trauma and PTSD',
    'Wrongful death',
  ]
  const templates: Record<string, ContentSection> = {
    'car-accidents': {
      heading: 'Types of Car Accident Injuries',
      intro: 'Car accidents can result in a wide range of injuries, from minor to life-threatening. Common types include:',
      listItems: [
        'Whiplash and neck injuries',
        'Back injuries and spinal cord damage',
        'Head injuries and traumatic brain injuries (TBI)',
        'Broken bones and fractures',
        'Internal organ damage',
        'Cuts, lacerations, and scarring',
        'Emotional trauma and PTSD',
        'Wrongful death',
      ],
      videoTitle: 'What Happens if You\'re Hit By an Uber or Lyft Driver?',
    },
    'motorcycle-accidents': {
      heading: 'Types of Motorcycle Accident Injuries',
      intro: 'Motorcycle crashes often cause serious injuries due to limited protection. Common injuries include:',
      listItems: [
        'Road rash and severe abrasions',
        'Head and traumatic brain injuries',
        'Spinal cord injuries and paralysis',
        'Broken bones and amputations',
        'Internal bleeding and organ damage',
        'Wrongful death',
      ],
    },
    'medical-malpractice': {
      heading: 'Types of Harm From Medical Malpractice',
      intro: 'Medical errors can lead to serious and lasting harm, including:',
      listItems: [
        'Permanent disability or loss of function',
        'Birth injuries to mother or child',
        'Worsened disease due to misdiagnosis or delay',
        'Injury or death from surgical errors',
        'Adverse reactions and harm from medication errors',
        'Wrongful death',
      ],
    },
    'workers-compensation': {
      heading: 'Types of Workplace Injuries We Handle',
      intro: 'We help injured workers with a wide range of job-related injuries and illnesses, including:',
      listItems: [
        'Fractures and orthopedic injuries',
        'Back and neck injuries',
        'Repetitive stress and occupational diseases',
        'Amputations and crush injuries',
        'Burns and electrical injuries',
        'Exposure to toxic substances',
      ],
    },
  }
  const custom = templates[slug]
  if (custom) return custom
  return {
    heading: 'Types of Injuries We Handle',
    intro: 'We represent clients who have suffered serious injuries, including:',
    listItems: defaultInjuries,
  }
}

export const PAGE_CONFIG: Record<string, PageConfig> = {
  'personal-injury': {
    title: 'New York Personal Injury Lawyers',
    subtitle: 'Experienced personal injury representation for victims across New York since 1981',
    contentTitle: 'New York Personal Injury Lawyers',
    sidebarCategory: 'personal-injury',
  },
  'medical-malpractice': {
    title: 'New York Medical Malpractice Lawyers',
    subtitle: 'Fighting for victims of medical negligence and malpractice across New York',
    contentTitle: 'New York Medical Malpractice Lawyers',
    sidebarCategory: 'medical-malpractice',
  },
  'workers-compensation': {
    title: 'New York Workers Compensation Lawyers',
    subtitle: 'Helping injured workers secure the benefits they deserve',
    contentTitle: 'New York Workers Compensation Lawyers',
    sidebarCategory: 'workers-compensation',
  },
  'car-accidents': {
    title: 'New York Car Accident Lawyers',
    subtitle: 'Expert legal representation for car accident victims with over 10 years of experience',
    contentTitle: 'New York Car Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'motorcycle-accidents': {
    title: 'New York Motorcycle Accident Lawyers',
    subtitle: 'Experienced representation for motorcycle accident victims throughout New York',
    contentTitle: 'New York Motorcycle Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'truck-accidents': {
    title: 'New York Truck Accident Lawyers',
    subtitle: 'Fighting for truck accident victims and their families across New York',
    contentTitle: 'New York Truck Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'bicycle-accidents': {
    title: 'New York Bicycle Accident Lawyers',
    subtitle: 'Legal representation for cyclists injured in New York',
    contentTitle: 'New York Bicycle Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'pedestrian-accidents': {
    title: 'New York Pedestrian Accident Lawyers',
    subtitle: 'Fighting for pedestrians injured by vehicles in New York',
    contentTitle: 'New York Pedestrian Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'bus-accidents': {
    title: 'New York Bus Accident Lawyers',
    subtitle: 'Representing bus accident victims throughout New York',
    contentTitle: 'New York Bus Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'subway-accidents': {
    title: 'New York Subway Accident Lawyers',
    subtitle: 'Legal help for subway and transit accident victims in New York',
    contentTitle: 'New York Subway Accident Lawyers',
    sidebarCategory: 'transportation-accidents',
  },
  'rideshare-accidents': {
    title: 'New York Rideshare Accident Lawyers (Uber/Lyft)',
    subtitle: 'Experienced representation for Uber, Lyft, and rideshare accident victims',
    contentTitle: 'New York Rideshare Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'boating-accidents': {
    title: 'New York Boating Accident Lawyers',
    subtitle: 'Representing boating and maritime accident victims in New York',
    contentTitle: 'New York Boating Accident Lawyers',
    sidebarCategory: 'transportation-accidents',
  },
  'plane-accidents': {
    title: 'New York Plane & Aviation Accident Lawyers',
    subtitle: 'Legal representation for aviation and plane accident victims',
    contentTitle: 'New York Plane & Aviation Accident Lawyers',
    sidebarCategory: 'transportation-accidents',
  },
  'train-accidents': {
    title: 'New York Train Accident Lawyers',
    subtitle: 'Fighting for train and railroad accident victims in New York',
    contentTitle: 'New York Train Accident Lawyers',
    sidebarCategory: 'transportation-accidents',
  },
  'construction-accidents': {
    title: 'New York Construction Accident Lawyers',
    subtitle: 'Representing construction workers and visitors injured on job sites',
    contentTitle: 'New York Construction Accident Lawyers',
    sidebarCategory: 'personal-injury',
  },
  'slip-fall': {
    title: 'New York Slip and Fall Lawyers',
    subtitle: 'Holding property owners accountable for dangerous conditions',
    contentTitle: 'New York Slip and Fall Lawyers',
    sidebarCategory: 'personal-injury',
  },
  'wrongful-death': {
    title: 'New York Wrongful Death Lawyers',
    subtitle: 'Helping families seek justice and compensation after a loved one’s death',
    contentTitle: 'New York Wrongful Death Lawyers',
    sidebarCategory: 'catastrophic-abuse-cases',
  },
  'premises-liability': {
    title: 'New York Premises Liability Lawyers',
    subtitle: 'Fighting for those injured by unsafe property conditions',
    contentTitle: 'New York Premises Liability Lawyers',
    sidebarCategory: 'personal-injury',
  },
  'workplace-injuries': {
    title: 'New York Workplace Injury Lawyers',
    subtitle: 'Helping injured workers secure workers’ compensation and more',
    contentTitle: 'New York Workplace Injury Lawyers',
    sidebarCategory: 'workers-compensation',
  },
  'nursing-home-abuse': {
    title: 'New York Nursing Home Abuse Lawyers',
    subtitle: 'Holding facilities accountable for abuse and neglect',
    contentTitle: 'New York Nursing Home Abuse Lawyers',
    sidebarCategory: 'catastrophic-abuse-cases',
  },
  'vehicle-accidents': {
    title: 'New York Vehicle Accident Lawyers',
    subtitle: 'Car, motorcycle, truck, bicycle, pedestrian, bus, and rideshare accident representation',
    contentTitle: 'New York Vehicle Accident Lawyers',
    sidebarCategory: 'vehicle-accidents',
  },
  'transportation-accidents': {
    title: 'New York Transportation Accident Lawyers',
    subtitle: 'Subway, train, plane, and boating accident representation',
    contentTitle: 'New York Transportation Accident Lawyers',
    sidebarCategory: 'transportation-accidents',
  },
  'catastrophic-abuse-cases': {
    title: 'Catastrophic & Abuse Cases',
    subtitle: 'Wrongful death and nursing home abuse representation',
    contentTitle: 'Catastrophic & Abuse Cases',
    sidebarCategory: 'catastrophic-abuse-cases',
  },
  'construction-site-injuries': {
    title: 'New York Construction Site Injury Lawyers',
    subtitle: 'Workers’ compensation for construction site injuries',
    contentTitle: 'New York Construction Site Injury Lawyers',
    sidebarCategory: 'workers-compensation',
  },
  'repetitive-stress-injuries': {
    title: 'New York Repetitive Stress Injury Lawyers',
    subtitle: 'Workers’ compensation for repetitive stress and overuse injuries',
    contentTitle: 'New York Repetitive Stress Injury Lawyers',
    sidebarCategory: 'workers-compensation',
  },
  'occupational-illness': {
    title: 'New York Occupational Illness Lawyers',
    subtitle: 'Workers’ compensation for work-related illness',
    contentTitle: 'New York Occupational Illness Lawyers',
    sidebarCategory: 'workers-compensation',
  },
  'surgical-errors': {
    title: 'New York Surgical Error Lawyers',
    subtitle: 'Holding surgeons and hospitals accountable for preventable errors',
    contentTitle: 'New York Surgical Error Lawyers',
    sidebarCategory: 'medical-malpractice',
  },
  'misdiagnosis-delayed-diagnosis': {
    title: 'New York Misdiagnosis & Delayed Diagnosis Lawyers',
    subtitle: 'Compensation when delayed or wrong diagnosis caused harm',
    contentTitle: 'New York Misdiagnosis & Delayed Diagnosis Lawyers',
    sidebarCategory: 'medical-malpractice',
  },
  'birth-injuries': {
    title: 'New York Birth Injury Lawyers',
    subtitle: 'Fighting for families affected by obstetric and birth injuries',
    contentTitle: 'New York Birth Injury Lawyers',
    sidebarCategory: 'medical-malpractice',
  },
  'medication-errors': {
    title: 'New York Medication Error Lawyers',
    subtitle: 'Holding prescribers and facilities accountable for medication mistakes',
    contentTitle: 'New York Medication Error Lawyers',
    sidebarCategory: 'medical-malpractice',
  },
  'hospital-negligence': {
    title: 'New York Hospital Negligence Lawyers',
    subtitle: 'Representing victims of hospital errors and negligent care',
    contentTitle: 'New York Hospital Negligence Lawyers',
    sidebarCategory: 'medical-malpractice',
  },
}

export function getPageConfig(slug: string): PageConfig | null {
  return PAGE_CONFIG[slug] ?? null
}

export function getContentSections(slug: string): ContentSection[] {
  return buildSections(slug)
}
