import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kcc-studio',

  projectId: 'vznsl22l',
  dataset: 'production',

  plugins: [cloudinarySchemaPlugin(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
