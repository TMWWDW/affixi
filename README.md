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
    - case(type: Case): CaseSuffix
    - of(word: string, isProperNoun: boolean): string
```TypeScript
CaseSuffix.case(type: Case): CaseSuffix
CaseSuffix.of(word: string, isProperNoun: boolean): string
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
