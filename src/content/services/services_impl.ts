const servicesImpl = `class ServicesImpl implements Services {


  ServicesImpl();

  @override
  Future<dynamic> metodo() async{

// agrega aqui la peticion de alguna api
        final _success = await peticion;
         return _success;

 }
}`;

export default servicesImpl;
