import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import { ArcResizableMixin } from '@advanced-rest-client/arc-resizable-mixin';

/**
 * @fires openedchange
 * @fires transitioningchange
 */
declare class AnypointCollapseElement {
  static get styles(): CSSResult;

  /**
   * Renders the collapse horizontally when true and vertically otherwise
   * @attribute
   */
  horizontal: boolean;

  /**
   * Set opened to true to show the collapse element and to false to hide it.
   * @attribute
   */
  opened: boolean;

  /**
   * Set noAnimation to true to disable animations.
   * @attribute
   */
  noAnimation: boolean;


  /**
   * @returns When true, the element is transitioning its opened state. When false,
   * the element has finished opening/closing.
   */
  get transitioning(): boolean;

  constructor();

  connectedCallback(): void;

  disconnectedCallback(): void;

  /**
   * Toggle the opened state.
   */
  toggle(): void;

  /**
   * Opens the collapsable
   */
  open(): void;

  /**
   * Closes the collapsable
   */
  close(): void;

  render(): TemplateResult;
}

interface AnypointCollapseElement extends ArcResizableMixin, LitElement {
}

export {AnypointCollapseElement};
