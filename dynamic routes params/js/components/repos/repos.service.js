function ReposService($http) {
    var vm = this;
    vm.getRepos = function (params) {
        return $http
            .get(`https://api.github.com/users/${params}/repos`)
            .then(function (res) {
                return res.data;
            });
    };
}

angular
	.module('repos')
	.service('ReposService', ReposService);
