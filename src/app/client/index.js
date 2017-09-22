/* global document */
import '../../day/client';
import '../../util/prevent-backthing';
import Inferno, { h } from 'inferno';
import { AppView } from './view/app.view';

Inferno.render(h(AppView), document.getElementById('app'));

