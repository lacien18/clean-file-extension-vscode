const blockOrientation = `import 'package:flutter/services.dart';

/// The BlockScreen class sets the preferred device orientations to portrait up and down.
abstract class BlockScreen {
  static final blockScreen = SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitDown,
    DeviceOrientation.portraitUp,
  ]);
}`;


export default blockOrientation;