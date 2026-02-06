export interface ChannelDetail {
  label: string
  value: string
}

export interface Channel {
  id: number
  title: string
  shortTitle: string
  icon: 'eye' | 'file' | 'users' | 'alert' | 'clock'
  content: string
  details?: ChannelDetail[]
}

export const channels: Channel[] = [
  {
    id: 1,
    title: 'Project Overview',
    shortTitle: 'Overview',
    icon: 'file',
    content: `DOCUMENT: CIA-RDP96-00791R000100030073-5
DATE: 28 August 1995
CLASSIFICATION: UNCLASSIFIED
SOURCE: UK Independent on Sunday

SUBJECT: US Use of 'Psychic Spies' Reported

For two decades, the US intelligence community made serious use of psychic phenomena. The DIA, CIA, NSA, FBI, Secret Service, Navy, Army, and Air Force were all involved.

"Remote-viewers" were employed in hundreds of military and intelligence operations—including the 1986 bombing raid on Libya, targeting President al-Qadhdhafi's desert encampment.`,
    details: [
      { label: 'Program Names', value: 'GRILL FLAME → CENTER LANE → SUN STREAK → STARGATE' },
      { label: 'Duration', value: '1972-1995 (23 years of operation)' },
      { label: 'Primary Location', value: 'Fort Meade, Maryland' }
    ]
  },
  {
    id: 2,
    title: 'Cold War Origins',
    shortTitle: 'Origins',
    icon: 'alert',
    content: `THE "PSI GAP" - 1972 DIA ASSESSMENT

Soviet efforts in psi research could enable them to:

(a) Know the contents of top secret US documents, the movements of our troops and ships and the location and nature of our military installations

(b) Mould the thoughts of key US military and civilian leaders at a distance

(c) Cause the instant death of any US official at a distance

(d) Disable, at a distance, US military equipment of all types, including spacecraft

Soviet experiments included decapitating baby rabbits to test telepathic trauma transmission, screening Red Army recruits for psychic abilities, and developing "psychotronic generators."`,
    details: [
      { label: 'Initial Funding', value: '$50,000 grant to Stanford Research Institute (1972)' },
      { label: 'Lead Researcher', value: 'Hal Puthoff, laser engineer at SRI' },
      { label: 'First Psychic', value: 'Ingo Swann, New York artist' }
    ]
  },
  {
    id: 3,
    title: 'Remote Viewing Methods',
    shortTitle: 'Methods',
    icon: 'eye',
    content: `TWO PRIMARY TECHNIQUES DEVELOPED:

▸ EXTENDED REMOTE VIEWING (ERV)
Viewer lies on couch in darkened room, enters self-hypnotic trance, vocally describes visual impressions of target location.

▸ COORDINATE REMOTE VIEWING (CRV)
Developed by Ingo Swann at SRI. Highly structured verbalization and sketching procedures. Given only geographic coordinates, viewers could allegedly "visit" target sites.

"We would just sit the viewer down and say 'Target.' We got some of our best results that way."
— Hal Puthoff

Viewers occasionally reported "bilocation"—an unnervingly vivid sensation of actually being present at the target site.`,
    details: [
      { label: 'CRV Use', value: 'Target acquisition and initial reconnaissance' },
      { label: 'ERV Use', value: 'In-depth exploration of identified targets' },
      { label: 'Team Size', value: 'Approximately 12 remote-viewers at Fort Meade' }
    ]
  },
  {
    id: 4,
    title: 'Claimed Operations',
    shortTitle: 'Operations',
    icon: 'users',
    content: `REPORTED OPERATIONAL DEPLOYMENTS:

• JUNE 1973: Pat Price psychically "visited" NSA facility, describing underground office layouts and Top Secret code-word labels on file folders

• 1979-81: Tehran hostage crisis facility reconnaissance

• 1986: Locating Muammar al-Qadhdhafi prior to US bombing raid on Libya

• 1989: Tracking Manuel Noriega during Panama invasion

• 1991: Locating Scud missiles during Desert Storm

• Ongoing: Soviet nuclear/chemical/biological weapons facilities, Silkworm missiles in Persian Gulf, drug-smuggling ships

"He nailed it. From that moment on, there was no trouble getting anyone to take it seriously."
— Former senior CIA official on Pat Price's NSA facility viewing`,
    details: [
      { label: 'KGB Colonel Case', value: 'Remote viewers identified covert communication device and emotional vulnerabilities' },
      { label: 'Foreign Agent Case', value: 'Psychic clues revealed financial misconduct; agent "nearly fell out of his chair"' }
    ]
  },
  {
    id: 5,
    title: 'Key Personnel',
    shortTitle: 'Personnel',
    icon: 'users',
    content: `PROGRAM SUPPORTERS & PARTICIPANTS:

MILITARY LEADERSHIP
• Maj. Gen. Edmund Thompson — Army Asst. Chief of Staff for Intelligence
• Maj. Gen. Albert Stubblebine III — Head of INSCOM
• Jack Vorona — Chief, DIA Science & Technology Directorate

CONGRESSIONAL SUPPORT
• Sen. Claiborne Pell (Rhode Island)
• Rep. Charlie Rose (North Carolina)
  "If the Russians have remote-viewing, and we don't, we're in trouble."

RESEARCHERS
• Hal Puthoff — Laser engineer, SRI program head
• Ingo Swann — Psychic, developed CRV methodology

VIEWERS
• Pat Price — Retired politician, early successes
• Mel Riley — Imagery interpreter, 17-year program veteran
• Ed Dames — Army major, Chinese linguist`,
    details: [
      { label: 'Bush Connection', value: 'VP George H.W. Bush reportedly read remote viewing reports without dismissing them' },
      { label: 'Gen. Thompson Quote', value: '"I became convinced that remote-viewing was a real phenomenon, that it wasn\'t a hoax"' }
    ]
  },
  {
    id: 6,
    title: 'Program Decline',
    shortTitle: 'Decline',
    icon: 'clock',
    content: `INSTITUTIONAL DYSFUNCTION & COLLAPSE:

THE STUBBLEBINE PROBLEM
Gen. Stubblebine held "spoon-bending" sessions with staff officers, sent them to Monroe Institute for altered-state training, discussed "yellow salamanders" in Pentagon briefings instead of operations.

"THE WITCHES"
Angela Dellafiora "channelled" entities named "Maurice" and "George." Robin Dahlgren practiced tarot card reading.

ED DAMES'S TRAJECTORY
Explored "advanced training targets": Virgin Mary apparitions, Atlantis ("at the bottom of Lake Titicaca"), Loch Ness monster ("a dinosaur's ghost"), and Martians. Moved to New Mexico awaiting hidden Martian civilization.

1988 INSPECTOR GENERAL INVESTIGATION
"A lot of things were being shredded and disposed of..."
"They were burning the shredders all day and some of the night."`,
    details: [
      { label: 'Lt. Doug P- Incident', value: 'INSCOM officer emerged from Monroe Institute "naked and incoherent" — "taken away literally in a straightjacket"' },
      { label: 'Self-Assessment', value: '"Without feedback, your remote-viewing turns to shit." — Mel Riley' }
    ]
  },
  {
    id: 7,
    title: 'Legacy & Aftermath',
    shortTitle: 'Legacy',
    icon: 'file',
    content: `PROGRAM STATUS AS OF 1995:

• SRI program died 1989, briefly resurrected at SAIC, died again 1994
• Russian program reportedly met similar fate post-Cold War
• Fort Meade unit transferred, "buried somewhere in the maze of Pentagon bureaucracy"

AFTERMATH
• Ed Dames formed Psi Tech, commercial remote-viewing company
• Mel Riley retired to rural Wisconsin, joined Native American "medicine society"
• Original Fort Meade buildings sit "mouldering amid a quiet clump of trees"

"It's gone through these cycles before and survived quite surprisingly, so I hope that happens this time. It's got a lot of enemies, but it's also got a lot of friends."

This document was declassified September 16, 2003 as part of the STARGATE disclosure. Approximately $20 million was spent over two decades.`,
    details: [
      { label: 'Hal Puthoff Assessment', value: '"Experiencing remote-viewing broadened their perspective. They seemed to be warmer, more generous, more excited about life."' },
      { label: 'Psychological Warning', value: '"As with any prolonged alteration of consciousness, it promotes altered states and general mental instability"' }
    ]
  }
]
