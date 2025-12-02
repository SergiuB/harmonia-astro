# Adding new facilitator

1. Create facilitator file in `src/content/facilitators`, and for English in `src/content/facilitators-en`
   - Mandatory fields: `name`, `images`, `tags`, `services`, `contact`
     - Mandatory service fields: `name`, `summary`, `price`, `duration`
     - Mandatory contact fields: `phone`
   - Missing mandatory fields will result in a build error, the site will note be deployed and no changes will be visible
2. The `activities` field should contain only IDs of service types as defined in `src/data/serviceTypes.json`
   - examples: acupunctura, kinetoterapie etc
   - if a new service type needs to be added, see section for adding a new service type below
   - IMPORTANT: do not translate the `activities` field values in the English version of the facilitator (they are unique IDs not texts displayed in the UI). Both versions of the facilitator file must have the same `activities` list.
3. Any error in the facilitator file format (missing brackets, commas, etc) causes the changes to not be deployed

# Adding a new service type

1. Add a new entry in `src/data/serviceTypes.json`

```
  {
    "id": "new-service-type",
    "nameKey": "activity.newServiceType"
  },
```

Keep the alphabetic order and don't forget the comma separator at the end.

2. Add translation strings for Romanian and English in the centralized translations file: `src/i18n/ui.ts`

Example: For service type with name key `activity.aliniament` defined in `src/data/serviceTypes.json` we have two entries in `src/i18n/ui.ts`:

`"activity.aliniament": "Aliniament postural",` for Romanian, placed under the `ro` key

and

`"activity.aliniament": "Postural Alignment",` for English, placed under the `en` key

IMPORTANT: don't forget the comma at the end, and place each new line in the right place. Use the existing service types as a guide, put it in the same places.

# Adding ativities in the calendar

- The Google Calendar event description can contain special keys for links:
  - If a `detailsLink` is present, the event title will be a link to it. If not, the title is plain text.
  - If a `registerLink` is present, a Reserve button will be shown
  - Example formats supported:
    - `detailsLink: <a href="https://example.com">link</a>`
    - `detailsLink: https://example.com`
    - `detailsLink: www.example.com`
    - `registerLink: <a href="https://app.simplymeet.me/harmoniaoptima">link</a>`
    - `registerLink: https://app.simplymeet.me/harmoniaoptima`
    - `registerLink: www.simplymeet.me/harmoniaoptima`
- AFTER the description in Romanian you can:
  - include an optional `enDescription:` section for the English content. If this is present, its content is used for the English locale while the rest of the description is treated as Romanian. If it is absent, the base description is used for both locales.
  - include an optional `enTitle: <title in English here>` for the English title.
