import Affixi from "../src/main";

var csuffix = new Affixi.CaseSuffix();

console.log(csuffix.case(Affixi.Types.Case.Absolute).of("bilgisayar"));
console.log(csuffix.case(Affixi.Types.Case.Accusative).of("bilgisayar"));
console.log(csuffix.case(Affixi.Types.Case.Ablative).of("bilgisayar"));
console.log(csuffix.case(Affixi.Types.Case.Locative).of("bilgisayar"));
console.log(csuffix.case(Affixi.Types.Case.Instrumental).of("bilgisayar"));
console.log(csuffix.case(Affixi.Types.Case.Dative).of("bilgisayar"));

console.log(csuffix.case(Affixi.Types.Case.Absolute).of("Ali", true));
console.log(csuffix.case(Affixi.Types.Case.Accusative).of("Ali", true));
console.log(csuffix.case(Affixi.Types.Case.Ablative).of("Ali", true));
console.log(csuffix.case(Affixi.Types.Case.Locative).of("Ali", true));
console.log(csuffix.case(Affixi.Types.Case.Instrumental).of("Ali", true));
console.log(csuffix.case(Affixi.Types.Case.Dative).of("Ali", true));

var psuffix = new Affixi.PossessiveSuffix();

console.log(psuffix.case(Affixi.Types.Pronoun.SingularFirst).of("çakmak"));
console.log(psuffix.case(Affixi.Types.Pronoun.SingularSecond).of("çakmak"));
console.log(psuffix.case(Affixi.Types.Pronoun.SingularThird).of("çakmak"));
console.log(psuffix.case(Affixi.Types.Pronoun.PluralFirst).of("top"));
console.log(psuffix.case(Affixi.Types.Pronoun.PluralSecond).of("top"));
console.log(psuffix.case(Affixi.Types.Pronoun.PluralThird).of("top"));

var chain = Affixi.chain("Aleyh")
  .possessiveSuffix(Affixi.Types.Pronoun.PluralFirst)
  .caseSuffix(Affixi.Types.Case.Dative);
console.log(chain.word);

var chain = Affixi.chain("Çakmak")
  .possessiveSuffix(Affixi.Types.Pronoun.PluralSecond)
  .caseSuffix(Affixi.Types.Case.Ablative);
console.log(chain.word);
