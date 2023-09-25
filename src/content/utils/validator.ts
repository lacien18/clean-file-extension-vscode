const validator = `import 'package:flutter/material.dart';

/// Returns a [FormFieldValidator] from the given [handler].
FormFieldValidator<T> validateWith<T>(FormFieldValidatorHandler<T> handler) =>
    handler.validator;

abstract class PatternValidators {
  static bool isValidEmail(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern =
          r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
      final regExp = RegExp(pattern);
      return regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool isUpperCasePassword(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern = r'[A-Z]';
      final regExp = RegExp(pattern);

      return !regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool isCaracterPassword(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern = r'[!@.#$&*]';
      final regExp = RegExp(pattern);
      return !regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool isValidatePassword(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern =  r'(?=^.{6,}$)((?=.*d)|(?=.*W+))(?![.])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@.#$&*]).*$';

      final regExp = RegExp(pattern);
      return regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool containsOnlyNumbers(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern = r'^[0-9]*$';
      final RegExp regExp = RegExp(pattern);
      return regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool isValidPhoneNumber(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern = r'^[0-9]{10}$';
      final RegExp regExp = RegExp(pattern);
      return regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool isValidCode(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern = r'^[0-9]{4}$';
      final RegExp regExp = RegExp(pattern);
      return regExp.hasMatch(value);
    } else {
      return false;
    }
  }

  static bool isURL(String? value) {
    if (value != null && value.isNotEmpty) {
      const pattern =
          r"(https|ftp)://([-A-Z0-9.]+)(/[-A-Z0-9+&@#/%=~_|!:,.;]*)?(\?[A-Z0-9+&@#/%=~_|!:‌​,.;]*)?";
      final RegExp regExp = RegExp(pattern, caseSensitive: false);
      return regExp.hasMatch(value);
    } else {
      return false;
    }
  }
}

abstract class FormFieldValidatorHandler<T> {
  final FormFieldValidator<T> validator;

  FormFieldValidatorHandler(this.validator);
}

class EmailFormFieldValidator extends FormFieldValidatorHandler<String> {
  EmailFormFieldValidator()
      : super((value) {
          if (value == null || value.isEmpty) {
            return 'Ingresa un correo electrónico';
          } else if (PatternValidators.isValidEmail(value)) {
            return null;
          } else {
            return 'Ingresa un correo válido';
          }
        });
}


class PasswordFormFieldValidator extends FormFieldValidatorHandler<String> {
  PasswordFormFieldValidator()
      : super((value) {
          if (value == null || value.isEmpty) {
            return 'Ingresa tu contraseña';
          } else if (value.length < 6) {
            return 'La contraseña no cumple los requisitos';
          } else if (!PatternValidators.isValidatePassword(value)) {
            return 'La contraseña no cumple los requisitos';
          } else {
            return null;
          }
        });
}

class NumericFormFieldValidator extends FormFieldValidatorHandler<String> {
  NumericFormFieldValidator({
    int? maxLength,
    String errorText = 'Este campo sólo debe contener números',
  }) : super((value) {
          if (PatternValidators.containsOnlyNumbers(value)) {
            if (maxLength != null && value!.length > maxLength) {
              return 'Máximo $maxLength números';
            }
            return null;
          } else {
            return errorText;
          }
        });
}

class PhoneFormFieldValidator extends FormFieldValidatorHandler<String> {
  PhoneFormFieldValidator()
      : super((value) {
          if (PatternValidators.isValidPhoneNumber(value)) {
            return null;
          } else {
            return 'El teléfono debe tener 10 dígitos';
          }
        });
}

class TextFormFieldValidator extends FormFieldValidatorHandler<String> {
  TextFormFieldValidator({String errorText = 'Campo requerido'})
      : super((value) {
          if (value == null || value.isEmpty) {
            return errorText;
          } else {
            return null;
          }
        });
}

class ObjectFormFieldValidator<T> extends FormFieldValidatorHandler<T> {
  ObjectFormFieldValidator({String errorText = 'Campo requerido'})
      : super((value) {
          if (value == null) {
            return errorText;
          } else {
            return null;
          }
        });
}`;

export default validator;
