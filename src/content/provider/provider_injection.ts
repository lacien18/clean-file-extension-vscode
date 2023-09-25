const providerInjection = `
class Notifiers {

    static final notifier =
        StateNotifierProvider<ModelNotifier, StateApp<dynamic>>(
      (ref) => ModelNotifier(),
    );
 } `;

export default providerInjection;
