import Footer from '.';
import { Story, Meta } from '@storybook/react/types-7-0';
export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
  <Footer {...args} />
  </div>
);
