import { fetchVersion } from '@/lib/version'
import { NextResponse } from 'next/server'

/**
 * Default file name format for time sheets, as requested by KASTEL @ KIT.
 *
 * <p>You can use the following placeholders in the PDF name format:</p>
 *
 * <ul>
 *   <li><code>%FIRST%</code>: First and middle names, separated by space</li>
 *   <li><code>%FIRST_U%</code>: First and middle names, separated by underscores</li>
 *   <li><code>%LAST%</code>: Last name</li>
 *   <li><code>%MM%</code>: Month number from 01–12</li>
 *   <li><code>%MM_GER%</code>: German month name</li>
 *   <li><code>%MM_ENG%</code>: English month name</li>
 *   <li><code>%YY%</code>: Year (2 digits)</li>
 *   <li><code>%YYYY%</code>: Year (4 digits)</li>
 * </ul>
 *
 * <p>Example:</p>
 * <pre>
 * %LAST%_%FIRST_U%_%MM%_%YYYY%.pdf
 * Mustermann_Max_Tobias_04_2025.pdf
 * </pre>
 */
export const GET = async () => {
  const version = await fetchVersion()
  return NextResponse.json({
    version,
    fileFormatProg: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
    fileFormatAlgo: '%LAST%_%FIRST_U%_%MM%_%YYYY%',
    emailTitleProg: 'Stundenzettel %FIRST% %LAST% %YYYY%-%MM%',
    // Note that the following default value is not official:
    emailTitleAlgo:
      'Stundenzettel / Timesheet %MM_GER% / %MM_ENG% %YYYY% %FIRST% %LAST%',
    emailRecipientProg: 'programmieren-vorlesung@cs.kit.edu',
  })
}
