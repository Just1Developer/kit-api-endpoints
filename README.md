# API Endpoints for KIT Applications

These are api endpoints for all my applications related to the KIT.

## Current Endpoints and Applications

### Timesheet Generator

| **Endpoint**                    | **Description**                                             | **Currently Returns**                                                       | **Additional Info**                                                                                                                                                     |
|---------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /api/prog/timesheetgen/defaults | ***[DEPRECATED]*** Endpoint for all related default values. | Current version and current default format strings for file name and email. | See Placeholder Formatting for formatting rules. Note that the Algo Email Format is not actually required, but the title should contain 'Timesheet' or 'Stundenzettel'. |
| /api/prog/timesheetgen/presets  | The new endpoint for default values [...]                   |                                                                             |


**Default Value Placeholder Formatting**

You can use the following placeholders in the PDF name format:

    - %FIRST%: First- and middle names, separated by space
    - %FIRST_U%: First- and middle names, separated by underscores
    - %LAST%: Lastname
    - %MM%: Month number from 01-12
    - %MM_GER%: German Month Name
    - %MM_ENG%: English Month Name
    - %YY%: Year (2 digits)
    - %YYYY%: Year (4 digits)
    - %PERS_NR%: Staff id
