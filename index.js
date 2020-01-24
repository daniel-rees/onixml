var onix = require("onix");

var xml = onix.create({
    from: {
        company: "WiseOwlPublishing",
        person: "Daniel Rees",
        email: "noreply@mailinator.com"
    },
    suplier: {
        name: "ePubDirect",
        availabilityCode: "IP"
    },
    products: [
        {
            // Single record reference which will uniquely identify the product
            record: "TheWiseOldGreyOwl-9781707518135",

            // Notification type
            notification: onix.codes.NOTIFICATION.ADVANCE,

            // ISBN or other id
            id: {
                type: onix.codes.PRODUCTID.ISBN13,
                value: '9781707518135'
            },

            //
            title: "The Wise Old Grey Owl",

            // Language code as ISO 639
            language: "eng",

            // List of prices (number or object) or unique "price"
            prices: [
                {
                    amount: 6,
                    currency: 'eur'
                },

                // Number will default to usd currency
                5
            ]
        }
    ]
});

console.log(xml);
