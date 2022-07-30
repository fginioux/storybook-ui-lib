import { Component, Prop, h, Watch, Listen, EventEmitter, Event, State } from '@stencil/core';

export type ConfigData = {[key: string]: any };

@Component({
  tag: 'fca-ui-button',
  styleUrl: 'button.css',
  shadow: true,
})
export class Button {
  className = '';

  @State()
  isHighlighted = false;

  @Prop()
  type: string;

  @Prop()
  data: ConfigData | string;

  @Event()
  clicked: EventEmitter<any>;

  @Watch('data')
  watchDataChanges(value: ConfigData | string) {
    console.log(value);

    return '';
  }

  @Listen('click')
  handleClick() {
    this.clicked.emit({value: true});

    this.isHighlighted = !this.isHighlighted;

    return '';
  }

  @Listen('mouseover')
  handleOver() {
    console.log('@over !!!');

    return '';
  }

  render() {
    const className = this.isHighlighted ? 'highlight' : '';

    return <button class={className} type={this.type}><slot /></button>;
  }
}
