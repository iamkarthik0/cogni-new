import { type SchemaTypeDefinition } from 'sanity'
import home from './home'
import dataScience from './dataScience'
import genAiServices from './genAiServices'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home,dataScience,genAiServices],
}
