function initials() {
    return function (value) {
        if (!value) {
            return value;
        }
        var words = value.split(' ');
        var result = '';
        angular.forEach(words, function (value, key) {
            result += value.charAt(0);
        });
        return result;
    };
}

angular
    .module('app')
    .filter('initials', initials);