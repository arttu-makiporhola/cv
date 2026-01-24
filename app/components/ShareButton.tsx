'use client';

import { useEffect, useState, memo, Fragment } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ShareIcon } from './icons';
import IconButton from './IconButton';

function ShareButton() {
  const { t } = useLanguage();

  const share = () => {
    navigator.share({
      url: window.location.href,
    });
  }

  return (
    <Fragment>
      {'share' in navigator &&
        <IconButton
          icon={<ShareIcon />}
          onClick={share}
          title={t('actions.share')?.toString()}
        />
      }
    </Fragment>
  );
}

export default memo(ShareButton);
