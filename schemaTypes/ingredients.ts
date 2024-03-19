import {defineField, defineType} from 'sanity'
import {OlistIcon} from '@sanity/icons'

export default defineType({
  name: 'ingredient',
  title: 'Ingredients',
  type: 'document',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})