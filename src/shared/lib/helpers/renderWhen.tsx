import { Fragment, type ReactElement, type ReactNode } from 'react';

export function renderWhen(condition: boolean, node: ReactNode): ReactElement {
  return <Fragment>{condition ? node : null}</Fragment>;
}
