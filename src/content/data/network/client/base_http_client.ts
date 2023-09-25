const baseHttpClient = `
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

abstract class BaseHttpClient<T> {
  BaseHttpClient(this.onResponse);

  @protected
  final client = http.Client();

 // @protected
 // final UserPreferences _userPreferences = sl();

  @protected
  final BaseResponseInterceptor<T> onResponse;

  @protected
  String get baseUrl;

  @protected
  Map<String, String> get headers;

  @protected
  String joinBaseUrl(String route) => '$baseUrl$route';

  Future<T> getUri(
    String path, {
    isGM = false,
    Map<String, String>? queryParameters,
    Map<String, String>? headers,
  }) async {

    final uri = Uri.parse(baseUrl).replace(
      path: path,
      queryParameters: queryParameters,
    );
    
    final response = await client.get(
      uri,
      headers: applyHeaders(headers, this.headers),
    );

   /* if (response.reasonPhrase == "Unauthorized") {
      final newHeader = await refreshToken(uri);
      final inSideResponse = await client.get(
        uri,
        headers: applyHeaders(newHeader, this.headers),
      );
      return onResponse(inSideResponse);
    } else {*/
      return onResponse(response);
  //  }
  }

  Future<T> post(
    String path, {
    Map<String, String>? queryParameters,
    Map<String, String>? headers,
    Map<String, dynamic>? body,
  }) async {

    final uri = Uri.parse(baseUrl).replace(
      path: path,
      queryParameters: queryParameters,
    );

    final response = await client.post(
      uri,
      headers: applyHeaders(headers, this.headers),
      body: json.encode(body),
    );

/*    if (response.reasonPhrase == "Unauthorized") {
      final newHeader = await refreshToken(uri);
      final inSideResponse = await client.post(
        uri,
        headers: applyHeaders(newHeader, this.headers),
        body: json.encode(body),
      );
      return onResponse(inSideResponse);
    } else {*/
      return onResponse(response);
  //  }
  }

  Future<T> put(
    String path, {
    Map<String, String>? queryParameters,
    Map<String, String>? headers,
    Map<String, dynamic>? body,
  }) async {
    final uri = Uri.parse(baseUrl).replace(
      path: path,
      queryParameters: queryParameters,
    );
    final response = await client.put(
      uri,
      headers: applyHeaders(headers, this.headers),
      body: json.encode(body),
    );

   /* if (response.reasonPhrase == "Unauthorized") {
      final newHeader = await refreshToken(uri);
      final inSideResponse = await client.put(
        uri,
        headers: applyHeaders(newHeader, this.headers),
        body: json.encode(body),
      );
      return onResponse(inSideResponse);
    } else {*/
      return onResponse(response);
   // }
  }

  Future<T> delete(
    String path, {
    Map<String, String>? queryParameters,
    Map<String, String>? headers,
    Map<String, dynamic>? body,
  }) async {
    final uri = Uri.parse(baseUrl).replace(
      path: path,
      queryParameters: queryParameters,
    );
    final response = await client.delete(
      uri,
      headers: applyHeaders(headers, this.headers),
      body: json.encode(body),
    );

  /*  if (response.reasonPhrase == "Unauthorized") {
      final newHeader = await refreshToken(uri);
      final inSideResponse = await client.delete(
        uri,
        headers: applyHeaders(newHeader, this.headers),
        body: json.encode(body),
      );
      return onResponse(inSideResponse);
    } else {*/
      return onResponse(response);
  //  }
  }

  Future<T> send(http.BaseRequest request) async {
    final streamResponse = await client.send(request);
    final response = await http.Response.fromStream(streamResponse);
    return onResponse(response);
  }

  Map<String, String> applyHeaders(
    Map<String, String>? headers,
    Map<String, String> appliedHeaders,
  ) {
    if (headers != null) {
      final h = Map<String, String>.from(headers);

      return h;
    } else {
      return appliedHeaders;
    }
  }


  /*

  Future<Map<String, String>> refreshToken(
    Uri uri,
  ) async {
    final refreshToken = _userPreferences.authRefreshToken;

    final data = <String, String>{
      "Content-type": "multipart/form-data",
      'Content-Type': 'application/json',
    };
    data.putIfAbsent('Authorization', () => 'Bearer $refreshToken');
    final uri = Uri.parse(baseUrl).replace(
      path: ApiRoutes.refreshToken,
    );

    final response = await client.get(
      uri,
      headers: data,
    );

    final Map content = json.decode(response.body);
    final dataContent =
        content["data"] != null ? content["data"] as Map<String, dynamic> : {};

    final findNewToken = dataContent.containsKey('access_token');

    if (!findNewToken) {
      await DialogManager.showMessage(
        context: AppNavigator.homeNavigatorKey.currentContext!,
        imageUrl: Assets.profile,
        onPressed: () async {
          Navigator.pop(AppNavigator.homeNavigatorKey.currentContext!);
          DialogManager.showLoading(
            context: AppNavigator.homeNavigatorKey.currentContext!,
            title: 'Cerrando sesión...',
          );
          _userPreferences.setIsLoaded(isLoaded: false);
          Navigator.pop(AppNavigator.homeNavigatorKey.currentContext!);
          Navigator.of(AppNavigator.homeNavigatorKey.currentContext!)
              .pushAndRemoveUntil(
            LoginView.route(),
            (route) => false,
          );
        },
        message:
            'Su sesión ha caducado, pulse OK para iniciar sesión nuevamente',
        title: 'La sesión expiró',
      );
    }

    final _newToken = content["data"]["access_token"];

    _userPreferences.setAuthToken(_newToken);

    final header = <String, String>{
      "Content-type": "multipart/form-data",
      'Content-Type': 'application/json',
    };
    header.putIfAbsent('Authorization', () => 'Bearer $_newToken');

    return header;
  }*/
}`;

export default baseHttpClient;