function ageButton($filter) {
    return function (collection, ageArray) {
        if (!collection)
            return collection;

        var range = $filter('filter')(ageArray, {active: true}, true)[0];
        range = range.range.split('-');
        var initial = range[0];
        var final = range[1];
    };
}

angular
    .module('app')
    .filter('ageButton', ageButton);
