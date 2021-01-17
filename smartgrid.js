const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '0px',
    container: {
        maxWidth: '1100px',
        fields: '170px'
    },
    breakPoints: {
        md: {
            width: "1024px",
            fields: "60px"
        },
        sm: {
            width: "768px",
        },
        xs: {
            width: "480px",
            fields: "30px"
        }
    },
    oldSizeStyle: false,
    mobileFirst: false
};

smartgrid('./src/less', settings);