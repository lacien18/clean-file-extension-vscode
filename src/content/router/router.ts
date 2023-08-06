const router =`
import 'package:go_router/go_router.dart';

abstract class RouterApp {
    static final _router = GoRouter(
      routes: [
         GoRoute(
          path: Routes.home.path,
          name: Routes.home.name,
          builder: ((_, state) {
            Map<String, dynamic>? homeObjet;
            final homeInfo = state.pathParameters['home'];
           
            homeObjet = jsonDecode(homeInfo);
            
            return HomeView(
                homeObjet: homeObjet,
            );
          }),
        ),
      ]
    );
 }`  ;

 export default router;