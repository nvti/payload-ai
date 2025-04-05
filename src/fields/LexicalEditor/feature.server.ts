import { createServerFeature } from '@payloadcms/richtext-lexical'

import { PLUGIN_LEXICAL_EDITOR_FEATURE } from '../../defaults.js'

// TODO: Remove this once we have a way to check if the plugin is activated
export const PayloadAiPluginLexicalEditorFeature = createServerFeature({
  feature: {
    ClientFeature: '@ai-stack/payloadcms/client#LexicalEditorFeatureClient',
  },
  key: PLUGIN_LEXICAL_EDITOR_FEATURE,
})
