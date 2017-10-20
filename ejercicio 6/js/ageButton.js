function ageButton($filter) {
    return function (collection, ageArray) {
        if (!collection)
            return collection;

        var range = $filter('filter')(ageArray, {active: true}, true)[0];
        range = range.range.split('-');
        var initial = Number(range[0]);
        var final = Number(range[1]);

        return collection.filter(function (value) {
            return value.age >= initial && value.age <= final;
        });
    };
}

angular
    .module('app')
    .filter('ageButton', ageButton);
