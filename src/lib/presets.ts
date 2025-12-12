interface Preset {
  id: string
  name: string
  visible: boolean
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
  description: 'Default settings for TGI',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'Fakultät für Informatik (TGI)',
  mailSubject: 'Arbeitszeitdokumentation %FIRST% %LAST% %MM_GER%',
  mailRecipient: 'tgi-jmq@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

export const presets: Preset[] = [
  preset_programming,
  preset_algo,
  preset_gbi,
  preset_tgi,
]
