const stateApp = `import 'package:freezed_annotation/freezed_annotation.dart';


part 'state_app.freezed.dart';

@freezed
abstract class StateApp<T> with _$StateApp<T> {
  const factory StateApp.initial() = _Initial;
  const factory StateApp.loading({String? message}) = _Loading;
  const factory StateApp.failure(Failure failure) = _Failure;
  const factory StateApp.success(T data, {TypeFeed? feed}) = _Success;
}
`;

export default stateApp;