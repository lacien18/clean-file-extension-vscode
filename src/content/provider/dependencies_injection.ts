const dependenciesInjection = `

abstract class Providers {

      static final nameServices = Provider<Services>((ref) {
        final instancie = ref.watch(instancie);
    
        return ServicesImpl(instancie);
      });
    }
    `;

export default dependenciesInjection;
