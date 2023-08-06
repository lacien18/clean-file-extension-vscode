const timeHelper = `abstract class TimeHelper {
    static const String pattern = 'dd/MM/yyyy';
  
    static String formatDateTime(DateTime? dateTime) {
      final dateFormat = DateFormat(pattern);
      return (dateTime == null) ? 'No Registra' : dateFormat.format(dateTime);
    }
  
    static DateTime formatStringToDateTime(String? dateTime) {
      return DateFormat(pattern).parse(dateTime!);
    }
  
    static String formatDateString(
      String? data,
      String formattedString, {
      bool stringNull = false,
    }) {
      try {
        final dateFormat = DateFormat(pattern);
        return (data != null)
            ? dateFormat.format(DateTime.parse(formattedString))
            : 'No Registra';
      } catch (e) {
        return !stringNull ? 'No Registra' : '';
      }
    }
  }`;

export default timeHelper;
