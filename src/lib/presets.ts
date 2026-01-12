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

const preset_programming: Preset = {
  id: 'tut-proggen-sem20252026',
  name: 'Programmieren (WS 25/26)',
  visible: true,
  visibleFrom: '',
  visibleUntil: '2026-03-31',
  description: 'Default settings for Programming',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KASTEL / Programmieren',
  mailSubject: 'Stundenzettel %FIRST% %LAST% %YYYY%-%MM%',
  mailRecipient: 'programmieren-vorlesung@cs.kit.edu',
  mailRecipientCC: [],
}

const preset_algo: Preset = {
  id: 'tut-algo-sem2025',
  name: 'Algorithmen (SS 25)',
  visible: true,
  visibleFrom: '',
  visibleUntil: '2026-03-31',
  description: 'Default settings for Algorithms',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'ITI / Algorithmen',
  mailSubject:
    'Stundenzettel / Timesheet %MM_GER% / %MM_ENG% %YYYY% %FIRST% %LAST%',
  mailRecipient: 'algo1@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

const preset_gbi: Preset = {
  id: 'tut-gbi-sem20252026',
  name: 'Grundbegriffe der Informatik (WS 25/26)',
  visible: true,
  visibleFrom: '',
  visibleUntil: '2026-04-30',
  description: 'Default settings for GBI',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'GBI',
  mailSubject: '%FIRST% %LAST%, Fakultät für Informatik, %PERS_NR%',
  mailRecipient: 'zeiterfassung-hiwi@pse.kit.edu',
  mailRecipientCC: ['torsten.ueckerdt@kit.edu'],
}

const preset_lti: Preset = {
  id: 'etit-lti-mitarbeiter',
  name: 'Lichttechnisches Institut (LTI)',
  visible: false,
  visibleFrom: '',
  visibleUntil: '',
  description: 'Default settings for LTI',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'LTI AG ??',
  mailSubject: '%FIRST% %LAST%, Fakultät für Informatik, %PERS_NR%',
  mailRecipient: 'zeiterfassung-hiwi@pse.kit.edu',
  mailRecipientCC: [],
}

const preset_tgi: Preset = {
  id: 'tut-tgi-sem20252026',
  name: 'Theoretische Grundlagen der Informatik (WS 25/26)',
  visible: true,
  visibleFrom: '',
  visibleUntil: '2026-03-31',
  description: 'Default settings for TGI',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'Fakultät für Informatik (TGI)',
  mailSubject: 'Arbeitszeitdokumentation %FIRST% %LAST% %MM_GER%',
  mailRecipient: 'tgi-jmq@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

// From summer semester 2026, the names should be different.

const preset_programming_post2026: Preset = {
  id: 'tut-proggen-sem2026',
  name: 'Programmieren (SS 26)',
  visible: false,
  visibleFrom: '2026-04-01',
  visibleUntil: '',
  description: 'Default settings for Programming',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KIT-Fakultät für Informatik / Tutorium Programmieren (Prof. Koziolek)',
  mailSubject: 'Stundenzettel %FIRST% %LAST% %YYYY%-%MM%',
  mailRecipient: 'programmieren-vorlesung@cs.kit.edu',
  mailRecipientCC: [],
}

const preset_algo_post2026: Preset = {
  id: 'tut-algo-sem2026',
  name: 'Algorithmen (SS 26)',
  visible: false,
  visibleFrom: '2026-04-01',
  visibleUntil: '',
  description: 'Default settings for Algorithms',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KIT-Fakultät für Informatik / Tutorium Algorithmen I (Prof. Sanders)',
  mailSubject:
    'Stundenzettel / Timesheet %MM_GER% / %MM_ENG% %YYYY% %FIRST% %LAST%',
  mailRecipient: 'algo1@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

const preset_swt_post2026: Preset = {
  id: 'tut-swt-sem2026',
  name: 'Grundbegriffe der Informatik (SS 26)',
  visible: false,
  visibleFrom: '2026-10-01',
  visibleUntil: '',
  description: 'Default settings for SWT',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KIT-Fakultät für Informatik / Tutorium Softwaretechnik (Prof. Schaefer)',
  mailSubject: '%FIRST% %LAST%, Fakultät für Informatik, %PERS_NR%',
  mailRecipient: 'zeiterfassung-hiwi@pse.kit.edu',
  mailRecipientCC: [],
}

const preset_dt_post2026: Preset = {
  id: 'tut-dt-sem2026',
  name: 'Digitaltechnik (SS 26)',
  visible: false,
  visibleFrom: '2026-04-01',
  visibleUntil: '',
  description: 'Default settings for DT',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KIT-Fakultät für Informatik / Tutorium Digitaltechnik (Prof. Karl)',
  mailSubject: 'Arbeitszeitdokumentation %FIRST% %LAST% %MM_GER%',
  mailRecipient: '',
  mailRecipientCC: [],
}

export const presets: Preset[] = [
  preset_programming,
  preset_algo,
  preset_gbi,
  preset_tgi,
  preset_programming_post2026,
  preset_algo_post2026,
  //preset_swt_post2026,
  //preset_dt_post2026
]
