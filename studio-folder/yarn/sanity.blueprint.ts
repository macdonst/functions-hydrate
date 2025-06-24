import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
		defineDocumentFunction({ name: "javascript" }),
		defineDocumentFunction({ name: "typescript" }),
  ],
})
