const providerInjection = `class NotifiersProviders {

    static final notifier =
        StateNotifierProvider<ModelNotifier, StateApp<dynamic>>(
      (ref) => ModelNotifier(),
    );
 } `;

export default providerInjection;
