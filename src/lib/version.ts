interface Response {
  url: string
}

/**
 * Gets the latest timesheet generator version.<br/>
 * Current version is parsed from the "latest" tag from the official Timesheet Generator Github Page.
 */
export const fetchVersion = async () => {
  const { url } = (await fetch(
    'https://github.com/kit-sdq/TimeSheetGenerator/releases/latest',
  )) as Response
  return url.split('/').pop()?.replace('v', '') ?? 'unknown'
}
