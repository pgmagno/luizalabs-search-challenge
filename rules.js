const rules = [
        {
            "Nome":"Exata",
            "Criterio": "AND",
            "RegExpBefore": "\\b",
            "RegExpAfter": "\\b",
            "RegExpFlag": "gmi"
        },
        {
            "Nome":"Similar",
            "Criterio": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ]

exports.rules = rules;
