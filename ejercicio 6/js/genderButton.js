function genderButton() {
    return function (collection, gender) {
        if (gender === 'ALL')
            return collection;

        return collection.filter(function (value) {
                return value.gender === gender;
            });
    };
}

angular
    .module('app')
    .filter('genderButton', genderButton);
