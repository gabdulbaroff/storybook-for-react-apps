// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { RestaurantsSectionComponent as RestaurantsSection } from "./RestaurantsSection.container";
// import { restaurants } from "../../../../stub/restaurants";
//
// export default {
//   title: 'Pages/HomePage/Components/RestaurantsSection',
//   component: RestaurantsSection,
//   parameters: {
//     design: {
//       type: 'figspec',
//       url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A311&t=vyqDDI5h6wuHhMZ9-4',
//     }
//   }
// } as ComponentMeta<typeof RestaurantsSection>
//
// const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
//   <RestaurantsSection {...args} />
// )
//
// export const Default = Template.bind({})
// Default.args = {
//   title: 'Our favorite picks',
//   restaurants,
// }
//
// export const Loading = Template.bind({})
// Loading.args = {
//   title: 'Our favorite picks',
//   isLoading: true,
// }

import { rest } from 'msw'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { BASE_URL } from '../../../../api'
import { restaurants } from '../../../../stub/restaurants'

import { RestaurantsSection } from './RestaurantsSection.container'

export default {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A311&t=vyqDDI5h6wuHhMZ9-4',
    },
  },
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favorite picks',
}
Default.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  ...Default.args,
}
Loading.parameters = {
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.delay('infinite')))],
  },
}
