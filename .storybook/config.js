import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

addParameters({
  options: {
    name: '@4react/forms',
    showPanel: true,
    panelPosition: 'right'
  },
  knobs: {
    escapeHTML: false
  }
})

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext)
}

configure(() => {
  require('./style.css')
  requireAll(require.context('../src/components/layout', true, /stories\.js$/))
}, module)
