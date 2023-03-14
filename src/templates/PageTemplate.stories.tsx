import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { cartItems } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

export default {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageTemplate>

// Just to make the story a bit more understandable for the users
const DummyComponent: React.FC = ({ children }) => <div style={{ padding: 60 }}>{children}</div>

const Template: ComponentStory<typeof PageTemplate> = (args) => <PageTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <DummyComponent>
      Default template with scrollable header and navigation items + Footer
    </DummyComponent>
  ),
}

export const WithItemsInTheCart = Template.bind({})
WithItemsInTheCart.parameters = {
  store: {
    initialState: { cart: { items: cartItems } },
  },
}

export const StickyHeader = Template.bind({})
StickyHeader.args = {
  type: 'sticky-header',
  children: (
    <DummyComponent>
      Template with sticky header on desktop and navigation items. Try scrolling!
    </DummyComponent>
  ),
}

export const Basic = Template.bind({})
Basic.args = {
  type: 'basic',
  children: (
    <DummyComponent>
      Simple template with scrollable header and no navigation items and no footer.
    </DummyComponent>
  ),
}
