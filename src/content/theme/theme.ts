const theme = `import 'package:flutter/material.dart';

/// The AppTheme class defines a light theme for a Dart application.
class AppTheme {
  static final ThemeData theme = ThemeData(
    brightness: Brightness.light,
    fontFamily: Fonts.app,
    buttonBarTheme: const ButtonBarThemeData(buttonPadding: EdgeInsets.zero),
    textTheme: const TextTheme(
      titleLarge: TextStyle(
        fontFamily: Fonts.app,
        fontWeight: FontWeight.w700,
        fontSize: 27,
        color: ColorApp.text,
      ),
      bodyLarge: TextStyle(
        fontFamily: Fonts.app,
        fontWeight: FontWeight.w700,
        color: ColorApp.text,
      ),
      bodyMedium: TextStyle(
        fontFamily: Fonts.app,
        fontWeight: FontWeight.w600,
        color: ColorApp.text,
      ),
      bodySmall: TextStyle(
        fontFamily: Fonts.app,
        fontWeight: FontWeight.w400,
        color: ColorApp.text,
      ),
    ),
  );
}`;

export default theme;
