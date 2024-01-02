import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Ustawienia strony',
  type: 'document',
  fields: [
    defineField({
      name: 'massIntentions',
      type: 'file',
      title: 'Intencje Mszalne (.pdf)'
    }),
    defineField({
      name: 'parishAnnouncements',
      type: 'file',
      title: 'Ogłoszenia Parafialne (.pdf)'
    }),
    defineField({
      name: 'messes',
      title: 'Msze Święte',
      type: 'string',
    }),
    defineField({
      name: 'confession',
      title: 'Spowiedź Święta',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Nabożeństwa',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'name',
            title: 'Nazwa nabożeństwa',
            type: 'string'
          },
          {
            name: 'when',
            title: 'Kiedy jest organizowane',
            type: 'string'
          },
        ]
      }]
    }),
    defineField({
      name: 'office',
      title: 'Biuro parafialne',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'day',
            title: 'Dzień',
            type: 'string'
          },
          {
            name: 'hours',
            title: 'Godziny otwarcia',
            type: 'string'
          },
          {
            name: 'note',
            title: 'Adnotacja',
            type: 'string'
          },
        ]
      }]
    }),
    defineField({
      name: 'phone',
      title: 'Numer telefonu',
      type: 'string',
    }),
    defineField({
      name: 'bankAccount',
      title: 'Konto bankowe',
      type: 'string',
    }),
  ],
})
