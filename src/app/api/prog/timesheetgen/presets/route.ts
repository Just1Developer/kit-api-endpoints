import { presets } from '@/lib/presets'
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
 *   <li><code>%PERS_NR%</code>: Staff id</li>
 * </ul>
 *
 * <p>Example:</p>
 * <pre>
 * %LAST%_%FIRST_U%_%MM%_%YYYY%.pdf
 * Mustermann_Max_Tobias_04_2025.pdf
 * </pre>
 */
export const GET = async () => {
  return NextResponse.json({
    presets,
  })
}
