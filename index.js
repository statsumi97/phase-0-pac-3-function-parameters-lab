function introduction(firstName = 'Aki') {
    return `Hi, my name is ${firstName}.`;
  }
  function introductionWithLanguage(firstName = 'Aki', language = 'Ember.js') {
    return `Hi, my name is ${firstName} and I am learning to program in ${language}.`
  }
  function introductionWithLanguageOptional(name = 'Gracie', language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  