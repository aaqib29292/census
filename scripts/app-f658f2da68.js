!function(){"use strict";angular.module("task",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("task").service("webDevTec",t)}(),function(){"use strict";function t(t){var e=this;console.log("hi");var o=t("http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP,&");e.getPopulation=function(){e.populationResponse=o.query({key:"d8728be2e1edba8269504d24bc0f14915007d9a2",FIPS:e.countryname,time:e.year,SEX:1}),console.log(e.populationResponse)}}t.$inject=["$resource"],angular.module("task").controller("ThirdController",t)}(),function(){"use strict";function t(t){var e=this;console.log("hi");var o=t("http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&");e.getPopulation=function(){e.populationResponseyear1=o.query({key:"d8728be2e1edba8269504d24bc0f14915007d9a2",SEX:"0",FIPS:e.countryname,time:e.year1}),e.populationResponseyear2=o.query({key:"d8728be2e1edba8269504d24bc0f14915007d9a2",SEX:"0",FIPS:e.countryname,time:e.year2}),console.log(e.populationResponseyear1),console.log(e.populationResponseyear2)}}t.$inject=["$resource"],angular.module("task").controller("SecondController",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("task").directive("acmeNavbar",t)}(),function(){"use strict";function t(t){function e(e,o,n,a){var i,r=t(o[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});o.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){r.type(t).pause()["delete"]()}),i=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){r.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){i()})}function o(t,e){function o(){return n().then(function(){t.info("Activated Contributors View")})}function n(){return e.getContributors(10).then(function(t){return a.contributors=t,a.contributors})}var a=this;a.contributors=[],o()}o.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:o,controllerAs:"vm"};return n}t.$inject=["malarkey"],angular.module("task").directive("acmeMalarkey",t)}(),function(){"use strict";function t(t){var e=this;console.log("hi");var o=t("http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&");e.getPopulation=function(){e.populationResponse=o.query({key:"d8728be2e1edba8269504d24bc0f14915007d9a2",SEX:"0",FIPS:e.countryname,time:e.year}),console.log(e.populationResponse)}}t.$inject=["$resource"],angular.module("task").controller("LandController",t)}(),function(){"use strict";function t(t,e){function o(o){function a(t){return t.data}function i(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return o||(o=30),e.get(n+"/contributors?per_page="+o).then(a)["catch"](i)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:n,getContributors:o};return a}t.$inject=["$log","$http"],angular.module("task").factory("githubContributor",t)}(),function(){"use strict";function t(t,e,o){function n(){i(),t(function(){r.classAnimation="rubberBand"},4e3)}function a(){o.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function i(){r.awesomeThings=e.getTec(),angular.forEach(r.awesomeThings,function(t){t.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1465489668074,r.showToastr=a,n()}t.$inject=["$timeout","webDevTec","toastr"],angular.module("task").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("task").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/first",templateUrl:"app/components/landing/landing.html",controller:"LandController",controllerAs:"land"}).state("second",{url:"/second",templateUrl:"app/components/second/second.html",controller:"SecondController",controllerAs:"second"}).state("third",{url:"/third",templateUrl:"app/components/third/third.html",controller:"ThirdController",controllerAs:"third"}),e.otherwise("/first")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("task").config(t)}(),function(){"use strict";angular.module("task").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("task").config(t)}(),angular.module("task").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class=main.classAnimation><button type=button class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/landing/landing.html",'<div class="container text-center"><h1>Census</h1><div class=formdetails><form class=form-inline ng-submit=land.getPopulation()><div class=form-group><label for=CountryName>Country</label><select class=form-control id=sel1 ng-model=land.countryname><option value=IN>India</option><option value=UK>United Kingdom</option><option value=US>United States</option><option value=CA>Canada</option></select></div><div class=form-group><label for=Year>Year</label><select class=form-control id=sel1 ng-model=land.year><option value=2014>2014</option><option value=2013>2013</option><option value=2012>2012</option><option value=2011>2011</option><option value=2010>2010</option></select></div><button type=submit class="btn btn-default">Submit</button></form></div><table class="table table-bordered"><thead class=text-center><tr><th>Age</th><th>Population</th></tr></thead><tbody><tr ng-repeat="detail in land.populationResponse">><td>{{detail[2]}}</td><td>{{detail[3]}}</td></tr></tbody></table></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),t.put("app/components/second/second.html",'<div class="container text-center"><h1>Census</h1><div class=formdetails><form class=form-inline ng-submit=second.getPopulation()><div class=form-group><label for=CountryName>Country</label><select class=form-control id=sel1 ng-model=land.countryname><option value=IN>India</option><option value=UK>United Kingdom</option><option value=US>United States</option><option value=CA>Canada</option></select></div><div class=form-group><label for=Year1>Year1</label><select class=form-control id=sel1 ng-model=second.year1><option value=2014>2014</option><option value=2013>2013</option><option value=2012>2012</option><option value=2011>2011</option><option value=2010>2010</option></select></div><div class=form-group><label for=Year2>Year2</label><select class=form-control id=sel1 ng-model=second.year2><option value=2014>2014</option><option value=2013>2013</option><option value=2012>2012</option><option value=2011>2011</option><option value=2010>2010</option></select></div><button type=submit class="btn btn-default">Submit</button></form></div><table class="table table-bordered"><thead class=text-center><tr><th>Age</th><th>Population</th><th>Age</th><th>Population</th></tr></thead><tbody><tr ng-repeat="detail1 in land.populationResponseyear1">><td>{{detail1[2]}}</td><td>{{detail1[3]}}</td></tr><tr ng-repeat="detail2 in land.populationResponseyear2">><td>{{detail[2]}}</td><td>{{detail[3]}}</td></tr></tbody></table></div>'),t.put("app/components/third/third.html",'<div class="container text-center"><h1>Census</h1><div class=formdetails><form class=form-inline ng-submit=third.getPopulation()><div class=form-group><label for=CountryName>Country</label><select class=form-control id=sel1 ng-model=third.countryname><option value=IN>India</option><option value=UK>United Kingdom</option><option value=US>United States</option><option value=CA>Canada</option></select></div><div class=form-group><label for=Year>Year</label><select class=form-control id=sel1 ng-model=third.year><option value=2014>2014</option><option value=2013>2013</option><option value=2012>2012</option><option value=2011>2011</option><option value=2010>2010</option></select></div><button type=submit class="btn btn-default">Submit</button></form></div><table class="table table-bordered"><thead class=text-center><tr><th>Age</th><th>Population</th></tr></thead><tbody><tr ng-repeat="detail in third.populationResponse">><td>{{detail[2]}}</td><td>{{detail[3]}}</td></tr></tbody></table></div>')}]);
//# sourceMappingURL=../maps/scripts/app-f658f2da68.js.map