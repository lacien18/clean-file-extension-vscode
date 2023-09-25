const main = `
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  BlockScreen.blockScreen;

  runApp(
    const ProviderScope(
   //   overrides: [
   //     DI.sharedPreferences.overrideWithValue(sharedPrefs),
   //   ],
      child: App(),
    ),
  );
}`;

export default main;