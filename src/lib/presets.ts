interface Preset {
  id: string,
  name: string,
  description: string,
  fileFormat: string,
  department: string,
  mailSubject: string,
  mailRecipient: string,
  mailRecipientCC: string[],
}

const preset_programming: Preset = {
  id: 'tut-proggen-2526',
  name: 'Programmieren (WS 25/26)',
  description: 'Default settings for Programming',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'KASTEL / Programmieren',
  mailSubject: 'Stundenzettel %FIRST% %LAST% %YYYY%-%MM%',
  mailRecipient: 'programmieren-vorlesung@cs.kit.edu',
  mailRecipientCC: [],
}

const preset_algo: Preset = {
  id: 'tut-algo-25',
  name: 'Algorithmen (SS 25)',
  description: 'Default settings for Algorithms',
  fileFormat: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
  department: 'ITI / Algorithmen',
  mailSubject: 'Stundenzettel / Timesheet %MM_GER% / %MM_ENG% %YYYY% %FIRST% %LAST%',
  mailRecipient: 'algo1@mail.informatik.kit.edu',
  mailRecipientCC: [],
}

const preset_gbi: Preset = {
  id: 'tut-gbi-2526',
  name: 'Grundbegriffe der Informatik (WS 25/26)',
  description: 'Default settings for GBI',
  fileFormat: '',
  department: 'ITI / GBI',
  mailSubject: '%FIRST% %LAST%, Fakultät für Informatik, %PERS_NR%',
  mailRecipient: '',
  mailRecipientCC: ['torsten-ueckerdt@kit.edu'],
}

export const presets: Preset[] = [
  preset_programming,
  preset_algo,
  preset_gbi,
]