import { type SchemaTypeDefinition } from 'sanity'
import home from './home'
import dataScience from './dataScience'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home,dataScience],
}
