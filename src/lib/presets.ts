interface Preset {
  id: string
  name: string
  visible: boolean
  visibleFrom: string
  visibleUntil: string
  description: string
  fileFormat: string
  department: string
  mailSubject: string
  mailRecipient: string
  mailRecipientCC: string[]
}

const preset_programming_winter: Preset = {
  id: 'tut-proggen-sem20262027',
  name: 'Programmieren (WS 26/27)',
  visible: true,
  visibleFrom: '2026-10-01',
  visibleUntil: '2027-04-30',
  description: 'Default settings for Programming for winter 2026/27',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department:
    'KIT-Fakultät für Informatik / Tutorium Programmieren (Prof. Koziolek)',
  mailSubject: 'Stundenzettel %FIRST% %LAST% %YY%-%MM%',
  mailRecipient: 'programmieren-vorlesung@cs.kit.edu',
  mailRecipientCC: [],
}

const preset_gti: Preset = {
  id: 'tut-gti-sem20262027',
  name: 'Grundlagen der theoretischen Informatik (WS 26/27)',
  visible: true,
  visibleFrom: '2026-10-01',
  visibleUntil: '2027-04-30',
  description: 'Default settings for GTI (WS 26/27)',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KIT-Fakultät für Informatik / Tutorium GTI (Ueckerdt)',
  mailSubject: '%FIRST% %LAST%, Fakultät für Informatik, %PERS_NR%',
  mailRecipient: 'zeiterfassung-hiwi@pse.kit.edu',
  mailRecipientCC: ['torsten.ueckerdt@kit.edu'],
}

const preset_dt_winter: Preset = {
  id: 'tut-dt-sem20262027',
  name: 'Digitaltechnik (WS 26/27)',
  visible: true,
  visibleFrom: '2026-10-01',
  visibleUntil: '2027-04-30',
  description: 'Default settings for DT for winter 2026/27',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%', // (?)
  department:
    'KIT-Fakultät für Informatik / Tutorium Digitaltechnik (Prof. Karl)',
  mailSubject: 'Arbeitszeitdokumentation %FIRST% %LAST% %MM_GER%', // ?
  mailRecipient: '', // ?
  mailRecipientCC: [], // ?
}

const preset_tgi: Preset = {
  id: 'tut-tgi-sem20262027',
  name: 'Theoretische Grundlagen der Informatik (WS 26/27)',
  visible: true,
  visibleFrom: '2026-10-01',
  visibleUntil: '2027-04-30',
  description: 'Default settings for TGI',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KIT-Fakultät für Informatik / Tutorium TGI (Prof. Müller-Quade)',
  mailSubject: 'Arbeitszeitdokumentation %FIRST% %LAST% %MM_GER%',
  mailRecipient: 'tgi-jmq@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

// From summer semester 2026, the names should be different.

const preset_programming_summer: Preset = {
  id: 'tut-proggen-sem2026',
  name: 'Programmieren (SS 26)',
  visible: true,
  visibleFrom: '2026-04-01',
  visibleUntil: '2026-10-31',
  description: 'Default settings for Programming for summer 2026',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department:
    'KIT-Fakultät für Informatik / Tutorium Programmieren (Prof. Koziolek)',
  mailSubject: 'Stundenzettel %FIRST% %LAST% %YY%-%MM%',
  mailRecipient: 'programmieren-vorlesung@cs.kit.edu',
  mailRecipientCC: [],
}

const preset_algo_summer: Preset = {
  id: 'tut-algo-sem2026',
  name: 'Algorithmen (SS 26)',
  visible: true,
  visibleFrom: '2026-04-01',
  visibleUntil: '2026-10-31',
  description: 'Default settings for Algorithms I for summer 2026',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department:
    'KIT-Fakultät für Informatik / Tutorium Algorithmen I (Prof. Sanders)',
  mailSubject: 'Stundenzettel %MM_GER% %YYYY%',
  mailRecipient: 'algo1@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

const preset_swt_summer: Preset = {
  id: 'tut-swt-sem2026',
  name: 'Softwaretechnik I (SS 26)',
  visible: true,
  visibleFrom: '2026-04-01',
  visibleUntil: '2026-10-31',
  description: 'Default settings for SWT for summer 2026',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%', // (?)
  department:
    'KIT-Fakultät für Informatik / Tutorium Softwaretechnik (Prof. Schaefer)',
  mailSubject: 'Stundenzettel %FIRST% %LAST% %YYYY%-%MM%', // ?
  mailRecipient: 'zeiterfassung-hiwi@pse.kit.edu', // ?
  mailRecipientCC: [], // ?
}

const preset_dt_summer: Preset = {
  id: 'tut-dt-sem2026',
  name: 'Digitaltechnik (SS 26)',
  visible: true,
  visibleFrom: '2026-04-01',
  visibleUntil: '2026-10-31',
  description: 'Default settings for DT for summer 2026',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%', // (?)
  department:
    'KIT-Fakultät für Informatik / Tutorium Digitaltechnik (Prof. Karl)',
  mailSubject: 'Arbeitszeitdokumentation %FIRST% %LAST% %MM_GER%', // ?
  mailRecipient: '', // ?
  mailRecipientCC: [], // ?
}

export const presets: Preset[] = [
  preset_programming_summer,
  preset_programming_winter,
  preset_algo_summer,
  preset_gti,
  preset_tgi,
  preset_dt_summer,
  preset_dt_winter,
  preset_swt_summer,
]
