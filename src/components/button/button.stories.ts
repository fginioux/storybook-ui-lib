// import { within } from '@storybook/testing-library';

export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Button',
  label: { control: 'text' },
  argTypes: {
    type: { control: { type: 'select', options: ['reset', 'submit'] } },
    onClick: { action: true },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'centered',
  },
};

const createButton = ({ label, onClick, type }: any) => {
  const btn = document.createElement('fca-ui-button');
  btn.type = type;
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  return btn;
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const Example = Template.bind({});
Example.args = {
  type: 'submit',
  label: 'My Component Button',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'reset',
  label: 'Primary',
};

const Rollover = Template.bind({});
console.log(Rollover);
