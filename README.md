# Case Suffixes
## A helper library for Turkish Case Suffixes for nouns and proper nouns.

### Legend

#### Classes
- CaseSuffix
```TypeScript
class CaseSuffix {
    constructor() {}
}
```

#### Methods
- CaseSuffix
    - case - sets case of noun
    ```TypeScript
    CaseSuffix.case(type: Case): CaseSuffix
    ```

    - of - returns the noun with suffix
    ```TypeScript
    CaseSuffix.of(word: string, isProperNoun: boolean): string
    ```

    - UnvoicedConsonants - returns the unvoiced consonants of the Turkish Language 
    ```TypeScript
    CaseSuffix.UnvoicedConsonants = ["f", "s", "t", "k", "ç", "ş", "h", "p"]
    ```

    - UnroundedVowels - returns the unrounded vowels of the Turkish Language 
    ```TypeScript
    CaseSuffix.UnroundedVowels = ["o", "u", "ö", "ü"]
    ```

    - RoundedVowels - returns the rounded vowels of the Turkish Language 
    ```TypeScript
    CaseSuffix.RoundedVowels = ["a", "ı", "e", "i"]
    ```

    - BackVowels - returns the back vowels of the Turkish Language 
    ```TypeScript
    CaseSuffix.BackVowels = ["e", "i", "ö", "ü"]
    ```

    - FrontVowels - returns the front vowels of the Turkish Language 
    ```TypeScript
    CaseSuffix.FrontVowels = ["a", "ı", "o", "u"]
    ```

    - Vowels - returns the vowels of the Turkish Language 
    ```TypeScript
    CaseSuffix.Vowels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"]
    ```

#### Types
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
