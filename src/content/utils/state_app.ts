const stateApp = `import 'package:freezed_annotation/freezed_annotation.dart';

part 'resource_state.freezed.dart';

@freezed
abstract class ResourceState<T> with _ResourceState<T> {
const factory ResourceState.initial() = _Initial;
const factory ResourceState.loading({String? message}) = _Loading;
const factory ResourceState.failure(Failure failure) = _Failure;
const factory ResourceState.success(T data) = _Success;
}`;

export default stateApp;