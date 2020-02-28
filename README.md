# Affixi

## Affixi is a helper library for Turkish suffixes for nouns and proper nouns.

### Legend

#### Classes

- CaseSuffix

```TypeScript
class CaseSuffix {
    constructor() {}
}
```

- PossessiveSuffix

```TypeScript
class PossessiveSuffix {
    constructor() {}
}
```

- Word

```TypeScript
class Word {
    constructor() {}
}
```

- Sound

```TypeScript
class Sound {
    constructor() {}
}
```

#### Methods

- CaseSuffix

  - case - sets case of the noun

  ```TypeScript
  CaseSuffix.case(type: Types.Case): CaseSuffix
  ```

  - of - returns the noun with suffix

  ```TypeScript
  CaseSuffix.of(word: string, isProperNoun?: boolean): string
  ```

- PossessiveSuffix

  - case - sets pronoun type of the noun

  ```TypeScript
  PossessiveSuffix.case(pronoun: Types.Pronoun): PossessiveSuffix
  ```

  - of - returns the noun with suffix

  ```TypeScript
  PossessiveSuffix.of(word: string, isProperNoun?: boolean): string
  ```

- Sounds

  - UnvoicedConsonants - returns the unvoiced consonants of the Turkish Language

  ```TypeScript
  Sounds.UnvoicedConsonants = ["f", "s", "t", "k", "ç", "ş", "h", "p"]
  ```

  - UnvoicedStopConsonants - returns the unvoiced stop consonants of the Turkish Language

  ```TypeScript
  Sounds.UnvoicedStopConsonants = ["p", "ç", "t", "k"]
  ```

  - VoicedStopConsonants - returns the voiced consonants of the Turkish Language

  ```TypeScript
  Sounds.VoicedStopConsonants = ["b", "c", "d", "ğ"]
  ```

  - UnroundedVowels - returns the unrounded vowels of the Turkish Language

  ```TypeScript
  Sounds.UnroundedVowels = ["o", "u", "ö", "ü"]
  ```

  - RoundedVowels - returns the rounded vowels of the Turkish Language

  ```TypeScript
  Sounds.RoundedVowels = ["a", "ı", "e", "i"]
  ```

  - BackVowels - returns the back vowels of the Turkish Language

  ```TypeScript
  Sounds.BackVowels = ["e", "i", "ö", "ü"]
  ```

  - FrontVowels - returns the front vowels of the Turkish Language

  ```TypeScript
  Sounds.FrontVowels = ["a", "ı", "o", "u"]
  ```

  - Vowels - returns the vowels of the Turkish Language

  ```TypeScript
  Sounds.Vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"]
  ```

- Word

  - GetLastComponents - returns the last letter and the last vowel of a word

  ```TypeScript
  Word.GetLastComponents(word: string): { letter: string, vowel: string }
  ```

  - GetSyllableCount - returns the syllable count of a word

  ```TypeScript
  Word.GetSyllableCount(word: string): number
  ```

#### Types

- Types

  - Case

  ```Typescript
  enum Case {
    Absolute,
    Accusative,
    Ablative,
    Locative,
    Instrumental,
    Dative
  }
  ```

  - Pronoun

  ```Typescript
  enum Pronoun {
    SingularFirst,
    SingularSecond,
    SingularThird,
    PluralFirst,
    PluralSecond,
    PluralThird
  }
  ```

### Usage

```TypeScript
let suffix = new CaseSuffix();
// With noun

suffix.case(Case.Absolute).of("bilgisayar");
// Returns "bilgisayar"

suffix.case(Case.Accusative).of("bilgisayar");
// Returns "bilgisayarı"

suffix.case(Case.Ablative).of("bilgisayar");
// Returns "bilgisayardan"

suffix.case(Case.Locative).of("bilgisayar");
// Returns "bilgisayarda"

suffix.case(Case.Instrumental).of("bilgisayar");
// Returns "bilgisayarla"

suffix.case(Case.Dative).of("bilgisayar");
// Returns "bilgisayara"



// With proper noun

suffix.case(Case.Absolute).of("Ali", true);
// Returns "Ali"

suffix.case(Case.Accusative).of("Ali", true);
// Returns "Ali'yi"

suffix.case(Case.Ablative).of("Ali", true);
// Returns "Ali'den"

suffix.case(Case.Locative).of("Ali", true);
// Returns "Ali'de"

suffix.case(Case.Instrumental).of("Ali", true);
// Returns "Ali'yle"

suffix.case(Case.Dative).of("Ali", true);
// Returns "Ali'ye"

```
