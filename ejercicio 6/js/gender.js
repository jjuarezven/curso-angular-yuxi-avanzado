function gender() {
    return function (value) {
        if (!value) {
            return value;
        }
        var result = '';
        if (value === 'M') {
           result = 'Male'; 
        }
        else {
            result = 'Female'; 
        }
        return result;
    };
}

angular
    .module('app')
    .filter('gender', gender);