const baseRepository =`import 'dart:io';
import 'package:dartz/dartz.dart';

typedef ExceptionManagerCallback<T> = Future<Either<Failure, T>> Function();

abstract class BaseRepository {
  Future<Either<Failure, T>> runCatching<T>(
   ExceptionManagerCallback<T> block,
 ) async {
try {
return await block();
 } on AppException catch (e) {
return Left(e.toFailure());
} on SocketException {
return const Left(Failure.network());
 } catch (e) {
return const Left(Failure.unexpected());
}
}
}`;

export default baseRepository;