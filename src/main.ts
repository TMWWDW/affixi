enum Case {
  /** İsmin Yalın Hâli */
  Absolute,
  /** İsmin Belirtme Hâli */
  Accusative,
  /** İsmin Ayrılma Hâli */
  Ablative,
  /** İsmin Bulunma Hâli */
  Locative,
  /** İsmin Vasıta Hâli */
  Instrumental,
  /** İsmin Yönelme Hâli */
  Dative
}

class CaseSuffix {
  type: Case;
  constructor() {
    this.type = Case.Absolute;
  }

  case(type: Case) {
    this.type = type;
    return this;
  }
  of(word: string, isProperNoun = false): string {
    let result = "";
    let suffix = "";
    if (isProperNoun) suffix += "'";

    switch (this.type) {
      case Case.Absolute:
        result = this.absolute(word);
        break;
      case Case.Accusative:
        suffix += this.accusative(word);
        result = word + suffix;
        break;
      case Case.Ablative:
        suffix += this.ablative(word);
        result = word + suffix;
        break;
      case Case.Locative:
        suffix += this.locative(word);
        result = word + suffix;
        break;
      case Case.Instrumental:
        suffix += this.instrumental(word);
        result = word + suffix;
        break;
      case Case.Dative:
        suffix += this.dative(word);
        result = word + suffix;
        break;
    }
    return result;
  }

  static UnvoicedConsonants = ["f", "s", "t", "k", "ç", "ş", "h", "p"];
  static UnroundedVowels = ["o", "u", "ö", "ü"];
  static RoundedVowels = ["a", "ı", "e", "i"];
  static BackVowels = ["e", "i", "ö", "ü"];
  static FrontVowels = ["a", "ı", "o", "u"];
  static Vowels = [...CaseSuffix.UnroundedVowels, ...CaseSuffix.RoundedVowels];

  static GetLastComponents(word: string) {
    let input = word
      .split("")
      .reverse()
      .join("");
    let index = 0;
    let letter = input[0];
    let vowel = input[index];

    while (!CaseSuffix.Vowels.includes(vowel)) {
      index++;
      vowel = input[index];
    }
    return { letter, vowel };
  }

  private absolute(word: string): string {
    return word;
  }

  private accusative(word: string): string {
    let { letter, vowel } = CaseSuffix.GetLastComponents(word);
    let suffix = "";

    if (CaseSuffix.Vowels.includes(letter)) {
      suffix += "y";
    }
    if (CaseSuffix.FrontVowels.includes(vowel)) {
      suffix += "ı";
    } else if (CaseSuffix.BackVowels.includes(vowel)) {
      suffix += "i";
    }

    return suffix;
  }

  private ablative(word: string): string {
    return this.locative(word) + "n";
  }

  private locative(word: string): string {
    let { letter, vowel } = CaseSuffix.GetLastComponents(word);
    let suffix = "";

    if (CaseSuffix.UnvoicedConsonants.includes(letter)) {
      suffix += "t";
    } else {
      suffix += "d";
    }
    if (CaseSuffix.FrontVowels.includes(vowel)) {
      suffix += "a";
    } else if (CaseSuffix.BackVowels.includes(vowel)) {
      suffix += "e";
    }

    return suffix;
  }

  private instrumental(word: string): string {
    let { letter, vowel } = CaseSuffix.GetLastComponents(word);
    let suffix = "";

    if (CaseSuffix.Vowels.includes(letter)) {
      suffix += "y";
    }
    if (CaseSuffix.FrontVowels.includes(vowel)) {
      suffix += "la";
    } else if (CaseSuffix.BackVowels.includes(vowel)) {
      suffix += "le";
    }

    return suffix;
  }

  private dative(word: string): string {
    let { letter, vowel } = CaseSuffix.GetLastComponents(word);
    let suffix = "";

    if (CaseSuffix.Vowels.includes(letter)) {
      suffix += "y";
    }
    if (CaseSuffix.FrontVowels.includes(vowel)) {
      suffix += "a";
    } else if (CaseSuffix.BackVowels.includes(vowel)) {
      suffix += "e";
    }

    return suffix;
  }
}
