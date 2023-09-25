const providerInjection = `
import 'package:flutter_riverpod/flutter_riverpod.dart';

class NotifiersProviders {

    static final notifier =
        StateNotifierProvider<ModelNotifier, StateApp<dynamic>>(
      (ref) => ModelNotifier(),
    );
 } `;

export default providerInjection;
