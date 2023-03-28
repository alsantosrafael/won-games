import Highlight from '.';
import { Story, Meta } from '@storybook/react/types-7-0';
export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Red Dead is back!",
    subtitle: "Come see John's new adventure",
    backgroundImage: '/img/red-dead.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2',
    floatImage: '/img/red-dead-float.png'

  }
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '104rem'}}>
  <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story = (args) => (
  <div style={{ maxWidth: '104rem'}}>
  <Highlight {...args} />
  </div>
);

export const WithFloatImageAndLeftAlignment: Story = (args) => (
  <div style={{ maxWidth: '104rem'}}>
  <Highlight {...args} alignment='left'/>
  </div>
);
