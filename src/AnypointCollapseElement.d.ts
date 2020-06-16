import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import { ArcResizableMixin } from '@advanced-rest-client/arc-resizable-mixin';

declare class AnypointCollapseElement {
  static readonly styles: CSSResult;

  /**
   * Renders the collapse horizontally when true and vertically otherwise
   */
  horizontal: boolean;

  /**
   * Set opened to true to show the collapse element and to false to hide it.
   */
  opened: boolean;

  /**
   * Set noAnimation to true to disable animations.
   */
  noAnimation: boolean;


  /**
   * @returns When true, the element is transitioning its opened state. When false,
   * the element has finished opening/closing.
   */
  readonly transitioning: boolean;

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
