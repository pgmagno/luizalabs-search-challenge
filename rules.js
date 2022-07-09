const rules = [
        {
            "Name":"Exata",
            "Criteria": "AND",
            "RegExpBefore": "\\b",
            "RegExpAfter": "\\b",
            "RegExpFlag": "gmi"
        },
        {
            "Name":"Similar",
            "Criteria": "OR",
            "RegExpBefore": "\\b([a-z0-9]{1,3})?",
            "RegExpAfter": "([a-z0-9]{1,3})?\\b",
            "RegExpFlag": "gmi"
        }
    ]

exports.rules = rules;