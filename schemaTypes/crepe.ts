import {defineField, defineType, defineArrayMember} from 'sanity'
import {HeartIcon} from '@sanity/icons'
import ingredients from './ingredients'
import tags from './tags'

export default defineType({
  name: 'crepe',
  title: 'Crepes',
  type: 'document',
  icon: HeartIcon,
  initialValue: {
    type: 'savory',
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description:
        'What’s in a name?  That which we call a rose  by any other name would smell as sweet.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used to create unique routes for each crepe',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      description: 'Highlight special things (Limited time, on sale, gluten free, etc.)',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: tags.name}})],
    }),
    defineField({
      name: 'type',
      title: 'Type',
      description: 'Only two options...',
      type: 'string',
      options: {
        list: [
          {title: 'Savory', value: 'savory'},
          {title: 'Sweet', value: 'sweet'},
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'cloudinary.asset',
      description: 'Primary image used for the crepe',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      description: 'List ingredients used for this crepe.',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: ingredients.name}})],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description to sell this mouthwatering creation. (500 characters max)',
      validation: (rule) => rule.max(500),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      tags0: 'tags.0.name',
      tags1: 'tags.1.name',
      tags2: 'tags.2.name',
      tags3: 'tags.3.name'
    },
    prepare: ({title, tags0, tags1, tags2, tags3 }) => {
        const tags = [tags0, tags1, tags2].filter(Boolean)
        const subtitles = tags.length > 0 ? tags.join(', ') : ''
        const hasMoreTags = Boolean(tags3)
        return {title, subtitle: hasMoreTags ? `${subtitles}...` : subtitles}
    }
  },
})
