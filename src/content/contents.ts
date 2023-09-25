//SERVICES
import services from "./services/services";
import servicesImpl from "./services/services_impl";
//REPOSITORY
import repository from "./repositories/repository";
import repositoryImpl from "./repositories/repository_impl";
//PROVIDER - DI
import notifier from "./provider/notifier";
import dependenciesI from "./provider/dependencies_injection";
import providerI from "./provider/provider_injection";
//CONFIG
import appConfig from "./config/app_config";
import flavor from "./config/flavor";
//ERROR
import errorMessages from "./error/error_messages";
import exception from "./error/exception";
import failure from "./error/failure";
//UTILS
import stateApp from "./utils/state_app";
import baseRepository from "./utils/base_repository";
import timeHelper from "./utils/time_helper";
import validator from "./utils/validator";
import whiteSpace from "./utils/white_space";
import blockOrientation from "./utils/block_orientarion";
//THEME
import theme from "./theme/theme";
//RESOURCES
import assets from "./resources/assets";
import colorApp from "./resources/colors";
import fonts from "./resources/fonts";
//ROUTER
import router from "./router/router";
import routes from "./router/routes";
import routeModel from "./router/route_model";
//DATA
// - CLIENT
import baseHttpClient from "./data/network/client/base_http_client";
import simpleApiClient from "./data/network/client/simple_api_client";
// - CONSTANTS
import apiRoutes from "./data/network/constants/api_routes";
// - INTERCEPTOR
import interceptor from "./data/network/interceptor/base_response_interceptor";
// - ENTITIES
import buildFlavor from "./entities/build_flavor";
// - TYPEFEEDBACK
import typeFeedBack from "./entities/type_feedback";
// - MAIN
import main from "./main/main";
// - APP
import app from "./main/app";

export default {
  services,
  servicesImpl,
  repository,
  repositoryImpl,
  notifier,
  dependenciesI,
  providerI,
  appConfig,
  flavor,
  errorMessages,
  exception,
  failure,
  stateApp,
  baseRepository,
  timeHelper,
  validator,
  whiteSpace,
  blockOrientation,
  theme,
  assets,
  colorApp,
  fonts,
  router,
  routes,
  routeModel,
  baseHttpClient,
  simpleApiClient,
  apiRoutes,
  interceptor,
  buildFlavor,
  typeFeedBack,
  main,
  app,
};
