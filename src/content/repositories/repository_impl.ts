const repositoryImpl = `class RepositoryImpl extends BaseRepository implements Repository {

 final NameServices _nameService;

  RepositoryImpl(this._nameService);

  @override
  Future<Either<Failure,dynamic>> metodo() async{

      return runCatching(() async {
       final _success = await _nameService.metodo();
         return Right(_success);
       });

    }
}`;

export default repositoryImpl;
