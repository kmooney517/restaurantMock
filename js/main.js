import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import homeController from './homeController';


angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('homeController', homeController)
;