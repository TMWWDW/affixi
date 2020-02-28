# Affixi

## Affixi is a helper library for Turkish suffixes for nouns and proper nouns written in typescript.

### Legend

#### Functions

- Affixi.chain

```TypeScript
Affixi.chain(word: string): Affixi.Chain
```

#### Classes

- Affixi.CaseSuffix

```TypeScript
class CaseSuffix { constructor() {} }
```

- Affixi.PossessiveSuffix

```TypeScript
class PossessiveSuffix { constructor() {} }
```

- Affixi.Word

```TypeScript
class Word { /* Static members */ }
```

- Affixi.Sound

```TypeScript
class Sound { /* Static members */ }
```

#### Methods

- Affixi.CaseSuffix

  - case - sets case of the noun

  ```TypeScript
  Affixi.CaseSuffix.case(type: Types.Case): CaseSuffix
  ```

  - of - returns the noun with suffix

  ```TypeScript
  Affixi.CaseSuffix.of(word: string, isProperNoun?: boolean): string
  ```

- Affixi.PossessiveSuffix

  - case - sets pronoun type of the noun

  ```TypeScript
  Affixi.PossessiveSuffix.case(pronoun: Types.Pronoun): PossessiveSuffix
  ```

  - of - returns the noun with suffix

  ```TypeScript
  Affixi.PossessiveSuffix.of(word: string, isProperNoun?: boolean): string
  ```

- Affixi.Sounds

  - UnvoicedConsonants - returns the unvoiced consonants of the Turkish Language

  ```TypeScript
  Affixi.Sounds.UnvoicedConsonants = ["f", "s", "t", "k", "ç", "ş", "h", "p"]
  ```

  - UnvoicedStopConsonants - returns the unvoiced stop consonants of the Turkish Language

  ```TypeScript
  Affixi.Sounds.UnvoicedStopConsonants = ["p", "ç", "t", "k"]
  ```

  - VoicedStopConsonants - returns the voiced consonants of the Turkish Language

  ```TypeScript
  Affixi.Sounds.VoicedStopConsonants = ["b", "c", "d", "ğ"]
  ```

  - UnroundedVowels - returns the unrounded vowels of the Turkish Language

  ```TypeScript
  Affixi.Sounds.RoundedVowels = ["o", "u", "ö", "ü"]
  ```

  - RoundedVowels - returns the rounded vowels of the Turkish Language

  ```TypeScript
  Affixi.Sounds.UnroundedVowels = ["a", "ı", "e", "i"]
  ```

  - BackVowels - returns the back vowels of the Turkish Language

  ```TypeScript
  Affixi.Sounds.BackVowels = ["e", "i", "ö", "ü"]
  ```

  - FrontVowels - returns the front vowels of the Turkish Language

  ```TypeScript
  Affixi.Sounds.FrontVowels = ["a", "ı", "o", "u"]
  ```

  - Vowels - returns the vowels of the Turkish Language

  ```TypeScript
  Affixi.Sounds.Vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"]
  ```

- Affixi.Word

  - GetLastComponents - returns the last letter and the last vowel of a word

  ```TypeScript
  Affixi.Word.GetLastComponents(word: string): { letter: string, vowel: string }
  ```

  - GetSyllableCount - returns the syllable count of a word

  ```TypeScript
  Affixi.Word.GetSyllableCount(word: string): number
  ```

#### Types

- Affixi.Types

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

- Affixi.Chain

  ```Typescript
  interface Chain {
    possesiveSuffix: (type: Affixi.Types.Pronoun) => Affixi.Chain,
    caseSuffix: (type: Affixi.Types.Case) => Affixi.Chain,
    word: string
  }
  ```

### Usage

#### CaseSuffix

```TypeScript
let suffix = new Affixi.CaseSuffix();
// With noun

suffix.case(Affixi.Types.Case.Absolute).of("bilgisayar");
// Returns "bilgisayar"

suffix.case(Affixi.Types.Case.Accusative).of("bilgisayar");
// Returns "bilgisayarı"

suffix.case(Affixi.Types.Case.Ablative).of("bilgisayar");
// Returns "bilgisayardan"

suffix.case(Affixi.Types.Case.Locative).of("bilgisayar");
// Returns "bilgisayarda"

suffix.case(Affixi.Types.Case.Instrumental).of("bilgisayar");
// Returns "bilgisayarla"

suffix.case(Affixi.Types.Case.Dative).of("bilgisayar");
// Returns "bilgisayara"



// With proper noun

suffix.case(Affixi.Types.Case.Absolute).of("Ali", true);
// Returns "Ali"

suffix.case(Affixi.Types.Case.Accusative).of("Ali", true);
// Returns "Ali'yi"

suffix.case(Affixi.Types.Case.Ablative).of("Ali", true);
// Returns "Ali'den"

suffix.case(Affixi.Types.Case.Locative).of("Ali", true);
// Returns "Ali'de"

suffix.case(Affixi.Types.Case.Instrumental).of("Ali", true);
// Returns "Ali'yle"

suffix.case(Affixi.Types.Case.Dative).of("Ali", true);
// Returns "Ali'ye"

```

#### PossessiveSuffix

```TypeScript
let suffix = new Affixi.PossessiveSuffix();
// With noun

suffix.case(Affixi.Types.Pronoun.SingularFirst).of("çakmak");
// Returns "çakmağım"

suffix.case(Affixi.Types.Pronoun.SingularSecond).of("çakmak");
// Returns "çakmağın"

suffix.case(Affixi.Types.Pronoun.SingularThird).of("çakmak");
// Returns "çakmağı"

suffix.case(Affixi.Types.Pronoun.PluralFirst).of("çakmak");
// Returns "çakmağımız"

suffix.case(Affixi.Types.Pronoun.PluralSecond).of("çakmak");
// Returns "çakmağınız"

suffix.case(Affixi.Types.Pronoun.PluralThird).of("çakmak");
// Returns "çakmakları"
```

#### Chaining

```TypeScript
var chain = Affixi.chain("Aleyh")
  .possessiveSuffix(Affixi.Types.Pronoun.PluralFirst)
  .caseSuffix(Affixi.Types.Case.Dative)

console.log(chain.word);
// Logs "Aleyhimize"

var chain = Affixi.chain("Çakmak")
  .possessiveSuffix(Affixi.Types.Pronoun.PluralSecond)
  .caseSuffix(Affixi.Types.Case.Ablative);
console.log(chain.word);
// Logs "Çakmağınızdan"
```
