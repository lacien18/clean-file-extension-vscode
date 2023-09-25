import PathModel from "../models/path_model";
import contents from "../content/contents";

//GENERAL PATH
const lib = `lib`;
const app = `${lib}/app.dart`;
const main = `${lib}/main.dart`;
const fonts = "fonts/font_here.md";
const config = "config/dev.json";

const core = `${lib}/core`;
//CORE - DATA
const cData = `${core}/data`;
//CORE - DATA - PLATFORM
const dPlatform = `${cData}/platform/platform_here.md`;
const dServices = `${cData}/services/services_here.md`;
//CORE - DATA - NETWORK
const dNetwork = `${cData}/network`;
//
const nInterceptor = `${dNetwork}/interceptor/base_response_interceptor.dart`;
//
const nApiRoutes = `${dNetwork}/constants/api_routes.dart`;
//
const nClient = `${dNetwork}/client`;
const cBasehttp = `${nClient}/base_http_client.dart`;
const cSimpleApi = `${nClient}/simple_api_client.dart`;
//CORE - DOMAIN
const cDomain = `${core}/domain`;
const cEntitie = `${cDomain}/entities`;
const dModelsBuildF = `${cEntitie}/models/build_flavor.dart`;
const dModelsTypeFeed = `${cEntitie}/models/type_feedback.dart`;

const dRepositories = `${cDomain}/repositories/repositories_here.md`;
//CORE - PROVIDERS
const cProviders = `${core}/providers/global_notifier.dart`;
//CORE - ROUTE
const cRoute = `${core}/routes`;
const rRouter = `${cRoute}/router.dart`;
const rRoutes = `${cRoute}/routes.dart`;
const rRouteModel = `${cRoute}/route_model.dart`;
//CORE - RESOURCES
const cResources = `${core}/resources`;
const rColorApp = `${cResources}/color_app.dart`;
const rAssets = `${cResources}/assets.dart`;
const rFonts = `${cResources}/fonts.dart`;
//
const cUtils = `${core}/utils`;
const uWhiteSpace = `${cUtils}/white_space.dart`;
const uValidator = `${cUtils}/validator.dart`;
const uTimeHelper = `${cUtils}/time_helper.dart`;
const uBlockOrientation = `${cUtils}/block_orientation.dart`;
const uBaseRepository = `${cUtils}/base_repository.dart`;
const uStateApp = `${cUtils}/state_app/state_app.dart`;
//CORE - WIDGETS
const cWidgets = `${core}/widgets/widgets.dart`;
//CORE - ERROR
const cError = `${core}/error`;
const eErrorMessages = `${cError}/error_messages.dart`;
const eFailure = `${cError}/failure.dart`;
const eException = `${cError}/exception.dart`;
//CORE - CONFIG APP
const configApp = `${core}/config`;
const cFile = `${configApp}/app_config.dart`;
//
const di = `${lib}/di`;
const inyectionDependencies = `${di}/denpendencies_injection.dart`;
const providerI = `${di}/provider_injection.dart`;
//
const feature = `${lib}/feature`;
const home = `${feature}/file`;
const hData = `${home}/data`;
//PATH REPOSITOTY
const hDataDomain = `${hData}/domain/repositories`;
const hDataRepository = `${hDataDomain}/repository.dart`;
const hDataRepositoryI = `${hDataDomain}/repository_impl.dart`;
//PATH SERVICES
const hDataServices = `${hData}/services`;
const hDataService = `${hDataServices}/services.dart`;
const hDataServiceI = `${hDataServices}/services_impl.dart`;
//PATH HOME
const hPresentation = `${home}/presentation`;
const hPresentationProvider = `${hPresentation}/providers/notifier.dart`;
const hPresentationWidget = `${hPresentation}/widget/widget.dart`;
const hPresentationView = `${hPresentation}/view/view.dart`;

const gPaths = [
  new PathModel(app, contents.app),
  new PathModel(main, contents.main),
  //
  new PathModel(dPlatform, null),
  new PathModel(dServices, null),
  //
  new PathModel(nInterceptor, contents.interceptor),
  //
  new PathModel(nApiRoutes, contents.apiRoutes),
  //
  new PathModel(cBasehttp, contents.baseHttpClient),
  new PathModel(cSimpleApi, contents.simpleApiClient),
  //
  new PathModel(rRouter, contents.router),
  new PathModel(rRoutes, contents.routes),
  new PathModel(rRouteModel, contents.routeModel),
  //
  new PathModel(rAssets, contents.assets),
  new PathModel(rColorApp, contents.colorApp),
  new PathModel(rFonts, contents.fonts),
  //
  new PathModel(uStateApp, contents.stateApp),
  new PathModel(uBlockOrientation, contents.blockOrientation),
  new PathModel(uBaseRepository, contents.baseRepository),
  new PathModel(uTimeHelper, contents.timeHelper),
  new PathModel(uValidator, contents.validator),
  new PathModel(uWhiteSpace, contents.whiteSpace),
  //
  new PathModel(cWidgets, null),
  //
  new PathModel(eException, contents.exception),
  new PathModel(eFailure, contents.failure),
  new PathModel(eErrorMessages, contents.errorMessages),
  //
  new PathModel(cFile, contents.appConfig),
  //
  new PathModel(inyectionDependencies, contents.dependenciesI),
  new PathModel(providerI, contents.providerI),
  //
  new PathModel(fonts, null),
  new PathModel(config, contents.flavor),

  //
  new PathModel(cProviders, null),

  new PathModel(dModelsBuildF, contents.buildFlavor),
  new PathModel(dModelsTypeFeed, contents.typeFeedBack),

  new PathModel(dRepositories, null),
];

const gFeature = [
  new PathModel(hDataRepository, contents.repository),
  new PathModel(hDataRepositoryI, contents.repositoryImpl),
  //
  new PathModel(hDataService, contents.services),
  new PathModel(hDataServiceI, contents.servicesImpl),
  //
  new PathModel(hPresentationProvider, contents.notifier),
  new PathModel(hPresentationView, null),
  new PathModel(hPresentationWidget, null),
];

gPaths.push(...gFeature);

export default { gPaths, gFeature };
