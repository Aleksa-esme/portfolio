import { FC } from 'react';
import styles from './icon.module.css';
import { ReactComponent as ReactIcon } from 'assets/icons/react.svg';
import { ReactComponent as ReduxIcon } from 'assets/icons/redux.svg';
import { ReactComponent as TsIcon } from 'assets/icons/ts.svg';
import { ReactComponent as JsIcon } from 'assets/icons/js.svg';
import { ReactComponent as HtmlIcon } from 'assets/icons/html.svg';
import { ReactComponent as CssIcon } from 'assets/icons/css.svg';
import { ReactComponent as ScssIcon } from 'assets/icons/scss.svg';
import { ReactComponent as WsIcon } from 'assets/icons/ws.svg';
import { ReactComponent as WebpackIcon } from 'assets/icons/webpack.svg';
import { ReactComponent as GitIcon } from 'assets/icons/git.svg';
import { ReactComponent as HandlebarsIcon } from 'assets/icons/handlebars.svg';
import { ReactComponent as ParcelIcon } from 'assets/icons/parcel.svg';
import { ReactComponent as FigmaIcon } from 'assets/icons/figma.svg';
import { ReactComponent as WebIcon } from 'assets/icons/web.svg';
import { ReactComponent as TelegramIcon } from 'assets/icons/telegram.svg';
import { ReactComponent as WhatsappIcon } from 'assets/icons/whatsapp.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

type Props = {
  type: string;
  size: 'xs' | 'small' | 'medium' | 'large';
};

export const Icon: FC<Props> = ({ type, size }) => {
  switch (type) {
    case 'react':
      return <ReactIcon className={styles[size]} />;
    case 'redux':
      return <ReduxIcon className={styles[size]} />;
    case 'ts':
      return <TsIcon className={styles[size]} />;
    case 'js':
      return <JsIcon className={styles[size]} />;
    case 'html':
      return <HtmlIcon className={styles[size]} />;
    case 'css':
      return <CssIcon className={styles[size]} />;
    case 'scss':
        return <ScssIcon className={styles[size]} />;
    case 'ws':
      return <WsIcon className={styles[size]} />;
    case 'webpack':
      return <WebpackIcon className={styles[size]} />;
    case 'parcel':
      return <ParcelIcon className={styles[size]} />;
    case 'handlebars':
        return <HandlebarsIcon className={styles[size]} />;
    case 'git':
      return <GitIcon className={styles[size]} />;
    case 'figma':
      return <FigmaIcon className={styles[size]} />;
    case 'web':
      return <WebIcon className={styles[size]} />;
    case 'telegram':
      return <TelegramIcon className={styles[size]} />;
    case 'whatsapp':
      return <WhatsappIcon className={styles[size]} />;
    case 'arrow':
      return <ArrowIcon className={styles[size]} />;

    default:
      return <span>NO ICON</span>;
  }
};
