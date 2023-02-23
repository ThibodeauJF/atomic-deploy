/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    /**
     * Component used to manage results & result templates.
     * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
     */
    interface ResultsManager {
    }
    /**
     * Sample custom Atomic component, initializing itself against a parent search interface in order to retrieve the bindings.
     * This component showcases a custom-made pagination component, for educational purposes.
     * In a real life scenario, we recommend using either [atomic-pager](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-pager/) or [atomic-load-more-results](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-load-more-results/) instead.
     */
    interface SampleComponent {
    }
    /**
     * Sample custom Atomic result component, to be used inside an Atomic Result Template.
     * This component showcases a component that conditionally renders the author of a result, with a fallback to display "anonymous" in the event that no author is available for a document, for educational purposes.
     * In a real life scenario, we recommend using [result-field-condition](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-field-condition/) and [atomic-result-text](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-result-text/).
     */
    interface SampleResultComponent {
    }
}
declare global {
    /**
     * Component used to manage results & result templates.
     * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
     */
    interface HTMLResultsManagerElement extends Components.ResultsManager, HTMLStencilElement {
    }
    var HTMLResultsManagerElement: {
        prototype: HTMLResultsManagerElement;
        new (): HTMLResultsManagerElement;
    };
    /**
     * Sample custom Atomic component, initializing itself against a parent search interface in order to retrieve the bindings.
     * This component showcases a custom-made pagination component, for educational purposes.
     * In a real life scenario, we recommend using either [atomic-pager](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-pager/) or [atomic-load-more-results](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-load-more-results/) instead.
     */
    interface HTMLSampleComponentElement extends Components.SampleComponent, HTMLStencilElement {
    }
    var HTMLSampleComponentElement: {
        prototype: HTMLSampleComponentElement;
        new (): HTMLSampleComponentElement;
    };
    /**
     * Sample custom Atomic result component, to be used inside an Atomic Result Template.
     * This component showcases a component that conditionally renders the author of a result, with a fallback to display "anonymous" in the event that no author is available for a document, for educational purposes.
     * In a real life scenario, we recommend using [result-field-condition](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-field-condition/) and [atomic-result-text](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-result-text/).
     */
    interface HTMLSampleResultComponentElement extends Components.SampleResultComponent, HTMLStencilElement {
    }
    var HTMLSampleResultComponentElement: {
        prototype: HTMLSampleResultComponentElement;
        new (): HTMLSampleResultComponentElement;
    };
    interface HTMLElementTagNameMap {
        "results-manager": HTMLResultsManagerElement;
        "sample-component": HTMLSampleComponentElement;
        "sample-result-component": HTMLSampleResultComponentElement;
    }
}
declare namespace LocalJSX {
    /**
     * Component used to manage results & result templates.
     * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
     */
    interface ResultsManager {
    }
    /**
     * Sample custom Atomic component, initializing itself against a parent search interface in order to retrieve the bindings.
     * This component showcases a custom-made pagination component, for educational purposes.
     * In a real life scenario, we recommend using either [atomic-pager](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-pager/) or [atomic-load-more-results](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-load-more-results/) instead.
     */
    interface SampleComponent {
    }
    /**
     * Sample custom Atomic result component, to be used inside an Atomic Result Template.
     * This component showcases a component that conditionally renders the author of a result, with a fallback to display "anonymous" in the event that no author is available for a document, for educational purposes.
     * In a real life scenario, we recommend using [result-field-condition](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-field-condition/) and [atomic-result-text](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-result-text/).
     */
    interface SampleResultComponent {
    }
    interface IntrinsicElements {
        "results-manager": ResultsManager;
        "sample-component": SampleComponent;
        "sample-result-component": SampleResultComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * Component used to manage results & result templates.
             * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
             */
            "results-manager": LocalJSX.ResultsManager & JSXBase.HTMLAttributes<HTMLResultsManagerElement>;
            /**
             * Sample custom Atomic component, initializing itself against a parent search interface in order to retrieve the bindings.
             * This component showcases a custom-made pagination component, for educational purposes.
             * In a real life scenario, we recommend using either [atomic-pager](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-pager/) or [atomic-load-more-results](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-load-more-results/) instead.
             */
            "sample-component": LocalJSX.SampleComponent & JSXBase.HTMLAttributes<HTMLSampleComponentElement>;
            /**
             * Sample custom Atomic result component, to be used inside an Atomic Result Template.
             * This component showcases a component that conditionally renders the author of a result, with a fallback to display "anonymous" in the event that no author is available for a document, for educational purposes.
             * In a real life scenario, we recommend using [result-field-condition](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-field-condition/) and [atomic-result-text](https://docs.coveo.com/en/atomic/latest/reference/result-template-components/atomic-result-text/).
             */
            "sample-result-component": LocalJSX.SampleResultComponent & JSXBase.HTMLAttributes<HTMLSampleResultComponentElement>;
        }
    }
}
