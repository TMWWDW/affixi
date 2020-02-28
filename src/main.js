var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Affixi;
(function (Affixi) {
    var Types;
    (function (Types) {
        var Case;
        (function (Case) {
            /** İsmin Yalın Hâli */
            Case[Case["Absolute"] = 0] = "Absolute";
            /** İsmin Belirtme Hâli */
            Case[Case["Accusative"] = 1] = "Accusative";
            /** İsmin Ayrılma Hâli */
            Case[Case["Ablative"] = 2] = "Ablative";
            /** İsmin Bulunma Hâli */
            Case[Case["Locative"] = 3] = "Locative";
            /** İsmin Vasıta Hâli */
            Case[Case["Instrumental"] = 4] = "Instrumental";
            /** İsmin Yönelme Hâli */
            Case[Case["Dative"] = 5] = "Dative";
        })(Case = Types.Case || (Types.Case = {}));
        var Pronoun;
        (function (Pronoun) {
            /** Birinci Tekil Şahıs */
            Pronoun[Pronoun["SingularFirst"] = 0] = "SingularFirst";
            /** İkinci Tekil Şahıs */
            Pronoun[Pronoun["SingularSecond"] = 1] = "SingularSecond";
            /** Üçüncü Tekil Şahıs */
            Pronoun[Pronoun["SingularThird"] = 2] = "SingularThird";
            /** Birinci Çoğul Şahıs */
            Pronoun[Pronoun["PluralFirst"] = 3] = "PluralFirst";
            /** İkinci Çoğul Şahıs */
            Pronoun[Pronoun["PluralSecond"] = 4] = "PluralSecond";
            /** Üçüncü Çoğul Şahıs */
            Pronoun[Pronoun["PluralThird"] = 5] = "PluralThird";
        })(Pronoun = Types.Pronoun || (Types.Pronoun = {}));
    })(Types = Affixi.Types || (Affixi.Types = {}));
    var Sounds = /** @class */ (function () {
        function Sounds() {
        }
        Sounds.UnvoicedStopConsonants = ["p", "ç", "t", "k"];
        Sounds.UnvoicedContinuousConsonants = ["f", "s", "ş", "h"];
        Sounds.UnvoicedConsonants = __spreadArrays(Sounds.UnvoicedContinuousConsonants, Sounds.UnvoicedStopConsonants);
        Sounds.VoicedStopConsonants = ["b", "c", "d", "ğ"];
        Sounds.RoundedVowels = ["o", "u", "ö", "ü"];
        Sounds.UnroundedVowels = ["a", "ı", "e", "i"];
        Sounds.BackVowels = ["e", "i", "ö", "ü"];
        Sounds.FrontVowels = ["a", "ı", "o", "u"];
        Sounds.Vowels = __spreadArrays(Sounds.FrontVowels, Sounds.BackVowels);
        return Sounds;
    }());
    Affixi.Sounds = Sounds;
    var Word = /** @class */ (function () {
        function Word() {
        }
        Word.GetLastComponents = function (word) {
            var input = word
                .split("")
                .reverse()
                .join("");
            var index = 0;
            var letter = input[0];
            var vowel = input[index];
            while (!Sounds.Vowels.includes(vowel)) {
                index++;
                vowel = input[index];
            }
            return { letter: letter, vowel: vowel };
        };
        Word.GetSyllableCount = function (word) {
            var count = 0;
            var input = word.split("");
            input.forEach(function (letter) {
                if (Sounds.Vowels.includes(letter.toLowerCase()))
                    count += 1;
            });
            return count;
        };
        return Word;
    }());
    Affixi.Word = Word;
    var PossessiveSuffix = /** @class */ (function () {
        function PossessiveSuffix() {
            this.pronoun = Types.Pronoun.SingularFirst;
        }
        PossessiveSuffix.prototype["case"] = function (pronoun) {
            this.pronoun = pronoun;
            return this;
        };
        PossessiveSuffix.prototype.of = function (word, isProperNoun) {
            if (isProperNoun === void 0) { isProperNoun = false; }
            var result = "";
            var suffix = "";
            if (isProperNoun)
                suffix += "'";
            suffix += this.suffix(word);
            var letter = Word.GetLastComponents(word).letter;
            if (Word.GetSyllableCount(word) > 1 &&
                Sounds.UnvoicedStopConsonants.includes(letter) &&
                this.pronoun !== Types.Pronoun.PluralThird) {
                var i = Sounds.UnvoicedStopConsonants.indexOf(word[word.length - 1]);
                var voicedCounterPart = void 0;
                if (word
                    .split("")
                    .slice(word.length - 2, word.length)
                    .join("") === "nk") {
                    voicedCounterPart = "g";
                }
                else {
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
        };
        PossessiveSuffix.prototype.suffix = function (word) {
            var _a = Word.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
            var suffix = "";
            if (!Sounds.Vowels.includes(letter) && this.pronoun !== Types.Pronoun.PluralThird) {
                if (Sounds.FrontVowels.includes(vowel)) {
                    suffix += "ı";
                }
                else if (Sounds.BackVowels.includes(vowel)) {
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
                        }
                        else if (Sounds.BackVowels.includes(vowel)) {
                            suffix += "i";
                        }
                    }
                    break;
                case 3:
                    if (Sounds.FrontVowels.includes(vowel)) {
                        suffix += "mız";
                    }
                    else if (Sounds.BackVowels.includes(vowel)) {
                        suffix += "miz";
                    }
                    break;
                case 4:
                    if (Sounds.FrontVowels.includes(vowel)) {
                        suffix += "nız";
                    }
                    else if (Sounds.BackVowels.includes(vowel)) {
                        suffix += "niz";
                    }
                    break;
                case 5:
                    if (Sounds.FrontVowels.includes(vowel)) {
                        suffix += "ları";
                    }
                    else if (Sounds.BackVowels.includes(vowel)) {
                        suffix += "leri";
                    }
                    break;
            }
            return suffix;
        };
        return PossessiveSuffix;
    }());
    Affixi.PossessiveSuffix = PossessiveSuffix;
    var CaseSuffix = /** @class */ (function () {
        function CaseSuffix() {
            this.type = Types.Case.Absolute;
        }
        CaseSuffix.prototype["case"] = function (type) {
            this.type = type;
            return this;
        };
        CaseSuffix.prototype.of = function (word, isProperNoun) {
            if (isProperNoun === void 0) { isProperNoun = false; }
            var result = "";
            var suffix = "";
            if (isProperNoun)
                suffix += "'";
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
        };
        CaseSuffix.prototype.absolute = function (word) {
            return word;
        };
        CaseSuffix.prototype.accusative = function (word) {
            var _a = Word.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
            var suffix = "";
            if (Sounds.Vowels.includes(letter)) {
                suffix += "y";
            }
            if (Sounds.FrontVowels.includes(vowel)) {
                suffix += "ı";
            }
            else if (Sounds.BackVowels.includes(vowel)) {
                suffix += "i";
            }
            return suffix;
        };
        CaseSuffix.prototype.ablative = function (word) {
            return this.locative(word) + "n";
        };
        CaseSuffix.prototype.locative = function (word) {
            var _a = Word.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
            var suffix = "";
            if (Sounds.UnvoicedConsonants.includes(letter)) {
                suffix += "t";
            }
            else {
                suffix += "d";
            }
            if (Sounds.FrontVowels.includes(vowel)) {
                suffix += "a";
            }
            else if (Sounds.BackVowels.includes(vowel)) {
                suffix += "e";
            }
            return suffix;
        };
        CaseSuffix.prototype.instrumental = function (word) {
            var _a = Word.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
            var suffix = "";
            if (Sounds.Vowels.includes(letter)) {
                suffix += "y";
            }
            if (Sounds.FrontVowels.includes(vowel)) {
                suffix += "la";
            }
            else if (Sounds.BackVowels.includes(vowel)) {
                suffix += "le";
            }
            return suffix;
        };
        CaseSuffix.prototype.dative = function (word) {
            var _a = Word.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
            var suffix = "";
            if (Sounds.Vowels.includes(letter)) {
                suffix += "y";
            }
            if (Sounds.FrontVowels.includes(vowel)) {
                suffix += "a";
            }
            else if (Sounds.BackVowels.includes(vowel)) {
                suffix += "e";
            }
            return suffix;
        };
        return CaseSuffix;
    }());
    Affixi.CaseSuffix = CaseSuffix;
    function chain(word) {
        var possessive = new PossessiveSuffix();
        var _case = new CaseSuffix();
        var possessiveSuffix = function (type) {
            word = possessive["case"](type).of(word);
            return { possessiveSuffix: possessiveSuffix, caseSuffix: caseSuffix, word: word };
        };
        var caseSuffix = function (type) {
            word = _case["case"](type).of(word);
            return { possessiveSuffix: possessiveSuffix, caseSuffix: caseSuffix, word: word };
        };
        return { possessiveSuffix: possessiveSuffix, caseSuffix: caseSuffix, word: word };
    }
    Affixi.chain = chain;
})(Affixi || (Affixi = {}));
// let p = new Affixi.PossessiveSuffix();
// let c = new Affixi.CaseSuffix();
// let r = p.case(Affixi.Types.Pronoun.PluralFirst).of("Aleyh");
// let r2 = c.case(Affixi.Types.Case.Dative).of(r)
// console.log(r2);
// let chain = Affixi.chain("Çakmak")
//   .possessiveSuffix(Affixi.Types.Pronoun.PluralSecond)
//   .caseSuffix(Affixi.Types.Case.Ablative);
// console.log(chain.word);
