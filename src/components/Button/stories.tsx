import Button from '.';
import { Story, Meta } from '@storybook/react/types-7-0';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '', // Só pra não ocupar a prop com texto
    },
  },
} as Meta;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Buy now',
  size: 'medium',
};

export const withIcon: Story = (args) => <Button {...args} />;

withIcon.args = {
  children: 'Buy now',
  size: 'medium',
  icon: <AddShoppingCart />,
};
