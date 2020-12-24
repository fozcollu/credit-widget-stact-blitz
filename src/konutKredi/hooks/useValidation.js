export function useFormValidation() {
  function requiredRule(fieldName) {
    return {
      required: true,
      message: `Lütfen ${fieldName} giriniz`
    };
  }

  function minRule(fieldName, minValue) {
    return {
      min: minValue,
      type: 'number',
      message: `${fieldName} en az ${minValue} olabilir.`
    };
  }

  function maxRule(fieldName, maxValue) {
    return {
      max: maxValue,
      type: 'number',
      message: `${fieldName} en çok ${maxValue} olabilir.`
    };
  }

  const nameRules = field => [
    { required: true, message: `Lütfen ${field} giriniz.` },
    {
      pattern: /^[A-Za-zöçşığüÖÇŞİĞÜ]+$/,
      message: `${field} yalnızca harflerden oluşmalıdır.`
    },
    {
      min: 2,
      message: `${field} en az 2 harften oluşmalıdır.`
    },
    {
      max: 10,
      message: `${field} en fazla 10 harften oluşmalıdır.`
    }
  ];

  return { requiredRule, minRule, maxRule, nameRules };
}
