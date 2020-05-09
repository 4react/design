import { storiesOf } from '@storybook/react'
import ColStory from './Col/Col.story'
import ContainerStory from './Container/Container.story'
import RowStory from './Row/Row.story'

const stories = storiesOf('layout|Grid', module)
stories.add('Container', ContainerStory)
stories.add('Row', RowStory)
stories.add('Col', ColStory)
