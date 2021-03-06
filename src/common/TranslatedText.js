/* @flow */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import type { LocalizableText } from '../types';

type Props = {
  text: LocalizableText,
};

export default ({ text }: Props) => {
  const message = text.text || text;

  return <FormattedMessage id={message} defaultMessage={message} values={text.values} />;
};
