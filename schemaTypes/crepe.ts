import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'crepe',
  title: 'Crepe',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: "What’s in a name?  That which we call a rose  by any other name would smell as sweet.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: "Used to create unique routes for each crepe",
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'cloudinary.asset',
      description: "Primary image used for the crepe"
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
