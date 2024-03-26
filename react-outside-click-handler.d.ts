declare module 'react-outside-click-handler' {
  import * as React from 'react';

  export interface OutsideClickHandlerProps {
    onOutsideClick: (event: MouseEvent | TouchEvent) => void;
    children: React.ReactNode;
  }

  const OutsideClickHandler: React.FC<OutsideClickHandlerProps>;
  export default OutsideClickHandler;
}
