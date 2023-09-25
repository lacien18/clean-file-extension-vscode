const appConfig = `
import 'dart:convert';
import 'package:flutter/services.dart';

class AppConfig {
    final String? mainApiUrl;
  
    static AppConfig? _instance;
  
    AppConfig({
      required this.mainApiUrl,
    });
  
    factory AppConfig.fromMap(Map map) {
      return AppConfig(
        mainApiUrl: map['api_url'],
      );
    }
  
    static AppConfig? get instance => _instance;
  
    static Future<void> forEnvironment(BuildFlavor config) async {
      final env = config.value;
      final contents = await rootBundle.loadString(
        'config/$env.json',
      );
      final dynamic json = jsonDecode(contents);
      _instance = AppConfig.fromMap(json);
    }
  }`;

  export default  appConfig;
  