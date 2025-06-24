import { documentEventHandler } from '@sanity/functions'

export const handler = documentEventHandler(async ({ context, event }) => {
  console.log(`same-folder-yarn-javascript`)
})
