import { render } from './render';

const ReactDOM = {
  createRoot(container) {
    return {
      render(element) {
        render(element, container);
      },
    };
  },
};

export default ReactDOM;
