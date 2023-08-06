const interceptor = `import 'dart:convert';
import 'package:http/http.dart';

abstract class BaseResponseInterceptor<T> {
  T call(Response response);
}

class DefaultResponseInterceptor extends BaseResponseInterceptor<dynamic> {
  @override
  dynamic call(Response response) async {
    try {
      if (response.statusCode == 500) {
        throw const AppException.internalServerError();
      }
      final dynamic content = json.decode(response.body);

      if (content is Map && content.containsKey('error')) {
        final message = content['error'].toString();

        if (response.statusCode == 402) {
          throw AppException.unauthorized(message);
        }
        throw AppException.custom(message);
      }

      return content;
    } on FormatException {
      throw const AppException.invalidServerResponse();
    }
  }
}`;

export default interceptor;

