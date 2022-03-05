import 'reflect-metadata';

import { Container } from 'typedi';

import { App } from './App';

Container.get(App).run();
