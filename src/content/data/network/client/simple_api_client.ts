const simpleApiClient =`
class SimpleApiClient extends BaseHttpClient<dynamic> {
    SimpleApiClient() : super(DefaultResponseInterceptor());
  
    //final UserPreferences _preferences = sl();
  
    @override
    String get baseUrl => AppConfig.instance!.mainApiUrl!;
  
    @override
    Map<String, String> get headers {
      final data = <String, String>{
        'Content-Type': 'application/json',
      };
     /* final token = _preferences.authToken;
      if (token != null) {
        data.putIfAbsent('Authorization', () => 'Bearer $token');
      }*/
      return data;
    }
  
  
  }`;

  export default simpleApiClient;
  