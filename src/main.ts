namespace Affixi {
  export namespace Types {
    export enum Case {
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
    export enum Pronoun {
      /** Birinci Tekil Şahıs */
      SingularFirst,
      /** İkinci Tekil Şahıs */
      SingularSecond,
      /** Üçüncü Tekil Şahıs */
      SingularThird,
      /** Birinci Çoğul Şahıs */
      PluralFirst,
      /** İkinci Çoğul Şahıs */
      PluralSecond,
      /** Üçüncü Çoğul Şahıs */
      PluralThird
    }
  }

  export class Sounds {
    static UnvoicedStopConsonants = ["p", "ç", "t", "k"];
    static UnvoicedContinuousConsonants = ["f", "s", "ş", "h"];
    static UnvoicedConsonants = [
      ...Sounds.UnvoicedContinuousConsonants,
      ...Sounds.UnvoicedStopConsonants
    ];
    static VoicedStopConsonants = ["b", "c", "d", "ğ"];
    static RoundedVowels = ["o", "u", "ö", "ü"];
    static UnroundedVowels = ["a", "ı", "e", "i"];
    static BackVowels = ["e", "i", "ö", "ü"];
    static FrontVowels = ["a", "ı", "o", "u"];
    static Vowels = [...Sounds.FrontVowels, ...Sounds.BackVowels];
  }

  export class Word {
    static GetLastComponents(word: string): { letter: string; vowel: string } {
      let input = word
        .split("")
        .reverse()
        .join("");
      let index = 0;
      let letter = input[0];
      let vowel = input[index];

      while (!Sounds.Vowels.includes(vowel)) {
        index++;
        vowel = input[index];
      }
      return { letter, vowel };
    }

    static GetSyllableCount(word: string): number {
      let count = 0;
      let input = word.split("");
      input.forEach(letter => {
        if (Sounds.Vowels.includes(letter.toLowerCase())) count += 1;
      });

      return count;
    }
  }

  export class PossessiveSuffix {
    pronoun: Types.Pronoun;
    constructor() {
      this.pronoun = Types.Pronoun.SingularFirst;
    }

    case(pronoun: Types.Pronoun): PossessiveSuffix {
      this.pronoun = pronoun;
      return this;
    }

    of(word: string, isProperNoun = false): string {
      let result = "";
      let suffix = "";
      if (isProperNoun) suffix += "'";

      suffix += this.suffix(word);

      let { letter } = Word.GetLastComponents(word);
      if (
        Word.GetSyllableCount(word) > 1 &&
        Sounds.UnvoicedStopConsonants.includes(letter) &&
        this.pronoun !== Types.Pronoun.PluralThird
      ) {
        let i = Sounds.UnvoicedStopConsonants.indexOf(word[word.length - 1]);
        let voicedCounterPart;

        if (
          word
            .split("")
            .slice(word.length - 2, word.length)
            .join("") === "nk"
        ) {
          voicedCounterPart = "g";
        } else {
          voicedCounterPart = Sounds.VoicedStopConsonants[i];
        }
        word =
          word
            .split("")
            .splice(0, word.length - 1)
            .join("") + voicedCounterPart;
      }
      result = word + suffix;

      return result;
    }

    private suffix(word: string): string {
      let { letter, vowel } = Word.GetLastComponents(word);
      let suffix = "";

      if (!Sounds.Vowels.includes(letter) && this.pronoun !== Types.Pronoun.PluralThird) {
        if (Sounds.FrontVowels.includes(vowel)) {
          suffix += "ı";
        } else if (Sounds.BackVowels.includes(vowel)) {
          suffix += "i";
        }
      }

      switch (this.pronoun) {
        case 0:
          suffix += "m";
          break;
        case 1:
          suffix += "n";
          break;
        case 2:
          if (Sounds.Vowels.includes(letter)) {
            suffix += "s";
            if (Sounds.FrontVowels.includes(vowel)) {
              suffix += "ı";
            } else if (Sounds.BackVowels.includes(vowel)) {
              suffix += "i";
            }
          }
          break;
        case 3:
          if (Sounds.FrontVowels.includes(vowel)) {
            suffix += "mız";
          } else if (Sounds.BackVowels.includes(vowel)) {
            suffix += "miz";
          }
          break;
        case 4:
          if (Sounds.FrontVowels.includes(vowel)) {
            suffix += "nız";
          } else if (Sounds.BackVowels.includes(vowel)) {
            suffix += "niz";
          }
          break;
        case 5:
          if (Sounds.FrontVowels.includes(vowel)) {
            suffix += "ları";
          } else if (Sounds.BackVowels.includes(vowel)) {
            suffix += "leri";
          }
          break;
      }

      return suffix;
    }
  }

  export class CaseSuffix {
    type: Types.Case;
    constructor() {
      this.type = Types.Case.Absolute;
    }

    case(type: Types.Case): CaseSuffix {
      this.type = type;
      return this;
    }
    of(word: string, isProperNoun = false): string {
      let result = "";
      let suffix = "";
      if (isProperNoun) suffix += "'";

      switch (this.type) {
        case Types.Case.Absolute:
          result = this.absolute(word);
          break;
        case Types.Case.Accusative:
          suffix += this.accusative(word);
          result = word + suffix;
          break;
        case Types.Case.Ablative:
          suffix += this.ablative(word);
          result = word + suffix;
          break;
        case Types.Case.Locative:
          suffix += this.locative(word);
          result = word + suffix;
          break;
        case Types.Case.Instrumental:
          suffix += this.instrumental(word);
          result = word + suffix;
          break;
        case Types.Case.Dative:
          suffix += this.dative(word);
          result = word + suffix;
          break;
      }
      return result;
    }

    private absolute(word: string): string {
      return word;
    }

    private accusative(word: string): string {
      let { letter, vowel } = Word.GetLastComponents(word);
      let suffix = "";

      if (Sounds.Vowels.includes(letter)) {
        suffix += "y";
      }
      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "ı";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "i";
      }

      return suffix;
    }

    private ablative(word: string): string {
      return this.locative(word) + "n";
    }

    private locative(word: string): string {
      let { letter, vowel } = Word.GetLastComponents(word);
      let suffix = "";

      if (Sounds.UnvoicedConsonants.includes(letter)) {
        suffix += "t";
      } else {
        suffix += "d";
      }
      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "a";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "e";
      }

      return suffix;
    }

    private instrumental(word: string): string {
      let { letter, vowel } = Word.GetLastComponents(word);
      let suffix = "";

      if (Sounds.Vowels.includes(letter)) {
        suffix += "y";
      }
      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "la";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "le";
      }

      return suffix;
    }

    private dative(word: string): string {
      let { letter, vowel } = Word.GetLastComponents(word);
      let suffix = "";

      if (Sounds.Vowels.includes(letter)) {
        suffix += "y";
      }
      if (Sounds.FrontVowels.includes(vowel)) {
        suffix += "a";
      } else if (Sounds.BackVowels.includes(vowel)) {
        suffix += "e";
      }

      return suffix;
    }
  }

  export interface Chain {
    possessiveSuffix: (type: Types.Pronoun) => Chain;
    caseSuffix: (type: Types.Case) => Chain;
    word: string;
  }

  export function chain(word: string): Chain {
    let possessive = new PossessiveSuffix();
    let _case = new CaseSuffix();

    let possessiveSuffix = (type: Types.Pronoun): Chain => {
      word = possessive.case(type).of(word);
      return { possessiveSuffix, caseSuffix, word };
    };

    let caseSuffix = (type: Types.Case): Chain => {
      word = _case.case(type).of(word);
      return { possessiveSuffix, caseSuffix, word };
    };
    return { possessiveSuffix, caseSuffix, word };
  }
}

// let p = new Affixi.PossessiveSuffix();
// let c = new Affixi.CaseSuffix();
// let r = p.case(Affixi.Types.Pronoun.PluralFirst).of("Aleyh");
// let r2 = c.case(Affixi.Types.Case.Dative).of(r)
// console.log(r2);

// let chain = Affixi.chain("Çakmak")
//   .possessiveSuffix(Affixi.Types.Pronoun.PluralSecond)
//   .caseSuffix(Affixi.Types.Case.Ablative);
// console.log(chain.word);
