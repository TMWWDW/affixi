var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
})(Case || (Case = {}));
var CaseSuffix = /** @class */ (function () {
    function CaseSuffix() {
        this.type = Case.Absolute;
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
    };
    CaseSuffix.GetLastComponents = function (word) {
        var input = word
            .split("")
            .reverse()
            .join("");
        var index = 0;
        var letter = input[0];
        var vowel = input[index];
        while (!CaseSuffix.Vowels.includes(vowel)) {
            index++;
            vowel = input[index];
        }
        return { letter: letter, vowel: vowel };
    };
    CaseSuffix.prototype.absolute = function (word) {
        return word;
    };
    CaseSuffix.prototype.accusative = function (word) {
        var _a = CaseSuffix.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
        var suffix = "";
        if (CaseSuffix.Vowels.includes(letter)) {
            suffix += "y";
        }
        if (CaseSuffix.FrontVowels.includes(vowel)) {
            suffix += "ı";
        }
        else if (CaseSuffix.BackVowels.includes(vowel)) {
            suffix += "i";
        }
        return suffix;
    };
    CaseSuffix.prototype.ablative = function (word) {
        return this.locative(word) + "n";
    };
    CaseSuffix.prototype.locative = function (word) {
        var _a = CaseSuffix.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
        var suffix = "";
        if (CaseSuffix.UnvoicedConsonants.includes(letter)) {
            suffix += "t";
        }
        else {
            suffix += "d";
        }
        if (CaseSuffix.FrontVowels.includes(vowel)) {
            suffix += "a";
        }
        else if (CaseSuffix.BackVowels.includes(vowel)) {
            suffix += "e";
        }
        return suffix;
    };
    CaseSuffix.prototype.instrumental = function (word) {
        var _a = CaseSuffix.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
        var suffix = "";
        if (CaseSuffix.Vowels.includes(letter)) {
            suffix += "y";
        }
        if (CaseSuffix.FrontVowels.includes(vowel)) {
            suffix += "la";
        }
        else if (CaseSuffix.BackVowels.includes(vowel)) {
            suffix += "le";
        }
        return suffix;
    };
    CaseSuffix.prototype.dative = function (word) {
        var _a = CaseSuffix.GetLastComponents(word), letter = _a.letter, vowel = _a.vowel;
        var suffix = "";
        if (CaseSuffix.Vowels.includes(letter)) {
            suffix += "y";
        }
        if (CaseSuffix.FrontVowels.includes(vowel)) {
            suffix += "a";
        }
        else if (CaseSuffix.BackVowels.includes(vowel)) {
            suffix += "e";
        }
        return suffix;
    };
    CaseSuffix.UnvoicedConsonants = ["f", "s", "t", "k", "ç", "ş", "h", "p"];
    CaseSuffix.UnroundedVowels = ["o", "u", "ö", "ü"];
    CaseSuffix.RoundedVowels = ["a", "ı", "e", "i"];
    CaseSuffix.BackVowels = ["e", "i", "ö", "ü"];
    CaseSuffix.FrontVowels = ["a", "ı", "o", "u"];
    CaseSuffix.Vowels = __spreadArrays(CaseSuffix.UnroundedVowels, CaseSuffix.RoundedVowels);
    return CaseSuffix;
}());
var suffix = new CaseSuffix();
var w = suffix["case"](Case.Instrumental).of("Ali", true);
console.log(w);
