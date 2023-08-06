const  notifier = `class Notifier extends StateNotifier<StateApp<dynamic>> {
    Notifier()
        : super(const StateApp.initial());
  
  
    Future<void> method() async {
      state = const StateApp.loading();
  
      final result = await repository.method();
  
      state = result.fold<StateApp<dynamic>>(
        (failure) => StateApp.failure(failure),
        (r) => StateApp.success(r),
      );
    }
  
  }`;

  export default notifier;